import { useEffect, useRef, useState } from "react";
import { supabase } from "../lib/supabase";
import { createCloudStore, setProgressStore } from "../lib/progressStorage";

export default function AccountProvider({ children }) {
  const [session, setSession] = useState(null);
  const [ready, setReady] = useState(!supabase);
  const [loadError, setLoadError] = useState("");
  const [status, setStatus] = useState("");
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [reload, setReload] = useState(0);
  const [scope, setScope] = useState("guest");
  const storeRef = useRef(null);
  const requestRef = useRef(0);

  useEffect(() => {
    if (!supabase) return;
    let mounted = true;
    let latestUser;
    let receivedAuthEvent = false;
    async function changeSession(next) {
      if (!mounted) return;
      setSession(next);
      const userId = next?.user.id || "guest";
      if (latestUser === userId) return;
      latestUser = userId;
      const request = ++requestRef.current;
      setReady(false);
      setLoadError("");
      storeRef.current?.close();
      storeRef.current = null;
      setProgressStore(null);
      if (userId === "guest") {
        setScope("guest");
        setStatus("Progress stays on this device");
        setReady(true);
        return;
      }
      const store = createCloudStore({
        userId,
        local: localStorage,
        onStatus: (text) => {
          if (mounted && request === requestRef.current) setStatus(text);
        },
        remote: {
          async load() {
            const { data, error } = await supabase
              .from("user_progress")
              .select("key,data,revision")
              .eq("user_id", userId);
            if (error) throw error;
            return data;
          },
          async save(key, data, revision) {
            const result = await supabase.rpc("save_progress", {
              p_key: key,
              p_data: data,
              p_revision: revision,
            });
            if (result.error) throw result.error;
            return result.data;
          },
        },
      });
      try {
        await store.load();
        if (!mounted || request !== requestRef.current) {
          store.close();
          return;
        }
        storeRef.current = store;
        setProgressStore(store);
        setScope(userId);
        setReady(true);
      } catch {
        if (mounted && request === requestRef.current)
          setLoadError(
            "We couldn’t load your saved progress. Please retry before continuing.",
          );
      }
    }
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, next) => {
      receivedAuthEvent = true;
      // Leave the auth callback before starting another Supabase request.
      queueMicrotask(() => {
        void changeSession(next);
      });
    });
    supabase.auth
      .getSession()
      .then(({ data, error }) => {
        if (!mounted || receivedAuthEvent) return;
        if (error) {
          setLoadError("We couldn’t restore your sign-in. Please retry.");
          return;
        }
        void changeSession(data.session);
      })
      .catch(() => {
        if (mounted)
          setLoadError("We couldn’t restore your sign-in. Please retry.");
      });
    return () => {
      mounted = false;
      requestRef.current++;
      subscription.unsubscribe();
      storeRef.current?.close();
      setProgressStore(null);
    };
  }, [reload]);

  useEffect(() => {
    const retry = () => {
      void storeRef.current?.flush();
    };
    window.addEventListener("online", retry);
    return () => window.removeEventListener("online", retry);
  }, []);

  async function signIn(event) {
    event.preventDefault();
    if (sending) return;
    setSending(true);
    setMessage("");
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email: email.trim(),
        options: { emailRedirectTo: window.location.origin + "/" },
      });
      setMessage(
        error
          ? "We couldn’t send the sign-in link. Please try again shortly."
          : "Check your email for a sign-in link. Open it in this browser to finish signing in.",
      );
    } catch {
      setMessage("Unable to connect. Check your connection and try again.");
    } finally {
      setSending(false);
    }
  }
  async function signOut() {
    setSending(true);
    try {
      await storeRef.current?.flush();
      const { error } = await supabase.auth.signOut({ scope: "local" });
      if (error) setMessage("Unable to sign out. Please try again.");
    } catch {
      setMessage("Unable to sign out. Please try again.");
    } finally {
      setSending(false);
    }
  }
  return (
    <>
      {supabase && (
        <div className="account-bar">
          <span>
            {session
              ? `Signed in as ${session.user.email}`
              : "Your learning, at your pace."}
          </span>
          <div>
            {session ? (
              <>
                <span role="status">{status}</span>
                <button onClick={() => storeRef.current?.flush()}>
                  Retry sync
                </button>
                <button disabled={sending} onClick={signOut}>
                  Sign out
                </button>
              </>
            ) : (
              <button
                aria-expanded={open}
                onClick={() => {
                  setOpen((v) => !v);
                  setMessage("");
                }}
              >
                Sign in to save progress
              </button>
            )}
          </div>
        </div>
      )}
      {supabase && open && !session && (
        <section className="account-panel" aria-label="Sign in">
          <h2>Pick up where you left off.</h2>
          <p>
            Sign in with an email link to save your introduction, chapters and
            Arcade progress across devices. Guest progress stays separate on
            this browser.
          </p>
          <form onSubmit={signIn}>
            <label htmlFor="account-email">Email address</label>
            <input
              id="account-email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="primary" disabled={sending}>
              {sending ? "Sending…" : "Email me a sign-in link"}
            </button>
          </form>
          <button className="account-guest" onClick={() => setOpen(false)}>
            Continue as a guest
          </button>
        </section>
      )}
      {message && (
        <p className="account-message" role="status">
          {message}
        </p>
      )}
      {!ready ? (
        <section className="account-panel">
          <h2>{loadError ? "Let’s reconnect." : "Loading your progress…"}</h2>
          {loadError && (
            <>
              <p role="alert">{loadError}</p>
              <button
                className="primary"
                onClick={() => setReload((n) => n + 1)}
              >
                Retry
              </button>
            </>
          )}
        </section>
      ) : (
        <div key={scope}>{children}</div>
      )}
    </>
  );
}

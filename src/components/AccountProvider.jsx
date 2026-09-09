import AuthPage from "./AuthPage";
import { useEffect, useRef, useState } from "react";
import { supabase } from "../lib/supabase";
import { createCloudStore, setProgressStore } from "../lib/progressStorage";

export default function AccountProvider({ children }) {
  const [session, setSession] = useState(null);
  const [ready, setReady] = useState(!supabase);
  const [loadError, setLoadError] = useState("");
  const [status, setStatus] = useState("");
  const [authRoute, setAuthRoute] = useState(() =>
    window.location.hash.slice(1),
  );
  useEffect(() => {
    const route = () => setAuthRoute(window.location.hash.slice(1));
    window.addEventListener("hashchange", route);
    return () => window.removeEventListener("hashchange", route);
  }, []);
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

  async function signOut() {
    setSending(true);
    try {
      if (storeRef.current && !(await storeRef.current.flush())) {
        setMessage(
          "Your latest progress hasn’t synced yet. Reconnect and retry before signing out so it’s ready on your next visit.",
        );
        return;
      }
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
      {
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
              <>
                <a href="#login">Sign in</a>
                <a href="#signup">Create account</a>
              </>
            )}
          </div>
        </div>
      }
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
        <div key={scope}>
          {["login", "signup", "link"].includes(authRoute) && !session ? (
            <AuthPage key={authRoute} mode={authRoute} />
          ) : (
            children
          )}
        </div>
      )}
    </>
  );
}

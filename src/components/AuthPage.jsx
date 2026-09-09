import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function AuthPage({ mode }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");
  const signup = mode === "signup";
  const link = mode === "link";
  async function submit(event) {
    event.preventDefault();
    if (!supabase || sending) return;
    setSending(true);
    setMessage("");
    try {
      const credentials = { email: email.trim(), password };
      const result = link
        ? await supabase.auth.signInWithOtp({
            email: email.trim(),
            options: {
              shouldCreateUser: false,
              emailRedirectTo: window.location.origin + "/",
            },
          })
        : signup
          ? await supabase.auth.signUp({
              ...credentials,
              options: { emailRedirectTo: window.location.origin + "/" },
            })
          : await supabase.auth.signInWithPassword(credentials);
      if (result.error) {
        setMessage(
          signup
            ? "We couldn’t create your account. Check your details or try signing in if you already have an account."
            : "We couldn’t sign you in. Check your details or use an email sign-in link.",
        );
      } else if (link) {
        setMessage(
          "If an account exists for this email, a sign-in link is on its way. Open it in this browser.",
        );
      } else if (signup && !result.data.session) {
        setMessage(
          "Check your email to confirm your account, then come back to sign in.",
        );
      } else {
        window.location.hash = "home";
      }
    } catch {
      setMessage(
        "Unable to connect. Please check your connection and try again.",
      );
    } finally {
      setSending(false);
    }
  }
  return (
    <main className="auth-page">
      <a className="auth-back" href="#home">
        ← Back to Within
      </a>
      <section className="auth-card">
        <span className="auth-symbol" aria-hidden="true">
          ✧
        </span>
        <span className="kicker">Your space to grow</span>
        <h1>
          {signup
            ? "A little more you."
            : link
              ? "Let your inbox open the door."
              : "Welcome back."}
        </h1>
        <p>
          {signup
            ? "Start with five small situations. Your chapters, Arcade and progress will be waiting whenever you return."
            : "Sign in to pick up your journey where you left it."}
        </p>
        <nav className="auth-tabs" aria-label="Account">
          <a href="#login" aria-current={!signup ? "page" : undefined}>
            Sign in
          </a>
          <a href="#signup" aria-current={signup ? "page" : undefined}>
            Create account
          </a>
        </nav>
        {!supabase && (
          <p className="notice" role="status">
            Account sign-in is not configured on this version yet. You can
            continue as a guest.
          </p>
        )}
        <form onSubmit={submit}>
          <label htmlFor="auth-email">Email address</label>
          <input
            id="auth-email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!link && (
            <>
              <label htmlFor="auth-password">Password</label>
              <input
                id="auth-password"
                type="password"
                autoComplete={signup ? "new-password" : "current-password"}
                minLength={signup ? 8 : undefined}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {signup && <small>Use at least 8 characters.</small>}
            </>
          )}
          <button className="primary" disabled={sending || !supabase}>
            {sending
              ? "One moment…"
              : signup
                ? "Create my account →"
                : link
                  ? "Send a sign-in link →"
                  : "Sign in →"}
          </button>
        </form>
        {message && (
          <p className="auth-message" role="status">
            {message}
          </p>
        )}
        {!signup && (
          <a className="auth-alternative" href={link ? "#login" : "#link"}>
            {link
              ? "Use a password instead"
              : "Forgot your password? Sign in with an email link"}
          </a>
        )}
        <a className="auth-guest" href="#home">
          Continue as a guest
        </a>
        <small className="auth-note">
          Guest progress stays separate from your account. Within is a learning
          space, not a clinical assessment.
        </small>
      </section>
    </main>
  );
}

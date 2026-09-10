import { useState } from "react";
import { supabase, passwordSignupReady } from "../lib/supabase";

export default function AuthPage({ mode }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");
  const signup = mode === "signup";
  const settingPassword = mode === "password";
  async function submit(event) {
    event.preventDefault();
    if (!supabase || sending) return;
    setSending(true);
    setMessage("");
    try {
      if (signup && !(await passwordSignupReady())) {
        setMessage("Registration is being updated. Please try again shortly.");
        return;
      }
      const credentials = { email: email.trim(), password };
      const result = settingPassword
        ? await supabase.auth.updateUser({ password })
        : signup
          ? await supabase.auth.signUp(credentials)
          : await supabase.auth.signInWithPassword(credentials);
      if (result.error) {
        const code = result.error.code;
        setMessage(
          code === "invalid_credentials"
            ? "The email or password doesn’t match. Please check both and try again."
            : code === "user_already_exists"
              ? "An account already exists for this email. Please sign in."
              : code === "weak_password"
                ? "Choose a stronger password with at least 8 characters."
                : result.error.status === 429
                  ? "A few too many attempts. Please wait a moment and try again."
                  : "We couldn’t complete that request. Please check your details and try again.",
        );
      } else if (settingPassword) {
        setPassword("");
        setMessage("Password saved. You can use it the next time you sign in.");
      } else if (signup && !result.data.session) {
        setMessage(
          "We couldn’t start your session. Try signing in if you already have an account.",
        );
      } else window.location.hash = signup ? "journey" : "home";
    } catch {
      setMessage(
        "Unable to connect. Please check your connection and try again.",
      );
    } finally {
      setSending(false);
    }
  }
  return (
    <main className="auth-page auth-simple">
      <a className="auth-back" href="#home">
        ← Back to Within
      </a>
      <section className="auth-card">
        <span className="kicker">Within</span>
        <h1>
          {settingPassword
            ? "Set your password."
            : signup
              ? "Create your account."
              : "Welcome back."}
        </h1>
        <p>
          {settingPassword
            ? "Use a password to sign in to your existing account."
            : signup
              ? "A few details, then your journey begins."
              : "Your progress is right where you left it."}
        </p>
        {!supabase && (
          <p className="notice">
            Account access is unavailable on this version.
          </p>
        )}
        <form onSubmit={submit}>
          {!settingPassword && (
            <>
              <label htmlFor="auth-email">Email</label>
              <input
                id="auth-email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </>
          )}
          <label htmlFor="auth-password">
            {settingPassword ? "New password" : "Password"}
          </label>
          <input
            id="auth-password"
            type={showPassword ? "text" : "password"}
            autoComplete={
              signup || settingPassword ? "new-password" : "current-password"
            }
            minLength={signup || settingPassword ? 8 : undefined}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {(signup || settingPassword) && <small>At least 8 characters.</small>}
          <label className="show-password">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={(e) => setShowPassword(e.target.checked)}
            />{" "}
            Show password
          </label>
          <button className="primary" disabled={sending || !supabase}>
            {sending
              ? "One moment…"
              : settingPassword
                ? "Save password"
                : signup
                  ? "Create account"
                  : "Sign in"}
          </button>
        </form>
        {message && (
          <p className="auth-message" role="status">
            {message}
          </p>
        )}
        {!settingPassword && (
          <p className="auth-switch">
            {signup ? "Already have an account?" : "New to Within?"}{" "}
            <a href={signup ? "#login" : "#signup"}>
              {signup ? "Sign in" : "Create account"}
            </a>
          </p>
        )}
        <a className="auth-guest" href="#home">
          {settingPassword ? "Back to my journey" : "Explore as a guest"}
        </a>
      </section>
    </main>
  );
}

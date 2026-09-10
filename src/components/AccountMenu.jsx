import { useEffect, useRef, useState } from "react";

export default function AccountMenu({ email, sending, onSignOut }) {
  const [open, setOpen] = useState(false);
  const root = useRef(null);
  const trigger = useRef(null);
  useEffect(() => {
    if (!open) return;
    const outside = (event) => {
      if (!root.current?.contains(event.target)) setOpen(false);
    };
    const escape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [open]);
  return (
    <div
      className="account-menu"
      ref={root}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={trigger}
        className="account-trigger"
        aria-expanded={open}
        aria-controls="account-popover"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="account-avatar" aria-hidden="true">
          {email?.slice(0, 1).toUpperCase() || "W"}
        </span>
        <span>My account</span>
        <span aria-hidden="true">⌄</span>
      </button>
      {open && (
        <div id="account-popover" className="account-popover">
          <strong>Your account</strong>
          <p>{email}</p>
          <button disabled={sending} onClick={onSignOut}>
            {sending ? "Signing out…" : "Sign out"}
          </button>
        </div>
      )}
    </div>
  );
}

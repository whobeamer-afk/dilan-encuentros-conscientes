import { useState } from "react";

export function NotifySignup({ dark = false }: { dark?: boolean }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p className="border border-border bg-secondary px-6 py-4 text-sm text-secondary-foreground">
        Gracias. Te avisaremos por correo cuando abramos inscripciones.
      </p>
    );
  }

  return (
    <form
      className="mx-auto flex w-full max-w-md flex-col gap-3 sm:flex-row"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="tu@correo.com"
        className={`w-full flex-1 rounded-sm border px-4 py-3 text-sm outline-none focus:border-primary ${
          dark
            ? "border-background/30 bg-transparent text-background placeholder:text-background/40"
            : "border-input bg-background text-foreground placeholder:text-muted-foreground"
        }`}
      />
      <button
        type="submit"
        className="shrink-0 rounded-sm bg-primary px-6 py-3 text-xs uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Avisarme
      </button>
    </form>
  );
}

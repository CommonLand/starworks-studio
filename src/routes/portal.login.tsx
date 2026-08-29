import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Lock } from "lucide-react";

export const Route = createFileRoute("/portal/login")({
  head: () => ({
    meta: [
      { title: "Creator Portal — StarWorks" },
      {
        name: "description",
        content: "Sign in to the private StarWorks Creator Portal.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Creator Portal — StarWorks" },
      { property: "og:description", content: "Private access for StarWorks creators." },
    ],
  }),
  component: PortalLogin,
});

function PortalLogin() {
  const [notice, setNotice] = useState<string | null>(null);

  return (
    <section className="flex min-h-[calc(100vh-76px)] items-center justify-center px-6 py-20">
      <div className="w-full max-w-md">
        <div className="label flex items-center gap-3 text-muted-foreground">
          <Lock className="h-3.5 w-3.5" strokeWidth={1.5} /> Private Access
        </div>
        <h1 className="display mt-7 text-[clamp(2.4rem,6vw,3.6rem)]">Creator Portal</h1>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Sign in to access assigned projects, production information, files,
          schedules and creator resources.
        </p>

        <form
          className="hair-t mt-12 space-y-7 pt-12"
          onSubmit={(e) => {
            e.preventDefault();
            setNotice(
              "Authentication is not connected yet. Enable accounts to activate the portal.",
            );
          }}
        >
          <div>
            <label htmlFor="email" className="label text-muted-foreground">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-3 w-full border-b border-input bg-transparent pb-3 text-sm outline-none transition-colors focus:border-foreground"
            />
          </div>
          <div>
            <label htmlFor="password" className="label text-muted-foreground">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-3 w-full border-b border-input bg-transparent pb-3 text-sm outline-none transition-colors focus:border-foreground"
            />
          </div>
          <button
            type="submit"
            className="label w-full bg-foreground px-6 py-4 text-background"
          >
            Sign In
          </button>
          {notice && (
            <p className="text-xs leading-relaxed text-muted-foreground">{notice}</p>
          )}
        </form>

        <div className="mt-8 flex items-center justify-between text-[0.68rem] uppercase tracking-[0.18em]">
          <Link
            to="/portal/forgot-password"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Forgot password
          </Link>
          <Link
            to="/join"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Join StarWorks
          </Link>
        </div>
      </div>
    </section>
  );
}

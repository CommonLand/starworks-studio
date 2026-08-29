import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLink } from "@/components/ArrowLink";

export const Route = createFileRoute("/portal/forgot-password")({
  head: () => ({
    meta: [
      { title: "Reset Access — StarWorks Creator Portal" },
      { name: "description", content: "Reset access to the StarWorks Creator Portal." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Reset Access — StarWorks" },
      { property: "og:description", content: "Creator Portal password reset." },
    ],
  }),
  component: ForgotPassword,
});

function ForgotPassword() {
  const [sent, setSent] = useState(false);

  return (
    <section className="flex min-h-[calc(100vh-76px)] items-center justify-center px-6 py-20">
      <div className="w-full max-w-md">
        <div className="label text-muted-foreground">Creator Portal</div>
        <h1 className="display mt-7 text-[clamp(2.2rem,5.5vw,3.2rem)]">Reset Access</h1>
        {sent ? (
          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
            If an account exists for that address, reset instructions will be sent once
            portal accounts are activated.
          </p>
        ) : (
          <form
            className="hair-t mt-12 space-y-7 pt-12"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
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
                required
                className="mt-3 w-full border-b border-input bg-transparent pb-3 text-sm outline-none transition-colors focus:border-foreground"
              />
            </div>
            <button
              type="submit"
              className="label w-full bg-foreground px-6 py-4 text-background"
            >
              Send Reset Link
            </button>
          </form>
        )}
        <div className="mt-10">
          <ArrowLink
            to="/portal/login"
            className="text-muted-foreground hover:text-foreground"
          >
            Back to Sign In
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}

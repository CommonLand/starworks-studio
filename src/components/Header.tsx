import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Lock, Menu, X } from "lucide-react";
import { Arrow } from "./ArrowLink";

const nav = [
  { label: "Films", to: "/films" },
  { label: "Events", to: "/events" },
  { label: "Creators", to: "/creators" },
  { label: "News", to: "/news" },
  { label: "About", to: "/about" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 hair-b bg-background/95 backdrop-blur">
      <div className="flex h-[88px] items-center justify-between px-6 lg:px-9">
        <Link
          to="/"
          className="text-[1.25rem] font-semibold uppercase tracking-[0.3em] leading-none text-foreground"
        >
          Starworks
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[11.5px] font-medium uppercase tracking-[0.2em] text-foreground/85 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/portal/login"
            className="inline-flex items-center gap-3 border border-border px-4 py-2.5 text-[10.5px] font-medium uppercase tracking-[0.18em] text-foreground/90 transition-colors hover:border-foreground hover:text-foreground"
          >
            Creator Portal
            <Lock className="h-3 w-3" strokeWidth={1.5} />
          </Link>
          <Link
            to="/join"
            className="group inline-flex items-center gap-3 bg-foreground px-4 py-2.5 text-[10.5px] font-medium uppercase tracking-[0.18em] text-background"
          >
            Join Starworks
            <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="text-foreground lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="hair-t bg-background px-6 pb-10 pt-6 lg:hidden">
          <nav className="flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="display hair-b py-4 text-4xl text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-3">
            <Link
              to="/portal/login"
              onClick={() => setOpen(false)}
              className="label inline-flex items-center justify-between border border-border px-5 py-4"
            >
              Creator Portal <Lock className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
            <Link
              to="/join"
              onClick={() => setOpen(false)}
              className="label inline-flex items-center justify-between bg-foreground px-5 py-4 text-background"
            >
              Join Starworks <Arrow />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

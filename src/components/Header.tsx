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
      <div className="flex h-[76px] items-center justify-between px-6 lg:px-10">
        <Link
          to="/"
          className="display text-[1.35rem] tracking-[0.34em] leading-none text-foreground"
        >
          Starworks
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="label text-foreground/85 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            to="/portal/login"
            className="label inline-flex items-center gap-3 border border-border px-5 py-3.5 text-foreground/90 transition-colors hover:border-foreground hover:text-foreground"
          >
            Creator Portal
            <Lock className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
          <Link
            to="/join"
            className="group label inline-flex items-center gap-4 bg-foreground px-5 py-3.5 text-background"
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

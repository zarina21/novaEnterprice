import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Github } from "lucide-react";
import logo from "@/assets/neo-logo.png";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
  { to: "/privacy", label: "Privacy" },
  { to: "/terms", label: "Terms" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="NEO logo" className="h-9 w-9" loading="lazy" />
          <div className="leading-tight">
            <div className="text-sm font-bold tracking-widest text-gradient-brand">NEO</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Nova Enterprice Online
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-foreground bg-muted/60" }}
                inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
                className="rounded-full px-4 py-2 text-sm transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden rounded-full bg-gradient-brand px-5 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03] sm:inline-flex"
        >
          Start a project
        </Link>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted/60 text-foreground md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[280px] border-border/60 bg-background/95 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-6 pt-8">
              <div className="flex items-center gap-3">
                <img src={logo} alt="NEO logo" className="h-9 w-9" loading="lazy" />
                <div className="leading-tight">
                  <div className="text-sm font-bold tracking-widest text-gradient-brand">NEO</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Nova Enterprice Online
                  </div>
                </div>
              </div>
              <ul className="flex flex-col gap-2">
                {links.map((l) => (
                  <li key={l.to}>
                    <SheetClose asChild>
                      <Link
                        to={l.to}
                        activeOptions={{ exact: true }}
                        activeProps={{ className: "text-foreground bg-muted/60" }}
                        inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
                        className="block rounded-lg px-4 py-3 text-base transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        {l.label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
              <SheetClose asChild>
                <Link
                  to="/contact"
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-brand px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
                  onClick={() => setOpen(false)}
                >
                  Start a project
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" className="h-6 w-6" loading="lazy" />
          <span>© {new Date().getFullYear()} Nova Enterprice Online</span>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/privacy" className="hover:text-foreground">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-foreground">
            Terms & Conditions
          </Link>
          <a href="https://novaenterprice.online" className="hover:text-foreground">
            novaenterprice.online
          </a>
          <a
            href="https://github.com/zarina21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub de zarina21"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

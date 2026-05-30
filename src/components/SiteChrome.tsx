import { Link } from "@tanstack/react-router";
import logo from "@/assets/neo-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/proyectos", label: "Proyectos" },
  { to: "/contacto", label: "Contacto" },
  { to: "/terminos", label: "Términos" },
] as const;

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="NEO logo" className="h-9 w-9" />
          <div className="leading-tight">
            <div className="text-sm font-bold tracking-widest text-gradient-brand">NEO</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Nova Enterprice Online</div>
          </div>
        </Link>
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
          to="/contacto"
          className="hidden rounded-full bg-gradient-brand px-5 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03] sm:inline-flex"
        >
          Iniciar proyecto
        </Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" className="h-6 w-6" />
          <span>© {new Date().getFullYear()} Nova Enterprice Online</span>
        </div>
        <div className="flex gap-6">
          <Link to="/terminos" className="hover:text-foreground">Términos y condiciones</Link>
          <a href="https://novaenterprice.online" className="hover:text-foreground">novaenterprice.online</a>
        </div>
      </div>
    </footer>
  );
}

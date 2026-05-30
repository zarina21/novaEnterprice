import { Outlet, createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteNav } from "@/components/SiteChrome";

export const Route = createFileRoute("/_site")({
  component: Layout,
});

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px] -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <SiteNav />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

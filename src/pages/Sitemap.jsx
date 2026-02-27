import { Link } from "react-router-dom";
import { Section } from "../components/layout";
import { navItems } from "../utils/navItems";

const Sitemap = () => (
  <main>
    <Section title="Sitemap" subtitle="Find us">
      <div className="rounded-3xl border bg-white p-6">
        <div className="aspect-video w-full rounded-2xl bg-gray-100 grid place-items-center">Map Placeholder</div>
        <div className="mt-4 grid md:grid-cols-3 gap-4 text-sm text-gray-700">
          {navItems.map((n) => (
            <Link key={n.to} to={n.to} className="hover:text-gray-900">{n.label}</Link>
          ))}
        </div>
      </div>
    </Section>
  </main>
);

export default Sitemap;

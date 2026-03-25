import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data";
import { ArrowRight } from "lucide-react";

const categories = ["All", "Living Room", "Kitchen", "Bedroom", "Office"];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1800&q=85" alt="projects" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center text-white">
          <p className="section-label text-white/60 mb-4">Our Work</p>
          <h1 className="section-title-lg text-white">Projects Gallery</h1>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((c) => (
              <button key={c} onClick={() => setActive(c)}
                className={`px-6 py-2.5 text-[12px] tracking-widest uppercase transition-all ${
                  active === c
                    ? "bg-[#1a1a1a] text-white"
                    : "border border-gray-200 text-gray-600 hover:border-gray-400"
                }`}>
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p) => (
              <Link key={p.id} to={`/projects/${p.id}`} className="group block card-hover">
                <div className="img-zoom rounded-sm overflow-hidden aspect-[4/3] mb-4">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white text-gray-900 px-4 py-2 text-[11px] tracking-widest uppercase">
                      View Project
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[11px] tracking-[0.2em] uppercase text-yellow-600 mb-1">{p.category} · {p.style}</p>
                    <h3 className="text-xl font-medium" style={{fontFamily:"'Cormorant Garamond',serif"}}>{p.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{p.location} · {p.area}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-gray-900 group-hover:border-gray-900 transition-all flex-shrink-0">
                    <ArrowRight size={14} className="text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">No projects in this category yet.</div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1a1a1a] text-center text-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="section-title text-white mb-4">Have a Project in Mind?</h2>
          <p className="text-gray-400 mb-8">Let's create something extraordinary together.</p>
          <Link to="/contact" className="btn-gold">Start Your Project</Link>
        </div>
      </section>
    </div>
  );
}

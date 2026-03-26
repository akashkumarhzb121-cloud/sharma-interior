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
          <div className="flex flex-wrap gap-3 mb-12 justify-center stagger-container">
            {categories.map((c, i) => (
              <button key={c} onClick={() => setActive(c)}
                className={`px-6 py-2.5 text-[12px] tracking-widest uppercase transition-all duration-300 hover-lift border-animated ${
                  active === c
                    ? "bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white shadow-lg scale-105"
                    : "border border-gray-200 text-gray-600 hover:border-gold-400 hover:text-gold-400"
                }`}
                style={{animationDelay: `${i * 0.08}s`}}>
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-container">
            {filtered.map((p, i) => (
              <Link key={p.id} to={`/projects/${p.id}`} className="group block card-hover hover-lift animate-fade-up" style={{animationDelay: `${i * 0.1}s`}}>
                <div className="img-zoom rounded-sm overflow-hidden aspect-[4/3] mb-4 relative">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white text-gray-900 px-4 py-2 text-[11px] tracking-widest uppercase font-medium transform group-hover:scale-110 transition-transform duration-300">
                      View Project
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[11px] tracking-[0.2em] uppercase text-yellow-600 mb-1 animate-fade-up">{p.category} · {p.style}</p>
                    <h3 className="text-xl font-medium group-hover:text-yellow-600 transition-colors duration-300" style={{fontFamily:"'Cormorant Garamond',serif"}}>{p.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{p.location} · {p.area}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-gray-900 group-hover:border-gray-900 transition-all duration-300 flex-shrink-0 group-hover:scale-110">
                    <ArrowRight size={14} className="text-gray-400 group-hover:text-white transition-colors duration-300 group-hover:translate-x-1" />
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
      <section className="py-20 bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-center text-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="section-title text-white mb-4 animate-slide-in-up">Have a Project in Mind?</h2>
          <p className="text-gray-400 mb-8 animate-fade-up" style={{animationDelay: '0.2s'}}>Let's create something extraordinary together.</p>
          <Link to="/contact" className="btn-gold hover-lift animate-scale-in" style={{animationDelay: '0.3s'}}>Start Your Project</Link>
        </div>
      </section>
    </div>
  );
}

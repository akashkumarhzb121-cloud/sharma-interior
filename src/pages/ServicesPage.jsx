import { Link } from "react-router-dom";
import { services } from "../data";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1800&q=85" alt="services" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center text-white">
          <p className="section-label text-white/60 mb-4">What We Offer</p>
          <h1 className="section-title-lg text-white">Our Services</h1>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Tailored Solutions</p>
            <h2 className="section-title gold-line">Spaces We Design</h2>
          </div>
          <div className="space-y-24 stagger-container">
            {services.map((s, i) => (
              <div key={s.id} className={`grid md:grid-cols-2 gap-16 items-center animate-slide-in-up ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`} style={{animationDelay: `${i * 0.2}s`}}>
                <div className="img-zoom rounded-sm overflow-hidden luxury-shadow hover-darken">
                  <img src={s.image} alt={s.title} className="w-full h-80 object-cover" />
                </div>
                <div className="animate-slide-in-up" style={{animationDelay: `${i * 0.2 + 0.1}s`}}>
                  <span className="text-3xl mb-4 block transform hover:scale-125 transition-transform duration-300">{s.icon}</span>
                  <p className="section-label mb-3 animate-fade-up">{`Service 0${s.id}`}</p>
                  <h3 className="section-title mb-4 group-hover:text-gold-400">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6 hover:text-gray-700 transition-colors">{s.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium tracking-widest uppercase text-gray-400 mb-3 animate-fade-up">Our Process</h4>
                    <div className="grid grid-cols-2 gap-2 stagger-container">
                      {s.process.map((step, pi) => (
                        <div key={pi} className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300 animate-slide-in-left group" style={{animationDelay: `${pi * 0.05}s`}}>
                          <CheckCircle size={14} className="text-yellow-600 flex-shrink-0 group-hover:scale-125 transition-transform" />
                          {step}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 hover:border-gold-400 transition-colors duration-300">
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-widest">Starting Price</div>
                      <div className="text-xl font-medium text-yellow-600 animate-pulse-subtle" style={{fontFamily:"'Cormorant Garamond',serif"}}>{s.price}</div>
                    </div>
                    <Link to="/contact" className="btn-gold text-[12px] py-3 px-6 hover-lift">Get a Quote</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[0.25em] uppercase mb-4 animate-fade-up" style={{color:"#c49a4e"}}>The Sharma Way</p>
            <h2 className="section-title text-white animate-slide-in-up" style={{color:"white"}}>Custom Design Process</h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mt-4 animate-scale-up" />
          </div>
          <div className="grid md:grid-cols-3 gap-8 stagger-container">
            {[
              { num: "Phase 1", title: "Discovery & Briefing", items: ["In-home consultation", "Lifestyle analysis", "Budget planning", "Site measurement", "Reference gathering"] },
              { num: "Phase 2", title: "Design & Planning", items: ["3D visualization", "Material selection", "Furniture sourcing", "Lighting design", "Client presentations"] },
              { num: "Phase 3", title: "Build & Deliver", items: ["Project management", "Quality control", "Contractor coordination", "Phased delivery", "Final styling & reveal"] },
            ].map(({ num, title, items }, i) => (
              <div key={num} className="border border-white/10 p-8 hover:border-yellow-600 transition-all duration-300 group animate-slide-in-up hover-lift luxury-shadow hover:bg-white/5 backdrop-blur-sm" style={{animationDelay: `${i * 0.1}s`}}>
                <div className="text-yellow-600 text-[11px] tracking-widest uppercase mb-3 group-hover:text-yellow-400 transition-colors">{num}</div>
                <h3 className="text-2xl font-medium mb-6 group-hover:text-yellow-300 transition-colors" style={{fontFamily:"'Cormorant Garamond',serif"}}>{title}</h3>
                <ul className="space-y-3">
                  {items.map((item, idx) => (
                    <li key={item} className="flex items-center gap-3 text-gray-400 text-sm group-hover:text-gray-300 transition-colors animate-slide-in-left" style={{animationDelay: `${idx * 0.05}s`}}>
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-400 flex-shrink-0 group-hover:scale-150 transition-transform" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-cream-50 to-white text-center" style={{background:"linear-gradient(135deg, #fefdf8, #ffffff)"}}>
        <div className="max-w-2xl mx-auto px-6">
          <p className="section-label mb-4 animate-fade-up">Let's Begin</p>
          <h2 className="section-title mb-6 gold-line animate-slide-in-up">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 animate-fade-up" style={{animationDelay: '0.2s'}}>Book a free consultation and let our designers understand your vision. No commitment, no cost.</p>
          <Link to="/contact" className="btn-gold hover-lift animate-scale-in" style={{animationDelay: '0.3s'}}>Book Free Consultation</Link>
        </div>
      </section>
    </div>
  );
}

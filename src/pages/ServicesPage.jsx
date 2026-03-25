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
          <div className="space-y-24">
            {services.map((s, i) => (
              <div key={s.id} className={`grid md:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="img-zoom rounded-sm overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-80 object-cover" />
                </div>
                <div>
                  <span className="text-3xl mb-4 block">{s.icon}</span>
                  <p className="section-label mb-3">{`Service 0${s.id}`}</p>
                  <h3 className="section-title mb-4">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{s.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium tracking-widest uppercase text-gray-400 mb-3">Our Process</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {s.process.map((step, pi) => (
                        <div key={pi} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle size={14} className="text-yellow-600 flex-shrink-0" />
                          {step}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-widest">Starting Price</div>
                      <div className="text-xl font-medium text-yellow-600" style={{fontFamily:"'Cormorant Garamond',serif"}}>{s.price}</div>
                    </div>
                    <Link to="/contact" className="btn-gold text-[12px] py-3 px-6">Get a Quote</Link>
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
            <p className="text-[11px] tracking-[0.25em] uppercase mb-4" style={{color:"#c49a4e"}}>The Sharma Way</p>
            <h2 className="section-title text-white" style={{color:"white"}}>Custom Design Process</h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "Phase 1", title: "Discovery & Briefing", items: ["In-home consultation", "Lifestyle analysis", "Budget planning", "Site measurement", "Reference gathering"] },
              { num: "Phase 2", title: "Design & Planning", items: ["3D visualization", "Material selection", "Furniture sourcing", "Lighting design", "Client presentations"] },
              { num: "Phase 3", title: "Build & Deliver", items: ["Project management", "Quality control", "Contractor coordination", "Phased delivery", "Final styling & reveal"] },
            ].map(({ num, title, items }) => (
              <div key={num} className="border border-white/10 p-8 hover:border-yellow-600 transition-colors">
                <div className="text-yellow-600 text-[11px] tracking-widest uppercase mb-3">{num}</div>
                <h3 className="text-2xl font-medium mb-6" style={{fontFamily:"'Cormorant Garamond',serif"}}>{title}</h3>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-400 text-sm">
                      <div className="w-1 h-1 rounded-full bg-yellow-600 flex-shrink-0" />
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
      <section className="py-24 bg-cream-50 text-center" style={{background:"#fefdf8"}}>
        <div className="max-w-2xl mx-auto px-6">
          <p className="section-label mb-4">Let's Begin</p>
          <h2 className="section-title mb-6 gold-line">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">Book a free consultation and let our designers understand your vision. No commitment, no cost.</p>
          <Link to="/contact" className="btn-gold">Book Free Consultation</Link>
        </div>
      </section>
    </div>
  );
}

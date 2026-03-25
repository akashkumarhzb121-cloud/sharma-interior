import { Link } from "react-router-dom";
import { teamMembers } from "../data";
import { MapPin, Phone, Mail } from "lucide-react";

const workflow = [
  { step: "01", title: "Consultation", desc: "We begin with an in-depth discovery session to understand your lifestyle, tastes, budget, and vision. This forms the foundation of everything we create." },
  { step: "02", title: "Design Concept", desc: "Our designers develop detailed 3D renders, mood boards, and material palettes. You see your space before a single nail is hammered." },
  { step: "03", title: "Execution", desc: "Our skilled craftspeople and project managers bring the design to life with meticulous attention to quality, timelines, and budget." },
  { step: "04", title: "Delivery", desc: "We hand over your transformed space with a thorough walkthrough and provide comprehensive after-care support." },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1800&q=85" alt="about" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center text-white">
          <p className="section-label text-white/60 mb-4">Our Story</p>
          <h1 className="section-title-lg text-white">About Sharma Interior</h1>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="img-zoom rounded-sm overflow-hidden">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" alt="studio" className="w-full h-[500px] object-cover" />
              </div>
              <div className="absolute bottom-8 right-8 bg-white p-6 shadow-xl">
                <div className="text-4xl font-light text-yellow-600 mb-1" style={{fontFamily:"'Cormorant Garamond',serif"}}>2006</div>
                <div className="text-xs tracking-widest uppercase text-gray-500">Est. in Jaipur</div>
              </div>
            </div>
            <div>
              <p className="section-label mb-4">Who We Are</p>
              <h2 className="section-title mb-6 gold-line-left">Crafting Spaces That<br />Tell Your Story</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Sharma Interior and Decorations was founded by Rajesh Sharma in 2006 with a simple but powerful belief: every space should be as unique as the person who inhabits it. 
                What began as a two-person studio in Malviya Nagar, Jaipur, has grown into one of Rajasthan's most respected interior design firms.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Over 18 years, we've completed more than 200 residential and commercial projects, earning a reputation for combining aesthetic brilliance with meticulous execution. Our clients don't just get beautiful spaces — they get spaces that work beautifully for their lives.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We blend contemporary design sensibilities with the rich craft traditions of Rajasthan, creating interiors that are globally inspired yet deeply rooted.
              </p>
              <div className="grid grid-cols-3 gap-6 py-8 border-y border-gray-100">
                {[["200+","Projects"],["18+","Years"],["50+","Team"]].map(([n,l]) => (
                  <div key={l} className="text-center">
                    <div className="text-3xl font-light text-yellow-600 mb-1" style={{fontFamily:"'Cormorant Garamond',serif"}}>{n}</div>
                    <div className="text-xs tracking-widest uppercase text-gray-500">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="border border-white/10 p-10 hover:border-yellow-600 transition-colors">
              <div className="text-yellow-600 text-4xl mb-6" style={{fontFamily:"'Cormorant Garamond',serif"}}>Mission</div>
              <p className="text-gray-300 leading-relaxed text-lg">
                To design spaces that genuinely improve the quality of people's lives — spaces that are beautiful, functional, and deeply personal. We are committed to delivering extraordinary interiors with integrity, craftsmanship, and care.
              </p>
            </div>
            <div className="border border-white/10 p-10 hover:border-yellow-600 transition-colors">
              <div className="text-yellow-600 text-4xl mb-6" style={{fontFamily:"'Cormorant Garamond',serif"}}>Vision</div>
              <p className="text-gray-300 leading-relaxed text-lg">
                To be India's most admired interior design studio — recognized for the depth of our creativity, the breadth of our craftsmanship, and the lasting relationships we build with every client we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-4">How We Deliver</p>
            <h2 className="section-title gold-line">Our Design Process</h2>
          </div>
          <div className="space-y-0">
            {workflow.map((w, i) => (
              <div key={w.step} className={`flex flex-col md:flex-row gap-8 p-10 border-b border-gray-100 hover:bg-gray-50 transition-colors group ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-cream-100 border-2 flex items-center justify-center group-hover:border-yellow-600 transition-colors" style={{background:"#fdf9ec", borderColor:"#e5e7eb"}}>
                    <span className="text-2xl font-light text-yellow-600" style={{fontFamily:"'Cormorant Garamond',serif"}}>{w.step}</span>
                  </div>
                </div>
                <div className={`${i % 2 === 1 ? "md:text-right" : ""}`}>
                  <h3 className="text-2xl font-medium mb-3" style={{fontFamily:"'Cormorant Garamond',serif"}}>{w.title}</h3>
                  <p className="text-gray-600 leading-relaxed max-w-lg">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-cream-50" style={{background:"#fefdf8"}}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-4">The People Behind The Magic</p>
            <h2 className="section-title gold-line">Meet Our Team</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((m) => (
              <div key={m.name} className="group text-center">
                <div className="img-zoom rounded-sm overflow-hidden mb-5 aspect-[3/4]">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-medium mb-1" style={{fontFamily:"'Cormorant Garamond',serif"}}>{m.name}</h3>
                <p className="text-xs tracking-widest uppercase text-yellow-600 mb-1">{m.role}</p>
                <p className="text-gray-400 text-sm">{m.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-4">Find Us</p>
            <h2 className="section-title gold-line">Our Location</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[
              { icon: MapPin, title: "Address", text: "B-14, Malviya Nagar\nJaipur, Rajasthan 302017" },
              { icon: Phone, title: "Phone", text: "+91 98765 43210\n+91 98765 43211" },
              { icon: Mail, title: "Email", text: "hello@sharmainteriors.in\nsupport@sharmainteriors.in" },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="text-center p-8 border border-gray-100 hover:border-yellow-200 transition-colors">
                <Icon className="mx-auto mb-4 text-yellow-600" size={24} />
                <h4 className="font-medium mb-2">{title}</h4>
                <p className="text-gray-500 text-sm whitespace-pre-line leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <div className="rounded-sm overflow-hidden h-72 bg-gray-100">
            <iframe
              title="Sharma Interior Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.489!2d75.7873!3d26.8714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5734d63e4f5%3A0x1456f42e41b1dad8!2sMalviya%20Nagar%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

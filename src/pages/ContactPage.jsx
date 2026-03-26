import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Briefcase, ChevronRight } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-72 flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1800&q=85" alt="contact" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60 hover:bg-black/55 transition-all duration-500" />
        <div className="relative z-10 text-center text-white">
          <p className="section-label text-white/60 mb-4 animate-fade-up">Get In Touch</p>
          <h1 className="section-title-lg text-white animate-slide-in-up">Contact Us</h1>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="animate-slide-in-left">
              <p className="section-label mb-4 animate-fade-up">Book a Consultation</p>
              <h2 className="section-title mb-8 gold-line-left animate-slide-in-up">Let's Talk About<br />Your Project</h2>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 p-8 rounded-sm text-center animate-scale-in luxury-shadow">
                  <div className="text-3xl mb-3 animate-float">✅</div>
                  <h3 className="text-xl font-medium mb-2 text-green-700" style={{fontFamily:"'Cormorant Garamond',serif"}}>Message Sent!</h3>
                  <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 stagger-container">
                  <div className="grid md:grid-cols-2 gap-8 stagger-container">
                    <div className="animate-slide-in-up">
                      <label className="section-label block mb-2 animate-fade-up">Your Name *</label>
                      <input required className="input-luxury" placeholder="Rajesh Kumar" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
                    </div>
                    <div className="animate-slide-in-up" style={{animationDelay: '0.1s'}}>
                      <label className="section-label block mb-2 animate-fade-up">Phone Number *</label>
                      <input required className="input-luxury" placeholder="+91 98765 43210" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} />
                    </div>
                  </div>
                  <div className="animate-slide-in-up" style={{animationDelay: '0.2s'}}>
                    <label className="section-label block mb-2 animate-fade-up">Email Address</label>
                    <input type="email" className="input-luxury" placeholder="rajesh@email.com" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
                  </div>
                  <div className="animate-slide-in-up" style={{animationDelay: '0.3s'}}>
                    <label className="section-label block mb-2 animate-fade-up">Service Required</label>
                    <select className="input-luxury text-gray-700 cursor-pointer" value={form.service} onChange={(e) => setForm({...form, service: e.target.value})}>
                      <option value="">Select a Service</option>
                      <option>Modular Kitchen</option>
                      <option>Bedroom Design</option>
                      <option>Living Room</option>
                      <option>Office Interior</option>
                      <option>Complete Home Design</option>
                      <option>Commercial Spaces</option>
                    </select>
                  </div>
                  <div className="animate-slide-in-up" style={{animationDelay: '0.4s'}}>
                    <label className="section-label block mb-2 animate-fade-up">Your Message</label>
                    <textarea className="input-luxury resize-none" rows={4} placeholder="Tell us about your project, budget, timeline..." value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} />
                  </div>
                  <button type="submit" className="btn-gold w-full hover-lift animate-slide-in-up" style={{animationDelay: '0.5s'}}>Send Message</button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="animate-slide-in-right">
              <div className="space-y-6 mb-10 stagger-container">
                {[
                  { icon: MapPin, label: "Visit Us", text: "B-14, Malviya Nagar, Jaipur, Rajasthan 302017", href: "https://maps.google.com" },
                  { icon: Phone, label: "Call Us", text: "+91 98765 43210 / +91 98765 43211", href: "tel:+919876543210" },
                  { icon: Mail, label: "Email Us", text: "hello@sharmainteriors.in", href: "mailto:hello@sharmainteriors.in" },
                ].map(({ icon: Icon, label, text, href }, i) => (
                  <a key={label} href={href} className="flex gap-4 p-6 border border-gray-100 hover:border-yellow-300 transition-all duration-300 group hover-lift animate-slide-in-up luxury-shadow hover:bg-yellow-50/30" style={{animationDelay: `${i * 0.1}s`}}>
                    <div className="w-12 h-12 bg-yellow-50 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-600 group-hover:scale-110 transition-all duration-300">
                      <Icon size={20} className="text-yellow-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs tracking-widest uppercase text-gray-400 mb-1 group-hover:text-yellow-600 transition-colors">{label}</div>
                      <div className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">{text}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* WhatsApp */}
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer"
                className="flex items-center gap-4 p-6 bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 transition-all duration-300 mb-8 hover-lift rounded-sm overflow-hidden group animate-slide-in-up" style={{animationDelay: '0.3s'}}>
                <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
                <div className="flex-1">
                  <div className="font-medium group-hover:text-green-100 transition-colors">Chat on WhatsApp</div>
                  <div className="text-green-100 text-sm">Quick response, usually within minutes</div>
                </div>
                <ChevronRight className="ml-auto group-hover:translate-x-1 transition-transform" size={20} />
              </a>

              {/* Map */}
              <div className="rounded-sm overflow-hidden h-64 bg-gray-100 luxury-shadow hover-lift transition-all animate-scale-in" style={{animationDelay: '0.4s'}}>
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.489!2d75.7873!3d26.8714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5734d63e4f5%3A0x1456f42e41b1dad8!2sMalviya%20Nagar%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="py-24 bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="text-yellow-600 mb-6 animate-bounce" style={{animationDelay: '0.2s', animationIterationCount: '1'}}><Briefcase size={40} /></div>
              <p className="text-[11px] tracking-[0.25em] uppercase mb-4 animate-fade-up" style={{color:"#c49a4e"}}>Join Our Team</p>
              <h2 className="section-title text-white mb-6 animate-slide-in-up">Careers at<br /><span className="italic font-light animate-pulse-subtle" style={{color:"#d4af6e"}}>Sharma Interior</span></h2>
              <p className="text-gray-400 leading-relaxed mb-8 animate-fade-up" style={{animationDelay: '0.2s'}}>
                We're always looking for talented designers, visualizers, and project managers who share our passion for extraordinary spaces. Join a creative, dynamic team.
              </p>
              <div className="space-y-3 mb-8 stagger-container">
                {["Competitive salary & incentives", "Creative freedom on projects", "Professional development budget", "Collaborative studio culture", "Health insurance"].map((b, i) => (
                  <div key={b} className="flex items-center gap-3 text-gray-400 text-sm group hover:text-yellow-400 transition-colors animate-slide-in-left" style={{animationDelay: `${i * 0.05}s`}}>
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-400 flex-shrink-0 group-hover:scale-150 transition-transform" />
                    {b}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4 stagger-container">
              {[
                { role: "Senior Interior Designer", type: "Full Time", exp: "5+ years" },
                { role: "3D Visualization Artist", type: "Full Time", exp: "3+ years" },
                { role: "Project Manager", type: "Full Time", exp: "4+ years" },
                { role: "Junior Interior Designer", type: "Full Time", exp: "1+ year" },
              ].map((job, i) => (
                <div key={job.role} className="flex items-center justify-between p-5 border border-white/10 hover:border-yellow-600 transition-all duration-300 group hover-lift animate-slide-in-up luxury-shadow hover:bg-white/5" style={{animationDelay: `${i * 0.1}s`}}>
                  <div>
                    <h4 className="font-medium text-white group-hover:text-yellow-400 transition-colors">{job.role}</h4>
                    <p className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors">{job.type} · {job.exp} experience</p>
                  </div>
                  <button className="px-6 py-2 text-[11px] tracking-widest uppercase font-medium border border-white/20 hover:border-yellow-600 text-white hover:text-yellow-600 hover:bg-yellow-600/10 transition-all duration-300 rounded-sm hover:scale-105" style={{animationDelay: `${(i+1) * 0.05}s`}}>
                    Apply
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

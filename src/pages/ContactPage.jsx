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
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white">
          <p className="section-label text-white/60 mb-4">Get In Touch</p>
          <h1 className="section-title-lg text-white">Contact Us</h1>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <p className="section-label mb-4">Book a Consultation</p>
              <h2 className="section-title mb-8 gold-line-left">Let's Talk About<br />Your Project</h2>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 p-8 rounded-sm text-center">
                  <div className="text-3xl mb-3">✅</div>
                  <h3 className="text-xl font-medium mb-2" style={{fontFamily:"'Cormorant Garamond',serif"}}>Message Sent!</h3>
                  <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="section-label block mb-2">Your Name *</label>
                      <input required className="input-luxury" placeholder="Rajesh Kumar" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
                    </div>
                    <div>
                      <label className="section-label block mb-2">Phone Number *</label>
                      <input required className="input-luxury" placeholder="+91 98765 43210" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} />
                    </div>
                  </div>
                  <div>
                    <label className="section-label block mb-2">Email Address</label>
                    <input type="email" className="input-luxury" placeholder="rajesh@email.com" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
                  </div>
                  <div>
                    <label className="section-label block mb-2">Service Required</label>
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
                  <div>
                    <label className="section-label block mb-2">Your Message</label>
                    <textarea className="input-luxury resize-none" rows={4} placeholder="Tell us about your project, budget, timeline..." value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} />
                  </div>
                  <button type="submit" className="btn-gold w-full">Send Message</button>
                </form>
              )}
            </div>

            {/* Info */}
            <div>
              <div className="space-y-6 mb-10">
                {[
                  { icon: MapPin, label: "Visit Us", text: "B-14, Malviya Nagar, Jaipur, Rajasthan 302017", href: "https://maps.google.com" },
                  { icon: Phone, label: "Call Us", text: "+91 98765 43210 / +91 98765 43211", href: "tel:+919876543210" },
                  { icon: Mail, label: "Email Us", text: "hello@sharmainteriors.in", href: "mailto:hello@sharmainteriors.in" },
                ].map(({ icon: Icon, label, text, href }) => (
                  <a key={label} href={href} className="flex gap-4 p-6 border border-gray-100 hover:border-yellow-200 transition-colors group">
                    <div className="w-12 h-12 bg-yellow-50 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-600 transition-colors">
                      <Icon size={20} className="text-yellow-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs tracking-widest uppercase text-gray-400 mb-1">{label}</div>
                      <div className="text-gray-700 font-medium">{text}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* WhatsApp */}
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer"
                className="flex items-center gap-4 p-6 bg-green-600 text-white hover:bg-green-700 transition-colors mb-8">
                <MessageCircle size={24} />
                <div>
                  <div className="font-medium">Chat on WhatsApp</div>
                  <div className="text-green-100 text-sm">Quick response, usually within minutes</div>
                </div>
                <ChevronRight className="ml-auto" size={20} />
              </a>

              {/* Map */}
              <div className="rounded-sm overflow-hidden h-64 bg-gray-100">
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
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-yellow-600 mb-6"><Briefcase size={40} /></div>
              <p className="text-[11px] tracking-[0.25em] uppercase mb-4" style={{color:"#c49a4e"}}>Join Our Team</p>
              <h2 className="section-title text-white mb-6">Careers at<br /><span className="italic font-light" style={{color:"#d4af6e"}}>Sharma Interior</span></h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                We're always looking for talented designers, visualizers, and project managers who share our passion for extraordinary spaces. Join a creative, dynamic team.
              </p>
              <div className="space-y-3 mb-8">
                {["Competitive salary & incentives", "Creative freedom on projects", "Professional development budget", "Collaborative studio culture", "Health insurance"].map((b) => (
                  <div key={b} className="flex items-center gap-3 text-gray-400 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-600 flex-shrink-0" />
                    {b}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {[
                { role: "Senior Interior Designer", type: "Full Time", exp: "5+ years" },
                { role: "3D Visualization Artist", type: "Full Time", exp: "3+ years" },
                { role: "Project Manager", type: "Full Time", exp: "4+ years" },
                { role: "Junior Interior Designer", type: "Full Time", exp: "1+ year" },
              ].map((job) => (
                <div key={job.role} className="flex items-center justify-between p-5 border border-white/10 hover:border-yellow-600 transition-colors group">
                  <div>
                    <h4 className="font-medium text-white">{job.role}</h4>
                    <p className="text-gray-500 text-sm">{job.type} · {job.exp} experience</p>
                  </div>
                  <button className="btn-outline text-[11px] py-2 px-4" style={{borderColor:"rgba(255,255,255,0.2)", color:"white"}}
                    onMouseEnter={(e) => { e.target.style.background = "white"; e.target.style.color = "#1a1a1a"; }}
                    onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.color = "white"; }}>
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

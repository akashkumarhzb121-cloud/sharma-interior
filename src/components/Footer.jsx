import { Link } from "react-router-dom";
import { Camera, Heart, PlayCircle, Share2, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const SocialLinks = [
  { Icon: Camera, label: "Instagram", href: "#" },
  { Icon: Heart, label: "Facebook", href: "#" },
  { Icon: PlayCircle, label: "YouTube", href: "#" },
  { Icon: Share2, label: "Twitter", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0f0f0f] to-[#000000] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 stagger-container">
          <div className="lg:col-span-1 animate-slide-in-left">
            <div className="mb-6 group hover-scale">
              <div style={{fontFamily:"'Cormorant Garamond',serif"}} className="text-2xl font-semibold tracking-wider text-white group-hover:text-yellow-400 transition-colors duration-300">SHARMA</div>
              <div className="text-[9px] tracking-[0.3em] uppercase text-yellow-600 mt-1 group-hover:text-yellow-400 transition-colors">Interior & Decorations</div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 hover:text-gray-300 transition-colors duration-300">
              Transforming spaces into extraordinary experiences since 2006. Premium interior design for discerning clients.
            </p>
            <div className="flex gap-4 stagger-container">
              {SocialLinks.map(({ Icon, label, href }, i) => (
                <a key={label} href={href} aria-label={label} className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-yellow-600 hover:text-yellow-600 hover:bg-yellow-600/10 transition-all duration-300 group hover:scale-110 transform animate-scale-up" style={{animationDelay: `${i * 0.1}s`}}>
                  <Icon size={16} className="group-hover:rotate-12 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div className="animate-slide-in-up" style={{animationDelay: '0.1s'}}>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-yellow-600 mb-6 animate-fade-up">Quick Links</h4>
            <ul className="space-y-3 stagger-container">
              {[["Home", "/"], ["About Us", "/about"], ["Services", "/services"], ["Projects", "/projects"], ["Offers", "/offers"], ["Contact", "/contact"]].map(([label, path], i) => (
                <li key={path} className="animate-slide-in-left" style={{animationDelay: `${i * 0.05}s`}}>
                  <Link to={path} className="text-gray-400 text-sm hover:text-yellow-400 transition-all duration-300 flex items-center gap-2 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-yellow-600 group-hover:translate-x-1" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-slide-in-up" style={{animationDelay: '0.2s'}}>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-yellow-600 mb-6 animate-fade-up">Services</h4>
            <ul className="space-y-3 stagger-container">
              {["Modular Kitchen", "Bedroom Design", "Living Room", "Office Interior", "Complete Home", "Commercial Spaces"].map((s, i) => (
                <li key={s} className="animate-slide-in-left" style={{animationDelay: `${i * 0.05}s`}}>
                  <Link to="/services" className="text-gray-400 text-sm hover:text-yellow-400 transition-all duration-300 flex items-center gap-2 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-yellow-600 group-hover:translate-x-1" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-slide-in-right" style={{animationDelay: '0.3s'}}>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-yellow-600 mb-6 animate-fade-up">Contact Us</h4>
            <ul className="space-y-4 stagger-container">
              <li className="flex gap-3 text-gray-400 text-sm hover:text-gray-300 transition-colors group animate-slide-in-left">
                <MapPin size={16} className="text-yellow-600 flex-shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
                <span>B-14, Malviya Nagar, Jaipur, Rajasthan 302017</span>
              </li>
              <li className="animate-slide-in-left" style={{animationDelay: '0.05s'}}>
                <a href="tel:+919876543210" className="flex gap-3 text-gray-400 text-sm hover:text-yellow-400 transition-all duration-300 group">
                  <Phone size={16} className="text-yellow-600 flex-shrink-0 group-hover:scale-125 transition-transform" />+91 98765 43210
                </a>
              </li>
              <li className="animate-slide-in-left" style={{animationDelay: '0.1s'}}>
                <a href="mailto:hello@sharmainteriors.in" className="flex gap-3 text-gray-400 text-sm hover:text-yellow-400 transition-all duration-300 group">
                  <Mail size={16} className="text-yellow-600 flex-shrink-0 group-hover:scale-125 transition-transform" />hello@sharmainteriors.in
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 rounded-sm bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-yellow-600/30">
              <h5 className="text-xs text-gray-500 mb-2">Working Hours</h5>
              <p className="text-gray-400 text-sm">Mon – Sat: 10am – 7pm</p>
              <p className="text-gray-400 text-sm">Sunday: By Appointment</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 animate-fade-up">
          <p className="text-gray-500 text-xs hover:text-gray-400 transition-colors duration-300">© 2025 Sharma Interior and Decorations. All rights reserved.</p>
          <div className="flex gap-6 stagger-container">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((l, i) => (
              <a key={l} href="#" className="text-gray-500 text-xs hover:text-yellow-400 transition-all duration-300 animate-fade-up group" style={{animationDelay: `${i * 0.1}s`}}>
                {l}
                <span className="block h-px bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

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
    <footer className="bg-[#0f0f0f] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div style={{fontFamily:"'Cormorant Garamond',serif"}} className="text-2xl font-semibold tracking-wider text-white">SHARMA</div>
              <div className="text-[9px] tracking-[0.3em] uppercase text-yellow-600 mt-1">Interior & Decorations</div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Transforming spaces into extraordinary experiences since 2006. Premium interior design for discerning clients.
            </p>
            <div className="flex gap-4">
              {SocialLinks.map(({ Icon, label, href }) => (
                <a key={label} href={href} aria-label={label} className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-yellow-600 hover:text-yellow-600 transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-yellow-600 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[["Home", "/"], ["About Us", "/about"], ["Services", "/services"], ["Projects", "/projects"], ["Offers", "/offers"], ["Contact", "/contact"]].map(([label, path]) => (
                <li key={path}>
                  <Link to={path} className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-yellow-600" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-yellow-600 mb-6">Services</h4>
            <ul className="space-y-3">
              {["Modular Kitchen", "Bedroom Design", "Living Room", "Office Interior", "Complete Home", "Commercial Spaces"].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-yellow-600" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-yellow-600 mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-400 text-sm">
                <MapPin size={16} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                <span>B-14, Malviya Nagar, Jaipur, Rajasthan 302017</span>
              </li>
              <li>
                <a href="tel:+919876543210" className="flex gap-3 text-gray-400 text-sm hover:text-white transition-colors">
                  <Phone size={16} className="text-yellow-600 flex-shrink-0" />+91 98765 43210
                </a>
              </li>
              <li>
                <a href="mailto:hello@sharmainteriors.in" className="flex gap-3 text-gray-400 text-sm hover:text-white transition-colors">
                  <Mail size={16} className="text-yellow-600 flex-shrink-0" />hello@sharmainteriors.in
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h5 className="text-xs text-gray-500 mb-2">Working Hours</h5>
              <p className="text-gray-400 text-sm">Mon – Sat: 10am – 7pm</p>
              <p className="text-gray-400 text-sm">Sunday: By Appointment</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">© 2025 Sharma Interior and Decorations. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((l) => (
              <a key={l} href="#" className="text-gray-500 text-xs hover:text-gray-300 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

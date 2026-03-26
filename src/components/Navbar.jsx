import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Offers", path: "/offers" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isTransparent = isHome && !scrolled;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isTransparent
        ? "bg-transparent py-6"
        : "bg-white/95 backdrop-blur-luxury shadow-lg py-4 backdrop-blur-lg"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-tight group hover-scale">
          <span className={`display-font text-xl font-semibold tracking-wider transition-all duration-300 ${isTransparent ? "text-white group-hover:text-yellow-300" : "text-charcoal-900 group-hover:text-yellow-600"}`} style={{fontFamily:"'Cormorant Garamond',serif"}}>
            SHARMA
          </span>
          <span className={`text-[9px] tracking-[0.3em] uppercase font-light transition-all duration-300 ${isTransparent ? "text-white/70 group-hover:text-yellow-300" : "text-gold-400"}`} style={{color: isTransparent ? "rgba(255,255,255,0.7)" : "#c49a4e"}}>
            Interior & Decorations
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`text-[13px] tracking-widest uppercase font-medium transition-all duration-300 relative group ${
                isTransparent ? "text-white/80 hover:text-white" : "text-gray-600 hover:text-gray-900"
              } ${location.pathname === l.path ? (isTransparent ? "text-white" : "text-gray-900") : ""}`}
            >
              {l.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-300 transition-all duration-500 ${
                location.pathname === l.path ? "w-full" : "w-0 group-hover:w-full"
              }`} style={{background:"linear-gradient(90deg, #c49a4e, #d4af6e)"}}></span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+919876543210" className={`flex items-center gap-2 text-[13px] transition-all duration-300 group ${isTransparent ? "text-white/80 hover:text-white" : "text-gray-600 hover:text-gold-400"}`}>
            <Phone size={14} className="group-hover:scale-110 transition-transform" /> +91 98765 43210
          </a>
          <Link to="/contact" className="btn-gold text-[12px] py-3 px-6 hover-lift">
            Free Consultation
          </Link>
        </div>

        {/* Mobile Menu */}
        <button onClick={() => setOpen(!open)} className={`lg:hidden transition-transform duration-300 ${isTransparent ? "text-white hover:scale-110" : "text-gray-900 hover:scale-110"}`}>
          {open ? <X size={24} className="animate-rotate-subtle" /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden bg-white/95 backdrop-blur-luxury border-t border-gray-100 px-6 py-6 flex flex-col gap-4 animate-slide-in-down">
          {navLinks.map((l, i) => (
            <Link key={l.path} to={l.path} onClick={() => setOpen(false)}
              className={`text-[13px] tracking-widest uppercase font-medium py-2 border-b border-gray-50 transition-all duration-300 hover:text-gold-400 hover:translate-x-2 animate-slide-in-left ${
                location.pathname === l.path ? "text-gold-400" : "text-gray-700"
              }`}
              style={{animationDelay: `${i * 0.05}s`}}>
              {l.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="btn-gold text-center mt-2 hover-lift">
            Free Consultation
          </Link>
        </div>
      )}
    </nav>
  );
}

import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { navItems } from "../../utils/navItems";
import Container from "./Container";

const Footer = () => (
  <footer className="mt-20 border-t bg-white">
    <Container className="py-10 grid md:grid-cols-4 gap-8">
      <div>
        <h4 className="font-semibold text-gray-900 mb-3">Sharma Interior &amp; Decoration</h4>
        <p className="text-sm text-gray-600">
          Transforming spaces with bespoke design, precise execution, and trusted after-sales support.
        </p>
      </div>

      <div>
        <h5 className="font-medium text-gray-900 mb-3">Quick Links</h5>
        <ul className="space-y-2 text-sm">
          {navItems.slice(0, 7).map((n) => (
            <li key={n.to}>
              <Link className="text-gray-600 hover:text-gray-900" to={n.to}>
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h5 className="font-medium text-gray-900 mb-3">Contact</h5>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 98xx-xx-xxxx</li>
          <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@sharmainterior.com</li>
          <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Jaipur • Mumbai • Delhi</li>
        </ul>
      </div>

      <div>
        <h5 className="font-medium text-gray-900 mb-3">Follow</h5>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="facebook"><Facebook className="w-5 h-5" /></a>
          <a href="#" aria-label="instagram"><Instagram className="w-5 h-5" /></a>
          <a href="#" aria-label="linkedin"><Linkedin className="w-5 h-5" /></a>
        </div>
      </div>
    </Container>

    <div className="border-t">
      <Container className="py-4 flex items-center justify-between text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Sharma Interior &amp; Decoration. All rights reserved.</p>
        <p>Made with ❤️ in India</p>
      </Container>
    </div>
  </footer>
);

export default Footer;

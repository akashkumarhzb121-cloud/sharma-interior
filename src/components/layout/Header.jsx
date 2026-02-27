import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "../ui";
import { navItems } from "../../utils/navItems";
import Container from "./Container";

const Header = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b">
      <Container className="flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-2xl bg-amber-100 border border-amber-200 shadow-inner" />
          <div className="leading-tight">
            <p className="font-semibold text-gray-900">Sharma Interior</p>
            <p className="text-xs text-gray-500">&amp; Decoration</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-xl text-sm hover:bg-gray-100 transition ${
                  isActive ? "bg-gray-100 text-gray-900" : "text-gray-700"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="/contact" className="hidden sm:block">
            <Button className="rounded-2xl">Free Consultation</Button>
          </a>
          <button className="lg:hidden p-2" onClick={() => setOpen((v) => !v)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </Container>

      {/* Mobile Nav */}
      {open && (
        <div className="lg:hidden border-t bg-white">
          <Container className="py-3 grid grid-cols-2 gap-2">
            {navItems.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-xl text-sm hover:bg-gray-100 ${
                    isActive ? "bg-gray-100 text-gray-900" : "text-gray-700"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;

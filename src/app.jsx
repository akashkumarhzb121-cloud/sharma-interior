import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ChevronRight, CheckCircle, PlayCircle } from "lucide-react";

// ====== Simple UI helpers (NO external UI kit) ======
const Button = ({ children, className = "", variant, ...props }) => (
  <button
    className={`px-4 py-2 rounded-xl border transition hover:opacity-90 ${
      variant === "outline" ? "bg-white" : "bg-gray-900 text-white"
    } ${className}`}
    {...props}
  >
    {children}
  </button>
);
const Card = ({ children, className = "" }) => (
  <div className={`bg-white border rounded-3xl shadow-sm ${className}`}>{children}</div>
);
const CardHeader = ({ children, className = "" }) => (
  <div className={`p-4 border-b ${className}`}>{children}</div>
);
const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
);
const CardContent = ({ children, className = "" }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

// ====== Tiny utility ======
const Container = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);
const Section = ({ id, title, subtitle, children, className = "", headerExtra }) => (
  <section id={id} className={`py-12 sm:py-16 ${className}`}>
    <Container>
      {(title || subtitle) && (
        <div className="mb-8 sm:mb-12 flex items-end justify-between gap-4">
          <div>
            {subtitle && <p className="text-sm uppercase tracking-widest text-gray-500">{subtitle}</p>}
            {title && <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">{title}</h2>}
          </div>
          {headerExtra}
        </div>
      )}
      {children}
    </Container>
  </section>
);
const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600 bg-white shadow-sm">{children}</span>
);

// ====== Nav items ======
const navItems = [
  { to: "/", label: "Home" },
  { to: "/company", label: "Company" },
  { to: "/custom", label: "Custom Design" },
  { to: "/design-build", label: "Design Build" },
  { to: "/products", label: "Products" },
  { to: "/offers", label: "Offers" },
  { to: "/projects", label: "Projects" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
  { to: "/faq", label: "FAQ" },
  { to: "/careers", label: "Careers" },
  { to: "/refer", label: "Refer a Friend" },
  { to: "/csr", label: "CSR" },
  { to: "/annual-return", label: "Annual Return" },
  { to: "/sitemap", label: "Sitemap" },
];

// ====== Layout ======
const Header = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b">
      <Container className="flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-2xl bg-amber-100 border border-amber-200 shadow-inner" />
          <div className="leading-tight">
            <p className="font-semibold text-gray-900">Sharma Interior</p>
            <p className="text-xs text-gray-500">& Decoration</p>
          </div>
        </Link>
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
          <a href="#contact" className="hidden sm:block">
            <Button className="rounded-2xl">Free Consultation</Button>
          </a>
          <button className="lg:hidden p-2" onClick={() => setOpen((v) => !v)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </Container>
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

const Footer = () => (
  <footer className="mt-20 border-t bg-white">
    <Container className="py-10 grid md:grid-cols-4 gap-8">
      <div>
        <h4 className="font-semibold text-gray-900 mb-3">Sharma Interior & Decoration</h4>
        <p className="text-sm text-gray-600">Transforming spaces with bespoke design, precise execution, and trusted after-sales support.</p>
      </div>
      <div>
        <h5 className="font-medium text-gray-900 mb-3">Quick Links</h5>
        <ul className="space-y-2 text-sm">
          {navItems.slice(0,7).map(n => (
            <li key={n.to}><Link className="text-gray-600 hover:text-gray-900" to={n.to}>{n.label}</Link></li>
          ))}
        </ul>
      </div>
      <div>
        <h5 className="font-medium text-gray-900 mb-3">Contact</h5>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-center gap-2"><Phone className="w-4 h-4"/> +91 98xx-xx-xxxx</li>
          <li className="flex items-center gap-2"><Mail className="w-4 h-4"/> hello@sharmainterior.com</li>
          <li className="flex items-center gap-2"><MapPin className="w-4 h-4"/> Jaipur • Mumbai • Delhi</li>
        </ul>
      </div>
      <div>
        <h5 className="font-medium text-gray-900 mb-3">Follow</h5>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="facebook"><Facebook className="w-5 h-5"/></a>
          <a href="#" aria-label="instagram"><Instagram className="w-5 h-5"/></a>
          <a href="#" aria-label="linkedin"><Linkedin className="w-5 h-5"/></a>
        </div>
      </div>
    </Container>
    <div className="border-t">
      <Container className="py-4 flex items-center justify-between text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Sharma Interior & Decoration. All rights reserved.</p>
        <p>Made with ❤️ in India</p>
      </Container>
    </div>
  </footer>
);

// ====== Pages ======
const Home = () => {
  const slides = [
    { title: "Sharma Interior & Decoration", desc: "Transforming spaces into dream homes — design, production, and execution under one roof." },
    { title: "100% Trusted Brand", desc: "Timely delivery, transparent pricing, and after-sales service you can count on." },
    { title: "Loved by Our Clients", desc: '"They delivered exactly what we imagined — and more." — A Happy Client' },
  ];
  return (
    <main>
      <div className="relative bg-gradient-to-b from-white to-gray-50">
        <Container className="py-10 sm:py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Pill>Welcome to Sharma Interior</Pill>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">Bespoke Interiors. Quality Craft. Timely Execution.</h1>
              <p className="mt-4 text-gray-600 max-w-xl">Full-service interior studio offering consultation, custom furniture, in-house production and on-time project delivery.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/contact"><Button className="rounded-2xl">Get Free Consultation</Button></Link>
                <Link to="/projects"><Button variant="outline" className="rounded-2xl">View Projects</Button></Link>
              </div>
              <div className="mt-6 flex gap-3">
                <Pill>100% Trusted</Pill>
                <Pill>Own Production</Pill>
                <Pill>After-Sales Support</Pill>
              </div>
            </div>
            <div className="relative">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="aspect-video rounded-3xl bg-white border shadow-sm grid place-items-center">
                <PlayCircle className="w-14 h-14"/>
              </motion.div>
              <div className="absolute -bottom-6 -right-6 bg-amber-50 border border-amber-200 rounded-3xl p-4 shadow">
                <p className="text-xs text-amber-900">Client Rating</p>
                <p className="text-lg font-semibold text-amber-900">4.9/5</p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Section subtitle="Highlights" title="Why Families Trust Us">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {slides.map((s, i) => (
            <Card key={i} className="rounded-3xl">
              <CardHeader><CardTitle className="text-gray-900">{s.title}</CardTitle></CardHeader>
              <CardContent><p className="text-gray-600">{s.desc}</p></CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section subtitle="Showcase" title="Featured Work" headerExtra={<Link to="/gallery" className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">See all <ChevronRight className="w-4 h-4"/></Link>}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i)=> (
            <div key={i} className="group overflow-hidden rounded-3xl bg-white border shadow-sm">
              <div className="h-48 bg-gray-100 grid place-items-center">Image {i}</div>
              <div className="p-4">
                <p className="font-medium text-gray-900">Modern Living Room</p>
                <p className="text-sm text-gray-600">Jaipur • 2025</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="rounded-3xl border bg-gradient-to-r from-white to-amber-50 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Let’s design your dream space</h3>
            <p className="text-gray-600">Book a free consultation. Get designs, estimates, and timelines quickly.</p>
          </div>
          <Link to="/contact"><Button className="rounded-2xl">Schedule a Call</Button></Link>
        </div>
      </Section>
    </main>
  );
};

const Company = () => (
  <main>
    <Section title="About Sharma Interior & Decoration" subtitle="Company">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-gray-700">We are a full-service interior design studio offering consultation, bespoke design, in-house production, and on-time execution with dedicated after-sales service.</p>
          <ul className="space-y-2">
            {["Consultation","Interior Design","Production","Execution","After-Sales Service"].map(i => (
              <li key={i} className="flex items-start gap-2 text-gray-700"><CheckCircle className="w-5 h-5 mt-0.5"/> {i}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border bg-white h-64 grid place-items-center">Team Photo</div>
      </div>
    </Section>

    <Section title="Our Workflow" subtitle="Process">
      <div className="grid md:grid-cols-5 gap-4">
        {["Consultation","Design","Production","Execution","After Sales"].map((step, idx)=>(
          <div key={step} className="rounded-2xl border bg-white p-4">
            <p className="text-xs text-gray-500">Step {idx+1}</p>
            <p className="font-medium text-gray-900">{step}</p>
            <p className="text-sm text-gray-600 mt-1">Short description of how we handle {step.toLowerCase()}.</p>
          </div>
        ))}
      </div>
    </Section>
  </main>
);

const CustomDesign = () => (
  <main>
    <Section title="Custom-Made Designs" subtitle="Personalized">
      <p className="text-gray-700 max-w-3xl">Get furniture and finishes tailored to your space — handcrafted sofas, beds, wardrobes, tables, lighting and more. Enjoy perfect fit, materials of your choice, and a signature look.</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {["Sofa Set","Bed + Side Tables","Dining Set","Wardrobe","Study Table","TV Unit"].map((name,i)=>(
          <Card key={i} className="rounded-3xl">
            <CardHeader><CardTitle>{name}</CardTitle></CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                <li>Personalized dimensions</li>
                <li>Material & finish options</li>
                <li>Warranty & support</li>
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  </main>
);

const DesignBuild = () => (
  <main>
    <Section title="Design & Build" subtitle="End-to-end">
      <div className="grid md:grid-cols-3 gap-6">
        {[{ h:"Interior Design & Estimate", d:"Site visit, concept boards, layouts, and clear cost estimates." },
          { h:"Drawings & Approvals", d:"Detailed drawings, 3D views, and approval rounds." },
          { h:"In-house Production", d:"Own factory for quality control and faster timelines." },
          { h:"Material Delivery", d:"Coordinated logistics to deliver on time." },
          { h:"Execution on Site", d:"Skilled team ensures neat, safe installation." },
          { h:"Project Handover", d:"Snag checks, cleaning, and final documentation." }
        ].map((x,i)=> (
          <div key={i} className="rounded-3xl border bg-white p-5">
            <p className="font-medium text-gray-900">{x.h}</p>
            <p className="text-sm text-gray-600 mt-1">{x.d}</p>
          </div>
        ))}
      </div>
    </Section>
  </main>
);

const productCats = [
  { name: "Sofas & Armchairs" },
  { name: "Beds & Bedding Sets" },
  { name: "Chairs" },
  { name: "Tables & Side Tables" },
  { name: "Accessories" },
  { name: "Rugs" },
  { name: "Lighting" },
];
const Products = () => (
  <main>
    <Section title="Products" subtitle="Explore">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productCats.map((c, i) => (
          <div key={i} className="rounded-3xl border bg-white overflow-hidden">
            <div className="h-44 bg-gray-100 grid place-items-center">Image</div>
            <div className="p-4 flex items-center justify-between">
              <p className="font-medium text-gray-900">{c.name}</p>
              <Button variant="ghost" size="sm">View</Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  </main>
);

const Offers = () => (
  <main>
    <Section title="Offers & Packages" subtitle="Save more">
      <div className="grid md:grid-cols-3 gap-6">
        {[{h:"Full Flat Package",d:"End-to-end design + execution with bundled pricing."},
          {h:"3BHK Premium",d:"Custom furniture + modular kitchen + wardrobes."},
          {h:"4BHK Elite",d:"Luxury finishes, lighting, décor and concierge support."}
        ].map((x,i)=>(
          <Card key={i} className="rounded-3xl">
            <CardHeader><CardTitle>{x.h}</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{x.d}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-500">Festive extra discount*</div>
                <Button className="rounded-xl">Claim Offer</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  </main>
);

const Projects = () => (
  <main>
    <Section title="Projects" subtitle="Case studies">
      <div className="grid md:grid-cols-2 gap-6">
        {[1,2,3,4].map(i=> (
          <div key={i} className="rounded-3xl border bg-white overflow-hidden">
            <div className="h-56 bg-gray-100 grid place-items-center">Project Image</div>
            <div className="p-4">
              <p className="font-medium text-gray-900">2BHK Modern • Jaipur</p>
              <p className="text-sm text-gray-600">Delivered in 8 weeks • Budget friendly</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  </main>
);

const Gallery = () => (
  <main>
    <Section title="Gallery" subtitle="Photos & Videos">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({length:12}).map((_,i)=>(
          <div key={i} className="aspect-[4/3] rounded-2xl bg-gray-100 border" />
        ))}
      </div>
    </Section>
  </main>
);

const Contact = () => (
  <main id="contact">
    <Section title="Contact Us" subtitle="Let’s talk">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-gray-700">Have a project in mind? Send us a message or schedule a call. We typically respond within 24 hours.</p>
          <ul className="text-sm text-gray-600 space-y-2">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4"/> +91 98xx-xx-xxxx</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4"/> hello@sharmainterior.com</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4"/> Jaipur • Mumbai • Delhi</li>
          </ul>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className="rounded-3xl border bg-white p-6 shadow-sm space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="w-full rounded-xl border p-3" placeholder="Your name"/>
            <input type="email" className="w-full rounded-xl border p-3" placeholder="Email"/>
          </div>
          <input className="w-full rounded-xl border p-3" placeholder="Phone"/>
          <textarea className="w-full rounded-xl border p-3 h-28" placeholder="Tell us about your project"/>
          <div className="flex items-center gap-3">
            <Button type="submit" className="rounded-2xl">Send Message</Button>
            <Button type="button" variant="outline" className="rounded-2xl">Schedule a Call</Button>
          </div>
        </form>
      </div>
    </Section>
  </main>
);

const FAQ = () => (
  <main>
    <Section title="FAQs" subtitle="Good to know">
      <div className="space-y-4">
        {[{q:"How long does a project take?", a:"Typical 6–10 weeks depending on scope."},
          {q:"Do you provide free consultation?", a:"Yes, first consultation is free."},
          {q:"Do you work outside Jaipur?", a:"We serve major Indian cities; talk to us."},
          {q:"Warranty?", a:"Up to 5 years on select items."}
        ].map((x,i)=>(
          <details key={i} className="rounded-2xl border bg-white p-4">
            <summary className="font-medium text-gray-900 cursor-pointer">{x.q}</summary>
            <p className="text-sm text-gray-600 mt-2">{x.a}</p>
          </details>
        ))}
      </div>
    </Section>
  </main>
);

const Careers = () => (
  <main>
    <Section title="Careers" subtitle="Join our team">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-700">We’re always looking for talented designers, project managers, carpenters, and installers.</p>
          <ul className="mt-4 space-y-2 text-sm text-gray-600 list-disc pl-5">
            <li>Competitive pay</li>
            <li>Growth & learning</li>
            <li>Friendly culture</li>
          </ul>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className="rounded-3xl border bg-white p-6 shadow-sm space-y-4">
          <input className="w-full rounded-xl border p-3" placeholder="Full name"/>
          <input className="w-full rounded-xl border p-3" placeholder="Email or Phone"/>
          <input className="w-full rounded-xl border p-3" placeholder="Role (e.g., Designer)"/>
          <textarea className="w-full rounded-xl border p-3 h-28" placeholder="Message / Portfolio link"/>
          <Button className="rounded-2xl">Apply Now</Button>
        </form>
      </div>
    </Section>
  </main>
);

const Refer = () => (
  <main>
    <Section title="Refer a Friend" subtitle="Earn rewards">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-700">Refer a friend and earn cashback when they confirm a project with us.</p>
          <ul className="mt-4 space-y-2 text-sm text-gray-600 list-disc pl-5">
            <li>Instant acknowledgement</li>
            <li>Reward after project confirmation</li>
            <li>Transparent terms & tracking</li>
          </ul>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className="rounded-3xl border bg-white p-6 shadow-sm space-y-4">
          <input className="w-full rounded-xl border p-3" placeholder="Your name"/>
          <input className="w-full rounded-xl border p-3" placeholder="Your email/phone"/>
          <input className="w-full rounded-xl border p-3" placeholder="Friend’s name"/>
          <input className="w-full rounded-xl border p-3" placeholder="Friend’s email/phone"/>
          <Button className="rounded-2xl">Submit Referral</Button>
        </form>
      </div>
    </Section>
  </main>
);

const CSR = () => (
  <main>
    <Section title="Corporate Social Responsibility" subtitle="Our promise">
      <div className="grid md:grid-cols-2 gap-6">
        {["Education & Skill Development","Health & Wellness","Environmental Sustainability","Community Support"].map((h,i)=>(
          <div key={i} className="rounded-3xl border bg-white p-5">
            <p className="font-medium text-gray-900">{h}</p>
            <p className="text-sm text-gray-600 mt-1">We invest in programs that uplift communities and the environment.</p>
          </div>
        ))}
      </div>
    </Section>
  </main>
);

const AnnualReturn = () => (
  <main>
    <Section title="Annual Return" subtitle="Year in review">
      <div className="grid md:grid-cols-4 gap-4">
        {["Projects Completed","Customer Satisfaction","Average Timeline","Cities Served"].map((m,i)=>(
          <div key={i} className="rounded-2xl border bg-white p-4">
            <p className="text-xs text-gray-500">{m}</p>
            <p className="text-2xl font-semibold text-gray-900">{[120, "4.9/5", "8 weeks", 7][i]}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-3xl border bg-white p-6">
        <p className="text-sm text-gray-600">Download detailed report (PDF) — coming soon.</p>
      </div>
    </Section>
  </main>
);

const Sitemap = () => (
  <main>
    <Section title="Sitemap" subtitle="Find us">
      <div className="rounded-3xl border bg-white p-6">
        <div className="aspect-video w-full rounded-2xl bg-gray-100 grid place-items-center">Map Placeholder</div>
        <div className="mt-4 grid md:grid-cols-3 gap-4 text-sm text-gray-700">
          {navItems.map(n => (
            <Link key={n.to} to={n.to} className="hover:text-gray-900">{n.label}</Link>
          ))}
        </div>
      </div>
    </Section>
  </main>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-dvh bg-white text-gray-800">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/company" element={<Company/>} />
          <Route path="/custom" element={<CustomDesign/>} />
          <Route path="/design-build" element={<DesignBuild/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/offers" element={<Offers/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/careers" element={<Careers/>} />
          <Route path="/refer" element={<Refer/>} />
          <Route path="/csr" element={<CSR/>} />
          <Route path="/annual-return" element={<AnnualReturn/>} />
          <Route path="/sitemap" element={<Sitemap/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

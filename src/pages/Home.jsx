import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, PlayCircle } from "lucide-react";
import { Button, Card, CardHeader, CardTitle, CardContent, Pill } from "../components/ui";
import { Section } from "../components/layout";

const highlights = [
  { title: "Sharma Interior & Decoration", desc: "Transforming spaces into dream homes — design, production, and execution under one roof." },
  { title: "100% Trusted Brand", desc: "Timely delivery, transparent pricing, and after-sales service you can count on." },
  { title: "Loved by Our Clients", desc: '"They delivered exactly what we imagined — and more." — A Happy Client' },
];

const Home = () => (
  <main>
    {/* Hero */}
    <div className="relative bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Pill>Welcome to Sharma Interior</Pill>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
              Bespoke Interiors. Quality Craft. Timely Execution.
            </h1>
            <p className="mt-4 text-gray-600 max-w-xl">
              Full-service interior studio offering consultation, custom furniture, in-house production and on-time project delivery.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact"><Button className="rounded-2xl">Get Free Consultation</Button></Link>
              <Link to="/projects"><Button variant="outline" className="rounded-2xl">View Projects</Button></Link>
            </div>
            <div className="mt-6 flex gap-3 flex-wrap">
              <Pill>100% Trusted</Pill>
              <Pill>Own Production</Pill>
              <Pill>After-Sales Support</Pill>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="aspect-video rounded-3xl bg-white border shadow-sm grid place-items-center"
            >
              <PlayCircle className="w-14 h-14" />
            </motion.div>
            <div className="absolute -bottom-6 -right-6 bg-amber-50 border border-amber-200 rounded-3xl p-4 shadow">
              <p className="text-xs text-amber-900">Client Rating</p>
              <p className="text-lg font-semibold text-amber-900">4.9/5</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Highlights */}
    <Section subtitle="Highlights" title="Why Families Trust Us">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {highlights.map((s, i) => (
          <Card key={i} className="rounded-3xl">
            <CardHeader><CardTitle className="text-gray-900">{s.title}</CardTitle></CardHeader>
            <CardContent><p className="text-gray-600">{s.desc}</p></CardContent>
          </Card>
        ))}
      </div>
    </Section>

    {/* Featured Work */}
    <Section
      subtitle="Showcase"
      title="Featured Work"
      headerExtra={
        <Link to="/gallery" className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
          See all <ChevronRight className="w-4 h-4" />
        </Link>
      }
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
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

    {/* CTA Banner */}
    <Section className="pt-0">
      <div className="rounded-3xl border bg-gradient-to-r from-white to-amber-50 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Let's design your dream space</h3>
          <p className="text-gray-600">Book a free consultation. Get designs, estimates, and timelines quickly.</p>
        </div>
        <Link to="/contact"><Button className="rounded-2xl">Schedule a Call</Button></Link>
      </div>
    </Section>
  </main>
);

export default Home;

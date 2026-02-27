import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "../components/ui";
import { Section } from "../components/layout";

const Contact = () => (
  <main id="contact">
    <Section title="Contact Us" subtitle="Let's talk">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-gray-700">
            Have a project in mind? Send us a message or schedule a call. We typically respond within 24 hours.
          </p>
          <ul className="text-sm text-gray-600 space-y-2">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 98xx-xx-xxxx</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@sharmainterior.com</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Jaipur • Mumbai • Delhi</li>
          </ul>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl border bg-white p-6 shadow-sm space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="w-full rounded-xl border p-3" placeholder="Your name" />
            <input type="email" className="w-full rounded-xl border p-3" placeholder="Email" />
          </div>
          <input className="w-full rounded-xl border p-3" placeholder="Phone" />
          <textarea className="w-full rounded-xl border p-3 h-28" placeholder="Tell us about your project" />
          <div className="flex items-center gap-3">
            <Button type="submit" className="rounded-2xl">Send Message</Button>
            <Button type="button" variant="outline" className="rounded-2xl">Schedule a Call</Button>
          </div>
        </form>
      </div>
    </Section>
  </main>
);

export default Contact;

import { Button } from "../components/ui";
import { Section } from "../components/layout";

const Careers = () => (
  <main>
    <Section title="Careers" subtitle="Join our team">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-700">We're always looking for talented designers, project managers, carpenters, and installers.</p>
          <ul className="mt-4 space-y-2 text-sm text-gray-600 list-disc pl-5">
            <li>Competitive pay</li>
            <li>Growth &amp; learning</li>
            <li>Friendly culture</li>
          </ul>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl border bg-white p-6 shadow-sm space-y-4">
          <input className="w-full rounded-xl border p-3" placeholder="Full name" />
          <input className="w-full rounded-xl border p-3" placeholder="Email or Phone" />
          <input className="w-full rounded-xl border p-3" placeholder="Role (e.g., Designer)" />
          <textarea className="w-full rounded-xl border p-3 h-28" placeholder="Message / Portfolio link" />
          <Button className="rounded-2xl">Apply Now</Button>
        </form>
      </div>
    </Section>
  </main>
);

export default Careers;

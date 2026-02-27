import { Section } from "../components/layout";

const faqs = [
  { q: "How long does a project take?", a: "Typical 6–10 weeks depending on scope." },
  { q: "Do you provide free consultation?", a: "Yes, first consultation is free." },
  { q: "Do you work outside Jaipur?", a: "We serve major Indian cities; talk to us." },
  { q: "Warranty?", a: "Up to 5 years on select items." },
];

const FAQ = () => (
  <main>
    <Section title="FAQs" subtitle="Good to know">
      <div className="space-y-4">
        {faqs.map((x, i) => (
          <details key={i} className="rounded-2xl border bg-white p-4">
            <summary className="font-medium text-gray-900 cursor-pointer">{x.q}</summary>
            <p className="text-sm text-gray-600 mt-2">{x.a}</p>
          </details>
        ))}
      </div>
    </Section>
  </main>
);

export default FAQ;

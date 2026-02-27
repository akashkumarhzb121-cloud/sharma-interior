import { Section } from "../components/layout";

const initiatives = [
  "Education & Skill Development",
  "Health & Wellness",
  "Environmental Sustainability",
  "Community Support",
];

const CSR = () => (
  <main>
    <Section title="Corporate Social Responsibility" subtitle="Our promise">
      <div className="grid md:grid-cols-2 gap-6">
        {initiatives.map((h, i) => (
          <div key={i} className="rounded-3xl border bg-white p-5">
            <p className="font-medium text-gray-900">{h}</p>
            <p className="text-sm text-gray-600 mt-1">We invest in programs that uplift communities and the environment.</p>
          </div>
        ))}
      </div>
    </Section>
  </main>
);

export default CSR;

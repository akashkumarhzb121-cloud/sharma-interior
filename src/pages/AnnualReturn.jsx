import { Section } from "../components/layout";

const metrics = [
  { label: "Projects Completed", value: 120 },
  { label: "Customer Satisfaction", value: "4.9/5" },
  { label: "Average Timeline", value: "8 weeks" },
  { label: "Cities Served", value: 7 },
];

const AnnualReturn = () => (
  <main>
    <Section title="Annual Return" subtitle="Year in review">
      <div className="grid md:grid-cols-4 gap-4">
        {metrics.map((m, i) => (
          <div key={i} className="rounded-2xl border bg-white p-4">
            <p className="text-xs text-gray-500">{m.label}</p>
            <p className="text-2xl font-semibold text-gray-900">{m.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-3xl border bg-white p-6">
        <p className="text-sm text-gray-600">Download detailed report (PDF) — coming soon.</p>
      </div>
    </Section>
  </main>
);

export default AnnualReturn;

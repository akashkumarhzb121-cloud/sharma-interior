import { Section } from "../components/layout";

const services = [
  { h: "Interior Design & Estimate", d: "Site visit, concept boards, layouts, and clear cost estimates." },
  { h: "Drawings & Approvals", d: "Detailed drawings, 3D views, and approval rounds." },
  { h: "In-house Production", d: "Own factory for quality control and faster timelines." },
  { h: "Material Delivery", d: "Coordinated logistics to deliver on time." },
  { h: "Execution on Site", d: "Skilled team ensures neat, safe installation." },
  { h: "Project Handover", d: "Snag checks, cleaning, and final documentation." },
];

const DesignBuild = () => (
  <main>
    <Section title="Design & Build" subtitle="End-to-end">
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((x, i) => (
          <div key={i} className="rounded-3xl border bg-white p-5">
            <p className="font-medium text-gray-900">{x.h}</p>
            <p className="text-sm text-gray-600 mt-1">{x.d}</p>
          </div>
        ))}
      </div>
    </Section>
  </main>
);

export default DesignBuild;

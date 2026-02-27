import { CheckCircle } from "lucide-react";
import { Section } from "../components/layout";

const steps = ["Consultation", "Design", "Production", "Execution", "After Sales"];

const Company = () => (
  <main>
    <Section title="About Sharma Interior & Decoration" subtitle="Company">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-gray-700">
            We are a full-service interior design studio offering consultation, bespoke design, in-house production,
            and on-time execution with dedicated after-sales service.
          </p>
          <ul className="space-y-2">
            {["Consultation", "Interior Design", "Production", "Execution", "After-Sales Service"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 mt-0.5" /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border bg-white h-64 grid place-items-center">Team Photo</div>
      </div>
    </Section>

    <Section title="Our Workflow" subtitle="Process">
      <div className="grid md:grid-cols-5 gap-4">
        {steps.map((step, idx) => (
          <div key={step} className="rounded-2xl border bg-white p-4">
            <p className="text-xs text-gray-500">Step {idx + 1}</p>
            <p className="font-medium text-gray-900">{step}</p>
            <p className="text-sm text-gray-600 mt-1">
              Short description of how we handle {step.toLowerCase()}.
            </p>
          </div>
        ))}
      </div>
    </Section>
  </main>
);

export default Company;

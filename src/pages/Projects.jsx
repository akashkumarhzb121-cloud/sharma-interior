import { Section } from "../components/layout";

const Projects = () => (
  <main>
    <Section title="Projects" subtitle="Case studies">
      <div className="grid md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
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

export default Projects;

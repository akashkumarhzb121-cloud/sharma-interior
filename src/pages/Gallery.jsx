import { Section } from "../components/layout";

const Gallery = () => (
  <main>
    <Section title="Gallery" subtitle="Photos & Videos">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="aspect-[4/3] rounded-2xl bg-gray-100 border" />
        ))}
      </div>
    </Section>
  </main>
);

export default Gallery;

import { Card, CardHeader, CardTitle, CardContent } from "../components/ui";
import { Section } from "../components/layout";

const items = ["Sofa Set", "Bed + Side Tables", "Dining Set", "Wardrobe", "Study Table", "TV Unit"];

const CustomDesign = () => (
  <main>
    <Section title="Custom-Made Designs" subtitle="Personalized">
      <p className="text-gray-700 max-w-3xl">
        Get furniture and finishes tailored to your space — handcrafted sofas, beds, wardrobes, tables, lighting and more.
        Enjoy perfect fit, materials of your choice, and a signature look.
      </p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((name, i) => (
          <Card key={i} className="rounded-3xl">
            <CardHeader><CardTitle>{name}</CardTitle></CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                <li>Personalized dimensions</li>
                <li>Material &amp; finish options</li>
                <li>Warranty &amp; support</li>
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  </main>
);

export default CustomDesign;

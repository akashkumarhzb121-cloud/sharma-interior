import { Button } from "../components/ui";
import { Section } from "../components/layout";

const productCats = [
  { name: "Sofas & Armchairs" },
  { name: "Beds & Bedding Sets" },
  { name: "Chairs" },
  { name: "Tables & Side Tables" },
  { name: "Accessories" },
  { name: "Rugs" },
  { name: "Lighting" },
];

const Products = () => (
  <main>
    <Section title="Products" subtitle="Explore">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productCats.map((c, i) => (
          <div key={i} className="rounded-3xl border bg-white overflow-hidden">
            <div className="h-44 bg-gray-100 grid place-items-center">Image</div>
            <div className="p-4 flex items-center justify-between">
              <p className="font-medium text-gray-900">{c.name}</p>
              <Button variant="ghost" size="sm">View</Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  </main>
);

export default Products;

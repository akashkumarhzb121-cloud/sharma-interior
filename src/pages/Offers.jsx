import { Button, Card, CardHeader, CardTitle, CardContent } from "../components/ui";
import { Section } from "../components/layout";

const packages = [
  { h: "Full Flat Package", d: "End-to-end design + execution with bundled pricing." },
  { h: "3BHK Premium", d: "Custom furniture + modular kitchen + wardrobes." },
  { h: "4BHK Elite", d: "Luxury finishes, lighting, décor and concierge support." },
];

const Offers = () => (
  <main>
    <Section title="Offers & Packages" subtitle="Save more">
      <div className="grid md:grid-cols-3 gap-6">
        {packages.map((x, i) => (
          <Card key={i} className="rounded-3xl">
            <CardHeader><CardTitle>{x.h}</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{x.d}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-500">Festive extra discount*</div>
                <Button className="rounded-xl">Claim Offer</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  </main>
);

export default Offers;

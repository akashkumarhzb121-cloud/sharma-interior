import { Button } from "../components/ui";
import { Section } from "../components/layout";

const Refer = () => (
  <main>
    <Section title="Refer a Friend" subtitle="Earn rewards">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-700">Refer a friend and earn cashback when they confirm a project with us.</p>
          <ul className="mt-4 space-y-2 text-sm text-gray-600 list-disc pl-5">
            <li>Instant acknowledgement</li>
            <li>Reward after project confirmation</li>
            <li>Transparent terms &amp; tracking</li>
          </ul>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl border bg-white p-6 shadow-sm space-y-4">
          <input className="w-full rounded-xl border p-3" placeholder="Your name" />
          <input className="w-full rounded-xl border p-3" placeholder="Your email/phone" />
          <input className="w-full rounded-xl border p-3" placeholder="Friend's name" />
          <input className="w-full rounded-xl border p-3" placeholder="Friend's email/phone" />
          <Button className="rounded-2xl">Submit Referral</Button>
        </form>
      </div>
    </Section>
  </main>
);

export default Refer;

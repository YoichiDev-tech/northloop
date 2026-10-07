import type { Metadata } from "next";
import Link from "next/link";
import { Wrench, Building2, Truck, Headphones } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "How Northloop helps field service, multi-site operations, logistics, and support teams run cleaner days.",
};

// Solutions — I map the product to the kinds of teams we actually serve
// so a visitor can recognise themselves quickly.

const solutions = [
  {
    icon: Wrench,
    title: "Field service",
    body: "Installs, repairs, and maintenance. Keep the board honest when jobs move, and keep customers informed without another phone call.",
  },
  {
    icon: Building2,
    title: "Multi-site operations",
    body: "Several locations, one view of what is open and who is covering. Less “who owns this?” between sites.",
  },
  {
    icon: Truck,
    title: "Logistics & delivery",
    body: "Routes and drops that change during the day. Status that the office and the driver share without WhatsApp chaos.",
  },
  {
    icon: Headphones,
    title: "Support & success",
    body: "Tickets and follow-ups that need a clear owner. Simple handoffs when something leaves the support queue.",
  },
];

export default function SolutionsPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-ink-200 bg-ink-50">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wider text-signal-700">
            Solutions
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
            Built for teams that leave the desk
          </h1>
          <p className="mt-4 text-ink-600">
            Northloop is a good fit when the work lives between the office and
            the field — and when spreadsheets have started to break under volume.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="interactive-card rounded-2xl border border-ink-200 bg-ink-50 p-6 sm:p-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-signal-700 shadow-sm">
                <s.icon className="h-5 w-5" />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-ink-950">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-ink-600">
            Not sure if you fit? Tell us how the day runs — we will be direct.
          </p>
          <Link
            href="/contact"
            className="interactive-button mt-4 inline-flex rounded-lg bg-signal-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-signal-700"
          >
            Talk to us
          </Link>
        </div>
      </section>
    </div>
  );
}

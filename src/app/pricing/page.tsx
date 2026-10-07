import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple Northloop pricing for growing service and field teams. Monthly or annual. No long contracts.",
};

// Pricing — I keep plans few and the language concrete so finance and
// ops can agree without a sales call just to understand the bill.

const plans = [
  {
    name: "Starter",
    price: "£89",
    period: "/ month",
    blurb: "For small teams getting off spreadsheets.",
    features: [
      "Up to 8 users",
      "Live job board",
      "Customer update templates",
      "Week schedule view",
      "Email support",
    ],
    cta: "Start with a demo",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "£179",
    period: "/ month",
    blurb: "For teams with multiple sites or higher volume.",
    features: [
      "Up to 25 users",
      "Everything in Starter",
      "Roles & permissions",
      "Reporting exports",
      "Priority support",
      "Onboarding call included",
    ],
    cta: "Book a demo",
    highlighted: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "",
    blurb: "For larger operations with specific workflows.",
    features: [
      "Unlimited users (fair use)",
      "Everything in Growth",
      "Custom fields & workflows",
      "SSO option",
      "Dedicated success contact",
    ],
    cta: "Talk to us",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <div className="bg-ink-50">
      <section className="border-b border-ink-200 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wider text-signal-700">
            Pricing
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
            Clear plans. No surprises.
          </h1>
          <p className="mt-4 text-ink-600">
            Monthly by default. Annual discounts available. Cancel any time —
            we do not lock you into multi-year contracts.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`interactive-card flex flex-col rounded-2xl border p-6 shadow-sm sm:p-8 ${
                plan.highlighted
                  ? "border-signal-300 bg-white ring-2 ring-signal-500/30"
                  : "border-ink-200 bg-white"
              }`}
            >
              {plan.highlighted && (
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-signal-700">
                  Most teams choose this
                </p>
              )}
              <h2 className="text-lg font-semibold text-ink-950">{plan.name}</h2>
              <p className="mt-1 text-sm text-ink-600">{plan.blurb}</p>
              <p className="mt-5 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-ink-950">{plan.price}</span>
                {plan.period && (
                  <span className="text-sm text-ink-500">{plan.period}</span>
                )}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-ink-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`interactive-button mt-8 block rounded-lg px-4 py-2.5 text-center text-sm font-semibold ${
                  plan.highlighted
                    ? "bg-signal-600 text-white hover:bg-signal-700"
                    : "border border-ink-200 bg-ink-50 text-ink-900 hover:bg-ink-100"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-ink-500">
          Prices exclude VAT. Need a short pilot? Ask on the demo — we can usually
          arrange one.
        </p>
      </section>
    </div>
  );
}

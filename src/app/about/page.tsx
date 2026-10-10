import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "OpsRook is an independent software company based in Manchester. We build operational tools for service and field teams.",
};

// About — I write as the company so the page feels owned by the product
// team, not by a marketing agency.

export default function AboutPage() {
  return (
    <div className="bg-ink-50">
      <section className="border-b border-ink-200 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wider text-signal-700">
            About
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
            Independent software. Built in the UK.
          </h1>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-700">
            <p>
              OpsRook started because too many service businesses were running
              the day on spreadsheets, group chats, and memory. The tools on the
              market were either too light or required a project the size of a
              second business.
            </p>
            <p>
              We are a small product company. We design, build, and support
              OpsRook ourselves. No resellers, no white-label maze — if
              something is wrong, you talk to people who wrote the product.
            </p>
            <p>
              Our focus is narrow on purpose: operational visibility and
              communication for teams that leave the desk. We say no to features
              that would dilute that.
            </p>
            <p>
              We are based in Manchester and work remote-first across the UK.
              {site.location}.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/product"
              className="interactive-button rounded-lg bg-signal-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-signal-700"
            >
              See the product
            </Link>
            <Link
              href="/contact"
              className="interactive-button rounded-lg border border-ink-200 bg-white px-5 py-2.5 text-sm font-semibold text-ink-800 hover:bg-ink-50"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="interactive-card rounded-2xl border border-ink-200 bg-white p-6">
            <p className="text-3xl font-bold text-signal-700">2023</p>
            <p className="mt-2 text-sm font-medium text-ink-900">Founded</p>
            <p className="mt-1 text-sm text-ink-600">
              First customers were local service firms tired of spreadsheet chaos.
            </p>
          </div>
          <div className="interactive-card rounded-2xl border border-ink-200 bg-white p-6">
            <p className="text-3xl font-bold text-signal-700">UK</p>
            <p className="mt-2 text-sm font-medium text-ink-900">Based</p>
            <p className="mt-1 text-sm text-ink-600">
              Data and support stay in the UK. We understand how local teams work.
            </p>
          </div>
          <div className="interactive-card rounded-2xl border border-ink-200 bg-white p-6">
            <p className="text-3xl font-bold text-signal-700">1</p>
            <p className="mt-2 text-sm font-medium text-ink-900">Product</p>
            <p className="mt-1 text-sm text-ink-600">
              We build one product well. No side projects competing for attention.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

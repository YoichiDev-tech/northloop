import type { Metadata } from "next";
import Link from "next/link";
import {
  LayoutDashboard,
  MessageSquare,
  CalendarDays,
  BarChart3,
  Shield,
  Smartphone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Northloop product overview — live job board, customer updates, team schedule, and simple reporting for service teams.",
};

// Product page — I describe capabilities in plain language so an ops lead
// can map them to their day without reading a feature matrix.

const blocks = [
  {
    icon: LayoutDashboard,
    title: "Live job board",
    body: "Every open job in one view: status, owner, priority, and the next action. Drag to reassign. Filter by team, site, or customer.",
  },
  {
    icon: MessageSquare,
    title: "Customer updates",
    body: "Templates for “on the way”, “complete”, and “parts ordered”. Send from the job card. History stays attached to the customer.",
  },
  {
    icon: CalendarDays,
    title: "Team schedule",
    body: "Week and day views that field and office share. Conflicts show up before they become a problem. Mobile-friendly for the van.",
  },
  {
    icon: BarChart3,
    title: "Simple reporting",
    body: "Jobs closed, average time to complete, and where work is stuck. Export when you need it — no BI project required.",
  },
  {
    icon: Shield,
    title: "Roles & access",
    body: "Office, field, and admin roles so people only see what they need. Audit log for the changes that matter.",
  },
  {
    icon: Smartphone,
    title: "Works on the phone",
    body: "Built for small screens first. Update a job from site without waiting for a laptop or a patchy desktop app.",
  },
];

export default function ProductPage() {
  return (
    <div className="bg-ink-50">
      <section className="border-b border-ink-200 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wider text-signal-700">
            Product
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
            Everything the day needs in one product
          </h1>
          <p className="mt-4 text-ink-600">
            Northloop is intentionally focused. We do not try to replace your
            entire stack — we replace the spreadsheets and group chats that
            slow the team down.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blocks.map((b) => (
            <div
              key={b.title}
              className="interactive-card rounded-2xl border border-ink-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-signal-50 text-signal-700">
                <b.icon className="h-5 w-5" />
              </div>
              <h2 className="mt-4 text-lg font-semibold text-ink-950">{b.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{b.body}</p>
            </div>
          ))}
        </div>

        <div className="interactive-card mt-14 rounded-2xl border border-ink-200 bg-ink-950 px-6 py-10 text-center sm:px-10">
          <h2 className="text-xl font-semibold text-white sm:text-2xl">
            Prefer to see it live?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-ink-300">
            We run short demos on your workflows. No slide deck of features you
            will never use.
          </p>
          <Link
            href="/contact"
            className="interactive-button mt-6 inline-flex rounded-lg bg-signal-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-signal-700"
          >
            Book a demo
          </Link>
        </div>
      </section>
    </div>
  );
}

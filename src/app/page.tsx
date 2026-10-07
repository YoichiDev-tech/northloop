import Link from "next/link";
import {
  ArrowRight,
  LayoutDashboard,
  MessageSquare,
  CalendarDays,
  BarChart3,
} from "lucide-react";
import { site, features } from "@/lib/site";

// Home — I lead with the problem and one clear next step so a busy
// operations lead can decide in seconds whether this is relevant.

const icons = [LayoutDashboard, MessageSquare, CalendarDays, BarChart3];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-ink-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-signal-700">
              For service & field teams
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink-950 sm:text-5xl">
              One place to run the day
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-600 sm:text-lg">
              {site.name} gives growing teams a live view of jobs, schedules, and
              customer updates — without another spreadsheet or a six-month
              implementation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="interactive-button inline-flex items-center gap-2 rounded-lg bg-signal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-signal-700"
              >
                Book a demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/product"
                className="inline-flex items-center gap-2 rounded-lg border border-ink-200 bg-white px-5 py-2.5 text-sm font-semibold text-ink-800 transition hover:bg-ink-50"
              >
                See the product
              </Link>
            </div>
            <p className="mt-6 text-sm text-ink-500">
              No long contracts. Demo in 20 minutes. Built in the UK.
            </p>
          </div>

          {/* I use a product-style panel placeholder so the layout is complete
              before real screenshots are ready. */}
          <div className="interactive-card relative aspect-[5/4] overflow-hidden rounded-2xl border border-ink-200 bg-ink-950 shadow-xl">
            <div className="absolute inset-0 p-5 sm:p-6">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
                <span className="ml-3 text-xs text-ink-400">northloop · today</span>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {["Open jobs", "In progress", "Waiting on customer", "Done today"].map(
                  (label, i) => (
                    <div
                      key={label}
                      className="interactive-card rounded-xl border border-ink-800 bg-ink-900/80 p-4"
                    >
                      <p className="text-xs text-ink-400">{label}</p>
                      <p className="mt-1 text-2xl font-semibold text-white">
                        {[12, 7, 3, 9][i]}
                      </p>
                    </div>
                  )
                )}
              </div>
              <div className="interactive-card mt-4 rounded-xl border border-ink-800 bg-ink-900/60 p-4">
                <p className="text-xs font-medium text-ink-400">Next up</p>
                <ul className="mt-2 space-y-2 text-sm text-ink-200">
                  <li className="flex justify-between gap-2">
                    <span>Install — Riverside Road</span>
                    <span className="text-signal-400">10:30</span>
                  </li>
                  <li className="flex justify-between gap-2">
                    <span>Service call — Oak Mill</span>
                    <span className="text-signal-400">13:00</span>
                  </li>
                  <li className="flex justify-between gap-2">
                    <span>Follow-up — City Gym</span>
                    <span className="text-ink-500">Tomorrow</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-ink-200 bg-ink-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-ink-950 sm:text-3xl">
              Built for how the day actually runs
            </h2>
            <p className="mt-3 text-ink-600">
              Most tools are either too light or too heavy. We sit in the middle:
              enough structure to stop chaos, simple enough that the team will use it.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={f.title}
                  className="interactive-card rounded-2xl border border-ink-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-signal-50 text-signal-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-ink-950">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{f.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-ink-950 sm:text-3xl">
            See it with your own jobs
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-ink-600">
            A short demo on your workflows — not a generic slideshow. We will tell
            you quickly if Northloop is the right fit.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="interactive-button inline-flex items-center rounded-lg bg-signal-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-signal-700"
            >
              Book a demo
            </Link>
            <Link
              href="/pricing"
              className="interactive-button inline-flex items-center rounded-lg border border-ink-200 bg-white px-6 py-2.5 text-sm font-semibold text-ink-800 hover:bg-ink-50"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

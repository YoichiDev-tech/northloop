import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import DemoForm from "@/components/DemoForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a Northloop demo or send a message. We reply within one working day.",
};

export default function ContactPage() {
  return (
    <div className="bg-ink-50">
      <section className="border-b border-ink-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wider text-signal-700">
            Contact
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
            Book a demo
          </h1>
          <p className="mt-4 max-w-xl text-ink-600">
            Tell us how your team runs the day. We will reply with a short
            calendar link and a few questions so the demo stays useful.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="interactive-card rounded-2xl border border-ink-200 bg-white p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-ink-950">Request a demo</h2>
              <p className="mt-1 text-sm text-ink-500">
                Usually within one working day.
              </p>
              <div className="mt-6">
                <DemoForm />
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-2">
            <div className="interactive-card rounded-2xl border border-ink-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                Email
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-3 flex items-center gap-2 font-medium text-ink-900 hover:text-signal-700"
              >
                <Mail className="h-5 w-5 text-signal-600" />
                {site.email}
              </a>
            </div>

            <div className="interactive-card rounded-2xl border border-ink-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                Based
              </p>
              <div className="mt-3 flex gap-2 text-sm text-ink-700">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-signal-600" />
                <span>{site.location}</span>
              </div>
            </div>

            <div className="interactive-card rounded-2xl bg-ink-950 p-6 text-ink-100">
              <p className="font-semibold text-white">What happens next</p>
              <ol className="mt-3 list-decimal space-y-2 pl-4 text-sm text-ink-300">
                <li>We reply with a calendar link.</li>
                <li>20–30 minute walkthrough on your workflows.</li>
                <li>Clear yes / no on fit — no pressure pitch.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

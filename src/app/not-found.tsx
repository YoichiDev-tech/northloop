import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="bg-ink-50 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-signal-700">
          404 · Page not found
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
          This page has moved on.
        </h1>
        <p className="mt-4 text-ink-600">
          The link may be out of date, or the page may no longer be available.
        </p>
        <Link
          href="/"
          className="interactive-button mt-8 inline-flex items-center gap-2 rounded-lg bg-signal-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-signal-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>
    </section>
  );
}

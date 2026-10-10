"use client";

import { useState, FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle, ChevronDown } from "lucide-react";

// I post to a server route so write keys never live in the browser.
type Status = "idle" | "loading" | "success" | "error";

export default function DemoForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company") || undefined,
          team_size: data.get("team_size") || undefined,
          message: data.get("message"),
          website: data.get("website"),
          source: "website-demo",
        }),
      });

      const json: { error?: string } = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Unable to send. Please email us instead."
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-ink-200 bg-ink-50 p-8 text-center"
      >
        <CheckCircle2 className="mx-auto h-12 w-12 text-signal-600" />
        <h3 className="mt-4 text-xl font-semibold text-ink-950">Request received</h3>
        <p className="mt-2 text-sm text-ink-600">
          Thanks — we usually reply within one working day with a short calendar
          link and a few questions so the demo stays useful.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-signal-700 underline underline-offset-2 hover:text-signal-900"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div
        aria-hidden="true"
        className="absolute -left-[10000px] h-px w-px overflow-hidden"
      >
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink-800">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={120}
            autoComplete="name"
            className="mt-1.5 w-full rounded-xl border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-950 shadow-sm placeholder:text-ink-400 focus:border-signal-500 focus:outline-none focus:ring-1 focus:ring-signal-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink-800">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            className="mt-1.5 w-full rounded-xl border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-950 shadow-sm placeholder:text-ink-400 focus:border-signal-500 focus:outline-none focus:ring-1 focus:ring-signal-500"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-ink-800">
            Company <span className="font-normal text-ink-500">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            maxLength={160}
            autoComplete="organization"
            className="mt-1.5 w-full rounded-xl border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-950 shadow-sm placeholder:text-ink-400 focus:border-signal-500 focus:outline-none focus:ring-1 focus:ring-signal-500"
            placeholder="Company name"
          />
        </div>
        <div>
          <label htmlFor="team_size" className="block text-sm font-medium text-ink-800">
            Team size
          </label>
          <div className="relative mt-1.5">
            <select
              id="team_size"
              name="team_size"
              defaultValue=""
              className="w-full appearance-none rounded-xl border border-ink-200 bg-white py-2.5 pl-3.5 pr-10 text-sm text-ink-950 shadow-sm focus:border-signal-500 focus:outline-none focus:ring-1 focus:ring-signal-500"
            >
              <option value="" disabled>
                Select…
              </option>
              <option value="1-5">1–5</option>
              <option value="6-15">6–15</option>
              <option value="16-40">16–40</option>
              <option value="41+">41+</option>
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500"
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink-800">
          What are you trying to improve?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          maxLength={5000}
          className="mt-1.5 w-full rounded-xl border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-950 shadow-sm placeholder:text-ink-400 focus:border-signal-500 focus:outline-none focus:ring-1 focus:ring-signal-500"
          placeholder="Scheduling, customer updates, job visibility…"
        />
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <p>{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="interactive-button inline-flex w-full items-center justify-center gap-2 rounded-lg bg-signal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-signal-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          "Request a demo"
        )}
      </button>
    </form>
  );
}

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { site, navLinks } from "@/lib/site";

// I put the essentials in the footer so product and company details stay
// one scroll away on every page.
export default function Footer() {
  return (
    <footer className="border-t border-ink-800 bg-ink-950 text-ink-200">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="text-lg font-semibold text-white">{site.name}</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-400">
              {site.tagline}. Built for service and field teams that need one
              place to run the day.
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-ink-400">
              <MapPin className="h-4 w-4 shrink-0 text-signal-400" />
              {site.location}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
              Product
            </p>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-300 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
              Contact
            </p>
            <ul className="mt-3 space-y-3 text-sm text-ink-300">
              <li className="flex gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-signal-400" />
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-flex rounded-lg bg-signal-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-signal-700"
                >
                  Book a demo
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-ink-800 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-ink-500">
            Site built by{" "}
            <a
              href="https://prismwavestudio.com"
              className="text-signal-400 hover:text-signal-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              PrismWave Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

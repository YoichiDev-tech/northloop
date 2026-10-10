// I keep all shared product copy and constants in one place so the
// site stays consistent and easy to update when the product evolves.

export const site = {
  name: "OpsRook",
  tagline: "Operational software for teams that keep work moving",
  description:
    "OpsRook helps growing service and field teams run jobs, updates, and customer communication from one place.",
  location: "Fictional case study · UK",
  email: "hello@opsrook.example",
  phone: "+44 161 555 0190",
  domain: "opsrook.example",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/solutions", label: "Solutions" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const features = [
  {
    title: "Live job board",
    body: "See every open job, who owns it, and what is blocked — without chasing spreadsheets.",
  },
  {
    title: "Customer updates",
    body: "Send status messages your customers actually open. Templates that stay on-brand.",
  },
  {
    title: "Team schedule",
    body: "Plan the week, reassign in one click, and keep field and office in the same loop.",
  },
  {
    title: "Simple reporting",
    body: "Know what shipped, what slipped, and where time goes — without a BI project.",
  },
];

import Link from "next/link";
import { Eye } from "lucide-react";

const PRODUCT_LINKS = [
  { href: "/#product", label: "Custom AI" },
  { href: "/#product", label: "AI agents" },
  { href: "/#product", label: "Software" },
  { href: "/analyzer", label: "Operations analyzer" },
];

const CURRENT_YEAR = 2026;

const COMPANY_LINKS = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#who-its-for", label: "Who it's for" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="col-span-1 sm:col-span-2 md:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold tracking-tight"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-accent text-white">
                <Eye className="h-4 w-4" strokeWidth={2.5} />
              </span>
              PerceiveX
            </Link>
            <p className="mt-4 max-w-sm text-sm text-foreground-muted">
              Custom AI, AI agents, and software that show where your
              operations lose time and money — then close those gaps.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Product</h4>
            <ul className="mt-4 space-y-3">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted transition hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Company</h4>
            <ul className="mt-4 space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted transition hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="mailto:hello@perceivex.ai"
                  className="text-sm text-foreground-muted transition hover:text-foreground"
                >
                  hello@perceivex.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border-subtle pt-6 text-xs text-foreground-muted sm:flex-row">
          <p>© {CURRENT_YEAR} PerceiveX. All rights reserved.</p>
          <p>Built with custom AI, for teams that move fast.</p>
        </div>
      </div>
    </footer>
  );
}

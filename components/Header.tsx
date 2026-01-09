"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { SITE_CONFIG } from "@/lib/constants";

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-lg font-semibold hover:opacity-80 transition-opacity"
          >
            {SITE_CONFIG.name}
          </Link>

          <ul className="flex items-center gap-1 sm:gap-2">
            {SITE_CONFIG.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={clsx(
                    "px-3 py-2 text-sm font-medium transition-colors rounded-md",
                    pathname === item.href
                      ? "text-foreground bg-foreground/5"
                      : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_NAV } from "@/constants/navigation";
import { cn } from "@/lib/utils/cn";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-8">
      {MAIN_NAV.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "font-body text-sm tracking-wide text-cream/70 transition-colors duration-200 hover:text-gold-kamba",
              isActive && "text-gold-kamba",
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { Icons } from "@/components/common/icons";
import { MobileNav } from "@/components/common/mobile-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/config/profile";
import { NavItem } from "@/config/routes";
import { cn } from "@/lib/utils";

interface MainNavProps {
  items: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="flex h-16 items-center justify-between gap-6">
      <Link href="/" className="group flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-heading text-sm text-primary-foreground shadow-sm">
          ER
        </span>
        <span className="leading-tight">
          <span className="block text-sm font-semibold">{profile.name}</span>
          <span className="hidden text-xs text-muted-foreground sm:block">
            {profile.role} · {profile.stack}
          </span>
        </span>
      </Link>

      <nav className="hidden items-center gap-1 md:flex">
        {items.map((item) => {
          const active = pathname?.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-foreground",
                active ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-1.5">
        <ModeToggle />
        <Link
          href={profile.resumePath}
          target="_blank"
          className={cn(
            buttonVariants({ size: "sm" }),
            "hidden gap-2 rounded-full px-4 sm:inline-flex"
          )}
        >
          <Icons.download className="h-4 w-4" />
          Download CV
        </Link>
        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-accent md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <Icons.close className="h-5 w-5" /> : <Icons.menu className="h-5 w-5" />}
        </button>
      </div>

      {open && <MobileNav items={items} />}
    </div>
  );
}

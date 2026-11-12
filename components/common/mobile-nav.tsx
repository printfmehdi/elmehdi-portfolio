import Link from "next/link";
import * as React from "react";

import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/config/profile";
import { NavItem } from "@/config/routes";
import { useLockBody } from "@/hooks/use-lock-body";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  items: NavItem[];
}

export function MobileNav({ items }: MobileNavProps) {
  useLockBody();

  return (
    <div className="fixed inset-0 top-16 z-50 bg-background/80 p-4 backdrop-blur-sm animate-in fade-in-0 md:hidden">
      <div className="grid gap-2 rounded-xl border bg-popover p-4 text-popover-foreground shadow-lg">
        <nav className="grid">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.disabled ? "#" : item.href}
              className="flex w-full items-center justify-between rounded-md px-3 py-3 text-base font-medium hover:bg-accent"
            >
              {item.title}
              <Icons.chevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          ))}
        </nav>
        <Link
          href={profile.resumePath}
          target="_blank"
          className={cn(buttonVariants(), "mt-2 w-full gap-2 rounded-full")}
        >
          <Icons.download className="h-4 w-4" />
          Download CV
        </Link>
      </div>
    </div>
  );
}

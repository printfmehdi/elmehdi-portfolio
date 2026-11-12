import Link from "next/link";
import * as React from "react";

import { Icons } from "@/components/common/icons";
import { profile } from "@/config/profile";
import { routesConfig } from "@/config/routes";
import { SocialLinks } from "@/config/socials";
import { cn } from "@/lib/utils";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("mt-24 border-t bg-muted/30", className)}>
      <div className="container grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-3">
          <p className="font-heading text-lg">{profile.name}</p>
          <p className="max-w-sm text-sm text-muted-foreground">
            {profile.role} ({profile.stack}) based in {profile.location}. Building
            reliable backends for enterprise SaaS.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <Icons.mail className="h-4 w-4" />
            {profile.email}
          </a>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Navigate
          </p>
          <ul className="space-y-2 text-sm">
            {routesConfig.mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-primary">
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href={profile.resumePath} target="_blank" className="hover:text-primary">
                Resume (PDF)
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Connect
          </p>
          <ul className="space-y-2 text-sm">
            {SocialLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-primary"
                >
                  <item.icon className="h-4 w-4" />
                  {item.name === "Gmail" ? "Email" : item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Built with Next.js, TypeScript & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}

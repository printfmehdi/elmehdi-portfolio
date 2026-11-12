import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/config/profile";
import { SocialLinks } from "@/config/socials";
import { cn } from "@/lib/utils";

const talkAbout = [
  "Backend / .NET engineering roles",
  "Distributed workflows & enterprise integrations",
  "Architecture reviews and refactoring",
];

export default function ContactInfoSidebar() {
  return (
    <aside className="space-y-5">
      <div className="rounded-xl border bg-card p-6">
        {profile.openToWork && (
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-1 text-xs font-medium text-success">
            <span className="h-2 w-2 rounded-full bg-success" />
            {profile.availabilityText}
          </span>
        )}
        <h2 className="font-heading text-xl">Reach me directly</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Prefer email or LinkedIn? That works just as well.
        </p>

        <div className="mt-5 space-y-2 text-sm">
          {SocialLinks.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : undefined}
              rel={item.link.startsWith("http") ? "noreferrer" : undefined}
              className="flex items-center justify-between rounded-lg border p-3 transition-colors hover:border-primary/40 hover:bg-accent"
            >
              <span className="flex items-center gap-3">
                <item.icon className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">
                  {item.name === "Gmail" ? "Email" : item.name}
                </span>
              </span>
              <span className="truncate pl-3 text-xs text-muted-foreground">
                {item.name === "Gmail" ? profile.email : item.username}
              </span>
            </Link>
          ))}
        </div>

        <Link
          href={profile.resumePath}
          target="_blank"
          className={cn(buttonVariants(), "mt-5 w-full gap-2 rounded-full")}
        >
          <Icons.download className="h-4 w-4" /> Download CV (PDF)
        </Link>
      </div>

      <div className="rounded-xl border bg-card p-6">
        <h3 className="mb-3 text-sm font-semibold">Happy to talk about</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {talkAbout.map((t) => (
            <li key={t} className="flex gap-2">
              <Icons.check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {t}
            </li>
          ))}
          <li className="flex gap-2">
            <Icons.mapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            Based in {profile.location}
          </li>
        </ul>
      </div>
    </aside>
  );
}

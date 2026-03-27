import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SocialLinks } from "@/config/socials";
import { cn } from "@/lib/utils";

const helpTopics = [
  "Backend API architecture in .NET",
  "Refactoring and code quality improvements",
  "Background jobs and workflow reliability",
  "Performance and observability in production",
];

export default function ContactInfoSidebar() {
  return (
    <aside className="space-y-5">
      <Card className="border-primary/20 bg-gradient-to-b from-primary/5 to-background">
        <CardHeader className="pb-4">
          <CardTitle className="font-heading text-xl">Contact Info</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          {SocialLinks.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : undefined}
              rel={item.link.startsWith("http") ? "noreferrer" : undefined}
              className="flex items-center justify-between rounded-lg border p-3 transition-colors hover:bg-accent"
            >
              <div className="flex items-center gap-3">
                <item.icon className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">{item.name}</span>
              </div>
              <span className="text-xs text-muted-foreground">{item.username}</span>
            </Link>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="font-heading text-xl">Availability</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p className="flex items-center gap-2">
            <Icons.check className="h-4 w-4 text-primary" />
            Open for backend engineering opportunities // available for freelance consulting and mentoring
          </p>
          <p className="flex items-center gap-2">
            <Icons.check className="h-4 w-4 text-primary" />
            Location: Siegen, Germany — open to relocation and remote
          </p>
        </CardContent>
      </Card>
    </aside>
  );
}


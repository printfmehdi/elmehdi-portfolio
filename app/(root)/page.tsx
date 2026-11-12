import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import { SectionHeading } from "@/components/common/section-heading";
import Timeline from "@/components/experience/timeline";
import { ProfilePortrait } from "@/components/home/profile-portrait";
import ProjectCard from "@/components/projects/project-card";
import SkillGroups from "@/components/skills/skill-groups";
import { buttonVariants } from "@/components/ui/button";
import { education, workExperiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import {
  atAGlance,
  languages,
  profile,
  skillGroups,
  stats,
  valueProps,
} from "@/config/profile";
import { featuredProjects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { cn, formatPeriod } from "@/lib/utils";
import profileImg from "@/public/profile-img.jpg";

export const metadata: Metadata = {
  title: `${pagesConfig.home.metadata.title}`,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

const valueIcons = {
  api: Icons.braces,
  workflow: Icons.workflow,
  shield: Icons.shield,
  sparkles: Icons.sparkles,
};

export default function IndexPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: `${siteConfig.url}/profile-img.jpg`,
    jobTitle: `${profile.role} (${profile.stack})`,
    worksFor: { "@type": "Organization", name: "TKD GmbH" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "University of Siegen" },
    address: { "@type": "PostalAddress", addressRegion: "NRW", addressCountry: "DE" },
    knowsLanguage: ["de", "en", "fr", "ar"],
    knowsAbout: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "Entity Framework Core",
      "Clean Architecture",
      "Distributed Systems",
      "Temporal",
      "Apache Kafka",
      "Azure",
      "Kubernetes",
    ],
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin].filter(Boolean),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.authorName} – Portfolio`,
    url: siteConfig.url,
    inLanguage: "en",
    author: { "@type": "Person", name: siteConfig.authorName, url: siteConfig.url },
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* ───────────── Hero ───────────── */}
      <section className="grid items-center gap-12 pb-16 pt-12 md:pt-20 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 lg:pb-24">
        <div className="order-2 lg:order-1">
          {profile.openToWork && (
            <AnimatedText delay={0.05}>
              <span className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-1 text-xs font-medium text-success">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>
                {profile.availabilityText}
              </span>
            </AnimatedText>
          )}

          <AnimatedText
            as="h1"
            delay={0.1}
            className="mt-6 font-heading text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </AnimatedText>

          <AnimatedText
            as="p"
            delay={0.18}
            className="mt-3 text-lg font-medium text-primary sm:text-xl"
          >
            {profile.role} · {profile.stack}
          </AnimatedText>

          <AnimatedText
            as="p"
            delay={0.26}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {profile.headline}
          </AnimatedText>

          <AnimatedText
            delay={0.32}
            className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground"
          >
            <span className="inline-flex items-center gap-1.5">
              <Icons.mapPin className="h-4 w-4" /> {profile.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icons.work className="h-4 w-4" /> Software Engineer at TKD GmbH
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icons.languages className="h-4 w-4" /> DE · EN · FR · AR
            </span>
          </AnimatedText>

          <AnimatedText delay={0.4} className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={profile.resumePath}
              target="_blank"
              className={cn(
                buttonVariants({ size: "lg" }),
                "gap-2 rounded-full px-6 shadow-lg shadow-primary/20"
              )}
            >
              <Icons.download className="h-4 w-4" /> Download CV
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "gap-2 rounded-full px-6"
              )}
            >
              <Icons.mail className="h-4 w-4" /> Get in touch
            </Link>
            <div className="flex items-center gap-1 pl-1">
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                aria-label="LinkedIn"
                className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "rounded-full")}
              >
                <Icons.linkedin className="h-5 w-5" />
              </Link>
              <Link
                href={siteConfig.links.github}
                target="_blank"
                aria-label="GitHub"
                className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "rounded-full")}
              >
                <Icons.gitHub className="h-5 w-5" />
              </Link>
            </div>
          </AnimatedText>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <AnimatedSection delay={0.15}>
            <ProfilePortrait
              src={profileImg}
              alt="Portrait of El Mehdi Rahali, Backend Software Engineer (C# / .NET)"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* ───────────── Stats ───────────── */}
      <AnimatedSection>
        <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border bg-card md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={cn(
                "p-5 sm:p-6",
                i % 2 === 1 && "border-l",
                i >= 2 && "border-t md:border-t-0",
                i === 2 && "md:border-l"
              )}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-heading text-3xl tracking-tight text-primary sm:text-4xl">
                {s.value}
              </dd>
              <dd className="mt-1 text-sm text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </AnimatedSection>

      {/* ───────────── About + At a glance ───────────── */}
      <section id="about" className="scroll-mt-24 py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <div>
            <SectionHeading eyebrow="About" title="What I bring to your team" className="mb-6" />
            <AnimatedSection className="space-y-4 text-base leading-relaxed text-muted-foreground">
              {profile.summary.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </AnimatedSection>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {valueProps.map((v, i) => {
                const Icon = valueIcons[v.icon];
                return (
                  <AnimatedSection key={v.title} delay={0.05 * i}>
                    <div className="h-full rounded-xl border bg-card p-5">
                      <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-semibold">{v.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {v.description}
                      </p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>

          <AnimatedSection delay={0.1}>
            <aside className="rounded-2xl border bg-card p-6 lg:sticky lg:top-24">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="font-heading text-lg">At a glance</h3>
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  For recruiters
                </span>
              </div>
              <dl className="divide-y">
                {atAGlance.map((item) => (
                  <div key={item.label} className="grid grid-cols-[6.5rem_1fr] gap-3 py-3 text-sm">
                    <dt className="text-muted-foreground">{item.label}</dt>
                    <dd className="font-medium">{item.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 grid gap-2">
                <Link
                  href={profile.resumePath}
                  target="_blank"
                  className={cn(buttonVariants(), "w-full gap-2 rounded-full")}
                >
                  <Icons.download className="h-4 w-4" /> Download CV (PDF)
                </Link>
                <a
                  href={`mailto:${profile.email}`}
                  className={cn(buttonVariants({ variant: "outline" }), "w-full min-w-0 gap-2 rounded-full")}
                >
                  <Icons.mail className="h-4 w-4 shrink-0" />
                  <span className="truncate">{profile.email}</span>
                </a>
              </div>
            </aside>
          </AnimatedSection>
        </div>
      </section>

      {/* ───────────── Experience ───────────── */}
      <section id="experience" className="scroll-mt-24 pb-20 md:pb-28">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've made an impact"
          description="Enterprise backends in production — from document processing at scale to a multi-tenant telecom SaaS platform."
          link={{ href: "/experience", label: "Full experience" }}
        />
        <Timeline experiences={workExperiences} maxSkills={6} />
      </section>

      {/* ───────────── Projects ───────────── */}
      <section id="projects" className="scroll-mt-24 pb-20 md:pb-28">
        <SectionHeading
          eyebrow="Selected work"
          title="Case studies"
          description="How I approach real problems — architecture, trade-offs and the systems behind them."
          link={{ href: "/projects", label: "All projects" }}
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={0.05 * index}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ───────────── Skills ───────────── */}
      <section id="skills" className="scroll-mt-24 pb-20 md:pb-28">
        <SectionHeading
          eyebrow="Skills"
          title="Technical toolbox"
          description="Deep in the .NET backend ecosystem, comfortable across the stack."
          link={{ href: "/skills", label: "Skill details" }}
        />
        <AnimatedSection>
          <SkillGroups groups={skillGroups} />
        </AnimatedSection>
      </section>

      {/* ───────────── Education & Languages ───────────── */}
      <section id="education" className="scroll-mt-24 pb-20 md:pb-28">
        <SectionHeading eyebrow="Background" title="Education & languages" />
        <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-4">
            {education.map((e) => (
              <AnimatedSection key={e.id}>
                <div className="flex gap-4 rounded-xl border bg-card p-5">
                  {e.logo && (
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-white">
                      <Image
                        src={e.logo}
                        alt={e.company}
                        width={48}
                        height={48}
                        className="h-full w-full object-contain p-1.5"
                      />
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4">
                      <h3 className="font-semibold">{e.position}</h3>
                      <span className="shrink-0 text-sm text-muted-foreground">
                        {formatPeriod(e.startDate, e.endDate)}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {e.company} · {e.location}
                    </p>
                    <ul className="mt-2 space-y-1 text-sm">
                      {e.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.1}>
            <div className="h-full rounded-xl border bg-card p-5">
              <h3 className="mb-4 flex items-center gap-2 font-semibold">
                <Icons.languages className="h-4 w-4 text-primary" /> Languages
              </h3>
              <ul className="divide-y">
                {languages.map((l) => (
                  <li key={l.name} className="flex items-center justify-between py-2.5 text-sm">
                    <span className="font-medium">{l.name}</span>
                    <span className="text-muted-foreground">{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ───────────── CTA ───────────── */}
      <AnimatedSection>
        <section className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-primary-foreground sm:px-12">
          <div className="bg-dots pointer-events-none absolute inset-0 opacity-30" />
          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-heading text-3xl leading-tight sm:text-4xl">
                Looking for a .NET backend engineer?
              </h2>
              <p className="mt-3 text-base opacity-90 sm:text-lg">
                I&apos;d love to hear about your team and the problems you&apos;re solving.
                Reach out directly or grab my CV.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "gap-2 rounded-full px-6"
                )}
              >
                <Icons.mail className="h-4 w-4" /> Contact me
              </Link>
              <Link
                href={profile.resumePath}
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "gap-2 rounded-full border-primary-foreground/40 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                )}
              >
                <Icons.download className="h-4 w-4" /> Download CV
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}

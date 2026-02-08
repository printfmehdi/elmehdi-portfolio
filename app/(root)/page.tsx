import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import ContributionCard from "@/components/contributions/contribution-card";
import ExperienceCard from "@/components/experience/experience-card";
import ProjectCard from "@/components/projects/project-card";
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { featuredContributions } from "@/config/contributions";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { featuredProjects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { featuredSkills } from "@/config/skills";
import { cn } from "@/lib/utils";
import profileImg from "@/public/profile-img.jpg";

export const metadata: Metadata = {
  title: `${pagesConfig.home.metadata.title}`,
  description:
    "El Mehdi Rahali – Backend Software Engineer (.NET/C#) building scalable APIs, background jobs, and maintainable enterprise systems. Explore my projects and experience.",
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function IndexPage() {
  // Structured data for personal portfolio
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Backend Software Engineer (.NET / C#)",
    sameAs: [
      siteConfig.links.github,
      // Prefer LinkedIn for a portfolio. Make sure it exists in config/site.ts
      siteConfig.links.linkedin,
      // siteConfig.links.twitter, // only keep if you actively use it
    ].filter(Boolean),
  };

  // Structured data for the website
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.authorName} – Portfolio`,
    url: siteConfig.url,
    inLanguage: "en",
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
      url: siteConfig.url,
    },
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

      <section className="relative isolate flex min-h-screen items-center overflow-hidden py-20 md:py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-14 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-accent/40 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsla(var(--primary),0.08),transparent_45%)]" />
        </div>

        <div className="container relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div className="order-2 text-center lg:order-1 lg:text-left">
              <AnimatedText delay={0.1}>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-primary">
                  BACKEND ENGINEER
                </span>
              </AnimatedText>

              <AnimatedText
                as="h1"
                delay={0.2}
                className="mt-5 font-heading text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl"
              >
                El Mehdi Rahali
              </AnimatedText>

              <AnimatedText
                as="h3"
                delay={0.35}
                className="mt-4 font-heading text-base text-muted-foreground sm:text-lg md:text-xl"
              >
                Backend Software Engineer (.NET / C#)
              </AnimatedText>

              <AnimatedText
                as="p"
                delay={0.5}
                className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:mx-0"
              >
                Building scalable .NET backend systems—APIs, background jobs, and
                enterprise integrations—with a strong focus on clean architecture
                and reliability.
              </AnimatedText>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
                {[
                  "REST APIs",
                  "Background Jobs",
                  "Clean Architecture",
                  "Enterprise Integrations",
                ].map((badge) => (
                  <AnimatedText key={badge} delay={0.55}>
                    <span className="inline-flex rounded-full border bg-background/80 px-3 py-1 text-xs font-medium text-foreground/80 backdrop-blur-sm">
                      {badge}
                    </span>
                  </AnimatedText>
                ))}
              </div>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                <AnimatedText delay={0.65}>
                  <Link
                    href={"/resume/el-mehdi-rahali.pdf"}
                    target="_blank"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "rounded-full px-7 shadow-lg shadow-primary/20"
                    )}
                    aria-label="View CV"
                  >
                    <Icons.post className="mr-2 h-4 w-4" /> Resume
                  </Link>
                </AnimatedText>
                <AnimatedText delay={0.8}>
                  <Link
                    href={"/contact"}
                    rel="noreferrer"
                    className={cn(
                      buttonVariants({
                        variant: "outline",
                        size: "lg",
                      }),
                      "rounded-full border-primary/30 bg-background/70 px-7 backdrop-blur-sm"
                    )}
                    aria-label="Contact El Mehdi Rahali"
                  >
                    <Icons.contact className="mr-2 h-4 w-4" /> Contact
                  </Link>
                </AnimatedText>
              </div>
            </div>

            <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
              <AnimatedSection delay={0.25} direction="left">
                <div className="relative">
                  <div className="absolute -inset-5 rounded-[2.4rem] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent blur-2xl" />
                  <div className="relative rounded-[2rem] border border-border/50 bg-background/40 p-3 shadow-lg shadow-black/10 backdrop-blur-md">
                    <Image
                      src={profileImg}
                      height={420}
                      width={420}
                      sizes="(max-width: 1024px) 70vw, 420px"
                      className="h-auto w-[16.5rem] rounded-[1.5rem] object-cover sm:w-[19rem] lg:w-[22rem]"
                      alt="El Mehdi Rahali - Backend Software Engineer (.NET/C#) Portfolio"
                      priority
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          <AnimatedText delay={1.1} className="mt-14 flex justify-center">
            <Icons.chevronDown className="h-6 w-6 animate-bounce text-muted-foreground" />
          </AnimatedText>
        </div>
      </section>

      <AnimatedSection   className="container space-y-6 py-16 md:py-24"
 id="skills">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.skills.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.skills.description}
          </AnimatedText>
        </div>

        <SkillsCard skills={featuredSkills} />

        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/skills">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> See all
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      <AnimatedSection
        direction="right"
        className="container space-y-6 py-10 my-14"
        id="projects"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.projects.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.projects.description}
          </AnimatedText>
        </div>

        <div className="mx-auto grid justify-center gap-4 md:w-full lg:grid-cols-3">
          {featuredProjects.map((exp, index) => (
            <AnimatedSection
              key={exp.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <ProjectCard project={exp} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/projects">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> See all
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      <AnimatedSection
        direction="left"
        className="container space-y-6 py-10 my-14"
        id="experience"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.experience.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.experience.description}
          </AnimatedText>
        </div>

        <div className="mx-auto grid justify-center gap-4 md:w-full lg:grid-cols-3">
          {experiences.slice(0, 3).map((experience, index) => (
            <AnimatedSection
              key={experience.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <ExperienceCard experience={experience} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/experience">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> See all
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}

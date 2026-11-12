"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { PointerEvent } from "react";

import { Icons } from "@/components/common/icons";
import { cn } from "@/lib/utils";

interface ProfilePortraitProps {
  src: StaticImageData;
  alt: string;
}

const badges = [
  {
    icon: Icons.dotnet,
    title: "C# · ASP.NET Core",
    sub: "5 yrs in production",
    className: "-right-12 top-8 lg:-right-10",
    delay: "0s",
  },
  {
    icon: Icons.temporal,
    title: "Temporal · Kafka",
    sub: "distributed workflows",
    className: "-left-14 top-1/2 lg:-left-20",
    delay: "-2s",
  },
  {
    icon: Icons.kubernetes,
    title: "Azure · Docker · K8s",
    sub: "cloud & DevOps",
    className: "-bottom-6 -right-4",
    delay: "-4s",
  },
];

export function ProfilePortrait({ src, alt }: ProfilePortraitProps) {
  const reduceMotion = useReducedMotion();

  // pointer position relative to the card, -0.5 … 0.5
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spring = { stiffness: 150, damping: 18, mass: 0.4 };
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [7, -7]), spring);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-9, 9]), spring);

  // glare that follows the pointer
  const glareX = useTransform(px, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(py, [-0.5, 0.5], [0, 100]);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgb(255 255 255 / 0.22), transparent 55%)`;

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    if (reduceMotion || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onPointerLeave() {
    px.set(0);
    py.set(0);
  }

  return (
    <div
      className="relative [perspective:1100px] lg:mr-10"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      {/* soft ambient glow */}
      <div className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-br from-primary/25 via-primary/5 to-transparent blur-3xl" />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative"
      >
        {/* animated gradient ring */}
        <div className="relative overflow-hidden rounded-[1.9rem] p-[2px] shadow-2xl shadow-primary/10">
          <div
            aria-hidden="true"
            className="portrait-ring absolute inset-[-60%]"
            style={{
              background:
                "conic-gradient(from 0deg, hsl(var(--primary)) 0deg, transparent 70deg, transparent 160deg, hsl(var(--primary) / 0.55) 200deg, transparent 260deg, transparent 320deg, hsl(var(--primary)) 360deg)",
            }}
          />
          <div className="relative overflow-hidden rounded-[1.8rem] bg-card p-2">
            <Image
              src={src}
              height={440}
              width={360}
              sizes="(max-width: 1024px) 60vw, 360px"
              className="h-auto w-56 rounded-[1.4rem] object-cover sm:w-64 lg:w-80"
              alt={alt}
              priority
            />
            {/* glare */}
            <motion.div
              aria-hidden="true"
              style={{ background: glare }}
              className="pointer-events-none absolute inset-2 rounded-[1.4rem] mix-blend-soft-light"
            />
          </div>
        </div>

        {/* floating tech badges — sit "in front" of the card for a parallax feel */}
        {badges.map((b) => (
          <div
            key={b.title}
            className={cn("absolute hidden sm:block", b.className)}
            style={{ transform: "translateZ(60px)" }}
          >
            <div
              className="portrait-float flex items-center gap-2.5 rounded-xl border bg-card/90 py-2 pl-2 pr-3.5 shadow-lg shadow-black/5 backdrop-blur-md"
              style={{ animationDelay: b.delay }}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <b.icon size={16} />
              </span>
              <span className="leading-tight">
                <span className="block whitespace-nowrap text-[13px] font-semibold">
                  {b.title}
                </span>
                <span className="block whitespace-nowrap text-[11px] text-muted-foreground">
                  {b.sub}
                </span>
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Lightbulb, AlertTriangle, Info, ArrowRight, LucideIcon, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import cindersLogoDark from "@/assets/cindersx-logo-dark.png";
import cindersLogoLight from "@/assets/cindersx-logo-light.png";

/* ------------------------------------------------------------------ */
/*  SmartLink — router <Link> for internal paths, <a> for http(s) URLs */
/* ------------------------------------------------------------------ */

const isExternal = (to: string) => /^https?:\/\//.test(to);

export function SmartLink({
  to,
  className,
  children,
}: {
  to: string;
  className?: string;
  children: ReactNode;
}) {
  if (isExternal(to)) {
    return (
      <a href={to} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/*  GuideShell — sticky header (logo + back) + centred content + footer */
/* ------------------------------------------------------------------ */

export function GuideShell({
  children,
  backTo = "/",
  backLabel = "All guides",
}: {
  children: ReactNode;
  backTo?: string;
  backLabel?: string;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
          <SmartLink to={backTo} className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">{backLabel}</span>
          </SmartLink>
          <Link to="/" className="flex items-center">
            <img src={cindersLogoDark} alt="CindersX" className="hidden h-7 w-auto dark:block" />
            <img src={cindersLogoLight} alt="CindersX" className="block h-7 w-auto dark:hidden" />
          </Link>
          <Link to="/" className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <BookOpen className="h-4 w-4" />
            <span className="hidden sm:inline">Guides</span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-24 pt-10">{children}</main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-4 py-8 text-center text-sm text-muted-foreground">
          <img src={cindersLogoDark} alt="CindersX" className="hidden h-6 w-auto opacity-70 dark:block" />
          <img src={cindersLogoLight} alt="CindersX" className="block h-6 w-auto opacity-70 dark:hidden" />
          <p>Need a hand? Use the <strong className="text-foreground">Help</strong> manual inside CindersX or ask your team lead.</p>
        </div>
      </footer>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  GuideHero — page title block                                       */
/* ------------------------------------------------------------------ */

export function GuideHero({
  eyebrow,
  title,
  description,
  icon: Icon,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  icon?: LucideIcon;
}) {
  return (
    <div className="mb-12 text-center">
      {Icon && (
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Icon className="h-7 w-7" />
        </div>
      )}
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      )}
      <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">{description}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SectionHeading                                                     */
/* ------------------------------------------------------------------ */

export function SectionHeading({
  step,
  title,
  description,
  icon: Icon,
}: {
  step?: number | string;
  title: string;
  description?: string;
  icon?: LucideIcon;
}) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3">
        {step !== undefined ? (
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
            {step}
          </span>
        ) : Icon ? (
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="h-5 w-5" />
          </span>
        ) : null}
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h2>
      </div>
      {description && <p className="mt-2 text-sm text-muted-foreground sm:text-base">{description}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  GuideSplit — two-column: mockup + steps                            */
/* ------------------------------------------------------------------ */

export function GuideSplit({
  mockup,
  children,
  reverse = false,
}: {
  mockup: ReactNode;
  children: ReactNode;
  reverse?: boolean;
}) {
  return (
    <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
      <div className={cn("order-1", reverse ? "lg:order-2" : "lg:order-1")}>{mockup}</div>
      <div className={cn("order-2", reverse ? "lg:order-1" : "lg:order-2")}>{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Steps                                                              */
/* ------------------------------------------------------------------ */

export function Steps({ children }: { children: ReactNode }) {
  return <ol className="space-y-5">{children}</ol>;
}

export function Step({ n, title, children }: { n: number; title: string; children?: ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-sm font-semibold text-primary">
        {n}
      </span>
      <div className="pt-0.5">
        <p className="font-medium leading-snug">{title}</p>
        {children && <div className="mt-1 text-sm text-muted-foreground">{children}</div>}
      </div>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/*  Callout                                                            */
/* ------------------------------------------------------------------ */

const calloutStyles = {
  tip: { icon: Lightbulb, wrap: "border-primary/30 bg-primary/5", iconColor: "text-primary", label: "Tip" },
  warning: { icon: AlertTriangle, wrap: "border-destructive/30 bg-destructive/5", iconColor: "text-destructive", label: "Heads up" },
  info: { icon: Info, wrap: "border-secondary/40 bg-secondary/5", iconColor: "text-secondary", label: "Good to know" },
} as const;

export function Callout({
  variant = "tip",
  title,
  children,
}: {
  variant?: keyof typeof calloutStyles;
  title?: string;
  children: ReactNode;
}) {
  const s = calloutStyles[variant];
  const Icon = s.icon;
  return (
    <div className={cn("flex gap-3 rounded-xl border p-4", s.wrap)}>
      <Icon className={cn("mt-0.5 h-5 w-5 shrink-0", s.iconColor)} />
      <div className="text-sm">
        <p className="font-semibold">{title ?? s.label}</p>
        <div className="mt-1 text-muted-foreground [&_strong]:text-foreground">{children}</div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  StatusBadge                                                        */
/* ------------------------------------------------------------------ */

const tones = {
  orange: "bg-primary/15 text-primary border-primary/30",
  teal: "bg-secondary/15 text-secondary border-secondary/40",
  green: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
  amber: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30",
  red: "bg-destructive/15 text-destructive border-destructive/30",
  slate: "bg-muted text-muted-foreground border-border",
  blue: "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30",
} as const;

export function StatusBadge({ tone = "slate", children }: { tone?: keyof typeof tones; children: ReactNode }) {
  return (
    <span className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium", tones[tone])}>
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  DeviceFrame                                                        */
/* ------------------------------------------------------------------ */

export function DeviceFrame({
  variant = "browser",
  url,
  children,
}: {
  variant?: "browser" | "phone";
  url?: string;
  children: ReactNode;
}) {
  if (variant === "phone") {
    return (
      <div className="mx-auto w-full max-w-[300px] rounded-[2.2rem] border-[6px] border-foreground/15 bg-card p-2 shadow-xl">
        <div className="overflow-hidden rounded-[1.6rem] border border-border bg-background">
          <div className="flex items-center justify-center bg-card py-2">
            <div className="h-1.5 w-16 rounded-full bg-foreground/20" />
          </div>
          <div className="px-3 pb-4 pt-1">{children}</div>
        </div>
      </div>
    );
  }
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xl">
      <div className="flex items-center gap-2 border-b border-border bg-muted/40 px-3 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </div>
        {url && (
          <div className="ml-2 flex-1 truncate rounded-md bg-background/70 px-3 py-1 text-center text-[11px] text-muted-foreground">
            {url}
          </div>
        )}
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  GuideCard                                                          */
/* ------------------------------------------------------------------ */

export function GuideCard({
  to,
  icon: Icon,
  title,
  description,
  audience,
  available = true,
}: {
  to: string;
  icon: LucideIcon;
  title: string;
  description: string;
  audience?: string;
  available?: boolean;
}) {
  const inner = (
    <>
      <div className="flex items-start justify-between">
        <span
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-xl",
            available ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        {available ? (
          <ArrowRight className="h-4 w-4 translate-x-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
        ) : (
          <span className="inline-flex items-center gap-1 rounded-full border border-border bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
            <Lock className="h-3 w-3" /> Soon
          </span>
        )}
      </div>
      <h3 className="mt-4 font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      {audience && <p className="mt-3 text-xs font-medium uppercase tracking-wide text-muted-foreground/80">{audience}</p>}
    </>
  );

  const base = "group block rounded-2xl border border-border bg-card p-5 text-left transition-all";

  if (!available) {
    return <div className={cn(base, "cursor-not-allowed opacity-70")}>{inner}</div>;
  }
  return (
    <Link to={to} className={cn(base, "hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg")}>
      {inner}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/*  GuideCTA                                                           */
/* ------------------------------------------------------------------ */

export function GuideCTA({
  title,
  description,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
}: {
  title: string;
  description: string;
  primaryLabel: string;
  primaryTo: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}) {
  return (
    <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/5 p-8 text-center">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <p className="mx-auto mt-2 max-w-xl text-muted-foreground">{description}</p>
      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button asChild size="lg">
          <SmartLink to={primaryTo}>
            {primaryLabel}
            <ArrowRight className="h-4 w-4" />
          </SmartLink>
        </Button>
        {secondaryLabel && secondaryTo && (
          <Button asChild size="lg" variant="outline">
            <SmartLink to={secondaryTo}>{secondaryLabel}</SmartLink>
          </Button>
        )}
      </div>
    </div>
  );
}

export function GuideDivider() {
  return <div className="my-14 h-px bg-gradient-to-r from-transparent via-border to-transparent" />;
}

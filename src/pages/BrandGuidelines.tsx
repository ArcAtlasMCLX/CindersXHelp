import { Palette, Type, ImageIcon, Sparkles, Check, X, Ruler } from "lucide-react";
import {
  GuideShell,
  GuideHero,
  SectionHeading,
  Callout,
  GuideDivider,
} from "@/components/guides/guide-primitives";
import { cn } from "@/lib/utils";
import cindersLogoDark from "@/assets/cindersx-logo-dark.png";
import cindersLogoLight from "@/assets/cindersx-logo-light.png";

/* ----------------------------- Colour palette ----------------------------- */

interface Swatch {
  name: string;
  hex: string;
  hsl: string;
  usage: string;
  text: string; // tailwind text colour for legible label on the swatch
}

const brandColours: Swatch[] = [
  { name: "Brand Orange", hex: "#FA8638", hsl: "24 95% 60%", usage: "Primary actions, highlights, the “X”", text: "text-black" },
  { name: "Orange Glow", hex: "#FF6600", hsl: "24 100% 50%", usage: "Hover / glow accents only", text: "text-black" },
  { name: "Brand Teal", hex: "#10707F", hsl: "188 78% 28%", usage: "Secondary actions, supporting accents", text: "text-white" },
  { name: "Brand Cream", hex: "#F7F1DE", hsl: "45 60% 92%", usage: "Text & surfaces on dark backgrounds", text: "text-black" },
  { name: "Brand Dark", hex: "#0A0A0A", hsl: "0 0% 4%", usage: "Primary dark background", text: "text-white" },
  { name: "Destructive", hex: "#DB2424", hsl: "0 72% 50%", usage: "Errors, overdue, destructive actions", text: "text-white" },
];

function ColourCard({ s }: { s: Swatch }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <div className={cn("flex h-24 items-end p-3 font-semibold", s.text)} style={{ backgroundColor: s.hex }}>
        {s.name}
      </div>
      <div className="space-y-1 p-3 text-xs">
        <div className="flex justify-between">
          <span className="text-muted-foreground">HEX</span>
          <span className="font-mono">{s.hex}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">HSL</span>
          <span className="font-mono">{s.hsl}</span>
        </div>
        <p className="pt-1 text-muted-foreground">{s.usage}</p>
      </div>
    </div>
  );
}

/* ----------------------------- Logo misuse ----------------------------- */

function DontCard({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-destructive/30 bg-card">
      <div className="relative flex h-24 items-center justify-center bg-brand-dark p-4">
        {children}
        <span className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-destructive text-destructive-foreground">
          <X className="h-4 w-4" />
        </span>
      </div>
      <p className="p-3 text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

/* ----------------------------- Page ----------------------------- */

const BrandGuidelines = () => {
  return (
    <GuideShell>
      <GuideHero
        icon={Sparkles}
        eyebrow="Brand Guidelines"
        title="The CindersX brand"
        description="The colours, type, and logo rules that keep CindersX looking consistent — wherever it shows up. Use this as the single source of truth."
      />

      {/* Logo */}
      <SectionHeading icon={ImageIcon} title="Logo" description="The CindersX wordmark. Always give it room to breathe and keep it legible." />
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-border bg-brand-dark p-10">
          <img src={cindersLogoDark} alt="CindersX logo on dark" className="h-12 w-auto" />
          <span className="text-xs text-brand-cream/70">On dark backgrounds</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-border bg-brand-cream p-10">
          <img src={cindersLogoLight} alt="CindersX logo on light" className="h-12 w-auto" />
          <span className="text-xs text-black/60">On light backgrounds</span>
        </div>
      </div>

      <div className="mt-6">
        <p className="mb-3 text-sm font-medium">Please don't:</p>
        <div className="grid gap-4 sm:grid-cols-3">
          <DontCard label="Don't stretch or distort">
            <img src={cindersLogoDark} alt="" className="h-10 w-auto scale-x-150" />
          </DontCard>
          <DontCard label="Don't recolour the logo">
            <img src={cindersLogoDark} alt="" className="h-10 w-auto" style={{ filter: "hue-rotate(140deg) saturate(2)" }} />
          </DontCard>
          <DontCard label="Don't add shadows or effects">
            <img src={cindersLogoDark} alt="" className="h-10 w-auto" style={{ filter: "drop-shadow(0 4px 6px rgba(255,255,255,0.6))" }} />
          </DontCard>
        </div>
      </div>

      <div className="mt-6">
        <Callout variant="tip" title="Clear space & minimum size">
          Keep clear space around the logo at least equal to the height of the “X”. Don't render it smaller than
          ~20px tall on screen, where the wordmark stops being legible.
        </Callout>
      </div>

      <GuideDivider />

      {/* Colour */}
      <SectionHeading icon={Palette} title="Colour palette" description="Orange leads, teal supports, cream and dark carry the rest. All values are stored as HSL design tokens." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {brandColours.map((s) => (
          <ColourCard key={s.name} s={s} />
        ))}
      </div>
      <div className="mt-6">
        <Callout variant="info" title="Orange is the accent, not the canvas">
          CindersX runs on a dark canvas with cream text. <strong>Brand Orange</strong> is reserved for primary actions
          and key highlights — used sparingly so it stays high-impact. <strong>Teal</strong> handles secondary emphasis.
        </Callout>
      </div>

      <GuideDivider />

      {/* Typography */}
      <SectionHeading icon={Type} title="Typography" description="Three typefaces, each with a clear job." />
      <div className="space-y-4">
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-baseline justify-between">
            <span className="text-sm font-medium">Roboto</span>
            <span className="text-xs text-muted-foreground">Interface &amp; body · weights 400 / 500 / 700</span>
          </div>
          <p className="mt-3 font-sans text-2xl">The quick brown fox jumps over the lazy dog</p>
          <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 font-sans text-sm text-muted-foreground">
            <span className="font-normal">Regular 400</span>
            <span className="font-medium">Medium 500</span>
            <span className="font-bold">Bold 700</span>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-baseline justify-between">
            <span className="text-sm font-medium">Libre Caslon Text</span>
            <span className="text-xs text-muted-foreground">Display &amp; editorial headings</span>
          </div>
          <p className="mt-3 font-serif text-2xl">Compliance operations, done properly</p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-baseline justify-between">
            <span className="text-sm font-medium">Roboto Mono</span>
            <span className="text-xs text-muted-foreground">Data, codes &amp; references</span>
          </div>
          <p className="mt-3 font-mono text-xl">JOB-2026-0042 · £1,250.00 · 24 95% 60%</p>
        </div>
      </div>

      <GuideDivider />

      {/* UI tokens */}
      <SectionHeading icon={Ruler} title="UI building blocks" description="Shared shape and component styling across the product." />
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-6">
          <p className="text-sm font-medium">Corner radius</p>
          <p className="mb-4 text-xs text-muted-foreground">Base radius token: 0.75rem</p>
          <div className="flex items-end gap-3">
            <div className="h-16 w-16 rounded-sm border border-border bg-muted" />
            <div className="h-16 w-16 rounded-md border border-border bg-muted" />
            <div className="h-16 w-16 rounded-lg border border-border bg-muted" />
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-6">
          <p className="text-sm font-medium">Buttons</p>
          <p className="mb-4 text-xs text-muted-foreground">Primary = orange · Secondary = teal</p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex h-10 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground">Primary</span>
            <span className="inline-flex h-10 items-center rounded-md bg-secondary px-4 text-sm font-medium text-secondary-foreground">Secondary</span>
            <span className="inline-flex h-10 items-center rounded-md border border-input px-4 text-sm font-medium">Outline</span>
          </div>
        </div>
      </div>

      <GuideDivider />

      {/* Voice */}
      <SectionHeading icon={Check} title="Tone of voice" description="How CindersX sounds in writing — including in these guides." />
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { t: "Clear, not clever", d: "Plain English over jargon. Say what to do and why." },
          { t: "Calm & confident", d: "Reassuring and professional — never alarmist, even about urgent items." },
          { t: "Action-first", d: "Lead with the verb. Short steps people can actually follow." },
        ].map((v) => (
          <div key={v.t} className="rounded-xl border border-border bg-card p-5">
            <p className="font-semibold">{v.t}</p>
            <p className="mt-1 text-sm text-muted-foreground">{v.d}</p>
          </div>
        ))}
      </div>
    </GuideShell>
  );
};

export default BrandGuidelines;

import { Smartphone, Share, Plus, MoreVertical, Download, Check, Sparkles, Rocket } from "lucide-react";
import {
  GuideShell,
  GuideHero,
  SectionHeading,
  GuideSplit,
  Steps,
  Step,
  Callout,
  DeviceFrame,
  GuideCard,
  GuideCTA,
  GuideDivider,
} from "@/components/guides/guide-primitives";
import { GUIDES } from "./guides-registry";
import { appPath } from "@/config";

/* ----------------------------- Mockups ----------------------------- */

function PhoneChrome({ children, bar = "Safari" }: { children: React.ReactNode; bar?: string }) {
  return (
    <DeviceFrame variant="phone">
      <div className="space-y-2">
        <div className="flex items-center gap-1.5 rounded-md border border-border bg-card px-2 py-1 text-[9px] text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-emerald-500/70" />
          cindersx.com
          <span className="ml-auto text-[8px] uppercase tracking-wide">{bar}</span>
        </div>
        {children}
      </div>
    </DeviceFrame>
  );
}

function IOSMockup() {
  return (
    <PhoneChrome bar="Safari">
      {/* faded page behind the share sheet */}
      <div className="space-y-1 opacity-30">
        <div className="h-6 w-1/2 rounded bg-muted" />
        <div className="h-12 rounded-lg border border-border bg-card" />
      </div>
      {/* share sheet */}
      <div className="rounded-xl border border-border bg-card p-2">
        <div className="mb-2 flex gap-2">
          {["bg-blue-500/70", "bg-emerald-500/70", "bg-amber-500/70"].map((c, i) => (
            <div key={i} className={`h-7 w-7 rounded-lg ${c}`} />
          ))}
        </div>
        <div className="space-y-1">
          <div className="flex items-center justify-between rounded-md px-1 py-1 text-[10px] text-muted-foreground">
            Copy <Plus className="h-3 w-3 opacity-0" />
          </div>
          <div className="flex items-center justify-between rounded-md border border-primary/50 bg-primary/10 px-1.5 py-1.5 text-[10px] font-semibold text-primary">
            Add to Home Screen
            <span className="flex h-4 w-4 items-center justify-center rounded border border-primary/60"><Plus className="h-2.5 w-2.5" /></span>
          </div>
        </div>
      </div>
    </PhoneChrome>
  );
}

function AndroidMockup() {
  return (
    <PhoneChrome bar="Chrome">
      <div className="flex justify-end">
        <MoreVertical className="h-4 w-4 text-muted-foreground" />
      </div>
      {/* dropdown menu */}
      <div className="ml-auto w-[72%] space-y-0.5 rounded-lg border border-border bg-card p-1.5 text-[10px]">
        {["New tab", "History", "Downloads"].map((t) => (
          <div key={t} className="px-1.5 py-1 text-muted-foreground">{t}</div>
        ))}
        <div className="flex items-center gap-1.5 rounded-md border border-primary/50 bg-primary/10 px-1.5 py-1.5 font-semibold text-primary">
          <Download className="h-3 w-3" /> Install app
        </div>
        <div className="px-1.5 py-1 text-muted-foreground">Add to Home screen</div>
      </div>
    </PhoneChrome>
  );
}

function HomeScreenMockup() {
  const icons = ["bg-blue-500/40", "bg-emerald-500/40", "bg-rose-500/40", "bg-amber-500/40", "bg-violet-500/40"];
  return (
    <DeviceFrame variant="phone">
      <div className="space-y-3 py-2">
        <div className="grid grid-cols-4 gap-3 px-1">
          {/* CindersX app icon */}
          <div className="flex flex-col items-center gap-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/40 bg-brand-dark shadow-lg ring-2 ring-primary/60">
              <span className="text-[11px] font-bold tracking-tight text-white">C<span className="text-primary">X</span></span>
            </div>
            <span className="text-[8px] text-foreground">CindersX</span>
          </div>
          {icons.map((c, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className={`h-12 w-12 rounded-2xl ${c}`} />
              <span className="h-1.5 w-8 rounded bg-muted" />
            </div>
          ))}
        </div>
      </div>
    </DeviceFrame>
  );
}

/* ----------------------------- Page ----------------------------- */

const InstallAppGuide = () => {
  const nextGuides = GUIDES.filter((g) => g.slug !== "install-app" && g.available).slice(0, 3);

  return (
    <GuideShell>
      <GuideHero
        icon={Smartphone}
        eyebrow="Set up · Phase 0"
        title="Use CindersX like an app on your phone"
        description="CindersX runs in your browser — but you can add it to your home screen so it opens full-screen with its own icon, just like a native app. Takes 20 seconds."
      />

      {/* iPhone / iPad */}
      <SectionHeading
        step={1}
        title="iPhone & iPad"
        description="Use Safari — Apple only allows adding to the home screen from Safari."
      />
      <GuideSplit mockup={<IOSMockup />}>
        <Steps>
          <Step n={1} title="Open CindersX in Safari">
            Go to your CindersX web address in <strong>Safari</strong> (not Chrome — iOS only supports this from Safari).
          </Step>
          <Step n={2} title="Tap the Share button">
            Tap the <Share className="inline h-3.5 w-3.5 align-text-bottom" /> Share icon in the toolbar (the square with an arrow).
          </Step>
          <Step n={3} title="Add to Home Screen">
            Scroll the list and tap <strong>Add to Home Screen</strong>.
          </Step>
          <Step n={4} title="Tap Add">
            Confirm the name and tap <strong>Add</strong> — the CindersX icon appears on your home screen.
          </Step>
        </Steps>
        <div className="mt-6">
          <Callout variant="warning" title="Must be Safari on iPhone/iPad">
            On iOS, “Add to Home Screen” only appears in <strong>Safari</strong>. If you're in Chrome or another browser, open the site in Safari first.
          </Callout>
        </div>
      </GuideSplit>

      <GuideDivider />

      {/* Android */}
      <SectionHeading
        step={2}
        title="Android"
        description="Use Chrome (or most Android browsers) — it offers a one-tap install."
      />
      <GuideSplit mockup={<AndroidMockup />} reverse>
        <Steps>
          <Step n={1} title="Open CindersX in Chrome">
            Go to your CindersX web address in <strong>Chrome</strong>.
          </Step>
          <Step n={2} title="Open the menu">
            Tap the <MoreVertical className="inline h-3.5 w-3.5 align-text-bottom" /> three-dots menu in the top-right.
          </Step>
          <Step n={3} title="Install app">
            Tap <strong>Install app</strong> (or <strong>Add to Home screen</strong>), then confirm <strong>Install</strong>.
          </Step>
        </Steps>
        <div className="mt-6">
          <Callout variant="tip" title="Look for the install banner">
            Chrome sometimes shows an <strong>Install</strong> prompt at the bottom of the screen — you can tap that instead of opening the menu.
          </Callout>
        </div>
      </GuideSplit>

      <GuideDivider />

      {/* Done */}
      <SectionHeading
        icon={Rocket}
        title="That's it — open it like any app"
        description="Tap the CindersX icon and it launches full-screen, no browser bars."
      />
      <GuideSplit mockup={<HomeScreenMockup />}>
        <Steps>
          <Step n={1} title="Tap the CindersX icon">
            It's now on your home screen alongside your other apps.
          </Step>
          <Step n={2} title="Sign in once">
            Log in the first time and it'll remember you, so you go straight to your work.
          </Step>
          <Step n={3} title="Field staff: start here every day">
            Engineers land straight on <strong>My Jobs</strong> — the fastest way to your day.
          </Step>
        </Steps>
        <div className="mt-6">
          <Callout variant="info" title="Why bother?">
            <span className="inline-flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="inline-flex items-center gap-1"><Check className="h-3.5 w-3.5 text-emerald-500" /> Full-screen, no address bar</span>
              <span className="inline-flex items-center gap-1"><Check className="h-3.5 w-3.5 text-emerald-500" /> One-tap from your home screen</span>
              <span className="inline-flex items-center gap-1"><Check className="h-3.5 w-3.5 text-emerald-500" /> Feels like a native app</span>
            </span>
          </Callout>
        </div>
      </GuideSplit>

      <GuideDivider />

      {/* Next */}
      <SectionHeading icon={Sparkles} title="Now you're set up — where to start" />
      <div className="grid gap-4 sm:grid-cols-3">
        {nextGuides.map((g) => (
          <GuideCard key={g.slug} to={g.path} icon={g.icon} title={g.title} description={g.description} audience={g.audience} available={g.available} />
        ))}
      </div>

      <div className="mt-12">
        <GuideCTA
          title="Ready to add CindersX to your phone?"
          description="Open CindersX, then follow the steps above for your device."
          primaryLabel="Open CindersX"
          primaryTo={appPath()}
          secondaryLabel="Browse all guides"
          secondaryTo="/"
        />
      </div>
    </GuideShell>
  );
};

export default InstallAppGuide;

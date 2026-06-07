import {
  Compass,
  LayoutDashboard,
  Inbox,
  Handshake,
  ClipboardList,
  Briefcase,
  CalendarDays,
  Layers,
  Building2,
  HardHat,
  Users,
  Home as HomeIcon,
  Bell,
  Plus,
  Search,
  Eye,
  Sparkles,
  AlertTriangle,
  CircleUser,
} from "lucide-react";
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

function LoginMockup() {
  return (
    <DeviceFrame variant="browser" url="app.cindersx.com/auth">
      <div className="flex flex-col items-center gap-4 px-4 py-8">
        <div className="text-lg font-bold tracking-tight">
          Cinders<span className="text-primary">X</span>
        </div>
        <p className="text-xs text-muted-foreground">Sign in to continue</p>
        <div className="w-full max-w-[220px] space-y-2.5">
          <div className="space-y-1">
            <div className="text-[10px] text-muted-foreground">Email</div>
            <div className="h-8 rounded-md border border-border bg-background px-2 text-[11px] leading-8 text-muted-foreground">
              you@company.co.uk
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-[10px] text-muted-foreground">Password</div>
            <div className="h-8 rounded-md border border-border bg-background px-2 text-[11px] leading-8 text-muted-foreground">
              ••••••••
            </div>
          </div>
          <div className="h-8 rounded-md bg-primary text-center text-[11px] font-semibold leading-8 text-primary-foreground">
            Sign in
          </div>
          <div className="text-center text-[10px] text-muted-foreground underline">Forgotten password?</div>
        </div>
      </div>
    </DeviceFrame>
  );
}

const ZONES = [
  { label: "Management", items: [{ icon: LayoutDashboard, name: "Dashboard" }, { icon: ClipboardList, name: "Reports" }] },
  { label: "Pipeline", items: [{ icon: Inbox, name: "Intake" }, { icon: Handshake, name: "Deals" }, { icon: ClipboardList, name: "Estimating" }] },
  { label: "Operations", items: [{ icon: Briefcase, name: "Jobs" }, { icon: CalendarDays, name: "Planner" }, { icon: Layers, name: "Programme" }, { icon: Building2, name: "Customers & Sites" }] },
  { label: "People", items: [{ icon: HardHat, name: "Engineers" }, { icon: Users, name: "Teams" }] },
];

function SidebarMockup() {
  return (
    <DeviceFrame variant="browser" url="app.cindersx.com/mvp/home">
      <div className="flex gap-2">
        <div className="w-[44%] shrink-0 space-y-3 rounded-lg border border-border bg-card p-2.5">
          <div className="flex items-center gap-1.5 px-1 text-xs font-bold">
            Cinders<span className="text-primary">X</span>
          </div>
          <div className="flex items-center gap-2 rounded-md bg-muted px-2 py-1.5 text-[11px] font-semibold text-primary">
            <HomeIcon className="h-3 w-3" /> Home
          </div>
          {ZONES.map((z) => (
            <div key={z.label} className="space-y-1">
              <div className="px-1 text-[8px] font-semibold uppercase tracking-wider text-muted-foreground">{z.label}</div>
              {z.items.map((it) => (
                <div key={it.name} className="flex items-center gap-2 px-2 py-1 text-[10px] text-muted-foreground">
                  <it.icon className="h-3 w-3 shrink-0" />
                  <span className="truncate">{it.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex-1 space-y-2">
          <div className="h-6 w-2/3 rounded bg-muted" />
          <div className="grid grid-cols-2 gap-2">
            <div className="h-12 rounded-lg border border-border bg-card" />
            <div className="h-12 rounded-lg border border-border bg-card" />
            <div className="h-12 rounded-lg border border-border bg-card" />
            <div className="h-12 rounded-lg border border-border bg-card" />
          </div>
          <div className="h-16 rounded-lg border border-border bg-card" />
        </div>
      </div>
    </DeviceFrame>
  );
}

function TopBarMockup() {
  return (
    <DeviceFrame variant="browser" url="app.cindersx.com/mvp/home">
      <div className="flex items-center justify-between rounded-lg border border-border bg-card px-2.5 py-2">
        <div className="flex items-center gap-1.5 rounded-md bg-background px-2 py-1 text-[10px] text-muted-foreground">
          <Search className="h-3 w-3" /> Home / Today
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 rounded-md bg-primary/15 px-2 py-1 text-[10px] font-medium text-primary">
            <Plus className="h-3 w-3" /> Quick Add
          </span>
          <span className="flex items-center gap-1 rounded-md border border-border px-2 py-1 text-[10px] text-muted-foreground">
            <Eye className="h-3 w-3" /> View As
          </span>
          <span className="relative flex h-6 w-6 items-center justify-center rounded-md border border-border text-muted-foreground">
            <Bell className="h-3 w-3" />
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-destructive" />
          </span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary/20 text-secondary">
            <CircleUser className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-2">
        <div className="h-10 rounded-lg border border-border bg-card" />
        <div className="h-10 rounded-lg border border-border bg-card" />
        <div className="h-10 rounded-lg border border-border bg-card" />
      </div>
    </DeviceFrame>
  );
}

function HomeMockup() {
  return (
    <DeviceFrame variant="browser" url="app.cindersx.com/mvp/home">
      <div className="space-y-2.5">
        <div className="text-xs font-semibold">Good morning 👋</div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { k: "Today's jobs", v: "6", tone: "text-primary" },
            { k: "Awaiting approval", v: "3", tone: "text-secondary" },
            { k: "Overdue", v: "1", tone: "text-destructive" },
          ].map((c) => (
            <div key={c.k} className="rounded-lg border border-border bg-card p-2">
              <div className={`text-lg font-bold ${c.tone}`}>{c.v}</div>
              <div className="text-[9px] leading-tight text-muted-foreground">{c.k}</div>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-l-[3px] border-border border-l-destructive bg-card p-2">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold text-destructive">
            <AlertTriangle className="h-3 w-3" /> Needs attention
          </div>
          <div className="mt-1 space-y-1">
            <div className="h-2.5 w-full rounded bg-muted" />
            <div className="h-2.5 w-4/5 rounded bg-muted" />
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-2">
          <div className="text-[10px] font-semibold">Today's schedule</div>
          <div className="mt-1 space-y-1">
            <div className="h-2.5 w-full rounded bg-muted" />
            <div className="h-2.5 w-3/4 rounded bg-muted" />
          </div>
        </div>
      </div>
    </DeviceFrame>
  );
}

/* ----------------------------- Page ----------------------------- */

const GettingStartedGuide = () => {
  const nextGuides = GUIDES.filter((g) => g.slug !== "getting-started").slice(0, 3);

  return (
    <GuideShell>
      <GuideHero
        icon={Compass}
        eyebrow="Getting Started"
        title="Welcome to CindersX"
        description="This is your starting point. In a few minutes you'll know how to sign in, move around the app, and read your home screen — the foundation for everything else."
      />

      {/* 1. Signing in */}
      <SectionHeading step={1} title="Signing in" description="CindersX runs in your web browser — there's nothing to install." />
      <GuideSplit mockup={<LoginMockup />}>
        <Steps>
          <Step n={1} title="Open the app">
            Go to your CindersX web address in any browser (Chrome, Safari or Edge). Bookmark it for next time.
          </Step>
          <Step n={2} title="Enter your email and password">
            Use the work email your administrator invited. Then select <strong>Sign in</strong>.
          </Step>
          <Step n={3} title="First time? Set your password">
            If it's your first login you'll be asked to create a password before you can continue.
          </Step>
          <Step n={4} title="Forgotten your password?">
            Use the <strong>Forgotten password?</strong> link on the sign-in screen to reset it by email.
          </Step>
        </Steps>
        <div className="mt-6">
          <Callout variant="tip" title="Stay signed in on your own device">
            On a shared or public computer, use the user menu to <strong>Sign out</strong> when you're done.
          </Callout>
        </div>
      </GuideSplit>

      <GuideDivider />

      {/* 2. Finding your way around */}
      <SectionHeading step={2} title="Finding your way around" description="The left sidebar is your main menu. It's grouped into zones so related work sits together." />
      <GuideSplit mockup={<SidebarMockup />} reverse>
        <Steps>
          <Step n={1} title="Home is always at the top">
            Your launchpad for the day — return here any time by selecting <strong>Home</strong>.
          </Step>
          <Step n={2} title="Pipeline — winning the work">
            <strong>Intake → Deals → Estimating</strong>. Enquiries come in, become deals, and get priced.
          </Step>
          <Step n={3} title="Operations — delivering the work">
            <strong>Jobs, Planner, Programme</strong> and <strong>Customers &amp; Sites</strong> — scheduling and getting work done.
          </Step>
          <Step n={4} title="People & Management">
            <strong>Engineers</strong> and <strong>Teams</strong> manage your field staff; <strong>Dashboard</strong> and <strong>Reports</strong> show how things are going.
          </Step>
        </Steps>
        <div className="mt-6">
          <Callout variant="info" title="You only see what your role needs">
            Your menu is tailored to your role, so admin and configuration areas may not appear for everyone. If you think
            you're missing something you need, ask your administrator.
          </Callout>
        </div>
      </GuideSplit>

      <GuideDivider />

      {/* 3. Your Home screen */}
      <SectionHeading step={3} title="Reading your home screen" description="Home is a command centre — the things that need you today, at a glance." />
      <GuideSplit mockup={<HomeMockup />}>
        <Steps>
          <Step n={1} title="Key numbers at the top">
            Quick counts like today's jobs, items awaiting approval, and anything overdue.
          </Step>
          <Step n={2} title="Needs attention">
            The red-edged card surfaces urgent items and anything past its deadline — start here each morning.
          </Step>
          <Step n={3} title="Today's schedule">
            See what's planned for the day. Select any item to jump straight to its full record.
          </Step>
        </Steps>
        <div className="mt-6">
          <Callout variant="warning" title="Red means act today">
            Anything shown in red is overdue or breaching a deadline. Clearing these first keeps the pipeline healthy.
          </Callout>
        </div>
      </GuideSplit>

      <GuideDivider />

      {/* 4. The top bar */}
      <SectionHeading step={4} title="Tools in the top bar" description="A few controls live at the top of every screen, wherever you are in the app." />
      <GuideSplit mockup={<TopBarMockup />} reverse>
        <Steps>
          <Step n={1} title="Quick Add">
            The <strong>Quick Add</strong> button creates a new record — intake, deal, job and more — from anywhere.
          </Step>
          <Step n={2} title="Breadcrumb & search">
            The breadcrumb on the left shows where you are and lets you hop back up a level.
          </Step>
          <Step n={3} title="Notifications">
            The <Bell className="inline h-3.5 w-3.5 align-text-bottom" /> bell flags new activity assigned to you. A dot means something's waiting.
          </Step>
          <Step n={4} title="Your profile & sign out">
            The avatar on the far right opens your profile, settings, and the sign-out option.
          </Step>
        </Steps>
        <div className="mt-6">
          <Callout variant="info" title="“View As” for managers">
            If you manage others, <strong>View As</strong> lets you preview the app exactly as a colleague sees it — handy for
            helping someone who's stuck.
          </Callout>
        </div>
      </GuideSplit>

      <GuideDivider />

      {/* Next steps */}
      <SectionHeading icon={Sparkles} title="Where to go next" description="Now that you know your way around, here are the guides for your day-to-day work." />
      <div className="grid gap-4 sm:grid-cols-3">
        {nextGuides.map((g) => (
          <GuideCard
            key={g.slug}
            to={g.path}
            icon={g.icon}
            title={g.title}
            description={g.description}
            audience={g.audience}
            available={g.available}
          />
        ))}
      </div>

      <div className="mt-12">
        <GuideCTA
          title="Ready to dive in?"
          description="Open CindersX and start with your home screen — or browse the rest of the guides any time."
          primaryLabel="Open CindersX"
          primaryTo={appPath("/mvp/home")}
          secondaryLabel="Browse all guides"
          secondaryTo="/"
        />
      </div>
    </GuideShell>
  );
};

export default GettingStartedGuide;

import {
  HardHat,
  Play,
  CheckCircle2,
  Camera,
  MapPin,
  Clock,
  LogIn,
  LogOut,
  Phone,
  Crown,
  Sparkles,
  CalendarDays,
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
  StatusBadge,
  GuideCard,
  GuideCTA,
  GuideDivider,
  GuideVideo,
} from "@/components/guides/guide-primitives";
import { AnimatedStartJobMockup } from "@/components/guides/MotionMockups";
import { GUIDES } from "./guides-registry";
import { appPath } from "@/config";

/* ----------------------------- Mockup helpers ----------------------------- */

function PhoneHeader({ name, lead = false }: { name: string; lead?: boolean }) {
  return (
    <div className="flex items-center gap-2 border-b border-border pb-2">
      <div className="text-[11px] font-bold">
        Cinders<span className="text-primary">X</span>
      </div>
      <div className="ml-auto text-right">
        <div className="flex items-center justify-end gap-1 text-[10px] font-semibold leading-tight">
          {lead && <Crown className="h-2.5 w-2.5 text-blue-400" />}
          {name}
        </div>
        <div className="text-[8px] text-muted-foreground">Mon 8 June 2026</div>
      </div>
    </div>
  );
}

function MiniJobCard({
  site,
  customer,
  status,
  tone,
  type,
  time,
  action,
}: {
  site: string;
  customer: string;
  status: string;
  tone: "teal" | "orange" | "amber";
  type: string;
  time: string;
  action?: { label: string; icon: typeof Play; primary?: boolean };
}) {
  return (
    <div className="space-y-1.5 rounded-lg border border-border bg-card p-2.5">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <div className="truncate text-[11px] font-semibold leading-tight">{site}</div>
          <div className="truncate text-[9px] text-muted-foreground">{customer}</div>
        </div>
        <StatusBadge tone={tone}>{status}</StatusBadge>
      </div>
      <div className="flex items-center gap-1 text-[8px] text-muted-foreground">
        <span className="rounded border border-border px-1 py-px">{type}</span>
      </div>
      <div className="flex items-center gap-1 text-[9px] text-muted-foreground">
        <MapPin className="h-2.5 w-2.5 shrink-0" /> 12 Riverside, Leeds LS1
      </div>
      <div className="flex items-center gap-1 text-[9px] text-muted-foreground">
        <Clock className="h-2.5 w-2.5 shrink-0" /> {time}
      </div>
      {action && (
        <div
          className={`mt-1 flex items-center justify-center gap-1 rounded-md py-1.5 text-[10px] font-semibold ${
            action.primary ? "bg-primary text-primary-foreground" : "border border-input"
          }`}
        >
          <action.icon className="h-3 w-3" /> {action.label}
        </div>
      )}
    </div>
  );
}

function JobListMockup() {
  return (
    <DeviceFrame variant="phone">
      <PhoneHeader name="Sam Patel" />
      <div className="mt-2 space-y-2">
        <div className="text-sm font-bold">My Jobs</div>
        <div className="text-[8px] font-semibold uppercase tracking-wide text-muted-foreground">Today (2)</div>
        <MiniJobCard
          site="Riverside Tower"
          customer="Acme Facilities"
          status="Confirmed"
          tone="teal"
          type="Fire Door Inspection"
          time="08:00–12:00"
          action={{ label: "Start Job", icon: Play, primary: true }}
        />
        <MiniJobCard
          site="Oak House"
          customer="Brookfield Ltd"
          status="In Progress"
          tone="orange"
          type="Emergency Lighting"
          time="13:00–15:00"
          action={{ label: "Mark Complete", icon: CheckCircle2, primary: true }}
        />
        <div className="text-[8px] font-semibold uppercase tracking-wide text-muted-foreground">Tomorrow (1)</div>
        <MiniJobCard site="The Gables" customer="Hilltop Homes" status="Confirmed" tone="teal" type="Survey" time="09:30" />
      </div>
    </DeviceFrame>
  );
}

function CompleteMockup() {
  return (
    <DeviceFrame variant="phone">
      <PhoneHeader name="Sam Patel" />
      <div className="mt-2 space-y-2.5">
        <div className="text-[11px] font-bold">Complete JOB-2026-0042</div>
        <div className="space-y-1">
          <div className="text-[9px] font-medium">Completion Notes *</div>
          <div className="h-16 rounded-md border border-border bg-background p-1.5 text-[9px] text-muted-foreground">
            All 14 fire doors inspected. 2 failed self-closing — flagged on site…
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-1 text-[9px] font-medium">
            <Camera className="h-2.5 w-2.5" /> Photos (optional)
          </div>
          <div className="rounded-md border border-dashed border-border bg-background px-2 py-1.5 text-[9px] text-muted-foreground">
            3 file(s) selected
          </div>
        </div>
        <div className="flex gap-2 pt-1">
          <div className="flex-1 rounded-md border border-input py-1.5 text-center text-[10px] font-semibold">Cancel</div>
          <div className="flex-1 rounded-md bg-primary py-1.5 text-center text-[10px] font-semibold text-primary-foreground">
            Submit
          </div>
        </div>
      </div>
    </DeviceFrame>
  );
}

function LeadRouteMockup() {
  return (
    <DeviceFrame variant="phone">
      <PhoneHeader name="Dana Cole" lead />
      <div className="mt-2 space-y-2">
        <div className="flex items-center gap-1 text-[8px] font-semibold uppercase tracking-wide text-primary">
          <CalendarDays className="h-2.5 w-2.5" /> Today
        </div>
        {/* checked in stop */}
        <div className="space-y-1.5 rounded-lg border border-border bg-card p-2.5">
          <div className="text-[11px] font-semibold leading-tight">Riverside Tower</div>
          <div className="flex items-center gap-1 text-[9px] text-muted-foreground">
            <Clock className="h-2.5 w-2.5" /> 08:00–12:00 · checked in 08:12
          </div>
          <div className="flex items-center gap-1 text-[9px] text-muted-foreground">
            <Phone className="h-2.5 w-2.5" /> Site contact: Jo · 07700 900123
          </div>
          <div className="flex gap-1">
            <span className="rounded border border-border px-1 py-px text-[8px] text-muted-foreground">Ladder</span>
            <span className="rounded border border-border px-1 py-px text-[8px] text-muted-foreground">Keys req'd</span>
          </div>
          <div className="mt-1 flex items-center justify-center gap-1 rounded-md border border-input py-1.5 text-[10px] font-semibold">
            <LogOut className="h-3 w-3" /> Check Out
          </div>
        </div>
        {/* not yet checked in */}
        <div className="space-y-1.5 rounded-lg border border-border bg-card p-2.5">
          <div className="text-[11px] font-semibold leading-tight">Oak House</div>
          <div className="flex items-center gap-1 text-[9px] text-muted-foreground">
            <Clock className="h-2.5 w-2.5" /> 13:00–15:00
          </div>
          <div className="mt-1 flex items-center justify-center gap-1 rounded-md bg-primary py-1.5 text-[10px] font-semibold text-primary-foreground">
            <LogIn className="h-3 w-3" /> Check In
          </div>
        </div>
      </div>
    </DeviceFrame>
  );
}

/* ----------------------------- Page ----------------------------- */

const FieldEngineersGuide = () => {
  const nextGuides = GUIDES.filter((g) => g.slug !== "field-engineers" && g.available).slice(0, 3);

  return (
    <GuideShell>
      <GuideHero
        icon={HardHat}
        eyebrow="Field Engineers"
        title="Working in the field"
        description="CindersX gives you a simple mobile view built for the job: see what's on today, start your work, and sign it off with notes and photos — all from your phone."
      />

      <div className="mb-12">
        <GuideVideo
          src="/media/field-complete-job.mp4"
          title="Start and complete a job — start to finish"
          description="A real walkthrough on a phone: open My Jobs, start the job, then sign it off with notes."
          portrait
        />
      </div>

      {/* 1. Your job list */}
      <SectionHeading
        step={1}
        title="Your jobs for the day"
        description="Sign in on your phone and you go straight to My Jobs — no menus to dig through."
      />
      <GuideSplit mockup={<JobListMockup />}>
        <Steps>
          <Step n={1} title="Open CindersX on your phone">
            Sign in with your usual email and password. As field staff you land directly on your <strong>My Jobs</strong> list.
          </Step>
          <Step n={2} title="Today, Tomorrow & Next Week">
            Jobs are grouped so today's work is right at the top. Each card shows the site, customer, job type, address and time.
          </Step>
          <Step n={3} title="Check the details before you travel">
            Tap a job to see the address and timing. The <MapPin className="inline h-3.5 w-3.5 align-text-bottom" /> address and <Clock className="inline h-3.5 w-3.5 align-text-bottom" /> time are on every card.
          </Step>
        </Steps>
        <div className="mt-6">
          <Callout variant="info" title="Status colours">
            <span className="inline-flex flex-wrap items-center gap-2">
              <StatusBadge tone="teal">Confirmed</StatusBadge> ready to start ·
              <StatusBadge tone="orange">In Progress</StatusBadge> you've started it
            </span>
          </Callout>
        </div>
      </GuideSplit>

      <GuideDivider />

      {/* 2. Starting a job */}
      <SectionHeading
        step={2}
        title="Starting a job"
        description="When you arrive on site and begin work, tell CindersX you've started."
      />
      <GuideSplit mockup={<AnimatedStartJobMockup />} reverse>
        <Steps>
          <Step n={1} title="Find today's job">
            Confirmed jobs in your <strong>Today</strong> list have a big <strong>Start Job</strong> button.
          </Step>
          <Step n={2} title="Tap Start Job">
            The job moves to <StatusBadge tone="orange">In Progress</StatusBadge> so the office can see you're on it.
          </Step>
          <Step n={3} title="Get to work">
            That's it — the button changes to <strong>Mark Complete</strong>, ready for when you finish.
          </Step>
        </Steps>
        <div className="mt-6">
          <Callout variant="tip" title="One tap, no forms">
            Starting a job is a single tap. You don't need to fill anything in until you're ready to complete it.
          </Callout>
        </div>
      </GuideSplit>

      <GuideDivider />

      {/* 3. Completing a job */}
      <SectionHeading
        step={3}
        title="Completing a job"
        description="When the work is done, record what you did and add any photos."
      />
      <GuideSplit mockup={<CompleteMockup />}>
        <Steps>
          <Step n={1} title="Tap Mark Complete">
            A panel slides up from the bottom for your sign-off.
          </Step>
          <Step n={2} title="Add your completion notes">
            Say what was done and flag anything noticed on site. <strong>Notes are required</strong> — a short line is fine.
          </Step>
          <Step n={3} title="Attach photos (optional)">
            Tap <Camera className="inline h-3.5 w-3.5 align-text-bottom" /> to add photos from your phone — before/after shots, faults, certificates.
          </Step>
          <Step n={4} title="Submit">
            Your sign-off is recorded and the job goes to the office to review and approve final completion.
          </Step>
        </Steps>
        <div className="mt-6">
          <Callout variant="warning" title="The office approves the final sign-off">
            Submitting records <strong>your</strong> completion — the job then sits in review until the office confirms it.
            So if a job disappears from your list after submitting, that's expected.
          </Callout>
        </div>
      </GuideSplit>

      <GuideDivider />

      {/* 4. Lead engineers */}
      <SectionHeading
        icon={Crown}
        title="Lead engineers: your weekly route"
        description="If you're a lead engineer, your view shows your planned route for the week, with check-in and check-out at each stop."
      />
      <GuideSplit mockup={<LeadRouteMockup />} reverse>
        <Steps>
          <Step n={1} title="See your week, day by day">
            Your stops are grouped by day with today open first — including times, the site contact, and any access equipment needed.
          </Step>
          <Step n={2} title="Check in when you arrive">
            Tap <strong>Check In</strong> at a stop to record your arrival time.
          </Step>
          <Step n={3} title="Check out when you leave">
            Tap <strong>Check Out</strong> when you're done at that site. The times are visible to the office.
          </Step>
        </Steps>
        <div className="mt-6">
          <Callout variant="info" title="Useful site info up front">
            Each stop shows the <Phone className="inline h-3.5 w-3.5 align-text-bottom" /> site contact and any access kit
            (ladders, keys) so you arrive prepared.
          </Callout>
        </div>
      </GuideSplit>

      <GuideDivider />

      {/* Good to know */}
      <SectionHeading icon={Sparkles} title="A few handy things" />
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-5">
          <LogOut className="h-5 w-5 text-primary" />
          <p className="mt-3 font-semibold">Signing out</p>
          <p className="mt-1 text-sm text-muted-foreground">Use the <strong>Sign out</strong> button top-right if you're on a shared device.</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <CalendarDays className="h-5 w-5 text-primary" />
          <p className="mt-3 font-semibold">No job showing?</p>
          <p className="mt-1 text-sm text-muted-foreground">Only confirmed jobs appear. If something's missing, contact the office to confirm and assign it.</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <HardHat className="h-5 w-5 text-primary" />
          <p className="mt-3 font-semibold">Add to home screen</p>
          <p className="mt-1 text-sm text-muted-foreground">Save CindersX to your phone's home screen so it opens like an app.</p>
        </div>
      </div>

      {nextGuides.length > 0 && (
        <>
          <SectionHeading icon={Sparkles} title="Where to go next" />
          <div className="grid gap-4 sm:grid-cols-3">
            {nextGuides.map((g) => (
              <GuideCard key={g.slug} to={g.path} icon={g.icon} title={g.title} description={g.description} audience={g.audience} available={g.available} />
            ))}
          </div>
        </>
      )}

      <div className="mt-12">
        <GuideCTA
          title="Ready for the field?"
          description="Open CindersX on your phone to see today's jobs."
          primaryLabel="Open Field View"
          primaryTo={appPath("/mvp/field")}
          secondaryLabel="Browse all guides"
          secondaryTo="/"
        />
      </div>
    </GuideShell>
  );
};

export default FieldEngineersGuide;

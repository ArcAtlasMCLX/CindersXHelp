import { CalendarDays, AlertTriangle, Route, ChevronLeft, ChevronRight, Plus, Map, Sparkles } from "lucide-react";
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
import { AnimatedPlannerMockup } from "@/components/guides/MotionMockups";
import { GUIDES } from "./guides-registry";
import { appPath } from "@/config";

/* ----------------------------- Mockups ----------------------------- */

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];

function PlannerMockup() {
  // [engineer, [startCol, span, colorClass]...]
  const rows: { name: string; blocks: { start: number; span: number; cls: string }[] }[] = [
    { name: "Sam P.", blocks: [{ start: 0, span: 2, cls: "bg-blue-500/80" }, { start: 3, span: 1, cls: "bg-emerald-500/80" }] },
    { name: "Dana C.", blocks: [{ start: 1, span: 1, cls: "bg-amber-500/80" }, { start: 2, span: 2, cls: "bg-blue-500/80" }] },
    { name: "Lee R.", blocks: [{ start: 4, span: 1, cls: "bg-amber-500/80" }] },
  ];
  return (
    <DeviceFrame variant="browser" url="app.cindersx.com/mvp/planner">
      <div className="flex gap-2 p-1">
        {/* unscheduled sidebar */}
        <div className="w-[34%] shrink-0 space-y-1.5">
          <div className="flex items-center gap-1 text-[8px] font-semibold uppercase tracking-wide text-muted-foreground">
            Unscheduled <span className="rounded-full bg-primary px-1 text-[8px] text-primary-foreground">3</span>
          </div>
          {["DL · Oak House", "DL · The Gables", "DL · Mill Court"].map((t) => (
            <div key={t} className="rounded-md border border-border bg-card p-1.5">
              <div className="text-[8px] font-semibold">{t}</div>
              <div className="text-[7px] text-muted-foreground">0 of 2 days scheduled</div>
            </div>
          ))}
        </div>
        {/* timeline */}
        <div className="min-w-0 flex-1 space-y-1.5">
          {/* nav + KPIs */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-[8px] text-muted-foreground">
              <ChevronLeft className="h-2.5 w-2.5" /> 9–13 Jun <ChevronRight className="h-2.5 w-2.5" />
            </div>
            <div className="flex gap-1">
              <span className="rounded bg-muted px-1 text-[7px] text-muted-foreground">78% booked</span>
              <span className="rounded bg-destructive/15 px-1 text-[7px] text-destructive">1 overdue</span>
            </div>
          </div>
          {/* grid */}
          <div className="overflow-hidden rounded-md border border-border">
            <div className="grid grid-cols-[28px_repeat(5,1fr)] bg-muted/40 text-[7px] text-muted-foreground">
              <div className="px-1 py-0.5" />
              {DAYS.map((d) => (
                <div key={d} className="px-1 py-0.5 text-center">{d}</div>
              ))}
            </div>
            {rows.map((r) => (
              <div key={r.name} className="grid grid-cols-[28px_repeat(5,1fr)] items-center border-t border-border">
                <div className="truncate px-1 py-1 text-[7px] font-medium">{r.name}</div>
                {DAYS.map((_, ci) => {
                  const blk = r.blocks.find((b) => b.start === ci);
                  if (blk) {
                    return (
                      <div key={ci} className="px-0.5 py-1" style={{ gridColumn: `span ${blk.span}` }}>
                        <div className={`h-3 rounded ${blk.cls}`} />
                      </div>
                    );
                  }
                  // skip cells covered by a preceding span
                  const covered = r.blocks.some((b) => ci > b.start && ci < b.start + b.span);
                  if (covered) return null;
                  return <div key={ci} className="px-0.5 py-1" />;
                })}
              </div>
            ))}
          </div>
          {/* legend */}
          <div className="flex flex-wrap gap-2 text-[7px] text-muted-foreground">
            <span className="flex items-center gap-0.5"><span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> Proposed</span>
            <span className="flex items-center gap-0.5"><span className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Confirmed</span>
            <span className="flex items-center gap-0.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> In Progress</span>
          </div>
        </div>
      </div>
    </DeviceFrame>
  );
}

function ScheduleDrawerMockup() {
  return (
    <DeviceFrame variant="browser" url="app.cindersx.com/mvp/planner">
      <div className="ml-auto w-[72%] space-y-2.5 rounded-l-lg border-l border-border bg-card p-2.5">
        <div className="text-[10px] font-semibold">JOB-2026-0042 · Oak House</div>
        <div className="space-y-1">
          <div className="text-[8px] font-medium text-muted-foreground">Assigned User</div>
          <div className="flex h-6 items-center justify-between rounded-md border border-border bg-background px-2 text-[9px]">
            Sam Patel <span className="text-muted-foreground">▾</span>
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[8px] font-medium text-muted-foreground">Schedule</span>
            <StatusBadge tone="teal">Total: 3 days</StatusBadge>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            <div className="space-y-0.5">
              <div className="text-[7px] text-muted-foreground">Start</div>
              <div className="h-5 rounded border border-border bg-background px-1 text-[8px] leading-5">Wed 11 Jun</div>
            </div>
            <div className="space-y-0.5">
              <div className="text-[7px] text-muted-foreground">End</div>
              <div className="h-5 rounded border border-border bg-background px-1 text-[8px] leading-5">Fri 13 Jun</div>
            </div>
          </div>
          <div className="inline-flex items-center gap-1 text-[8px] text-primary">
            <Plus className="h-2.5 w-2.5" /> Add another segment (split job)
          </div>
        </div>
        <div className="space-y-1">
          <div className="text-[8px] font-medium text-muted-foreground">Team (per day)</div>
          <div className="flex flex-wrap gap-1">
            <span className="rounded-full bg-secondary/15 px-1.5 py-0.5 text-[8px] text-secondary">Sam P. · Lead</span>
            <span className="rounded-full bg-muted px-1.5 py-0.5 text-[8px] text-muted-foreground">+ Add team member</span>
          </div>
        </div>
      </div>
    </DeviceFrame>
  );
}

function ConflictsMockup() {
  return (
    <DeviceFrame variant="browser" url="app.cindersx.com/mvp/planner">
      <div className="space-y-2 p-1">
        <div className="flex items-center gap-1.5 rounded-md border border-amber-500/40 bg-amber-500/5 px-2 py-1.5 text-[9px] font-semibold text-amber-600 dark:text-amber-400">
          <AlertTriangle className="h-3 w-3" /> Conflicts &amp; Warnings (2)
        </div>
        <div className="rounded-md border border-amber-500/30 bg-card p-2 text-[9px]">
          <span className="font-medium text-amber-600 dark:text-amber-400">Over-booked:</span>
          <span className="text-muted-foreground"> Dana C. — 6 days vs 5 available</span>
        </div>
        <div className="rounded-md border border-destructive/30 bg-card p-2 text-[9px]">
          <span className="font-medium text-destructive">Missed start:</span>
          <span className="text-muted-foreground"> JOB-0039 missed start date (6 Jun)</span>
        </div>
        <div className="rounded-md bg-card p-2">
          <div className="flex justify-between text-[8px] text-muted-foreground"><span>Capacity booked</span><span>78%</span></div>
          <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-muted">
            <div className="h-full w-[78%] rounded-full bg-primary" />
          </div>
        </div>
      </div>
    </DeviceFrame>
  );
}

function ProgrammeMockup() {
  return (
    <DeviceFrame variant="browser" url="app.cindersx.com/mvp/programme">
      <div className="space-y-2 p-1">
        <div className="grid grid-cols-[36px_repeat(3,1fr)] gap-1 text-[7px] text-muted-foreground">
          <div />
          {["Mon", "Tue", "Wed"].map((d) => <div key={d} className="text-center">{d}</div>)}
          {[
            { name: "Dana", cells: ["Full", "Half", ""] },
            { name: "Lee", cells: ["", "Half", "Full"] },
          ].map((r) => (
            <RouteRow key={r.name} name={r.name} cells={r.cells} />
          ))}
        </div>
        <div className="flex items-center gap-1 rounded-md bg-card p-2 text-[8px] text-muted-foreground">
          <Map className="h-3 w-3 text-secondary" /> Map view · stops plotted by site postcode
        </div>
      </div>
    </DeviceFrame>
  );
}

function RouteRow({ name, cells }: { name: string; cells: string[] }) {
  return (
    <>
      <div className="self-center text-[7px] font-medium">{name}</div>
      {cells.map((c, i) => (
        <div key={i} className="min-h-6 rounded border border-border bg-card p-0.5">
          {c && (
            <div className={`rounded px-0.5 text-center text-[7px] ${c === "Full" ? "bg-blue-500/70 text-white" : "bg-amber-500/70 text-black"}`}>
              {c} day
            </div>
          )}
        </div>
      ))}
    </>
  );
}

/* ----------------------------- Page ----------------------------- */

const PlanningSchedulingGuide = () => {
  const nextGuides = GUIDES.filter((g) => g.slug !== "planning-scheduling" && g.available).slice(0, 3);

  return (
    <GuideShell>
      <GuideHero
        icon={CalendarDays}
        eyebrow="Planning & Scheduling"
        title="Filling the week"
        description="The Planner is where confirmed work gets people and dates. Schedule jobs onto your engineers, balance the load, and keep an eye on conflicts — all on one screen."
      />

      <div className="mb-12">
        <GuideVideo
          src="/media/schedule-job.mp4"
          title="Schedule a job on the Planner"
          description="A real walkthrough: open a job from the Unscheduled panel and assign the engineer who'll do the work."
        />
      </div>

      {/* 1. Know the planner */}
      <SectionHeading
        step={1}
        title="Get to know the Planner"
        description="A weekly timeline of your engineers, with everything still to schedule down the side."
      />
      <GuideSplit mockup={<AnimatedPlannerMockup />}>
        <Steps>
          <Step n={1} title="Unscheduled, down the left">
            Jobs needing dates sit in the <strong>Unscheduled</strong> panel, each showing how many of its days are booked.
          </Step>
          <Step n={2} title="The timeline grid">
            Rows are engineers, columns are days. Coloured blocks are scheduled jobs — colour shows their status.
          </Step>
          <Step n={3} title="Move around the week">
            Use <strong>Previous / This Week / Next</strong> to navigate, and zoom out to two weeks or a month.
          </Step>
          <Step n={4} title="Read the KPIs">
            The top bar shows jobs to schedule, <strong>capacity booked</strong>, completed, and anything overdue.
          </Step>
        </Steps>
        <div className="mt-6">
          <Callout variant="info" title="Status colours">
            <span className="inline-flex flex-wrap items-center gap-2">
              <StatusBadge tone="amber">Proposed</StatusBadge>
              <StatusBadge tone="blue">Confirmed</StatusBadge>
              <StatusBadge tone="green">In Progress</StatusBadge>
            </span>
          </Callout>
        </div>
      </GuideSplit>

      <GuideDivider />

      {/* 2. Schedule a job */}
      <SectionHeading
        step={2}
        title="Schedule a job"
        description="Open a job to set who does it and when — including multi-day and split jobs."
      />
      <GuideSplit mockup={<ScheduleDrawerMockup />} reverse>
        <Steps>
          <Step n={1} title="Open the job">
            Select a job from the Unscheduled panel or the grid. A scheduling panel opens on the right.
          </Step>
          <Step n={2} title="Assign the engineer">
            Pick the primary engineer under <strong>Assigned User</strong>.
          </Step>
          <Step n={3} title="Add the dates">
            Under <strong>Schedule</strong>, set a start and end date. The <strong>Total: X days</strong> badge tracks booked vs planned days.
          </Step>
          <Step n={4} title="Build the team & split if needed">
            Add people under <strong>Team (per day)</strong>, or <strong>Add another segment</strong> to split a job across non-consecutive dates.
          </Step>
        </Steps>
        <div className="mt-6">
          <Callout variant="warning" title="Don't over-book the days">
            CindersX won't let you book more days than were planned (“Exceeds planned days”). Adjust the estimate first, or
            split the work — it keeps capacity honest.
          </Callout>
        </div>
      </GuideSplit>

      <GuideDivider />

      {/* 3. Conflicts */}
      <SectionHeading
        step={3}
        title="Stay ahead of conflicts"
        description="CindersX flags problems before they bite, so the week actually holds together."
      />
      <GuideSplit mockup={<ConflictsMockup />}>
        <Steps>
          <Step n={1} title="Open Conflicts & Warnings">
            The panel at the top of the Planner lists issues with a count badge.
          </Step>
          <Step n={2} title="Fix over-booked engineers">
            A <strong>warning</strong> shows when someone has more days booked than they have available — rebalance the load.
          </Step>
          <Step n={3} title="Catch missed starts & missing docs">
            <strong>Danger</strong> flags a confirmed job that's past its start date with no schedule, or one starting tomorrow missing required documents.
          </Step>
        </Steps>
        <div className="mt-6">
          <Callout variant="tip" title="Watch capacity, not just the grid">
            The <strong>Capacity booked</strong> figure tells you how full the week is across all engineers — aim to fill it without tipping anyone over.
          </Callout>
        </div>
      </GuideSplit>

      <GuideDivider />

      {/* 4. Routes & Programme */}
      <SectionHeading
        icon={Route}
        title="Routes & the Programme"
        description="For lead engineers covering several sites a day, the Programme plans part-day visits."
      />
      <GuideSplit mockup={<ProgrammeMockup />} reverse>
        <Steps>
          <Step n={1} title="Open Programme">
            The <strong>Programme</strong> page shows lead engineers across the week, day by day.
          </Step>
          <Step n={2} title="Add a visit">
            Use <strong>Add Visit</strong> to drop a site visit on a day — <strong>Full</strong>, <strong>Half</strong> or <strong>Quarter</strong> day — so one person can cover several sites.
          </Step>
          <Step n={3} title="Don't overbook the day">
            If a day's visits add up to more than one full day, it's flagged as overbooked.
          </Step>
          <Step n={4} title="See it on the map">
            The map view plots each engineer's stops by site postcode, so routes make geographic sense.
          </Step>
        </Steps>
        <div className="mt-6">
          <Callout variant="info" title="Scheduling vs status">
            Scheduling a job sets its people and dates — it doesn't change the job's status. Customer confirmation of dates
            is handled separately (see the Client Proposals flow).
          </Callout>
        </div>
      </GuideSplit>

      <GuideDivider />

      {/* Next steps */}
      <SectionHeading icon={Sparkles} title="Where to go next" />
      <div className="grid gap-4 sm:grid-cols-3">
        {nextGuides.map((g) => (
          <GuideCard key={g.slug} to={g.path} icon={g.icon} title={g.title} description={g.description} audience={g.audience} available={g.available} />
        ))}
      </div>

      <div className="mt-12">
        <GuideCTA
          title="Ready to plan the week?"
          description="Open the Planner and start placing jobs."
          primaryLabel="Open Planner"
          primaryTo={appPath("/mvp/planner")}
          secondaryLabel="Browse all guides"
          secondaryTo="/"
        />
      </div>
    </GuideShell>
  );
};

export default PlanningSchedulingGuide;

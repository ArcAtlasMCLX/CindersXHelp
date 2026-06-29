import { Inbox, FileUp, CheckCircle2, Sparkles } from "lucide-react";
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
import { AnimatedPromoteGatesMockup } from "@/components/guides/MotionMockups";
import { GUIDES } from "./guides-registry";
import { appPath } from "@/config";

/* ----------------------------- Mockups ----------------------------- */

function Field({ label, value, placeholder }: { label: string; value?: string; placeholder?: boolean }) {
  return (
    <div className="space-y-1">
      <div className="text-[9px] text-muted-foreground">{label}</div>
      <div className={`h-7 rounded-md border border-border bg-background px-2 text-[10px] leading-7 ${placeholder ? "text-muted-foreground" : ""}`}>
        {value}
      </div>
    </div>
  );
}

function CaptureLeadMockup() {
  return (
    <DeviceFrame variant="browser" url="app.cindersx.com/mvp/intake">
      <div className="space-y-2.5 p-1">
        <div className="text-xs font-bold">New Intake</div>
        <Field label="Customer / Site *" value="Acme Facilities — Riverside Tower" />
        <Field label="Job / Asset Type" value="Fire Door Inspection" />
        <div className="space-y-1">
          <div className="text-[9px] text-muted-foreground">Urgency / Next Step *</div>
          <div className="flex h-7 items-center justify-between rounded-md border border-border bg-background px-2 text-[10px]">
            New Lead <span className="text-muted-foreground">▾</span>
          </div>
        </div>
        <Field label="Email *" value="jo@acmefm.co.uk" />
        <Field label="Phone" value="07700 900123" />
        <div className="space-y-1">
          <div className="text-[9px] text-muted-foreground">Notes</div>
          <div className="h-10 rounded-md border border-border bg-background p-1.5 text-[9px] text-muted-foreground">
            Enquiry via phone — 14 fire doors, annual inspection…
          </div>
        </div>
        <div className="mt-1 rounded-md bg-primary py-1.5 text-center text-[10px] font-semibold text-primary-foreground">
          Capture Lead
        </div>
      </div>
    </DeviceFrame>
  );
}

function GatesMockup() {
  const gates = ["Verified customer", "Verified site", "Contact method", "Job type", "Owner assigned"];
  return (
    <DeviceFrame variant="browser" url="app.cindersx.com/mvp/intake/IN-2026-0118">
      <div className="space-y-2.5 p-1">
        <div className="flex items-center justify-between">
          <div className="text-[11px] font-semibold">Acme Facilities — Riverside Tower</div>
          <StatusBadge tone="green">Ready to Promote</StatusBadge>
        </div>
        <div className="rounded-lg border border-border bg-card p-2.5">
          <div className="mb-2 text-[9px] font-semibold uppercase tracking-wide text-muted-foreground">
            Promotion readiness
          </div>
          <div className="space-y-1.5">
            {gates.map((g) => (
              <div key={g} className="flex items-center gap-1.5 text-[10px]">
                <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                {g}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-md bg-primary py-1.5 text-center text-[10px] font-semibold text-primary-foreground">
          Promote to Deal
        </div>
      </div>
    </DeviceFrame>
  );
}

function PipelineMockup() {
  const cols = [
    { name: "Lead", tone: "slate" as const, cards: 2 },
    { name: "Estimating", tone: "amber" as const, cards: 1, active: true },
    { name: "Awaiting Approval", tone: "orange" as const, cards: 1 },
    { name: "Approved", tone: "green" as const, cards: 3 },
  ];
  return (
    <DeviceFrame variant="browser" url="app.cindersx.com/mvp/deals">
      <div className="flex gap-1.5 p-1">
        {cols.map((c) => (
          <div key={c.name} className="flex-1 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[8px] font-semibold uppercase tracking-wide text-muted-foreground">{c.name}</span>
            </div>
            {Array.from({ length: c.cards }).map((_, i) => (
              <div
                key={i}
                className={`rounded-md border bg-card p-1.5 ${c.active && i === 0 ? "border-primary/50" : "border-border"}`}
              >
                <div className="h-1.5 w-3/4 rounded bg-muted" />
                <div className="mt-1 h-1.5 w-1/2 rounded bg-muted" />
                {c.active && i === 0 && (
                  <div className="mt-1">
                    <StatusBadge tone={c.tone}>£12k</StatusBadge>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </DeviceFrame>
  );
}

function RequestEstimateMockup() {
  return (
    <DeviceFrame variant="browser" url="app.cindersx.com/mvp/deals/DL-2026-0091">
      <div className="space-y-2.5 p-1">
        <div className="flex items-center justify-between">
          <div className="text-[11px] font-semibold">Riverside Tower · Fire Doors</div>
          <StatusBadge tone="slate">Lead</StatusBadge>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Field label="Deal value" value="£12,000" />
          <Field label="Labour days" value="3" />
        </div>
        <div className="rounded-lg border border-border bg-card p-2.5">
          <div className="text-[9px] font-semibold">Estimation</div>
          <div className="mt-1 text-[9px] text-muted-foreground">Needs a technical estimate before quoting.</div>
          <div className="mt-2 rounded-md bg-primary py-1.5 text-center text-[10px] font-semibold text-primary-foreground">
            Request Estimate
          </div>
        </div>
      </div>
    </DeviceFrame>
  );
}

/* ----------------------------- Page ----------------------------- */

const SalesCoordinationGuide = () => {
  const nextGuides = GUIDES.filter(
    (g) => g.slug !== "sales-coordination" && g.available
  ).slice(0, 3);

  return (
    <GuideShell>
      <GuideHero
        icon={Inbox}
        eyebrow="Sales & Coordination"
        title="From enquiry to deal"
        description="Capture every enquiry, get it ready, and turn it into a deal — then request an estimate so it can be priced. This is the front of the CindersX pipeline."
      />

      {/* 1. Capture a lead */}
      <SectionHeading
        step={1}
        title="Capture a lead"
        description="Every enquiry starts as an Intake — a quick record so nothing slips through the cracks."
      />
      <GuideSplit mockup={<CaptureLeadMockup />}>
        <Steps>
          <Step n={1} title="Open Intake → New Intake">
            From the <strong>Pipeline → Intake</strong> menu, select <strong>New Intake</strong>.
          </Step>
          <Step n={2} title="Link the customer & site">
            Search for the customer or site. If they're new, you can create a provisional record on the spot.
          </Step>
          <Step n={3} title="Set the next step">
            Choose the urgency: <strong>New Lead</strong>, <strong>Call Back</strong>, <strong>Quoted</strong> or <strong>Info Only</strong>.
          </Step>
          <Step n={4} title="Add contact details & notes">
            An <strong>email</strong> is required; add a phone number and any notes about the enquiry.
          </Step>
          <Step n={5} title="Capture Lead">
            Select <strong>Capture Lead</strong> to save it. It lands in your Intake list as <StatusBadge tone="slate">New</StatusBadge>.
          </Step>
        </Steps>
        <div className="mt-6">
          <Callout variant="warning" title="The 5-day clock starts now">
            Each intake has a <strong>5-day SLA</strong>. Cards show days left (green) or overdue (red), so capture and work
            them promptly. Not ready to act? Set it to <strong>Waiting</strong> to pause the clock.
          </Callout>
        </div>
      </GuideSplit>

      <GuideDivider />

      {/* 2. Get it ready */}
      <SectionHeading
        step={2}
        title="Get it ready to promote"
        description="An intake needs five things in place before it can become a deal. CindersX tracks them for you."
      />
      <GuideSplit mockup={<AnimatedPromoteGatesMockup />} reverse>
        <Steps>
          <Step n={1} title="Work the readiness checklist">
            The record shows five gates: <strong>verified customer</strong>, <strong>verified site</strong>,
            <strong> contact method</strong>, <strong>job type</strong>, and <strong>owner assigned</strong>.
          </Step>
          <Step n={2} title="Fill any gaps">
            Each gate turns green as you complete it. Confirm the customer and site are real records, set the job type, and assign an owner.
          </Step>
          <Step n={3} title="It moves itself to “Ready to Promote”">
            When all five are green, the status changes to <StatusBadge tone="green">Ready to Promote</StatusBadge> automatically.
          </Step>
        </Steps>
        <div className="mt-6">
          <Callout variant="info" title="Intake statuses">
            <StatusBadge tone="slate">New</StatusBadge> → <StatusBadge tone="blue">In Progress</StatusBadge> →{" "}
            <StatusBadge tone="amber">Waiting</StatusBadge> → <StatusBadge tone="green">Ready to Promote</StatusBadge> →{" "}
            <StatusBadge tone="teal">Promoted</StatusBadge>
          </Callout>
        </div>
      </GuideSplit>

      <GuideDivider />

      <div className="mb-12">
        <GuideVideo
          src="/media/promote-intake-to-deal.mp4"
          title="Promote a ready intake into a deal"
          description="A real walkthrough: open a ready intake, check the five green gates, and promote it to a live deal."
        />
      </div>

      {/* 3. Promote to deal */}
      <SectionHeading
        step={3}
        title="Promote to a deal"
        description="One click turns a ready intake into a live deal in the pipeline."
      />
      <GuideSplit mockup={<GatesMockup />}>
        <Steps>
          <Step n={1} title="Select Promote to Deal">
            The <strong>Promote to Deal</strong> button activates once all five gates pass.
          </Step>
          <Step n={2} title="What carries over">
            The customer, site, job type and contact details copy straight onto the new deal — no re-typing.
          </Step>
          <Step n={3} title="The intake locks">
            The intake is marked <StatusBadge tone="teal">Promoted</StatusBadge> and locked, leaving a clean audit trail. Work now continues on the deal.
          </Step>
        </Steps>
        <div className="mt-6">
          <Callout variant="tip" title="Can't promote yet?">
            If the button is greyed out, one of the five gates isn't met — the checklist shows you exactly which.
          </Callout>
        </div>
      </GuideSplit>

      <GuideDivider />

      {/* 4. The pipeline */}
      <SectionHeading
        step={4}
        title="Track it through the pipeline"
        description="Deals move left to right through clear stages on the Deals board."
      />
      <GuideSplit mockup={<PipelineMockup />} reverse>
        <Steps>
          <Step n={1} title="Lead">
            A fresh deal starts here. Add the <strong>deal value</strong> and <strong>labour days</strong> as you learn them.
          </Step>
          <Step n={2} title="Estimating">
            Once you request an estimate (next step), it sits here while the estimator works.
          </Step>
          <Step n={3} title="Awaiting Approval → Approved">
            After it's quoted, a manager approves it — then it's ready to convert into a job.
          </Step>
        </Steps>
        <div className="mt-6">
          <Callout variant="info" title="Pipeline columns">
            <span className="inline-flex flex-wrap items-center gap-2">
              <StatusBadge tone="slate">Lead</StatusBadge>
              <StatusBadge tone="amber">Estimating</StatusBadge>
              <StatusBadge tone="orange">Awaiting Approval</StatusBadge>
              <StatusBadge tone="green">Approved</StatusBadge>
            </span>
          </Callout>
        </div>
      </GuideSplit>

      <GuideDivider />

      {/* 5. Request an estimate */}
      <SectionHeading
        step={5}
        title="Request an estimate"
        description="When a deal needs pricing, hand it to the estimating team."
      />
      <GuideSplit mockup={<RequestEstimateMockup />}>
        <Steps>
          <Step n={1} title="Open the deal">
            Make sure the job type and a rough value are set so the estimator has context.
          </Step>
          <Step n={2} title="Select Request Estimate">
            This moves the deal into <StatusBadge tone="amber">Estimate Required</StatusBadge> and notifies the estimating team.
          </Step>
          <Step n={3} title="Track progress">
            You'll see the deal move through estimating and back to you once a quote is returned, ready for approval.
          </Step>
        </Steps>
        <div className="mt-6">
          <Callout variant="tip" title="Attach documents early">
            Use the <strong>Files</strong> tab to upload surveys, drawings or quotes. Some job types need a
            <FileUp className="inline h-3.5 w-3.5 align-text-bottom" /> survey, quote or PO before the deal can later become a
            job — adding them now saves chasing later.
          </Callout>
        </div>
      </GuideSplit>

      <GuideDivider />

      {/* Next steps */}
      <SectionHeading icon={Sparkles} title="Where to go next" description="The deal carries on from here — these guides pick up the baton." />
      <div className="grid gap-4 sm:grid-cols-3">
        {nextGuides.map((g) => (
          <GuideCard key={g.slug} to={g.path} icon={g.icon} title={g.title} description={g.description} audience={g.audience} available={g.available} />
        ))}
      </div>

      <div className="mt-12">
        <GuideCTA
          title="Ready to capture your next lead?"
          description="Jump into the pipeline and turn enquiries into deals."
          primaryLabel="Open Intake"
          primaryTo={appPath("/mvp/intake")}
          secondaryLabel="Browse all guides"
          secondaryTo="/"
        />
      </div>
    </GuideShell>
  );
};

export default SalesCoordinationGuide;

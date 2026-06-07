import { CheckCircle2, Shield, ArrowRight, XCircle, FileCheck, Sparkles } from "lucide-react";
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
} from "@/components/guides/guide-primitives";
import { AnimatedApprovalChecklistMockup } from "@/components/guides/MotionMockups";
import { GUIDES } from "./guides-registry";
import { appPath } from "@/config";

/* ----------------------------- Mockups ----------------------------- */

function BoardMockup() {
  const cols = [
    { name: "Estimating", tone: "amber" as const },
    { name: "Awaiting Approval", tone: "orange" as const, active: true },
    { name: "Approved", tone: "green" as const },
  ];
  return (
    <DeviceFrame variant="browser" url="app.cindersx.com/mvp/deals">
      <div className="flex gap-1.5 p-1">
        {cols.map((c) => (
          <div key={c.name} className="flex-1 space-y-1.5">
            <div className="text-[8px] font-semibold uppercase tracking-wide text-muted-foreground">{c.name}</div>
            {c.active ? (
              <div className="space-y-1.5 rounded-md border border-primary/50 bg-card p-1.5">
                <div className="text-[9px] font-semibold">Riverside Tower</div>
                <div className="text-[8px] text-muted-foreground">Acme Facilities</div>
                <div className="flex items-center justify-between">
                  <StatusBadge tone="orange">£12k</StatusBadge>
                  <span className="rounded border border-border px-1 text-[8px] text-muted-foreground">9/12</span>
                </div>
              </div>
            ) : (
              <div className="rounded-md border border-border bg-card p-1.5">
                <div className="h-1.5 w-3/4 rounded bg-muted" />
                <div className="mt-1 h-1.5 w-1/2 rounded bg-muted" />
              </div>
            )}
          </div>
        ))}
      </div>
    </DeviceFrame>
  );
}

function BasisMockup() {
  return (
    <DeviceFrame variant="browser" url="app.cindersx.com/mvp/deals/DL-2026-0091">
      <div className="space-y-2 p-1">
        <div className="text-[10px] font-semibold">Commercial Basis</div>
        <div className="rounded-lg border border-emerald-500/40 bg-card p-2.5">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="h-3 w-3" /> Quote / Estimate Complete
          </div>
          <div className="mt-1 text-[8px] text-muted-foreground">System Estimate (Built in App)</div>
          <div className="mt-2 flex justify-between text-[9px]">
            <span className="text-muted-foreground">Grand total</span>
            <span className="font-semibold">£1,512</span>
          </div>
          <div className="flex justify-between text-[9px]">
            <span className="text-muted-foreground">Deal value</span>
            <span>£12,000</span>
          </div>
          <div className="mt-2 flex gap-1">
            <span className="rounded-md border border-input px-2 py-0.5 text-[8px]">View Quote</span>
            <span className="rounded-md border border-input px-2 py-0.5 text-[8px]">Change</span>
            <span className="rounded-md border border-input px-2 py-0.5 text-[8px]">Clear</span>
          </div>
        </div>
      </div>
    </DeviceFrame>
  );
}

function ApprovalDialogMockup() {
  const checks = [
    { label: "You have approval permission", ok: true },
    { label: "Quote or Estimate attached", ok: true },
    { label: "Deal created more than 3 hours ago", ok: true },
    { label: "Value matches estimate", ok: true },
  ];
  return (
    <DeviceFrame variant="browser" url="app.cindersx.com/mvp/deals/DL-2026-0091">
      <div className="space-y-2.5 p-1">
        <div className="flex items-center gap-1.5 text-[10px] font-semibold">
          <Shield className="h-3 w-3 text-primary" /> Approve Deal
        </div>
        <div className="text-[8px] text-muted-foreground">Approve DL-2026-0091 for conversion to a job.</div>
        <div className="space-y-1.5 rounded-lg border border-border bg-card p-2.5">
          {checks.map((c) => (
            <div key={c.label} className="flex items-center gap-1.5 text-[9px]">
              {c.ok ? (
                <CheckCircle2 className="h-3 w-3 text-emerald-500" />
              ) : (
                <XCircle className="h-3 w-3 text-destructive" />
              )}
              {c.label}
            </div>
          ))}
        </div>
        <div className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-1.5 text-[10px] font-semibold text-primary-foreground">
          <Shield className="h-3 w-3" /> Approve Deal
        </div>
      </div>
    </DeviceFrame>
  );
}

function ConvertMockup() {
  const gates = [
    { label: "Stage approved", ok: true },
    { label: "Commercial basis set & locked", ok: true },
    { label: "Payment terms defined", ok: true },
    { label: "Required documents attached", ok: true },
    { label: "Labour days (3)", ok: true },
    { label: "Due date set", ok: true },
  ];
  return (
    <DeviceFrame variant="browser" url="app.cindersx.com/mvp/deals/DL-2026-0091">
      <div className="space-y-2 p-1">
        <div className="flex items-center gap-1.5 text-[10px] font-semibold">
          <ArrowRight className="h-3 w-3 text-primary" /> Convert to Job
        </div>
        <div className="space-y-1 rounded-lg border border-border bg-card p-2.5">
          {gates.map((g) => (
            <div key={g.label} className="flex items-center gap-1.5 text-[9px]">
              <CheckCircle2 className="h-3 w-3 text-emerald-500" /> {g.label}
            </div>
          ))}
        </div>
        <div className="space-y-1">
          <div className="text-[8px] font-medium text-muted-foreground">Job Owner *</div>
          <div className="flex h-6 items-center justify-between rounded-md border border-border bg-background px-2 text-[9px]">
            Dana Cole <span className="text-muted-foreground">▾</span>
          </div>
        </div>
        <div className="rounded-md bg-primary py-1.5 text-center text-[10px] font-semibold text-primary-foreground">
          Yes, Convert to Job
        </div>
      </div>
    </DeviceFrame>
  );
}

/* ----------------------------- Page ----------------------------- */

const ApprovalsConversionGuide = () => {
  const nextGuides = GUIDES.filter((g) => g.slug !== "approvals-conversion" && g.available).slice(0, 3);

  return (
    <GuideShell>
      <GuideHero
        icon={CheckCircle2}
        eyebrow="Approvals & Conversion"
        title="Sign off and convert"
        description="When a deal is quoted, a manager reviews it, approves it, and turns it into a scheduled job. CindersX checks the requirements for you at every step."
      />

      {/* 1. Find deals */}
      <SectionHeading
        step={1}
        title="Find deals waiting for you"
        description="Quoted deals collect in the Awaiting Approval column of the Deals board."
      />
      <GuideSplit mockup={<BoardMockup />}>
        <Steps>
          <Step n={1} title="Open the Deals board">
            From the sidebar, open <strong>Deals</strong>. Deals flow left to right across the columns.
          </Step>
          <Step n={2} title="Look at Awaiting Approval">
            Deals in the <StatusBadge tone="orange">Awaiting Approval</StatusBadge> column are quoted and ready for sign-off.
          </Step>
          <Step n={3} title="Check the readiness badge">
            Each card shows a readiness score (e.g. <strong>9/12</strong>) — how many conversion requirements are already met.
          </Step>
        </Steps>
        <div className="mt-6">
          <Callout variant="info" title="Open the deal to act">
            Approval and conversion happen inside the deal record. Select a card to open it.
          </Callout>
        </div>
      </GuideSplit>

      <GuideDivider />

      {/* 2. Commercial basis */}
      <SectionHeading
        step={2}
        title="Check the commercial basis"
        description="Before approving, confirm the deal has a locked quote or estimate."
      />
      <GuideSplit mockup={<BasisMockup />} reverse>
        <Steps>
          <Step n={1} title="Find the Commercial Basis card">
            On the deal record it shows the chosen pricing — a <strong>System Estimate</strong> or an uploaded <strong>Manual Quote</strong>.
          </Step>
          <Step n={2} title="Confirm it's complete">
            A green <StatusBadge tone="green">Quote / Estimate Complete</StatusBadge> badge means the basis is set. Use <strong>View Quote</strong> to review it.
          </Step>
          <Step n={3} title="Compare to the deal value">
            Check the grand total against the deal value. Use <strong>Change</strong> or <strong>Clear</strong> if the wrong basis is set.
          </Step>
        </Steps>
        <div className="mt-6">
          <Callout variant="tip" title="No basis, no approval">
            A deal can't be approved without a commercial basis. If it's missing, send it back to estimating or set one here first.
          </Callout>
        </div>
      </GuideSplit>

      <GuideDivider />

      {/* 3. Approve */}
      <SectionHeading
        step={3}
        title="Approve the deal"
        description="A quick checklist confirms everything's in order before you sign off."
      />
      <GuideSplit mockup={<AnimatedApprovalChecklistMockup />}>
        <Steps>
          <Step n={1} title="Select Approve Deal">
            On a <StatusBadge tone="orange">Quoted</StatusBadge> deal, <strong>Approve Deal</strong> opens a confirmation checklist. (Approvers, seniors and super only.)
          </Step>
          <Step n={2} title="Clear the critical checks">
            Approval permission, a quote/estimate attached, and the 3-hour rule (below) must all pass — shown with green ticks.
          </Step>
          <Step n={3} title="Confirm">
            Select <strong>Approve Deal</strong>. The deal moves to <StatusBadge tone="green">Approved</StatusBadge>, ready to convert.
          </Step>
        </Steps>
        <div className="mt-6">
          <Callout variant="warning" title="The 3-hour rule">
            A deal <strong>can't be approved until 3 hours after it was created</strong>. This is a hard block — if it's too
            soon, the check shows a red <XCircle className="inline h-3.5 w-3.5 align-text-bottom text-destructive" /> and the
            button stays disabled with <em>“Cannot approve: critical requirements not met.”</em> It's a deliberate
            cooling-off window, not a bug.
          </Callout>
        </div>
      </GuideSplit>

      <GuideDivider />

      {/* 4. Convert */}
      <SectionHeading
        step={4}
        title="Convert to a job"
        description="Approved deals become scheduled jobs — once every requirement is met."
      />
      <GuideSplit mockup={<ConvertMockup />} reverse>
        <Steps>
          <Step n={1} title="Select Convert to Job">
            On an <StatusBadge tone="green">Approved</StatusBadge> deal, choose <strong>Convert to Job</strong>. (It's disabled until labour days are set.)
          </Step>
          <Step n={2} title="Review the gates">
            CindersX lists every requirement — commercial integrity, payment terms, documents, scope, compliance and operational readiness. Use the <strong>Add</strong> shortcuts to fill any gaps.
          </Step>
          <Step n={3} title="Pick a Job Owner & confirm">
            Choose the <strong>Job Owner</strong>, then <strong>Yes, Convert to Job</strong>. This is <strong>irreversible</strong> — the deal locks.
          </Step>
          <Step n={4} title="Job created">
            A new job is created (status <StatusBadge tone="blue">Pending</StatusBadge>) with all files copied in as a locked evidence pack. You can jump straight to it.
          </Step>
        </Steps>
        <div className="mt-6">
          <Callout variant="info" title="Documents that can block conversion">
            A <FileCheck className="inline h-3.5 w-3.5 align-text-bottom" /> <strong>Quote/Estimate</strong> is always needed;
            a <strong>Survey</strong> is required if the job type needs one, and a <strong>PO</strong> if the payment terms
            require it. The gate list tells you exactly what's missing.
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
          title="Deals waiting on you?"
          description="Open the board and clear your approvals."
          primaryLabel="Open Deals"
          primaryTo={appPath("/mvp/deals")}
          secondaryLabel="Browse all guides"
          secondaryTo="/"
        />
      </div>
    </GuideShell>
  );
};

export default ApprovalsConversionGuide;

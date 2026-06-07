import { Mail, Send, MousePointerClick, BellRing, CheckCircle2, CalendarClock, XOctagon, Sparkles } from "lucide-react";
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
import { GUIDES } from "./guides-registry";
import { appPath } from "@/config";

/* ----------------------------- Mockups ----------------------------- */

function SendProposalMockup() {
  return (
    <DeviceFrame variant="browser" url="app.cindersx.com/mvp/jobs/JOB-2026-0042">
      <div className="space-y-2.5 p-1">
        <div className="text-[10px] font-semibold">Send Date Proposal</div>
        <div className="flex gap-1 text-[8px]">
          <span className="rounded-md bg-primary px-2 py-0.5 font-semibold text-primary-foreground">Date Proposal</span>
          <span className="rounded-md border border-border px-2 py-0.5 text-muted-foreground">Confirmation Request</span>
        </div>
        <div className="space-y-0.5">
          <div className="text-[8px] text-muted-foreground">Recipient</div>
          <div className="h-6 rounded border border-border bg-background px-1.5 text-[9px] leading-6">jo@acmefm.co.uk</div>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          <div className="space-y-0.5">
            <div className="text-[8px] text-muted-foreground">Proposed start</div>
            <div className="h-6 rounded border border-border bg-background px-1.5 text-[9px] leading-6">Mon 27 Jan</div>
          </div>
          <div className="space-y-0.5">
            <div className="text-[8px] text-muted-foreground">Start time</div>
            <div className="flex h-6 items-center justify-between rounded border border-border bg-background px-1.5 text-[9px]">09:00 ▾</div>
          </div>
        </div>
        <div className="h-9 rounded border border-border bg-background p-1 text-[8px] text-muted-foreground">Optional message to the client…</div>
        <div className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-1.5 text-[10px] font-semibold text-primary-foreground">
          <Send className="h-3 w-3" /> Send Date Proposal
        </div>
      </div>
    </DeviceFrame>
  );
}

function ClientEmailMockup() {
  return (
    <DeviceFrame variant="browser" url="Client's inbox">
      <div className="space-y-2 p-1">
        <div className="text-[8px] text-muted-foreground">Premier Compliance · Planner · powered by CindersX</div>
        <div className="text-[11px] font-semibold">Your visit is booked — please confirm</div>
        <div className="space-y-1 rounded-md border border-border bg-muted/30 p-2 text-[9px]">
          <div className="flex justify-between"><span className="text-muted-foreground">Proposed</span><span className="font-medium">Mon 27 Jan, 09:00–17:00</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">Site</span><span>Riverside Tower</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">Work type</span><span>Fire Door Inspection</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">Reference</span><span>JOB-2026-0042</span></div>
        </div>
        <div className="space-y-1.5">
          <div className="rounded-md py-1.5 text-center text-[10px] font-semibold text-white" style={{ backgroundColor: "#1f7a3a" }}>
            Accept proposed date
          </div>
          <div className="rounded-md py-1.5 text-center text-[10px] font-semibold text-white" style={{ backgroundColor: "#1c1c1c" }}>
            Request reschedule
          </div>
          <div className="rounded-md border py-1.5 text-center text-[10px] font-semibold" style={{ borderColor: "#9a2a2a", color: "#9a2a2a" }}>
            Unable to accommodate
          </div>
        </div>
        <div className="text-center text-[7px] text-muted-foreground">Secure links expire after 7 days · no login required</div>
      </div>
    </DeviceFrame>
  );
}

function ClientConfirmMockup() {
  return (
    <DeviceFrame variant="browser" url="cindersx.com/p/accept/…">
      <div className="space-y-2 p-1 text-center">
        <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/15">
          <CheckCircle2 className="h-5 w-5 text-emerald-500" />
        </div>
        <div className="text-[11px] font-semibold">Thank you — your visit is confirmed.</div>
        <div className="text-[8px] text-muted-foreground">Our team will be in touch with any final details ahead of the visit.</div>
        <div className="mt-1 space-y-1 rounded-md border border-border bg-muted/30 p-2 text-left text-[9px]">
          <div className="flex justify-between"><span className="text-muted-foreground">Date</span><span className="font-medium">Mon 27 Jan, 09:00</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">Site</span><span>Riverside Tower</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">Reference</span><span>JOB-2026-0042</span></div>
        </div>
      </div>
    </DeviceFrame>
  );
}

function ResponsesMockup() {
  return (
    <DeviceFrame variant="browser" url="app.cindersx.com/mvp/jobs/JOB-2026-0042">
      <div className="space-y-2 p-1">
        <div className="flex items-center gap-1.5 rounded-md border border-emerald-500/30 bg-emerald-500/5 px-2 py-1.5 text-[9px]">
          <BellRing className="h-3 w-3 text-emerald-500" />
          <span className="font-medium">Client accepted proposed date</span>
        </div>
        <div className="rounded-md border border-border bg-card p-2 text-[9px]">
          <div className="mb-1 text-[8px] font-semibold uppercase tracking-wide text-muted-foreground">Client status</div>
          <div className="flex flex-wrap items-center gap-1.5">
            <StatusBadge tone="green">Confirmed</StatusBadge>
            <StatusBadge tone="amber">Deferred</StatusBadge>
            <StatusBadge tone="red">Declined</StatusBadge>
          </div>
        </div>
        <div className="text-[8px] text-muted-foreground">Every response is logged to the job's history with date &amp; time.</div>
      </div>
    </DeviceFrame>
  );
}

/* ----------------------------- Page ----------------------------- */

const ClientProposalsGuide = () => {
  const nextGuides = GUIDES.filter((g) => g.slug !== "client-proposals" && g.available).slice(0, 3);

  return (
    <GuideShell>
      <GuideHero
        icon={Mail}
        eyebrow="Client Proposals"
        title="Confirming dates with clients"
        description="Propose a visit date and let the client accept, reschedule, or decline with a single tap — no login, no phone tag. Here's how it works on both sides."
      />

      {/* 1. Send */}
      <SectionHeading
        step={1}
        title="Send a proposal"
        description="From the job, email the client a proposed date with one-click options."
      />
      <GuideSplit mockup={<SendProposalMockup />}>
        <Steps>
          <Step n={1} title="Open the job's scheduling">
            On the job record, find <strong>Send Date Proposal</strong> (it needs a proposed date and a booked day first).
          </Step>
          <Step n={2} title="Choose the mode">
            <strong>Date Proposal</strong> sends all three options; <strong>Confirmation Request</strong> sends a single Accept button — handy after you've already agreed a date by phone.
          </Step>
          <Step n={3} title="Set time & add a message">
            Optionally pick a start time and add a short note for the client. Check the recipient email is right.
          </Step>
          <Step n={4} title="Send">
            Select <strong>Send Date Proposal</strong>. The job moves to <StatusBadge tone="blue">Awaiting Confirmation</StatusBadge>.
          </Step>
        </Steps>
        <div className="mt-6">
          <Callout variant="info" title="One live proposal at a time">
            Sending a new proposal cancels any previous links for that job — so there's only ever one valid set out there.
          </Callout>
        </div>
      </GuideSplit>

      <GuideDivider />

      {/* 2. The email */}
      <SectionHeading
        step={2}
        title="What the client receives"
        description="A clean, branded email with the visit details and clear actions."
      />
      <GuideSplit mockup={<ClientEmailMockup />} reverse>
        <Steps>
          <Step n={1} title="The visit, at a glance">
            The email shows the proposed date, site, work type and job reference.
          </Step>
          <Step n={2} title="Three one-tap actions">
            <strong>Accept proposed date</strong>, <strong>Request reschedule</strong>, or <strong>Unable to accommodate</strong> — each a secure link.
          </Step>
          <Step n={3} title="No login, secure & time-limited">
            The client doesn't need an account. Links are unique to them and <strong>expire after 7 days</strong>.
          </Step>
        </Steps>
        <div className="mt-6">
          <Callout variant="tip" title="Already agreed by phone?">
            Use <strong>Confirmation Request</strong> mode — the client gets a single <strong>Confirm Booking</strong> button, nothing to deliberate over.
          </Callout>
        </div>
      </GuideSplit>

      <GuideDivider />

      {/* 3. Client responds */}
      <SectionHeading
        icon={MousePointerClick}
        title="When the client responds"
        description="Each action updates the job instantly and lets you know."
      />
      <GuideSplit mockup={<ClientConfirmMockup />}>
        <Steps>
          <Step n={1} title="Accept">
            <CheckCircle2 className="inline h-3.5 w-3.5 align-text-bottom text-emerald-500" /> The visit is <StatusBadge tone="green">Confirmed</StatusBadge>, the date is locked in, and the booking is set.
          </Step>
          <Step n={2} title="Reschedule">
            <CalendarClock className="inline h-3.5 w-3.5 align-text-bottom" /> The client picks from up to three suggested dates. The job becomes <StatusBadge tone="amber">Deferred</StatusBadge> for you to confirm the new slot.
          </Step>
          <Step n={3} title="Unable to accommodate">
            <XOctagon className="inline h-3.5 w-3.5 align-text-bottom text-destructive" /> They can add a reason; the booking is stood down and your team is flagged to follow up.
          </Step>
        </Steps>
        <div className="mt-6">
          <Callout variant="info" title="Suggested reschedule dates are capacity-aware">
            The alternative dates offered to the client are based on your team's real availability — so a reschedule still lands somewhere you can actually deliver.
          </Callout>
        </div>
      </GuideSplit>

      <GuideDivider />

      {/* 4. Track */}
      <SectionHeading
        icon={BellRing}
        title="Track responses"
        description="You don't have to chase — CindersX tells you the moment a client acts."
      />
      <GuideSplit mockup={<ResponsesMockup />} reverse>
        <Steps>
          <Step n={1} title="Get notified">
            The job owner gets an in-app notification and an email when a client accepts, reschedules or declines.
          </Step>
          <Step n={2} title="Read the status at a glance">
            The job's <strong>client status</strong> badge shows where things stand: confirmed, deferred or declined.
          </Step>
          <Step n={3} title="It's all on the record">
            Every action is written to the job's history with a timestamp — a clean audit trail of who agreed to what, and when.
          </Step>
        </Steps>
        <div className="mt-6">
          <Callout variant="tip" title="Need to start over?">
            Just send a fresh proposal — it supersedes the old links and resets the conversation cleanly.
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
          title="Ready to confirm a visit?"
          description="Open Jobs and send a date proposal to your client."
          primaryLabel="Open Jobs"
          primaryTo={appPath("/mvp/jobs")}
          secondaryLabel="Browse all guides"
          secondaryTo="/"
        />
      </div>
    </GuideShell>
  );
};

export default ClientProposalsGuide;

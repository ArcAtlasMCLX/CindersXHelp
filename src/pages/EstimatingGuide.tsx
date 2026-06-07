import { ClipboardList, Calculator, FileUp, Send, Plus, Sparkles } from "lucide-react";
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

function QueueMockup() {
  return (
    <DeviceFrame variant="browser" url="app.cindersx.com/mvp/estimating">
      <div className="space-y-2 p-1">
        {/* tabs */}
        <div className="flex gap-1 text-[9px]">
          <span className="rounded-md bg-primary px-2 py-1 font-semibold text-primary-foreground">Open Queue</span>
          <span className="rounded-md border border-border px-2 py-1 text-muted-foreground">My Active</span>
          <span className="rounded-md border border-border px-2 py-1 text-muted-foreground">All Active</span>
        </div>
        {/* card */}
        <div className="space-y-1.5 rounded-lg border border-primary/40 bg-card p-2.5">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] font-semibold">DL-2026-0091</span>
            <div className="flex gap-1">
              <StatusBadge tone="amber">Estimate Required</StatusBadge>
              <StatusBadge tone="red">Unclaimed</StatusBadge>
            </div>
          </div>
          <div className="text-[9px] text-muted-foreground">Acme Facilities · Fire Door Inspection</div>
          <div className="text-[8px] text-muted-foreground">Requested 2h ago · £12,000</div>
          <div className="mt-1 inline-flex items-center justify-center rounded-md border border-input px-3 py-1 text-[10px] font-semibold">
            Claim
          </div>
        </div>
        {/* second card faded */}
        <div className="space-y-1.5 rounded-lg border border-border bg-card p-2.5 opacity-60">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold">DL-2026-0088</span>
            <StatusBadge tone="amber">Estimate Required</StatusBadge>
          </div>
          <div className="text-[9px] text-muted-foreground">Brookfield Ltd · Emergency Lighting</div>
          <div className="text-[8px] text-muted-foreground">Requested 5h ago · £4,500</div>
        </div>
      </div>
    </DeviceFrame>
  );
}

function BasisChoiceMockup() {
  return (
    <DeviceFrame variant="browser" url="app.cindersx.com/mvp/deals/DL-2026-0091">
      <div className="space-y-2 p-1">
        <div className="text-[10px] font-semibold">How will you quote this?</div>
        <div className="rounded-lg border border-primary/50 bg-card p-2.5">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold">
            <Calculator className="h-3 w-3 text-primary" /> System Estimate (Built in App)
          </div>
          <div className="mt-1 text-[8px] text-muted-foreground">Build priced line items inside CindersX.</div>
        </div>
        <div className="rounded-lg border border-border bg-card p-2.5">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold">
            <FileUp className="h-3 w-3" /> Manual Quote (Upload)
          </div>
          <div className="mt-1 text-[8px] text-muted-foreground">Upload your own quote document + enter its value.</div>
        </div>
      </div>
    </DeviceFrame>
  );
}

function EstimateBuilderMockup() {
  const lines = [
    { name: "Fire door inspection", qty: "14", price: "£75", vat: "20%", total: "£1,050" },
    { name: "Remedial works", qty: "1", price: "£210", vat: "20%", total: "£210" },
  ];
  return (
    <DeviceFrame variant="browser" url="app.cindersx.com/mvp/deals/DL-2026-0091">
      <div className="space-y-2 p-1">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-semibold">Estimate</span>
          <span className="inline-flex items-center gap-1 rounded-md bg-primary px-2 py-1 text-[9px] font-semibold text-primary-foreground">
            <Plus className="h-2.5 w-2.5" /> Add Line
          </span>
        </div>
        {/* table */}
        <div className="overflow-hidden rounded-md border border-border">
          <div className="grid grid-cols-[1fr_auto_auto_auto] gap-2 bg-muted/40 px-2 py-1 text-[8px] font-semibold text-muted-foreground">
            <span>Item</span><span>Qty</span><span>Price</span><span>Total</span>
          </div>
          {lines.map((l) => (
            <div key={l.name} className="grid grid-cols-[1fr_auto_auto_auto] gap-2 border-t border-border px-2 py-1 text-[9px]">
              <span className="truncate">{l.name}</span>
              <span className="text-muted-foreground">{l.qty}</span>
              <span className="text-muted-foreground">{l.price}</span>
              <span className="font-medium">{l.total}</span>
            </div>
          ))}
        </div>
        {/* totals */}
        <div className="space-y-0.5 rounded-md bg-card p-2 text-[9px]">
          <div className="flex justify-between text-muted-foreground"><span>Subtotal</span><span>£1,260</span></div>
          <div className="flex justify-between text-muted-foreground"><span>VAT (20%)</span><span>£252</span></div>
          <div className="flex justify-between font-semibold"><span>Grand total</span><span>£1,512</span></div>
        </div>
        <div className="rounded-md bg-emerald-500/10 px-2 py-1 text-[8px] text-emerald-600 dark:text-emerald-400">
          Matches deal value
        </div>
      </div>
    </DeviceFrame>
  );
}

function ReturnMockup() {
  return (
    <DeviceFrame variant="browser" url="app.cindersx.com/mvp/deals/DL-2026-0091">
      <div className="space-y-2.5 p-1">
        <div className="text-[10px] font-semibold">Return Estimate</div>
        <div className="space-y-1">
          <div className="text-[9px] font-medium">Estimate Notes *</div>
          <div className="h-16 rounded-md border border-border bg-background p-1.5 text-[9px] text-muted-foreground">
            14 doors inspected, 2 need remedial work. Priced for replacement closers…
          </div>
        </div>
        <div className="rounded-md bg-secondary/10 px-2 py-1 text-[8px] text-muted-foreground">
          The sales owner will be notified that the estimate is ready.
        </div>
        <div className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-1.5 text-[10px] font-semibold text-primary-foreground">
          <Send className="h-3 w-3" /> Return Estimate
        </div>
      </div>
    </DeviceFrame>
  );
}

/* ----------------------------- Page ----------------------------- */

const EstimatingGuide = () => {
  const nextGuides = GUIDES.filter((g) => g.slug !== "estimating" && g.available).slice(0, 3);

  return (
    <GuideShell>
      <GuideHero
        icon={ClipboardList}
        eyebrow="Estimating"
        title="Pricing the work"
        description="When sales request an estimate, it lands in your queue. Claim it, build the numbers (or upload a quote), and return it — ready for approval."
      />

      {/* 1. Pick up work */}
      <SectionHeading
        step={1}
        title="Pick up work from the queue"
        description="The Estimating queue holds everything sales have sent for pricing, oldest first."
      />
      <GuideSplit mockup={<QueueMockup />}>
        <Steps>
          <Step n={1} title="Open Pipeline → Estimating">
            The <strong>Open Queue</strong> tab shows unclaimed deals; <strong>My Active</strong> is the work you've taken on.
          </Step>
          <Step n={2} title="Scan the cards">
            Each card shows the deal, customer, job type, value, and how long ago it was <strong>requested</strong>.
          </Step>
          <Step n={3} title="Claim it">
            Select <strong>Claim</strong> on a deal to take it. It moves to <StatusBadge tone="orange">Estimating</StatusBadge> and into your <strong>My Active</strong> list.
          </Step>
        </Steps>
        <div className="mt-6">
          <Callout variant="tip" title="Claiming assigns it to you">
            Once claimed, the deal is yours and drops out of other estimators' open queue — so two people don't price the same job.
          </Callout>
        </div>
      </GuideSplit>

      <GuideDivider />

      {/* 2. Choose approach */}
      <SectionHeading
        step={2}
        title="Choose how you'll quote"
        description="Every deal needs one “commercial basis” — pick whichever suits the job."
      />
      <GuideSplit mockup={<BasisChoiceMockup />} reverse>
        <Steps>
          <Step n={1} title="System Estimate (Built in App)">
            Build priced line items inside CindersX. Best when you're pricing from the charge-item catalogue.
          </Step>
          <Step n={2} title="Manual Quote (Upload)">
            Prefer your own quote document? Upload it to the <strong>Files</strong> tab under the <strong>Quote</strong> category and enter its value.
          </Step>
          <Step n={3} title="Only one basis at a time">
            A deal carries exactly one commercial basis — it's what later gets approved and converted into a job.
          </Step>
        </Steps>
        <div className="mt-6">
          <Callout variant="info" title="Either way is fine">
            Both routes end the same place: a priced deal ready to return to sales. Use the system estimate for itemised
            pricing, or a manual quote when you already have one prepared.
          </Callout>
        </div>
      </GuideSplit>

      <GuideDivider />

      {/* 3. Build the estimate */}
      <SectionHeading
        step={3}
        title="Build a system estimate"
        description="Add line items and CindersX does the maths — subtotal, VAT and grand total."
      />
      <GuideSplit mockup={<EstimateBuilderMockup />}>
        <Steps>
          <Step n={1} title="Add a line">
            In the <strong>Estimate</strong> tab, select <strong>Add Line</strong>. A panel opens for the details.
          </Step>
          <Step n={2} title="Pick a charge item">
            Choose from the catalogue and it auto-fills the name, prices and VAT — then set the <strong>quantity</strong>.
          </Step>
          <Step n={3} title="Watch the totals">
            Each line's total, plus the estimate's subtotal, VAT and grand total, recalculate automatically.
          </Step>
          <Step n={4} title="Check it against the deal value">
            CindersX shows whether your total matches the deal value, or differs — a quick sanity check before returning.
          </Step>
        </Steps>
        <div className="mt-6">
          <Callout variant="tip" title="Edit anything, anytime">
            Add, edit or remove lines freely while the estimate is a draft. Use <strong>Preview</strong> to see how it reads before you finish.
          </Callout>
        </div>
      </GuideSplit>

      <GuideDivider />

      {/* 4. Return */}
      <SectionHeading
        step={4}
        title="Return the estimate"
        description="When the numbers are ready, send it back to sales for approval."
      />
      <GuideSplit mockup={<ReturnMockup />} reverse>
        <Steps>
          <Step n={1} title="Select Return Estimate">
            Available while the deal is in the <StatusBadge tone="orange">Estimating</StatusBadge> stage.
          </Step>
          <Step n={2} title="Add your estimate notes">
            <strong>Notes are required</strong> — summarise what you found, assumptions, and any recommendations.
          </Step>
          <Step n={3} title="It goes back to sales">
            The deal moves to <StatusBadge tone="blue">Estimate Returned</StatusBadge> and the sales owner is notified it's ready to quote and approve.
          </Step>
        </Steps>
        <div className="mt-6">
          <Callout variant="warning" title="Notes are how you hand over">
            Your notes travel with the deal — clear assumptions here save back-and-forth when sales review and the manager approves.
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
          title="Got estimates waiting?"
          description="Open your queue and start pricing."
          primaryLabel="Open Estimating"
          primaryTo={appPath("/mvp/estimating")}
          secondaryLabel="Browse all guides"
          secondaryTo="/"
        />
      </div>
    </GuideShell>
  );
};

export default EstimatingGuide;

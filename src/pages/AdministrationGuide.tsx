import { useState } from "react";
import {
  ShieldCheck,
  Upload,
  BarChart3,
  TrendingUp,
  FileSpreadsheet,
  Receipt,
  FileText,
  CheckCircle2,
  ChevronRight,
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
  GuideDivider,
} from "@/components/guides/guide-primitives";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Tab toggle                                                         */
/* ------------------------------------------------------------------ */

const TABS = [
  { id: "review", label: "Review" },
  { id: "invoicing", label: "Invoicing" },
  { id: "finances", label: "Finances" },
  { id: "reporting", label: "Reporting" },
] as const;

type Tab = (typeof TABS)[number]["id"];

function TabBar({ active, onChange }: { active: Tab; onChange: (t: Tab) => void }) {
  return (
    <div className="flex gap-1 rounded-xl border border-border bg-muted/30 p-1">
      {TABS.map((t) => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          className={cn(
            "flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
            active === t.id
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

function StubTab({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border py-16 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-muted-foreground">
        <FileText className="h-6 w-6" />
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
      <StatusBadge tone="amber">Guide coming soon</StatusBadge>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Finances tab mockups                                               */
/* ------------------------------------------------------------------ */

function UploadMockup() {
  return (
    <DeviceFrame variant="browser" url="stage.cindersx.com/mvp/invoicing">
      <div className="space-y-2 p-1">
        {/* Toggle */}
        <div className="flex gap-1 rounded-md border border-border bg-muted/30 p-0.5 text-[8px]">
          <span className="rounded px-2 py-0.5 text-muted-foreground">Invoicing</span>
          <span className="rounded bg-primary px-2 py-0.5 font-semibold text-primary-foreground">Finances</span>
        </div>
        {/* Upload zone */}
        <div className="flex flex-col items-center gap-1 rounded-lg border-2 border-dashed border-border py-5 text-center">
          <Upload className="h-4 w-4 text-muted-foreground" />
          <p className="text-[8px] font-medium">Drop Xero P&L .xlsx here</p>
          <p className="text-[7px] text-muted-foreground">Profit &amp; Loss by specialism export</p>
        </div>
      </div>
    </DeviceFrame>
  );
}

function KpiMockup() {
  return (
    <DeviceFrame variant="browser" url="stage.cindersx.com/mvp/invoicing">
      <div className="space-y-2 p-1">
        {/* KPI strip */}
        <div className="grid grid-cols-3 gap-1">
          {[
            { label: "Turnover", value: "£412k" },
            { label: "Op. profit", value: "£68k" },
            { label: "Margin", value: "16.5%" },
          ].map((k) => (
            <div key={k.label} className="rounded border border-border bg-background p-1.5 text-center">
              <div className="text-[7px] text-muted-foreground">{k.label}</div>
              <div className="text-[10px] font-bold">{k.value}</div>
            </div>
          ))}
        </div>
        {/* Diverging bar */}
        <div className="space-y-1">
          <div className="text-[7px] font-semibold uppercase tracking-wide text-muted-foreground">Margin % by specialism</div>
          {[
            { name: "Fire Door Insp.", pct: 38, pos: true },
            { name: "Fire Damper", pct: 22, pos: true },
            { name: "Remedials", pct: -8, pos: false },
          ].map((r) => (
            <div key={r.name} className="flex items-center gap-1 text-[8px]">
              <span className="w-16 shrink-0 truncate text-muted-foreground">{r.name}</span>
              <div className="flex flex-1 items-center">
                <div className="w-1/2" />
                <div className="w-px h-3 bg-border" />
                <div className="w-1/2">
                  {r.pos && <div className="h-2 rounded-r bg-emerald-500" style={{ width: `${r.pct * 1.2}%` }} />}
                  {!r.pos && <div className="h-2 rounded-r bg-destructive" style={{ width: `${Math.abs(r.pct) * 1.2}%` }} />}
                </div>
              </div>
              <span className={cn("w-8 shrink-0 text-right font-semibold text-[7px]", r.pos ? "text-emerald-600" : "text-destructive")}>
                {r.pos ? "" : ""}{r.pct}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </DeviceFrame>
  );
}

/* ------------------------------------------------------------------ */
/*  Finances tab content                                               */
/* ------------------------------------------------------------------ */

function FinancesContent() {
  return (
    <div className="space-y-16">
      <div>
        <SectionHeading
          icon={BarChart3}
          title="What Finances does"
          description="The Finances tab gives you a live P&L breakdown by specialism — pulled directly from Xero — without any manual spreadsheet work."
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { icon: TrendingUp, title: "KPI strip", body: "Turnover, operating profit and blended margin at a glance for the uploaded period." },
            { icon: BarChart3, title: "Margin by specialism", body: "Diverging bar chart showing which specialisms are profitable and which are dragging the blended number down." },
            { icon: FileSpreadsheet, title: "Month-on-month", body: "Comparison table showing the margin shift (in percentage points) for each specialism vs the prior period." },
          ].map((c) => (
            <div key={c.title} className="rounded-xl border border-border bg-card p-4">
              <c.icon className="mb-2 h-5 w-5 text-primary" />
              <p className="font-semibold text-sm">{c.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </div>

      <GuideDivider />

      <div>
        <SectionHeading
          step={1}
          title="Export the report from Xero"
          description="Robina exports this — it takes under a minute once you know where it lives."
        />
        <GuideSplit mockup={
          <DeviceFrame variant="browser" url="reporting.xero.com">
            <div className="space-y-2 p-1 text-[9px]">
              <div className="font-semibold">Reports</div>
              <div className="space-y-0.5">
                {["Profit &amp; Loss", "Balance Sheet", "Aged Receivables", "Budget Manager"].map((r, i) => (
                  <div key={r} className={cn("flex items-center justify-between rounded px-2 py-1 text-[8px]", i === 0 ? "bg-primary/10 font-semibold text-primary" : "text-muted-foreground hover:bg-muted/50")}>
                    <span dangerouslySetInnerHTML={{ __html: r }} />
                    {i === 0 && <ChevronRight className="h-3 w-3" />}
                  </div>
                ))}
              </div>
              <div className="rounded border border-primary/30 bg-primary/5 p-1.5 text-[8px]">
                <div className="font-semibold text-primary">Profit &amp; Loss</div>
                <div className="mt-1 grid grid-cols-2 gap-1 text-muted-foreground">
                  <div>Date range: <span className="text-foreground">This month</span></div>
                  <div>Group by: <span className="text-foreground">Tracking</span></div>
                </div>
                <div className="mt-1.5 inline-flex items-center gap-1 rounded bg-primary px-1.5 py-0.5 text-[7px] font-semibold text-primary-foreground">
                  Export .xlsx
                </div>
              </div>
            </div>
          </DeviceFrame>
        }>
          <Steps>
            <Step n={1} title="Go to Reporting → Profit & Loss in Xero" />
            <Step n={2} title='Set the date range to the month you want, then set "Group by" to Tracking Category'>
              The tracking category should be "Specialism" or equivalent — this is what creates the per-column breakdown CindersX reads.
            </Step>
            <Step n={3} title='Click Export → Excel (.xlsx)'>
              Save the file anywhere — you'll drag it straight into CindersX next.
            </Step>
          </Steps>
          <div className="mt-6">
            <Callout variant="info" title="Which months to start with">
              I'd suggest exporting the last 5–6 weeks of data to begin with — so roughly Weeks 21–26 (May through to this week). That gives enough history for the month-on-month comparison to be meaningful from day one.
            </Callout>
          </div>
        </GuideSplit>
      </div>

      <GuideDivider />

      <div>
        <SectionHeading
          step={2}
          title="Upload to CindersX"
          description="One drag-and-drop per period — CindersX handles the parsing automatically."
        />
        <GuideSplit mockup={<UploadMockup />} reverse>
          <Steps>
            <Step n={1} title='Navigate to Invoices & Finance in the left sidebar' />
            <Step n={2} title='Click the "Finances" toggle at the top right of the page' />
            <Step n={3} title='Drag the .xlsx file onto the upload zone, or click to browse'>
              CindersX will parse the file instantly — no waiting, no server processing.
            </Step>
            <Step n={4} title='The page updates automatically with the new period'>
              If you upload the same file twice, CindersX recognises the duplicate and skips it.
            </Step>
          </Steps>
        </GuideSplit>
      </div>

      <GuideDivider />

      <div>
        <SectionHeading
          step={3}
          title="Reading the output"
        />
        <GuideSplit mockup={<KpiMockup />}>
          <div className="space-y-4 text-sm text-muted-foreground">
            <p><strong className="text-foreground">KPI strip</strong> — the three numbers at the top (Turnover, Operating Profit, Blended Margin) are the company totals for the uploaded period.</p>
            <p><strong className="text-foreground">Margin by specialism</strong> — the diverging bar chart shows each specialism's operating margin. Bars to the right (green) are profitable; bars to the left (red) are loss-making. The wider the bar, the further from break-even.</p>
            <p><strong className="text-foreground">Month-on-month table</strong> — once you have two or more periods uploaded, the table shows the margin movement in percentage points. A "+3.2 pp" means that specialism improved its margin by 3.2 points since the prior period.</p>
            <p><strong className="text-foreground">Trend line</strong> — the SVG chart at the bottom plots total turnover across all uploaded periods, giving a quick visual of trajectory.</p>
          </div>
        </GuideSplit>
      </div>

      <GuideDivider />

      <div>
        <SectionHeading icon={Upload} title="Keeping it up to date" />
        <Callout variant="tip" title="Upload cadence">
          Upload each month's export once Xero has been reconciled for that month — typically in the first week of the following month. There's no scheduled job; it's a manual upload whenever the numbers are ready.
        </Callout>
        <div className="mt-4">
          <Callout variant="info" title="Who uploads">
            This is Robina's task. The upload is quick (under a minute) and requires no technical knowledge — just the Xero export and the drag-and-drop.
          </Callout>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

const AdministrationGuide = () => {
  const [tab, setTab] = useState<Tab>("finances");

  return (
    <GuideShell>
      <GuideHero
        icon={ShieldCheck}
        eyebrow="Administration"
        title="Finance, Invoicing & Reporting"
        description="Everything in the Administration section of CindersX — review sign-offs, invoicing workflow, P&L tracking, and operational reporting."
      />

      <div className="mb-10">
        <TabBar active={tab} onChange={setTab} />
      </div>

      {tab === "review" && (
        <StubTab
          title="Review"
          description="Sign-off workflows, completed job review, and quality gates. Guide coming soon."
        />
      )}
      {tab === "invoicing" && (
        <StubTab
          title="Invoicing"
          description="Creating and managing invoices, Xero push, and marking jobs as paid. Guide coming soon."
        />
      )}
      {tab === "finances" && <FinancesContent />}
      {tab === "reporting" && (
        <StubTab
          title="Reporting"
          description="Operational reports, the reporting queue, and report builder. Guide coming soon."
        />
      )}
    </GuideShell>
  );
};

export default AdministrationGuide;

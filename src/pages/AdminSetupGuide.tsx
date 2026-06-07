import { ShieldCheck, UserPlus, Sparkles, MoreHorizontal, Plus } from "lucide-react";
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

function UsersMockup() {
  const rows = [
    { name: "Sam Patel", role: "Engineer", status: "Active", tone: "green" as const },
    { name: "Dana Cole", role: "Lead Engineer", status: "Active", tone: "green" as const },
    { name: "Jo Lee", role: "Co-ordinator", status: "Invited", tone: "blue" as const },
    { name: "Pat Kim", role: "Operations", status: "Suspended", tone: "amber" as const },
  ];
  return (
    <DeviceFrame variant="browser" url="app.cindersx.com/mvp/admin">
      <div className="space-y-2 p-1">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold">Users</span>
          <span className="inline-flex items-center gap-1 rounded-md bg-primary px-2 py-1 text-[9px] font-semibold text-primary-foreground">
            <UserPlus className="h-2.5 w-2.5" /> Create User
          </span>
        </div>
        <div className="overflow-hidden rounded-md border border-border">
          <div className="grid grid-cols-[1fr_auto_auto_14px] gap-2 bg-muted/40 px-2 py-1 text-[8px] font-semibold text-muted-foreground">
            <span>User</span><span>Role</span><span>Status</span><span />
          </div>
          {rows.map((r) => (
            <div key={r.name} className="grid grid-cols-[1fr_auto_auto_14px] items-center gap-2 border-t border-border px-2 py-1.5 text-[9px]">
              <span className="truncate font-medium">{r.name}</span>
              <span className="text-muted-foreground">{r.role}</span>
              <StatusBadge tone={r.tone}>{r.status}</StatusBadge>
              <MoreHorizontal className="h-3 w-3 text-muted-foreground" />
            </div>
          ))}
        </div>
      </div>
    </DeviceFrame>
  );
}

function JobTypeWizardMockup() {
  return (
    <DeviceFrame variant="browser" url="app.cindersx.com/mvp/job-settings/job-types">
      <div className="space-y-2.5 p-1">
        <div className="text-[10px] font-semibold">Create Job Type</div>
        <div className="flex gap-1 text-[8px]">
          <span className="rounded-md bg-primary px-2 py-0.5 font-semibold text-primary-foreground">Identity</span>
          <span className="rounded-md border border-border px-2 py-0.5 text-muted-foreground">Settings</span>
          <span className="rounded-md border border-border px-2 py-0.5 text-muted-foreground">Review</span>
        </div>
        <div className="space-y-1.5">
          <div className="space-y-0.5">
            <div className="text-[8px] text-muted-foreground">Job Name *</div>
            <div className="h-6 rounded border border-border bg-background px-1.5 text-[9px] leading-6">Fire Door Inspection</div>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            <div className="space-y-0.5">
              <div className="text-[8px] text-muted-foreground">Job Code</div>
              <div className="h-6 rounded border border-border bg-background px-1.5 text-[9px] leading-6">FDI</div>
            </div>
            <div className="space-y-0.5">
              <div className="text-[8px] text-muted-foreground">Default Class</div>
              <div className="flex h-6 items-center justify-between rounded border border-border bg-background px-1.5 text-[9px]">Fire ▾</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-1 pt-1">
            {["Cert", "Estimating", "Survey", "Active"].map((t) => (
              <span key={t} className="rounded-full border border-border px-1.5 py-0.5 text-[8px] text-muted-foreground">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </DeviceFrame>
  );
}

function DepotsMockup() {
  return (
    <DeviceFrame variant="browser" url="app.cindersx.com/mvp/settings/depots">
      <div className="space-y-2 p-1">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold">Depots</span>
          <span className="inline-flex items-center gap-1 rounded-md bg-primary px-2 py-1 text-[9px] font-semibold text-primary-foreground">
            <Plus className="h-2.5 w-2.5" /> Add Depot
          </span>
        </div>
        <div className="overflow-hidden rounded-md border border-border">
          <div className="grid grid-cols-[1fr_auto_auto] gap-2 bg-muted/40 px-2 py-1 text-[8px] font-semibold text-muted-foreground">
            <span>Name</span><span>Postcode</span><span>Default</span>
          </div>
          <div className="grid grid-cols-[1fr_auto_auto] items-center gap-2 border-t border-border px-2 py-1.5 text-[9px]">
            <span className="font-medium">London HQ</span><span className="text-muted-foreground">SW1A 1AA</span><StatusBadge tone="teal">Default</StatusBadge>
          </div>
          <div className="grid grid-cols-[1fr_auto_auto] items-center gap-2 border-t border-border px-2 py-1.5 text-[9px]">
            <span className="font-medium">Leeds Yard</span><span className="text-muted-foreground">LS1 4DY</span><span />
          </div>
        </div>
      </div>
    </DeviceFrame>
  );
}

function BulkImportMockup() {
  return (
    <DeviceFrame variant="browser" url="app.cindersx.com/mvp/settings/bulk-import">
      <div className="space-y-2 p-1">
        <div className="flex gap-1 text-[8px]">
          <span className="rounded-md bg-primary px-2 py-0.5 font-semibold text-primary-foreground">Customers + Sites</span>
          <span className="rounded-md border border-border px-2 py-0.5 text-muted-foreground">Deals</span>
          <span className="rounded-md border border-border px-2 py-0.5 text-muted-foreground">Jobs</span>
        </div>
        <div className="flex gap-1.5">
          <span className="rounded-md border border-input px-2 py-1 text-[8px]">Download template</span>
          <span className="rounded-md border border-input px-2 py-1 text-[8px]">Upload CSV</span>
        </div>
        <div className="flex items-center gap-1 text-[8px] text-muted-foreground">
          <span className="rounded bg-muted px-1.5 py-0.5">Stage</span> →
          <span className="rounded bg-muted px-1.5 py-0.5">Validate</span> →
          <span className="rounded bg-muted px-1.5 py-0.5">Commit</span>
        </div>
        <div className="rounded-md border border-border bg-card p-2 text-[9px]">
          <div className="flex items-center justify-between">
            <span className="font-medium">customers.csv</span>
            <StatusBadge tone="green">Validated</StatusBadge>
          </div>
          <div className="text-[8px] text-muted-foreground">48 / 50 rows valid · 2 errors</div>
        </div>
      </div>
    </DeviceFrame>
  );
}

/* ----------------------------- Page ----------------------------- */

const AdminSetupGuide = () => {
  const nextGuides = GUIDES.filter((g) => g.slug !== "admin-setup" && g.available).slice(0, 3);

  return (
    <GuideShell>
      <GuideHero
        icon={ShieldCheck}
        eyebrow="Admin & Setup"
        title="Running the system"
        description="The behind-the-scenes work that keeps CindersX humming: inviting your team, defining job types, and configuring the essentials. Admin and Super users only."
      />

      {/* 1. Users */}
      <SectionHeading
        step={1}
        title="Manage your team"
        description="Invite people, set their role, and control access from the Admin page."
      />
      <GuideSplit mockup={<UsersMockup />}>
        <Steps>
          <Step n={1} title="Create a user">
            Select <strong>Create User</strong>, then enter their <strong>name</strong>, <strong>email</strong> and <strong>role</strong>.
          </Step>
          <Step n={2} title="Invite or set a password">
            Choose <strong>Send invite email</strong> (they set their own password) or set a temporary one.
          </Step>
          <Step n={3} title="Fine-tune with capabilities">
            For internal staff, tick capabilities like <strong>Sales</strong>, <strong>Estimator</strong> or <strong>Approver</strong> to unlock specific actions.
          </Step>
          <Step n={4} title="Manage existing people">
            From a user's <MoreHorizontal className="inline h-3.5 w-3.5 align-text-bottom" /> menu: Edit, Reset Password, Resend Invite, Suspend or Archive.
          </Step>
        </Steps>
        <div className="mt-6">
          <Callout variant="info" title="User statuses">
            <StatusBadge tone="green">Active</StatusBadge> can log in ·{" "}
            <StatusBadge tone="blue">Invited</StatusBadge> not set up yet ·{" "}
            <StatusBadge tone="amber">Suspended</StatusBadge> blocked ·{" "}
            <StatusBadge tone="slate">Archived</StatusBadge> hidden
          </Callout>
        </div>
      </GuideSplit>

      <GuideDivider />

      {/* 2. Job types */}
      <SectionHeading
        step={2}
        title="Define your job types"
        description="Job types are the templates that drive the whole pipeline — what's required, what documents are needed, and which gates apply."
      />
      <GuideSplit mockup={<JobTypeWizardMockup />} reverse>
        <Steps>
          <Step n={1} title="Create a job type">
            In <strong>Job Settings → Job Types</strong>, the wizard walks you through <strong>Identity</strong>, <strong>Settings</strong> and <strong>Review</strong>.
          </Step>
          <Step n={2} title="Set the behaviour">
            Toggle whether it's a <strong>certification</strong> job, <strong>requires estimating</strong>, or <strong>requires a survey</strong>.
          </Step>
          <Step n={3} title="Configure the detail">
            Once created, add required <strong>Fields</strong>, <strong>Deal/Job documents</strong>, <strong>Rules</strong> and <strong>Gates</strong> — then flip it <strong>Active</strong>.
          </Step>
          <Step n={4} title="See it all in the Matrix">
            <strong>Job Matrix</strong> shows every job type's configuration at a glance, and flags any with missing setup.
          </Step>
        </Steps>
        <div className="mt-6">
          <Callout variant="tip" title="New job types start inactive">
            A job type is created switched off so you can finish configuring it before anyone can use it. Remember to set it <strong>Active</strong> when it's ready.
          </Callout>
        </div>
      </GuideSplit>

      <GuideDivider />

      {/* 3. Essentials */}
      <SectionHeading
        step={3}
        title="Set up the essentials"
        description="A few foundations make everything else work — especially depots."
      />
      <GuideSplit mockup={<DepotsMockup />}>
        <Steps>
          <Step n={1} title="Add your depots">
            In <strong>Settings → Depots</strong>, add your operating bases with a postcode. Mark one as the <strong>default</strong>.
          </Step>
          <Step n={2} title="Configuration & lookups">
            <strong>Settings → Configuration</strong> holds system options; <strong>Lookup Tables</strong> manage list values like job classes.
          </Step>
          <Step n={3} title="Map your structure">
            <strong>Org Chart</strong> lets you set reporting lines, departments and job titles for the whole team.
          </Step>
        </Steps>
        <div className="mt-6">
          <Callout variant="warning" title="Depots come first">
            You need <strong>at least one depot</strong> before you can create engineers — they're the start point for routing and field work.
          </Callout>
        </div>
      </GuideSplit>

      <GuideDivider />

      {/* 4. Bulk import */}
      <SectionHeading
        step={4}
        title="Bring in existing data"
        description="Onboarding from spreadsheets? Import customers, deals or jobs in bulk — safely staged for review."
      />
      <GuideSplit mockup={<BulkImportMockup />} reverse>
        <Steps>
          <Step n={1} title="Pick what to import">
            In <strong>Settings → Bulk Import</strong>, choose <strong>Customers + Sites</strong>, <strong>Deals</strong> or <strong>Jobs</strong>.
          </Step>
          <Step n={2} title="Download the template, fill it in">
            <strong>Download template</strong> gives you the exact columns. Fill it in, then <strong>Upload CSV</strong>.
          </Step>
          <Step n={3} title="Stage → Validate → Commit">
            Staging holds the rows; <strong>Validate</strong> is a dry-run that flags errors; <strong>Commit</strong> applies the import.
          </Step>
        </Steps>
        <div className="mt-6">
          <Callout variant="tip" title="Validate before you commit">
            Always validate first — it catches problems without changing anything, and every batch is tagged so imports stay reversible.
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
          title="Time to set things up?"
          description="Open the Admin area to manage users and configuration."
          primaryLabel="Open Admin"
          primaryTo={appPath("/mvp/admin")}
          secondaryLabel="Browse all guides"
          secondaryTo="/"
        />
      </div>
    </GuideShell>
  );
};

export default AdminSetupGuide;

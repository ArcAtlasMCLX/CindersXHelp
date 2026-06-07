import { BookOpen, ArrowRight, LifeBuoy, Sparkles } from "lucide-react";
import { GuideShell, GuideHero, GuideCard, SmartLink } from "@/components/guides/guide-primitives";
import { buttonClasses } from "@/components/ui/button";
import { GUIDES } from "./guides-registry";
import { appPath } from "@/config";

const GuidesHub = () => {
  return (
    <GuideShell backTo={appPath()} backLabel="Back to CindersX">
      <GuideHero
        icon={BookOpen}
        eyebrow="CindersX Help Centre"
        title="Guides for your team"
        description="Short, visual walkthroughs for everything you do in CindersX — pick your role or task and follow along. No training session required."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {GUIDES.map((g) => (
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
        <GuideCard
          to="/brand"
          icon={Sparkles}
          title="Brand Guidelines"
          description="Logos, colour palette, typography and tone of voice — the CindersX brand in one place."
          audience="Design · Everyone"
          available
        />
      </div>

      {/* Pointer to the deep reference manual inside the app */}
      <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:text-left">
        <div className="flex items-center gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
            <LifeBuoy className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-semibold">Looking for the full reference manual?</h3>
            <p className="text-sm text-muted-foreground">
              The in-app Help section has detailed documentation for every screen and setting.
            </p>
          </div>
        </div>
        <SmartLink to={appPath("/mvp/help")} className={buttonClasses("outline", "default", "shrink-0")}>
          Open Help <ArrowRight className="h-4 w-4" />
        </SmartLink>
      </div>
    </GuideShell>
  );
};

export default GuidesHub;

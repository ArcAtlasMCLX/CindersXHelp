import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { MousePointer2, RotateCcw, Play, CheckCircle2, Circle, Shield, MapPin, Clock } from "lucide-react";
import { DeviceFrame, StatusBadge } from "./guide-primitives";

/* ------------------------------------------------------------------ */
/*  Shared motion building blocks                                      */
/* ------------------------------------------------------------------ */

type Phase = "idle" | "moving" | "tapped";

/** A faux pointer that glides toward a button's centre and "taps". */
function Cursor({ phase }: { phase: Phase }) {
  return (
    <motion.div
      className="pointer-events-none absolute left-1/2 top-1/2 z-10"
      initial={{ opacity: 0, x: -48, y: 26, scale: 1 }}
      animate={
        phase === "idle"
          ? { opacity: 0, x: -48, y: 26, scale: 1 }
          : phase === "moving"
            ? { opacity: 1, x: -6, y: -2, scale: 1 }
            : { opacity: 1, x: -6, y: -2, scale: 0.82 }
      }
      transition={{ duration: phase === "tapped" ? 0.12 : 0.6, ease: "easeOut" }}
    >
      <MousePointer2 className="h-4 w-4 fill-white text-black drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
    </motion.div>
  );
}

/** Expanding ripple shown at the moment of the tap. */
function TapRipple({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.span
          className="pointer-events-none absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40"
          initial={{ scale: 0, opacity: 0.6 }}
          animate={{ scale: 3.2, opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      )}
    </AnimatePresence>
  );
}

/**
 * Wraps an animated mockup: autoplays once when scrolled into view,
 * honours prefers-reduced-motion (jumps to the end state, no cursor),
 * and exposes a Replay control. The render prop receives the current
 * phase + whether the interaction has completed.
 */
function MockupPlayer({
  render,
  durations = { move: 400, tap: 1200, done: 1450 },
}: {
  render: (state: { phase: Phase; done: boolean; reduced: boolean }) => React.ReactNode;
  durations?: { move: number; tap: number; done: number };
}) {
  const reduced = !!useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const timers = useRef<number[]>([]);
  const [phase, setPhase] = useState<Phase>("idle");
  const [done, setDone] = useState(false);

  const clear = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const play = useCallback(() => {
    clear();
    setDone(false);
    setPhase("idle");
    timers.current.push(window.setTimeout(() => setPhase("moving"), durations.move));
    timers.current.push(window.setTimeout(() => setPhase("tapped"), durations.tap));
    timers.current.push(window.setTimeout(() => setDone(true), durations.done));
  }, [durations.move, durations.tap, durations.done]);

  useEffect(() => {
    if (reduced) {
      setDone(true);
      setPhase("idle");
      return;
    }
    if (inView) play();
    return clear;
  }, [inView, reduced, play]);

  return (
    <div className="space-y-2">
      <div ref={ref}>{render({ phase, done, reduced })}</div>
      {!reduced && (
        <button
          onClick={play}
          className="mx-auto flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
        >
          <RotateCcw className="h-3.5 w-3.5" /> Replay demo
        </button>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Animated: Start Job → In Progress → Mark Complete                  */
/* ------------------------------------------------------------------ */

function PhoneHeader() {
  return (
    <div className="flex items-center gap-2 border-b border-border pb-2">
      <div className="text-[11px] font-bold">
        Cinders<span className="text-primary">X</span>
      </div>
      <div className="ml-auto text-right">
        <div className="text-[10px] font-semibold leading-tight">Sam Patel</div>
        <div className="text-[8px] text-muted-foreground">Mon 8 June 2026</div>
      </div>
    </div>
  );
}

export function AnimatedStartJobMockup() {
  return (
    <MockupPlayer
      render={({ phase, done }) => (
        <DeviceFrame variant="phone">
          <PhoneHeader />
          <div className="mt-2 space-y-2">
            <div className="text-sm font-bold">My Jobs</div>
            <div className="text-[8px] font-semibold uppercase tracking-wide text-muted-foreground">Today (1)</div>

            <div className="space-y-1.5 rounded-lg border border-border bg-card p-2.5">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="truncate text-[11px] font-semibold leading-tight">Riverside Tower</div>
                  <div className="truncate text-[9px] text-muted-foreground">Acme Facilities</div>
                </div>
                {/* status badge crossfade */}
                <AnimatePresence mode="wait" initial={false}>
                  {done ? (
                    <motion.span
                      key="inprogress"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <StatusBadge tone="orange">In Progress</StatusBadge>
                    </motion.span>
                  ) : (
                    <motion.span
                      key="confirmed"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <StatusBadge tone="teal">Confirmed</StatusBadge>
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex items-center gap-1 text-[8px] text-muted-foreground">
                <span className="rounded border border-border px-1 py-px">Fire Door Inspection</span>
              </div>
              <div className="flex items-center gap-1 text-[9px] text-muted-foreground">
                <MapPin className="h-2.5 w-2.5 shrink-0" /> 12 Riverside, Leeds LS1
              </div>
              <div className="flex items-center gap-1 text-[9px] text-muted-foreground">
                <Clock className="h-2.5 w-2.5 shrink-0" /> 08:00–12:00
              </div>

              {/* action button: Start Job -> Mark Complete, with cursor + ripple */}
              <div className="relative mt-1">
                <TapRipple show={phase === "tapped"} />
                <Cursor phase={phase} />
                <motion.div
                  animate={{ scale: phase === "tapped" ? 0.96 : 1 }}
                  transition={{ duration: 0.12 }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {done ? (
                      <motion.div
                        key="complete"
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="flex items-center justify-center gap-1 rounded-md bg-primary py-1.5 text-[10px] font-semibold text-primary-foreground"
                      >
                        <CheckCircle2 className="h-3 w-3" /> Mark Complete
                      </motion.div>
                    ) : (
                      <motion.div
                        key="start"
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-center gap-1 rounded-md bg-primary py-1.5 text-[10px] font-semibold text-primary-foreground"
                      >
                        <Play className="h-3 w-3" /> Start Job
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>
          </div>
        </DeviceFrame>
      )}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  StepPlayer — reveals a sequence of steps over time                 */
/* ------------------------------------------------------------------ */

function ReplayButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="mx-auto flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
    >
      <RotateCcw className="h-3.5 w-3.5" /> Replay demo
    </button>
  );
}

function StepPlayer({
  steps,
  render,
  interval = 650,
  startDelay = 450,
}: {
  steps: number;
  render: (state: { step: number; done: boolean; reduced: boolean }) => React.ReactNode;
  interval?: number;
  startDelay?: number;
}) {
  const reduced = !!useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.45 });
  const timers = useRef<number[]>([]);
  const [step, setStep] = useState(0);

  const clear = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const play = useCallback(() => {
    clear();
    setStep(0);
    for (let i = 1; i <= steps; i++) {
      timers.current.push(window.setTimeout(() => setStep(i), startDelay + i * interval));
    }
  }, [steps, interval, startDelay]);

  useEffect(() => {
    if (reduced) {
      setStep(steps);
      return;
    }
    if (inView) play();
    return clear;
  }, [inView, reduced, play, steps]);

  return (
    <div className="space-y-2">
      <div ref={ref}>{render({ step, done: step >= steps, reduced })}</div>
      {!reduced && <ReplayButton onClick={play} />}
    </div>
  );
}

/** A checklist row that flips from empty to ticked when `on` is true. */
function CheckRow({ label, on }: { label: string; on: boolean }) {
  return (
    <div className="flex items-center gap-1.5 text-[9px]">
      <span className="relative h-3 w-3">
        <AnimatePresence initial={false}>
          {on ? (
            <motion.span
              key="on"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "backOut" }}
              className="absolute inset-0"
            >
              <CheckCircle2 className="h-3 w-3 text-emerald-500" />
            </motion.span>
          ) : (
            <Circle key="off" className="absolute inset-0 h-3 w-3 text-muted-foreground/40" />
          )}
        </AnimatePresence>
      </span>
      <span className={on ? "" : "text-muted-foreground"}>{label}</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Animated: Promote to Deal — gates tick green, then promote         */
/* ------------------------------------------------------------------ */

export function AnimatedPromoteGatesMockup() {
  const gates = ["Verified customer", "Verified site", "Contact method", "Job type", "Owner assigned"];
  return (
    <StepPlayer
      steps={gates.length + 1}
      render={({ step }) => {
        const ready = step >= gates.length;
        return (
          <DeviceFrame variant="browser" url="app.cindersx.com/mvp/intake/IN-2026-0118">
            <div className="space-y-2.5 p-1">
              <div className="flex items-center justify-between">
                <div className="text-[11px] font-semibold">Acme Facilities — Riverside Tower</div>
                <AnimatePresence mode="wait" initial={false}>
                  {ready ? (
                    <motion.span key="ready" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
                      <StatusBadge tone="green">Ready to Promote</StatusBadge>
                    </motion.span>
                  ) : (
                    <motion.span key="prog" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <StatusBadge tone="blue">In Progress</StatusBadge>
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              <div className="rounded-lg border border-border bg-card p-2.5">
                <div className="mb-2 text-[9px] font-semibold uppercase tracking-wide text-muted-foreground">Promotion readiness</div>
                <div className="space-y-1.5">
                  {gates.map((g, i) => (
                    <CheckRow key={g} label={g} on={step >= i + 1} />
                  ))}
                </div>
              </div>
              <motion.div
                animate={{
                  opacity: ready ? 1 : 0.45,
                  scale: step >= gates.length + 1 ? [1, 0.97, 1] : 1,
                }}
                transition={{ duration: 0.3 }}
                className={`rounded-md py-1.5 text-center text-[10px] font-semibold ${
                  ready ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                Promote to Deal
              </motion.div>
            </div>
          </DeviceFrame>
        );
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Animated: Approval checklist — critical checks tick, then approve  */
/* ------------------------------------------------------------------ */

export function AnimatedApprovalChecklistMockup() {
  const checks = [
    "You have approval permission",
    "Quote or Estimate attached",
    "Deal created more than 3 hours ago",
    "Value matches estimate",
  ];
  return (
    <StepPlayer
      steps={checks.length + 1}
      render={({ step }) => {
        const ready = step >= checks.length;
        return (
          <DeviceFrame variant="browser" url="app.cindersx.com/mvp/deals/DL-2026-0091">
            <div className="space-y-2.5 p-1">
              <div className="flex items-center gap-1.5 text-[10px] font-semibold">
                <Shield className="h-3 w-3 text-primary" /> Approve Deal
              </div>
              <div className="text-[8px] text-muted-foreground">Approve DL-2026-0091 for conversion to a job.</div>
              <div className="space-y-1.5 rounded-lg border border-border bg-card p-2.5">
                {checks.map((c, i) => (
                  <CheckRow key={c} label={c} on={step >= i + 1} />
                ))}
              </div>
              <motion.div
                animate={{
                  opacity: ready ? 1 : 0.45,
                  scale: step >= checks.length + 1 ? [1, 0.97, 1] : 1,
                }}
                transition={{ duration: 0.3 }}
                className={`inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-[10px] font-semibold ${
                  ready ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                <Shield className="h-3 w-3" /> Approve Deal
              </motion.div>
            </div>
          </DeviceFrame>
        );
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Animated: Planner — a job drops onto the timeline, capacity fills  */
/* ------------------------------------------------------------------ */

const PLANNER_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];

export function AnimatedPlannerMockup() {
  return (
    <StepPlayer
      steps={2}
      interval={800}
      render={({ step }) => {
        const scheduled = step >= 2; // block landed
        const leaving = step >= 1; // first card leaving the panel
        const capacity = scheduled ? 78 : 60;
        return (
          <DeviceFrame variant="browser" url="app.cindersx.com/mvp/planner">
            <div className="flex gap-2 p-1">
              {/* unscheduled */}
              <div className="w-[34%] shrink-0 space-y-1.5">
                <div className="flex items-center gap-1 text-[8px] font-semibold uppercase tracking-wide text-muted-foreground">
                  Unscheduled
                  <span className="rounded-full bg-primary px-1 text-[8px] text-primary-foreground">{scheduled ? 2 : 3}</span>
                </div>
                <AnimatePresence initial={false}>
                  {!leaving && (
                    <motion.div
                      key="oak"
                      initial={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden rounded-md border border-primary/40 bg-card p-1.5"
                    >
                      <div className="text-[8px] font-semibold">DL · Oak House</div>
                      <div className="text-[7px] text-muted-foreground">0 of 2 days scheduled</div>
                    </motion.div>
                  )}
                </AnimatePresence>
                {["DL · The Gables", "DL · Mill Court"].map((t) => (
                  <div key={t} className="rounded-md border border-border bg-card p-1.5">
                    <div className="text-[8px] font-semibold">{t}</div>
                    <div className="text-[7px] text-muted-foreground">0 of 2 days scheduled</div>
                  </div>
                ))}
              </div>
              {/* timeline */}
              <div className="min-w-0 flex-1 space-y-1.5">
                <div className="overflow-hidden rounded-md border border-border">
                  <div className="grid grid-cols-[28px_repeat(5,1fr)] bg-muted/40 text-[7px] text-muted-foreground">
                    <div className="px-1 py-0.5" />
                    {PLANNER_DAYS.map((d) => (
                      <div key={d} className="px-1 py-0.5 text-center">{d}</div>
                    ))}
                  </div>
                  {/* Sam row — receives the new block on Wed–Thu */}
                  <div className="grid grid-cols-[28px_repeat(5,1fr)] items-center border-t border-border">
                    <div className="px-1 py-1 text-[7px] font-medium">Sam P.</div>
                    <div className="px-0.5 py-1" style={{ gridColumn: "span 2" }}>
                      <div className="h-3 rounded bg-blue-500/80" />
                    </div>
                    {/* Wed–Thu target */}
                    <div className="px-0.5 py-1" style={{ gridColumn: "span 2" }}>
                      <AnimatePresence>
                        {scheduled && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.45, ease: "backOut" }}
                            className="h-3 rounded bg-emerald-500/80"
                          />
                        )}
                      </AnimatePresence>
                    </div>
                    <div className="px-0.5 py-1" />
                  </div>
                  {/* Dana row — static */}
                  <div className="grid grid-cols-[28px_repeat(5,1fr)] items-center border-t border-border">
                    <div className="px-1 py-1 text-[7px] font-medium">Dana C.</div>
                    <div className="px-0.5 py-1" />
                    <div className="px-0.5 py-1"><div className="h-3 rounded bg-amber-500/80" /></div>
                    <div className="px-0.5 py-1" style={{ gridColumn: "span 2" }}><div className="h-3 rounded bg-blue-500/80" /></div>
                    <div className="px-0.5 py-1" />
                  </div>
                </div>
                {/* capacity */}
                <div className="rounded-md bg-card p-1.5">
                  <div className="flex justify-between text-[7px] text-muted-foreground">
                    <span>Capacity booked</span>
                    <motion.span animate={{ color: scheduled ? "hsl(var(--primary))" : undefined }}>{capacity}%</motion.span>
                  </div>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-muted">
                    <motion.div
                      className="h-full rounded-full bg-primary"
                      initial={false}
                      animate={{ width: `${capacity}%` }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </DeviceFrame>
        );
      }}
    />
  );
}

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { MousePointer2, RotateCcw, Play, CheckCircle2, MapPin, Clock } from "lucide-react";
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

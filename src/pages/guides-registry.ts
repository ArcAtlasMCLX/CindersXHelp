import {
  Compass,
  Inbox,
  ClipboardList,
  CheckCircle2,
  CalendarDays,
  HardHat,
  ShieldCheck,
  Mail,
  LucideIcon,
} from "lucide-react";

export interface GuideMeta {
  slug: string;
  path: string;
  icon: LucideIcon;
  title: string;
  description: string;
  audience: string;
  available: boolean;
}

/** Single source of truth for every staff guide. Flip `available` as each is built. */
export const GUIDES: GuideMeta[] = [
  {
    slug: "getting-started",
    path: "/getting-started",
    icon: Compass,
    title: "Getting Started",
    description: "Sign in, find your way around the sidebar, and understand your home screen.",
    audience: "Everyone",
    available: true,
  },
  {
    slug: "sales-coordination",
    path: "/sales-coordination",
    icon: Inbox,
    title: "Sales & Coordination",
    description: "Capture an enquiry, promote it to a deal, and request an estimate.",
    audience: "Sales · Coordinators",
    available: false,
  },
  {
    slug: "estimating",
    path: "/estimating",
    icon: ClipboardList,
    title: "Estimating",
    description: "Pick up a deal from the queue, work it, and return your estimate.",
    audience: "Estimators",
    available: false,
  },
  {
    slug: "approvals-conversion",
    path: "/approvals-conversion",
    icon: CheckCircle2,
    title: "Approvals & Conversion",
    description: "Approve a quoted deal, clear the gates, and convert it into a job.",
    audience: "Managers · Approvers",
    available: false,
  },
  {
    slug: "planning-scheduling",
    path: "/planning-scheduling",
    icon: CalendarDays,
    title: "Planning & Scheduling",
    description: "Use the Planner, assign engineers, and optimise routes for the week.",
    audience: "Planners · Operations",
    available: false,
  },
  {
    slug: "field-engineers",
    path: "/field-engineers",
    icon: HardHat,
    title: "Field Engineers",
    description: "The mobile Field View: check in and out, add notes and photos, complete jobs.",
    audience: "Engineers · Lead Engineers",
    available: false,
  },
  {
    slug: "admin-setup",
    path: "/admin-setup",
    icon: ShieldCheck,
    title: "Admin & Setup",
    description: "Invite users, manage roles, and configure job types and settings.",
    audience: "Admins · Super",
    available: false,
  },
  {
    slug: "client-proposals",
    path: "/client-proposals",
    icon: Mail,
    title: "Client Proposals",
    description: "What clients see when they accept, reschedule, or decline a proposed date.",
    audience: "Client-facing",
    available: false,
  },
];

export const getGuide = (slug: string) => GUIDES.find((g) => g.slug === slug);

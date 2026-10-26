import type { ComponentType } from "react";
import {
  Headset,
  TrendingUp,
  FileText,
  Receipt,
  Users,
  BarChart3,
  Wrench,
  Boxes,
} from "lucide-react";

export type CategoryId =
  | "support"
  | "sales"
  | "data_entry"
  | "finance"
  | "hr"
  | "reporting"
  | "it_helpdesk"
  | "supply_chain";

export interface Category {
  id: CategoryId;
  label: string;
  prompt: string;
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  /** Fixed categorical color slot, in the validated palette's fixed order. */
  colorSlot: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  /** Realistic share of this category's manual work that AI agents can take on. */
  automatableFraction: number;
  agent: {
    name: string;
    description: string;
  };
}

// Fixed order matches the validated 8-slot categorical palette
// (references/palette.md) — never re-ordered or re-colored per selection.
export const CATEGORIES: Category[] = [
  {
    id: "support",
    label: "Customer support & helpdesk",
    prompt: "Answering tickets, chats, and repeat customer questions",
    icon: Headset,
    colorSlot: 1,
    automatableFraction: 0.6,
    agent: {
      name: "Support Triage Agent",
      description:
        "Reads every incoming ticket, resolves the repeatable ones end-to-end, and hands your team only the cases that genuinely need a human.",
    },
  },
  {
    id: "sales",
    label: "Sales & lead qualification",
    prompt: "Qualifying inbound leads, follow-ups, and CRM upkeep",
    icon: TrendingUp,
    colorSlot: 2,
    automatableFraction: 0.5,
    agent: {
      name: "Lead Qualification Agent",
      description:
        "Scores and enriches every inbound lead, drafts follow-ups, and keeps the CRM current so reps only talk to people worth talking to.",
    },
  },
  {
    id: "data_entry",
    label: "Data entry & document processing",
    prompt: "Copying data between systems, forms, PDFs, and spreadsheets",
    icon: FileText,
    colorSlot: 3,
    automatableFraction: 0.72,
    agent: {
      name: "Document Processing Agent",
      description:
        "Extracts structured data from documents, forms, and emails and writes it straight into the systems that need it — no retyping.",
    },
  },
  {
    id: "finance",
    label: "Finance, invoicing & reconciliation",
    prompt: "Invoices, expense approvals, and matching records",
    icon: Receipt,
    colorSlot: 4,
    automatableFraction: 0.58,
    agent: {
      name: "Finance Ops Agent",
      description:
        "Matches invoices to POs and receipts, flags exceptions, and keeps the books reconciled without a human touching every line.",
    },
  },
  {
    id: "hr",
    label: "HR, recruiting & onboarding",
    prompt: "Screening candidates, scheduling, and onboarding paperwork",
    icon: Users,
    colorSlot: 5,
    automatableFraction: 0.5,
    agent: {
      name: "People Ops Agent",
      description:
        "Screens applicants against your bar, handles scheduling back-and-forth, and walks new hires through onboarding steps automatically.",
    },
  },
  {
    id: "reporting",
    label: "Reporting & analytics",
    prompt: "Pulling numbers, building decks, and status updates",
    icon: BarChart3,
    colorSlot: 6,
    automatableFraction: 0.65,
    agent: {
      name: "Reporting Agent",
      description:
        "Pulls from your live systems and assembles the recurring reports and updates your team currently builds by hand, on schedule.",
    },
  },
  {
    id: "it_helpdesk",
    label: "IT helpdesk & internal requests",
    prompt: "Password resets, access requests, and internal tickets",
    icon: Wrench,
    colorSlot: 7,
    automatableFraction: 0.68,
    agent: {
      name: "Internal Helpdesk Agent",
      description:
        "Resolves routine access and IT requests instantly within policy, and routes only the edge cases to your internal team.",
    },
  },
  {
    id: "supply_chain",
    label: "Supply chain & inventory ops",
    prompt: "Order tracking, stock checks, and vendor coordination",
    icon: Boxes,
    colorSlot: 8,
    automatableFraction: 0.55,
    agent: {
      name: "Supply Chain Agent",
      description:
        "Watches stock and order status across systems, chases vendors, and raises exceptions before they become a problem.",
    },
  },
];

export function getCategory(id: CategoryId): Category {
  const cat = CATEGORIES.find((c) => c.id === id);
  if (!cat) throw new Error(`Unknown category: ${id}`);
  return cat;
}

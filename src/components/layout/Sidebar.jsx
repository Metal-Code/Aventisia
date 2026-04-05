import {
  Bot, BrainCircuit, Library, Megaphone, Monitor,
  List, Zap, Briefcase, Activity, Shield,
  BookOpen, BarChart2, Building2, Puzzle, Settings
} from "lucide-react";

const myProjects = [
  { label: "Agents", icon: Bot },
  { label: "AI Models", icon: BrainCircuit },
  { label: "Library", icon: Library },
];

const orchestrator = [
  { label: "Published", icon: Megaphone },
  { label: "Machines", icon: Monitor },
  { label: "Queues", icon: List },
  { label: "Triggers", icon: Zap },
  { label: "Jobs", icon: Briefcase },
  { label: "Executions", icon: Activity },
  { label: "Vault", icon: Shield },
  { label: "Knowledge Base", icon: BookOpen, active: true },
  { label: "Key Store", icon: BarChart2 },
];

const admin = [
  { label: "Tenant", icon: Building2 },
  { label: "Integrations", icon: Puzzle },
  { label: "Configuration", icon: Settings },
];

function NavItem({ icon: Icon, label, active }) {
  return (
    <li>
      <button
        className={`flex items-center gap-3 w-full px-3 py-2 rounded-md text-sm transition-colors
          ${active
            ? "bg-[#4F46E5]/10 text-[#4F46E5] font-medium border-l-2 border-[#4F46E5]"
            : "text-gray-600 hover:bg-gray-100"
          }`}
      >
        <Icon className="w-4 h-4 shrink-0" />
        {label}
      </button>
    </li>
  );
}

function SectionLabel({ label }) {
  return (
    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest px-3 mt-5 mb-1">
      {label}
    </p>
  );
}

export default function Sidebar() {
  return (
    <aside className="w-48 bg-white border-r border-gray-200 flex flex-col py-3 overflow-y-auto shrink-0">
      <SectionLabel label="My Projects" />
      <ul className="space-y-0.5 px-2">
        {myProjects.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </ul>

      <SectionLabel label="Orchestrator" />
      <ul className="space-y-0.5 px-2">
        {orchestrator.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </ul>

      <SectionLabel label="Admin" />
      <ul className="space-y-0.5 px-2">
        {admin.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </ul>
    </aside>
  );
}
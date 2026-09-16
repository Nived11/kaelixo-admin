import { Plus, Layers, Settings, BookOpen, ChevronRight } from "lucide-react";

export default function ProductsQuickActions({ onNavigate }: { onNavigate: (view: string) => void }) {
  const actions = [
    { title: "Add New Product", icon: Plus, action: () => onNavigate("create") },
    { title: "Manage Plans", icon: Layers, action: () => {} },
    { title: "Product Settings", icon: Settings, action: () => {} },
    { title: "View Documentation", icon: BookOpen, action: () => {} },
  ];

  return (
    <div className="bg-white rounded-[16px] p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
      <h2 className="text-[13px] font-bold text-[#030C25] mb-0.5">Quick Actions</h2>
      <p className="text-[10px] text-[#64748b] font-medium mb-3">Common product management tasks</p>

      <div className="flex flex-col gap-2">
        {actions.map((act, i) => (
          <div 
            key={i} 
            onClick={act.action}
            className="bg-white rounded-xl p-2.5 border border-gray-100 shadow-[0_2px_6px_-2px_rgba(0,0,0,0.04)] flex items-center justify-between hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-[#7a42ff] text-white shadow-sm shrink-0">
                <act.icon size={14} strokeWidth={2.5} />
              </div>
              <h3 className="text-[11px] font-bold text-[#030C25] group-hover:text-[#7a42ff] transition-colors truncate">
                {act.title}
              </h3>
            </div>

            <div className="w-6 h-6 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-purple-50 group-hover:text-[#7a42ff] transition-colors shrink-0">
              <ChevronRight size={14} strokeWidth={2.5} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
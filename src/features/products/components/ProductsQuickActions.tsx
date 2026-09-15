import { PlusCircle, Sliders, Settings, BookOpen } from "lucide-react";

export default function ProductsQuickActions() {
  const actions = [
    { title: "Add New Product", desc: "Launch a new SaaS solution", icon: PlusCircle, color: "text-[#7a42ff]", bg: "bg-purple-50" },
    { title: "Manage Plans", desc: "Update pricing and tiers", icon: Sliders, color: "text-[#FF0052]", bg: "bg-rose-50" },
    { title: "Product Settings", desc: "Global configurations", icon: Settings, color: "text-[#2bbcff]", bg: "bg-sky-50" },
    { title: "View Documentation", desc: "Guides and API specs", icon: BookOpen, color: "text-[#10b981]", bg: "bg-emerald-50" },
  ];

  return (
    <div className="bg-white rounded-[16px] p-5 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
      <h2 className="text-[14px] font-bold text-[#030C25] mb-1">Quick Actions</h2>
      <p className="text-[10px] text-[#64748b] font-medium mb-4">Common product management tasks</p>

      {/* Changed grid to 2 columns or vertical list to avoid text squeezing on the right sidebar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {actions.map((act, i) => (
          <div key={i} className="bg-gray-50/70 rounded-xl p-3 border border-gray-100 flex items-center gap-2.5 hover:bg-gray-100/50 transition-colors cursor-pointer group">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${act.bg} ${act.color}`}>
              <act.icon size={16} />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-[11px] font-bold text-[#030C25] group-hover:text-[#7a42ff] transition-colors truncate">{act.title}</h3>
              <p className="text-[9px] text-gray-500 truncate">{act.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
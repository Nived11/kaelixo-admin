"use client";

import { UserPlus, FileText, TrendingUp, Download, ChevronRight } from "lucide-react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { useRouter } from "next/navigation";

export default function CustomerSidebar() {
  const router = useRouter();

  const segmentsData = [
    { name: "Enterprise", value: 156, pct: "10.5%", color: "#8b5cf6" },
    { name: "Professional", value: 342, pct: "23.1%", color: "#ec4899" },
    { name: "Growth", value: 298, pct: "20.1%", color: "#3b82f6" },
    { name: "Starter", value: 486, pct: "32.8%", color: "#10b981" },
    { name: "Trial", value: 200, pct: "13.5%", color: "#9ca3af" },
  ];

  const lifecycleData = [
    { name: "Active", value: 1124, pct: "75.9%", color: "#10b981" },
    { name: "Trial", value: 200, pct: "13.5%", color: "#8b5cf6" },
    { name: "Pending", value: 78, pct: "5.3%", color: "#f97316" },
    { name: "At Risk", value: 58, pct: "3.9%", color: "#ec4899" },
    { name: "Cancelled", value: 22, pct: "1.5%", color: "#6b7280" },
  ];

  const quickActions = [
    { title: "Add Customer", icon: UserPlus, bg: "bg-purple-50/80 hover:bg-purple-100/80 text-purple-700 border-purple-100/50", action: () => router.push("/customers/add") },
    { title: "Send Invoice", icon: FileText, bg: "bg-blue-50/80 hover:bg-blue-100/80 text-blue-700 border-blue-100/50", action: () => {} },
    { title: "Upgrade Plan", icon: TrendingUp, bg: "bg-rose-50/80 hover:bg-rose-100/80 text-rose-700 border-rose-100/50", action: () => {} },
    { title: "Export Customers", icon: Download, bg: "bg-emerald-50/80 hover:bg-emerald-100/80 text-emerald-700 border-emerald-100/50", action: () => {} },
  ];

  const regions = [
    { region: "India", count: 482, pct: "32.5%", width: "80%", flagUrl: "https://flagcdn.com/w40/in.png" },
    { region: "United States", count: 298, pct: "20.1%", width: "55%", flagUrl: "https://flagcdn.com/w40/us.png" },
    { region: "United Kingdom", count: 156, pct: "10.5%", width: "40%", flagUrl: "https://flagcdn.com/w40/gb.png" },
    { region: "Australia", count: 124, pct: "8.4%", width: "25%", flagUrl: "https://flagcdn.com/w40/au.png" },
    { region: "Singapore", count: 98, pct: "6.6%", width: "20%", flagUrl: "https://flagcdn.com/w40/sg.png" },
    { region: "Others", count: 324, pct: "21.9%", width: "60%", flagUrl: null },
  ];

  return (
    <div className="space-y-4">
      
      {/* 1. Customer Segments */}
      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
        <div className="flex justify-between items-center mb-0.5">
          <h3 className="text-[13px] font-bold text-[#030C25]">Customer Segments</h3>
          <a href="#" className="text-[10px] text-[#7a42ff] font-bold hover:underline flex items-center gap-0.5">
            View All <ChevronRight size={12} strokeWidth={2.5} />
          </a>
        </div>
        <p className="text-[10px] text-gray-400 mb-3">Distribution by plan type</p>

        <div className="flex items-center justify-between gap-2">
          <div className="relative w-[100px] h-[100px] shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={segmentsData} innerRadius={32} outerRadius={46} paddingAngle={2} dataKey="value" stroke="none">
                  {segmentsData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
              <span className="text-[12px] font-black text-[#030C25] leading-none">1,482</span>
              <span className="text-[7.5px] font-medium text-gray-400 mt-0.5">Customers</span>
            </div>
          </div>

          <div className="flex flex-col gap-1 w-full text-[10px]">
            {segmentsData.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                  <span className="text-gray-600 font-semibold truncate max-w-[75px]">{item.name}</span>
                </div>
                <div className="flex gap-2 text-right shrink-0">
                  <span className="font-bold text-[#030C25]">{item.value}</span>
                  <span className="text-gray-400 w-8">{item.pct}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Customer Lifecycle */}
      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
        <div className="flex justify-between items-center mb-0.5">
          <h3 className="text-[13px] font-bold text-[#030C25]">Customer Lifecycle</h3>
          <a href="#" className="text-[10px] text-[#7a42ff] font-bold hover:underline flex items-center gap-0.5">
            View All <ChevronRight size={12} strokeWidth={2.5} />
          </a>
        </div>
        <p className="text-[10px] text-gray-400 mb-3">Customers by current status</p>

        <div className="flex items-center justify-between gap-2">
          <div className="relative w-[100px] h-[100px] shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={lifecycleData} innerRadius={32} outerRadius={46} paddingAngle={2} dataKey="value" stroke="none">
                  {lifecycleData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
              <span className="text-[12px] font-black text-[#030C25] leading-none">1,482</span>
              <span className="text-[7.5px] font-medium text-gray-400 mt-0.5">Customers</span>
            </div>
          </div>

          <div className="flex flex-col gap-1 w-full text-[10px]">
            {lifecycleData.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                  <span className="text-gray-600 font-semibold truncate max-w-[75px]">{item.name}</span>
                </div>
                <div className="flex gap-2 text-right shrink-0">
                  <span className="font-bold text-[#030C25]">{item.value}</span>
                  <span className="text-gray-400 w-8">{item.pct}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Quick Actions */}
      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
        <h3 className="text-[12px] font-bold text-[#030C25] mb-0.5">Quick Actions</h3>
        <p className="text-[10px] text-gray-400 mb-3">Common customer management actions</p>

        <div className="grid grid-cols-2 gap-2">
          {quickActions.map((qa, i) => (
            <div 
              key={i} 
              onClick={qa.action}
              className={`rounded-md px-2 py-2.5 border transition-all cursor-pointer flex items-center justify-between shadow-xs ${qa.bg}`}
            >
              <div className="flex items-center gap-1.5 min-w-0">
                <qa.icon size={14} strokeWidth={2.5} className="shrink-0" />
                <span className="text-[9.5px] font-bold truncate">{qa.title}</span>
              </div>
              <ChevronRight size={12} strokeWidth={2.5} className="shrink-0 opacity-70 ml-0.5" />
            </div>
          ))}
        </div>
      </div>

      {/* 4. Top Customer Regions */}
      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
        <div className="flex justify-between items-center mb-0.5">
          <h3 className="text-[13px] font-bold text-[#030C25]">Top Customer Regions</h3>
          <a href="#" className="text-[10px] text-[#7a42ff] font-bold hover:underline flex items-center gap-0.5">
            View All <ChevronRight size={12} strokeWidth={2.5} />
          </a>
        </div>
        <p className="text-[10px] text-gray-400 mb-3">Customers by region</p>

        <div className="space-y-2 text-[10px]">
          {regions.map((reg, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between items-center font-semibold text-gray-700">
                <div className="flex items-center gap-1.5">
                  {reg.flagUrl ? (
                    <img src={reg.flagUrl} alt={reg.region} className="w-4 h-3 object-cover rounded-sm border border-gray-100 shadow-xs" />
                  ) : (
                    <div className="w-4 h-3 rounded-full bg-gray-300 shrink-0" />
                  )}
                  <span>{reg.region}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#030C25] font-bold">{reg.count}</span>
                  <span className="text-gray-400 w-8 text-right">{reg.pct}</span>
                </div>
              </div>
              <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#8b5cf6] h-full rounded-full" style={{ width: reg.width }} />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
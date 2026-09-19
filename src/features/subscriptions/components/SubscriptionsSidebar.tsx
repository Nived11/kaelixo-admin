"use client";

import { ArrowRight, Plus, Send, ArrowUpCircle, Download } from "lucide-react";
import { ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell } from "recharts";

export default function SubscriptionsSidebar() {
  const statusData = [
    { name: "Active", value: 892, pct: "71.5%", color: "#10b981" },
    { name: "Trial", value: 142, pct: "11.4%", color: "#8b5cf6" },
    { name: "Pending Renewal", value: 98, pct: "7.9%", color: "#f59e0b" },
    { name: "Cancelled", value: 68, pct: "5.4%", color: "#f43f5e" },
    { name: "Paused", value: 32, pct: "2.6%", color: "#3b82f6" },
    { name: "Expired", value: 16, pct: "1.3%", color: "#9ca3af" },
  ];

  const cycleData = [
    { name: "Monthly", value: 782, pct: "62.7%", color: "#8b5cf6" },
    { name: "Annual", value: 398, pct: "31.9%", color: "#3b82f6" },
    { name: "Quarterly", value: 54, pct: "4.3%", color: "#ec4899" },
    { name: "Semi-Annual", value: 14, pct: "1.1%", color: "#10b981" },
  ];

  const plansData = [
    { label: "Professional", count: 428, pct: "34.3%", width: "85%", color: "#8b5cf6" },
    { label: "Business", count: 356, pct: "28.5%", width: "70%", color: "#3b82f6" },
    { label: "Enterprise", count: 208, pct: "16.7%", width: "40%", color: "#ec4899" },
    { label: "Starter", count: 142, pct: "11.4%", width: "28%", color: "#10b981" },
    { label: "Free / Trial", count: 114, pct: "9.1%", width: "20%", color: "#9ca3af" },
  ];

  const quickActions = [
    { title: "Add Subscription", desc: "Create a new subscription", icon: Plus, iconBg: "bg-pink-500 text-white" },
    { title: "Send Renewal Reminder", desc: "Notify upcoming renewals", icon: Send, iconBg: "bg-blue-600 text-white" },
    { title: "Upgrade Plan", desc: "Change subscription plan", icon: ArrowUpCircle, iconBg: "bg-purple-600 text-white" },
    { title: "Export Subscriptions", desc: "Download as CSV/Excel", icon: Download, iconBg: "bg-emerald-500 text-white" },
  ];

  return (
    <div className="flex flex-col gap-4">
      
      {/* 1. Subscription Status Distribution Donut Chart */}
      <div className="bg-white rounded-[16px] p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[13px] font-black text-[#030C25]">Subscription Status Distribution</h2>
          <a href="#" className="text-[9.5px] font-bold text-[#7a42ff] hover:underline flex items-center gap-0.5 whitespace-nowrap">
            View All <ArrowRight size={10} strokeWidth={2.5} />
          </a>
        </div>
        
        <div className="flex items-center justify-between gap-2">
          {/* Donut Chart */}
          <div className="relative w-[95px] h-[95px] shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie data={statusData} innerRadius={30} outerRadius={46} paddingAngle={2} dataKey="value" stroke="none">
                  {statusData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
              </RechartsPieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
              <span className="text-[14px] font-black text-[#030C25] leading-none">1,248</span>
              <span className="text-[8px] font-medium text-gray-600 mt-0.5">Subscriptions</span>
            </div>
          </div>

          {/* Legend Items */}
          <div className="flex flex-col gap-1.5 flex-1 min-w-0 text-[10px]">
            {statusData.map((item, i) => (
              <div key={i} className="flex items-center justify-between gap-1">
                <div className="flex items-center gap-1.5 min-w-0">
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                  <span className="text-gray-600 font-semibold truncate text-[9.5px]">{item.name}</span>
                </div>
                <div className="flex items-center gap-1.5 text-right shrink-0">
                  <span className="font-bold text-[#030C25] text-[10px] w-6">{item.value}</span>
                  <span className="text-gray-600 text-[9px] w-6 font-medium text-right">{item.pct}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Billing Cycle Mix Donut Chart */}
      <div className="bg-white rounded-[16px] p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[13px] font-black text-[#030C25]">Billing Cycle Mix</h2>
        </div>
        
        <div className="flex items-center justify-between gap-2">
          {/* Donut Chart */}
          <div className="relative w-[95px] h-[95px] shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie data={cycleData} innerRadius={30} outerRadius={46} paddingAngle={2} dataKey="value" stroke="none">
                  {cycleData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
              </RechartsPieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
              <span className="text-[14px] font-black text-[#030C25] leading-none">1,248</span>
              <span className="text-[8px] font-medium text-gray-600 mt-0.5">Subscriptions</span>
            </div>
          </div>

          {/* Legend Items */}
          <div className="flex flex-col gap-1.5 flex-1 min-w-0 text-[10px] pl-2">
            {cycleData.map((item, i) => (
              <div key={i} className="flex items-center justify-between gap-1">
                <div className="flex items-center gap-1.5 min-w-0">
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                  <span className="text-gray-600 font-semibold truncate text-[9.5px]">{item.name}</span>
                </div>
                <div className="flex items-center gap-1.5 text-right shrink-0">
                  <span className="font-bold text-[#030C25] text-[10px] w-6">{item.value}</span>
                  <span className="text-gray-600 text-[9px] w-6 font-medium text-right">{item.pct}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Top Plans by Subscriptions */}
      <div className="bg-white rounded-[16px] p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[13px] font-black text-[#030C25]">Top Plans by Subscriptions</h2>
          <a href="#" className="text-[9.5px] font-bold text-[#7a42ff] hover:underline flex items-center gap-0.5 whitespace-nowrap">
            View All <ArrowRight size={10} strokeWidth={2.5} />
          </a>
        </div>

        <div className="space-y-3">
          {plansData.map((item, i) => (
            <div key={i} className="flex items-center justify-between gap-1.5 text-[10px]">
              <span className="w-[60px] font-semibold text-[#5c6ac4] text-[9.5px] shrink-0 truncate">{item.label}</span>
              <div className="flex-1 px-1">
                <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: item.width, backgroundColor: item.color }} />
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-right shrink-0">
                <span className="font-bold text-[#030C25] text-[10px] w-6">{item.count}</span>
                <span className="text-gray-600 text-[9px] w-6 font-medium text-right">{item.pct}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Quick Actions */}
      <div className="bg-white rounded-[16px] p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex flex-col">
        <h2 className="text-[13px] font-black text-[#030C25] mb-4">Quick Actions</h2>

        {/* Changed to flex-col (1 item per row) with slightly larger text */}
        <div className="flex flex-col gap-2.5">
          {quickActions.map((action, i) => (
            <div key={i} className="flex items-center gap-3 p-2.5 border border-gray-100 rounded-lg hover:border-[#5c45fd]/30 hover:bg-gray-50/50 transition-colors cursor-pointer group">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${action.iconBg} shadow-sm group-hover:scale-105 transition-transform`}>
                <action.icon size={15} strokeWidth={2.5} />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-[12px] font-bold text-[#030C25] truncate">{action.title}</h4>
                <p className="text-[10px] text-gray-500 truncate mt-0.5">{action.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
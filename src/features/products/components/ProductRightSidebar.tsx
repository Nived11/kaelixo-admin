"use client";

import { BarChart3 } from "lucide-react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

export default function ProductRightSidebar() {
  const categoryData = [
    { name: "CRM", value: 3, pct: "25%", color: "#7a42ff" },
    { name: "Content & CMS", value: 2, pct: "16.7%", color: "#FF0052" },
    { name: "Booking & Travel", value: 2, pct: "16.7%", color: "#2bbcff" },
    { name: "Automation", value: 2, pct: "16.7%", color: "#10b981" },
    { name: "AI & Analytics", value: 2, pct: "16.7%", color: "#8b5cf6" },
    { name: "Other", value: 1, pct: "8.3%", color: "#9ca3af" },
  ];

  const roadmap = [
    { name: "Analytics Hub", status: "In Development", date: "Q4 2026", color: "text-purple-600 bg-purple-50" },
    { name: "Loyalty Engine", status: "Planning", date: "Q1 2027", color: "text-amber-600 bg-amber-50" },
    { name: "Marketplace Suite", status: "Design", date: "Q1 2027", color: "text-sky-600 bg-sky-50" },
  ];

  return (
    <div className="flex flex-col gap-4">
      
      {/* Categories Donut Chart */}
      <div className="bg-white rounded-[16px] p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex flex-col">
        <h2 className="text-[13px] font-bold text-[#030C25] mb-0.5">Product Categories</h2>
        <p className="text-[10px] text-[#64748b] font-medium mb-3">Distribution by product count</p>
        
        <div className="flex items-center justify-between gap-2">
          <div className="relative w-[100px] h-[100px] shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={categoryData} innerRadius={30} outerRadius={46} paddingAngle={2} dataKey="value" stroke="none">
                  {categoryData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-[13px] font-black text-[#030C25] leading-tight">12</span>
              <span className="text-[8px] font-medium text-gray-400">Products</span>
            </div>
          </div>

          <div className="flex flex-col gap-1 w-full text-[9px]">
            {categoryData.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                  <span className="text-gray-600 font-medium truncate max-w-[70px]">{item.name}</span>
                </div>
                <div className="flex gap-1.5 text-right shrink-0">
                  <span className="font-bold text-[#030C25]">{item.value}</span>
                  <span className="text-gray-400 w-7">{item.pct}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Launch Pipeline */}
      <div className="bg-white rounded-[16px] p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex flex-col">
        <div className="flex justify-between items-center mb-3">
          <div>
            <h2 className="text-[13px] font-bold text-[#030C25]">Launch Pipeline</h2>
            <p className="text-[10px] text-[#64748b] font-medium">Upcoming products</p>
          </div>
          <a href="#" className="text-[10px] font-semibold text-[#7a42ff] hover:underline">Roadmap &rarr;</a>
        </div>

        <div className="space-y-2 mt-1">
          {roadmap.map((item, i) => (
            <div key={i} className="flex items-center justify-between p-2 rounded-xl bg-gray-50/70 border border-gray-100 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-white flex items-center justify-center text-[#7a42ff] shadow-sm">
                  <BarChart3 size={12} />
                </div>
                <div>
                  <p className="font-bold text-[#030C25] text-[11px] truncate max-w-[100px]">{item.name}</p>
                  <span className={`text-[8px] font-bold px-1 py-0.2 rounded ${item.color}`}>{item.status}</span>
                </div>
              </div>
              <span className="text-[9px] font-bold text-gray-500 bg-white px-2 py-0.5 rounded-lg border border-gray-100 shrink-0">{item.date}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
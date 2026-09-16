"use client";

import { BarChart3, Star, Store } from "lucide-react";
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
    { 
      name: "Analytics Hub", 
      desc: "Advanced analytics and reporting platform", 
      status: "In Development", 
      date: "Q4 2026", 
      icon: BarChart3, 
      color: "text-purple-600 bg-purple-50",
      dotColor: "bg-purple-600",
      iconBg: "bg-purple-50 text-purple-600" 
    },
    { 
      name: "Loyalty Engine", 
      desc: "Customer loyalty and rewards platform", 
      status: "Planning", 
      date: "Q1 2027", 
      icon: Star, 
      color: "text-amber-600 bg-amber-50",
      dotColor: "bg-amber-500",
      iconBg: "bg-amber-50 text-amber-500",
      isFilled: true 
    },
    { 
      name: "Marketplace Suite", 
      desc: "Multi-vendor marketplace solution", 
      status: "Design", 
      date: "Q1 2027", 
      icon: Store, 
      color: "text-sky-600 bg-sky-50",
      dotColor: "bg-sky-500",
      iconBg: "bg-sky-50 text-sky-600" 
    },
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
              <span className="text-[8px] font-medium text-gray-600">Products</span>
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
                  <span className="text-gray-600 w-7">{item.pct}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Launch Pipeline with Filled Icons */}
      <div className="bg-white rounded-[16px] p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex flex-col">
        <div className="flex justify-between items-center mb-3">
          <div>
            <h2 className="text-[13px] font-bold text-[#030C25]">Launch Pipeline</h2>
            <p className="text-[10px] text-[#64748b] font-medium">Upcoming products and roadmap</p>
          </div>
          <a href="#" className="text-[10px] font-bold text-[#7a42ff] hover:underline">View Roadmap &rarr;</a>
        </div>

        <div className="space-y-2.5 mt-1">
          {roadmap.map((item, i) => (
            <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50/70 border border-gray-100/80">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${item.iconBg} shadow-sm`}>
                  <item.icon size={16} className={item.isFilled ? "fill-current" : ""} />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-[#030C25] text-[11px] truncate">{item.name}</p>
                  <p className="text-[9px] text-gray-500  mt-0.5">{item.desc}</p>
                </div>
              </div>

              <div className="flex flex-col items-end shrink-0 pl-2">
                <span className={`text-[8px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${item.color}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${item.dotColor}`}></span>
                  {item.status}
                </span>
                <span className="text-[10px] font-bold text-gray-600 mt-1">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
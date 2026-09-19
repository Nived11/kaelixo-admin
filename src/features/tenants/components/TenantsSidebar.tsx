"use client";

import { ChevronDown } from "lucide-react";
import { ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell } from "recharts";

export default function TenantsSidebar() {
  const statusData = [
    { name: "Active", value: 412, pct: "85.5%", color: "#10b981" },
    { name: "Provisioning", value: 18, pct: "3.7%", color: "#3b82f6" },
    { name: "Pending", value: 16, pct: "3.3%", color: "#fbbf24" },
    { name: "Suspended", value: 12, pct: "2.5%", color: "#f472b6" },
    { name: "Failed", value: 8, pct: "1.7%", color: "#9ca3af" },
    { name: "At Risk", value: 24, pct: "5.0%", color: "#a855f7" },
  ];

  const healthData = [
    { label: "Healthy", count: 376, pct: "78.0%", width: "78%", color: "#10b981" },
    { label: "At Risk", count: 56, pct: "11.6%", width: "25%", color: "#f59e0b" },
    { label: "Unhealthy", count: 34, pct: "7.1%", width: "12%", color: "#f43f5e" },
    { label: "Unknown", count: 16, pct: "3.3%", width: "6%", color: "#9ca3af" },
  ];

  const regionsData = [
    { region: "India", count: 208, pct: "43.2%", width: "65%", color: "#8b5cf6", flagUrl: "https://flagcdn.com/w40/in.png" },
    { region: "Singapore", count: 104, pct: "21.6%", width: "35%", color: "#8b5cf6", flagUrl: "https://flagcdn.com/w40/sg.png" },
    { region: "United States", count: 72, pct: "14.9%", width: "22%", color: "#8b5cf6", flagUrl: "https://flagcdn.com/w40/us.png" },
    { region: "Australia", count: 56, pct: "11.6%", width: "16%", color: "#8b5cf6", flagUrl: "https://flagcdn.com/w40/au.png" },
    { region: "UAE", count: 42, pct: "8.7%", width: "10%", color: "#8b5cf6", flagUrl: "https://flagcdn.com/w40/ae.png" },
  ];

  return (
    <div className="flex flex-col gap-4">
      
      {/* 1. Tenant Status Distribution Donut Chart */}
      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[12px] font-black text-[#030C25]">Tenant Status Distribution</h2>
          <div className="flex items-center gap-1 border border-gray-200 bg-gray-50/50 rounded-md px-2 py-1 cursor-pointer hover:bg-gray-50 transition-colors">
            <span className="text-[9.5px] text-gray-600 font-semibold whitespace-nowrap">All Products</span>
            <ChevronDown size={11} className="text-gray-600" />
          </div>
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
              <span className="text-[14px] font-black text-[#030C25] leading-none">482</span>
              <span className="text-[8px] font-medium text-gray-600 mt-0.5">Tenants</span>
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
                  <span className="font-bold text-[#030C25] text-[10px] w-5">{item.value}</span>
                  <span className="text-gray-600 text-[9px] w-7 font-medium">{item.pct}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Tenant Health Overview */}
      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[12px] font-black text-[#030C25]">Tenant Health Overview</h2>
          <div className="flex items-center gap-1 border border-gray-200 bg-gray-50/50 rounded-md px-2 py-1 cursor-pointer hover:bg-gray-50 transition-colors">
            <span className="text-[9.5px] text-gray-600 font-semibold whitespace-nowrap">All Products</span>
            <ChevronDown size={11} className="text-gray-600" />
          </div>
        </div>

        <div className="space-y-3">
          {healthData.map((item, i) => (
            <div key={i} className="flex items-center justify-between gap-1.5 text-[10px]">
              <span className="w-[55px] font-semibold text-[#030C25] text-[9.5px] shrink-0">{item.label}</span>
              <div className="flex-1 px-1">
                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: item.width, backgroundColor: item.color }} />
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-right shrink-0">
                <span className="font-bold text-[#030C25] text-[10px] w-5">{item.count}</span>
                <span className="text-[#5c6ac4] text-[9px] w-7 font-medium">{item.pct}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Top Regions */}
      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[12px] font-black text-[#030C25]">Top Regions</h2>
          <div className="flex items-center gap-1 border border-gray-200 bg-gray-50/50 rounded-md px-2 py-1 cursor-pointer hover:bg-gray-50 transition-colors">
            <span className="text-[9.5px] text-gray-600 font-semibold whitespace-nowrap">All Products</span>
            <ChevronDown size={11} className="text-gray-600" />
          </div>
        </div>

        <div className="space-y-3">
          {regionsData.map((reg, i) => (
            <div key={i} className="flex items-center justify-between gap-1.5 text-[10px]">
              
              {/* Flag & Region Name */}
              <div className="flex items-center gap-1.5 shrink-0 font-semibold text-[#030C25] min-w-[85px] max-w-[95px]">
                {reg.flagUrl ? (
                  <img src={reg.flagUrl} alt={reg.region} className="w-[14px] h-[10px] object-cover rounded-[2px] border border-gray-200 shadow-xs shrink-0" />
                ) : (
                  <div className="w-[14px] h-[10px] rounded-[2px] bg-gray-300 border border-gray-200 shadow-xs shrink-0" />
                )}
                <span className="truncate whitespace-nowrap text-[9.5px] font-medium">{reg.region}</span>
              </div>

              {/* Progress Bar */}
              <div className="flex-1 px-1">
                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: reg.width, backgroundColor: reg.color }} />
                </div>
              </div>

              {/* Counts & Pct */}
              <div className="flex items-center gap-1.5 text-right shrink-0">
                <span className="text-[#030C25] font-bold text-[10px] w-5">{reg.count}</span>
                <span className="text-[#5c6ac4] text-[9px] w-7 font-medium">{reg.pct}</span>
              </div>
              
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
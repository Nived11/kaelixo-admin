"use client";

import { ChevronDown, ArrowRight, UserPlus, UserCog, Building2, PieChart, ChevronRight } from "lucide-react";
import { ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell } from "recharts";
import { useRouter } from "next/navigation";

export default function CompaniesSidebar() {
  const router = useRouter();

  const segmentsData = [
    { name: "Enterprise", value: 156, pct: "32.4%", color: "#8b5cf6" },
    { name: "Professional", value: 142, pct: "29.5%", color: "#ec4899" },
    { name: "Business", value: 98, pct: "20.3%", color: "#3b82f6" },
    { name: "Starter", value: 62, pct: "12.9%", color: "#34d399" },
    { name: "Trial", value: 24, pct: "5.0%", color: "#9ca3af" },
  ];

  const regions = [
    { region: "India", count: 188, pct: "39.0%", width: "85%", color: "#8b5cf6", flagUrl: "https://flagcdn.com/w40/in.png" },
    { region: "United States", count: 104, pct: "21.6%", width: "55%", color: "#ec4899", flagUrl: "https://flagcdn.com/w40/us.png" },
    { region: "United Kingdom", count: 72, pct: "14.9%", width: "40%", color: "#3b82f6", flagUrl: "https://flagcdn.com/w40/gb.png" },
    { region: "UAE", count: 48, pct: "10.0%", width: "25%", color: "#6366f1", flagUrl: "https://flagcdn.com/w40/ae.png" },
    { region: "Singapore", count: 36, pct: "7.5%", width: "20%", color: "#f472b6", flagUrl: "https://flagcdn.com/w40/sg.png" },
    { region: "Others", count: 34, pct: "7.1%", width: "18%", color: "#9ca3af", flagUrl: null },
  ];

  const quickActions = [
    {
      title: "Add New Company",
      desc: "Create a new company account",
      icon: UserPlus,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      action: () => router.push("/companies/add") // Routing to Add Company page
    },
    {
      title: "Invite Company Admin",
      desc: "Send an invitation email",
      icon: UserCog,
      iconBg: "bg-pink-50",
      iconColor: "text-pink-600",
      action: () => {}
    },
    {
      title: "View Company Reports",
      desc: "Access detailed analytics",
      icon: Building2,
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
      action: () => {}
    },
    {
      title: "Manage Company Segments",
      desc: "Customize segments and rules",
      icon: PieChart,
      iconBg: "bg-orange-50",
      iconColor: "text-orange-500",
      action: () => {}
    }
  ];

  return (
    <div className="flex flex-col gap-4">
      
      {/* 1. Company Segments Donut Chart */}
      <div className="bg-white rounded-[16px] p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex flex-col">
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <h2 className="text-[13px] font-black text-[#030C25]">Company Segments</h2>
          <div className="flex items-center gap-1 border border-gray-200 bg-gray-50/50 rounded-sm px-2 py-1 cursor-pointer hover:bg-gray-50 transition-colors">
            <span className="text-[9.5px] text-gray-600 font-semibold">By Plan Type</span>
            <ChevronDown size={11} className="text-gray-600" />
          </div>
        </div>
        
        <div className="flex items-center justify-between gap-2">
          {/* Donut Chart */}
          <div className="relative w-[95px] h-[95px] shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie data={segmentsData} innerRadius={30} outerRadius={46} paddingAngle={2} dataKey="value" stroke="none">
                  {segmentsData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
              </RechartsPieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
              <span className="text-[14px] font-black text-[#030C25] leading-none">482</span>
              <span className="text-[8px] font-medium text-gray-600 mt-0.5">Companies</span>
            </div>
          </div>

          {/* Legend Items */}
          <div className="flex flex-col gap-1.5 flex-1 min-w-0 text-[10px]">
            {segmentsData.map((item, i) => (
              <div key={i} className="flex items-center justify-between gap-1">
                <div className="flex items-center gap-1.5 min-w-0">
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                  <span className="text-gray-600 font-semibold truncate text-[9.5px]">{item.name}</span>
                </div>
                <div className="flex items-center gap-1.5 text-right shrink-0">
                  <span className="font-bold text-[#030C25] text-[10px] w-5">{item.value}</span>
                  <span className="text-gray-600 text-[9px] w-7">{item.pct}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Top Company Regions */}
      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex flex-col">
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h2 className="text-[13px] font-black text-[#030C25]">Top Company Regions</h2>
          <a href="#" className="text-[10px] font-bold text-[#7a42ff] hover:underline flex items-center gap-0.5">
            View All <ArrowRight size={11} strokeWidth={2.5} />
          </a>
        </div>

        <div className="space-y-3">
          {regions.map((reg, i) => (
            <div key={i} className="flex items-center justify-between gap-1.5 text-[10px]">
              
              {/* Flag & Region Name */}
              <div className="flex items-center gap-1.5 shrink-0 font-semibold text-[#030C25] min-w-[85px] max-w-[95px]">
                {reg.flagUrl ? (
                  <img src={reg.flagUrl} alt={reg.region} className="w-3.5 h-3.5 object-cover rounded-full border border-gray-200 shadow-xs shrink-0" />
                ) : (
                  <div className="w-3.5 h-3.5 rounded-full bg-gray-300 border border-gray-200 shadow-xs shrink-0" />
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
                <span className="text-[#030C25] font-black text-[10px] w-5">{reg.count}</span>
                <span className="text-gray-600 font-semibold text-[9px] w-7">{reg.pct}</span>
              </div>
              
            </div>
          ))}
        </div>
      </div>

      {/* 3. Quick Actions */}
      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex flex-col">
        <h2 className="text-[13px] font-black text-[#030C25] mb-4 sm:mb-5">Quick Actions</h2>
        
        <div className="border border-gray-100 rounded-xl overflow-hidden">
          {quickActions.map((action, i) => (
            <div 
              key={i} 
              onClick={action.action}
              className={`flex items-center justify-between p-3 bg-white hover:bg-gray-50 transition-colors cursor-pointer ${
                i !== quickActions.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${action.iconBg}`}>
                  <action.icon size={16} className={action.iconColor} strokeWidth={2.5} />
                </div>
                <div className="min-w-0 flex flex-col justify-center">
                  <h4 className="text-[11.5px] font-bold text-[#030C25] truncate leading-tight">{action.title}</h4>
                  <p className="text-[9.5px] text-gray-500 truncate mt-0.5">{action.desc}</p>
                </div>
              </div>
              <ChevronRight size={14} strokeWidth={2.5} className="text-[#7a42ff] opacity-70 shrink-0 ml-2" />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
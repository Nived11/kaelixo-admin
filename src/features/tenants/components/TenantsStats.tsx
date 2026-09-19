"use client";

import { Users, CheckCircle2, UserPlus, Settings, AlertCircle, IndianRupee, ArrowUp, ArrowDown } from "lucide-react";

export default function TenantsStats() {
  const stats = [
    { 
      title: "Total Tenants", 
      value: "482", 
      growth: "+12%", 
      isPositive: true,
      sub: "Across all products", 
      icon: Users, 
      color: "#5c45fd",
      iconBg: "bg-indigo-50 text-[#5c45fd]" 
    },
    { 
      title: "Active Tenants", 
      value: "412", 
      growth: "+14%", 
      isPositive: true,
      sub: "85.5% of total", 
      icon: CheckCircle2, 
      color: "#10b981",
      iconBg: "bg-emerald-50 text-emerald-500" 
    },
    { 
      title: "New This Month", 
      value: "46", 
      growth: "+28%", 
      isPositive: true,
      sub: "Joined in Sep 2026", 
      icon: UserPlus, 
      color: "#8b5cf6",
      iconBg: "bg-purple-50 text-purple-500" 
    },
    { 
      title: "Provisioning", 
      value: "18", 
      growth: "10%", 
      isPositive: false,
      sub: "In progress", 
      icon: Settings, 
      color: "#f59e0b",
      iconBg: "bg-amber-50 text-amber-500" 
    },
    { 
      title: "Suspended / At Risk", 
      value: "24", 
      growth: "33%", 
      isPositive: false,
      sub: "5.0% of total", 
      icon: AlertCircle, 
      color: "#f43f5e",
      iconBg: "bg-rose-50 text-rose-500" 
    },
    { 
      title: "Tenant MRR", 
      value: "₹24,68,320", 
      growth: "+18%", 
      isPositive: true,
      sub: "Across all tenants", 
      icon: IndianRupee, 
      color: "#3b82f6",
      iconBg: "bg-blue-50 text-blue-500" 
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3.5">
      {stats.map((item, i) => (
        <div key={i} className="bg-white rounded-xl p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] relative overflow-hidden flex items-center gap-3 h-[130px] shadow-sm hover:shadow-md transition-all">
          
          {/* Left Icon */}
          <div className={`w-[44px] h-[44px] rounded-full flex items-center justify-center shrink-0 ${item.iconBg} relative z-10`}>
            <item.icon size={24} strokeWidth={2.5} />
          </div>

          {/* Right Content */}
          <div className="flex flex-col flex-1 relative z-10 min-w-0 justify-center">
            <h3 className="text-[11px] font-bold text-gray-600 truncate">{item.title}</h3>
            
            {/* Value */}
            <span className="text-[18px] font-black text-[#030C25] leading-none tracking-tight truncate mt-1">
              {item.value}
            </span>
            
            {/* Growth Badge */}
            <div className="flex items-center gap-1.5 mt-1.5">
              {item.isPositive ? (
                <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-md text-emerald-600 bg-emerald-50 flex items-center gap-0.5 whitespace-nowrap shrink-0">
                  <ArrowUp size={9} strokeWidth={3.5} /> {item.growth}
                </span>
              ) : (
                <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-md text-rose-500 bg-rose-50 flex items-center gap-0.5 whitespace-nowrap shrink-0">
                  <ArrowDown size={9} strokeWidth={3.5} /> {item.growth}
                </span>
              )}
            </div>

            {/* Subtitle at Bottom */}
            <p className="text-[10px] text-gray-600 font-medium mt-1 truncate">{item.sub}</p>
          </div>

          {/* Bottom Right Wavy Chart */}
          <div className="absolute bottom-0 right-0 w-28 h-12 opacity-90 pointer-events-none">
            <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
              <defs>
                <linearGradient id={`tenantWaveGrad-${i}`} x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor={item.color} stopOpacity="0.25" />
                  <stop offset="100%" stopColor={item.color} stopOpacity="0" />
                </linearGradient>
              </defs>
              <path 
                d="M0,35 C10,28 15,35 25,28 C35,21 40,30 50,22 C60,14 65,24 75,15 C85,6 90,12 95,4 L95,40 L0,40 Z" 
                fill={`url(#tenantWaveGrad-${i})`} 
              />
              <path 
                d="M0,35 C10,28 15,35 25,28 C35,21 40,30 50,22 C60,14 65,24 75,15 C85,6 90,12 95,4" 
                fill="none" 
                stroke={item.color} 
                strokeWidth="2" 
                strokeLinecap="round"
              />
              <circle cx="95" cy="4" r="2.5" fill={item.color} />
            </svg>
          </div>

        </div>
      ))}
    </div>
  );
}
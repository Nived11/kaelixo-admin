"use client";

import { Users, UserCheck, UserPlus, Building2, AlertTriangle, IndianRupee, ArrowUp } from "lucide-react";

export default function CustomerStats() {
  const stats = [
    { 
      title: "Total Customers", 
      value: "1,482", 
      growth: "+12%", 
      sub: "Across all products", 
      icon: Users, 
      color: "#7a42ff",
      iconBg: "bg-purple-50 text-[#7a42ff]" 
    },
    { 
      title: "Active Customers", 
      value: "1,124", 
      growth: "+14%", 
      sub: "75.9% of total", 
      icon: UserCheck, 
      color: "#10b981",
      iconBg: "bg-emerald-50 text-emerald-600" 
    },
    { 
      title: "New This Month", 
      value: "86", 
      growth: "+28%", 
      sub: "Joined in Sep 2026", 
      icon: UserPlus, 
      color: "#0284c7",
      iconBg: "bg-sky-50 text-sky-500" 
    },
    { 
      title: "Enterprise Customers", 
      value: "156", 
      growth: "+18%", 
      sub: "10.5% of total", 
      icon: Building2, 
      color: "#8b5cf6",
      iconBg: "bg-violet-50 text-violet-600" 
    },
    { 
      title: "At-Risk Customers", 
      value: "78", 
      growth: "+33%", 
      sub: "5.3% of total", 
      icon: AlertTriangle, 
      color: "#FF0052",
      iconBg: "bg-rose-50 text-rose-500",
      isAtRisk: true // flag for red color styling
    },
    { 
      title: "Customer Revenue", 
      value: "₹24,68,320", 
      growth: "+18%", 
      sub: "MRR (excl. GST)", 
      icon: IndianRupee, 
      color: "#0284c7",
      iconBg: "bg-sky-50 text-sky-500" 
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3.5">
      {stats.map((item, i) => (
        <div key={i} className="bg-white rounded-xl p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] relative overflow-hidden flex items-center gap-3 h-[130px] shadow-sm hover:shadow-md transition-all">
          
          {/* Left Icon */}
          <div className={`w-[44px] h-[44px] rounded-full flex items-center justify-center shrink-0 ${item.iconBg} relative z-10`}>
            <item.icon size={22} strokeWidth={2.5} />
          </div>

          {/* Right Content */}
          <div className="flex flex-col flex-1 relative z-10 min-w-0 justify-center">
            <h3 className="text-[11px] font-bold text-gray-600 truncate">{item.title}</h3>
            
            <span className="text-[16px] font-black text-[#030C25] leading-none tracking-tight truncate mt-1">
              {item.value}
            </span>
            
            <div className="flex items-center gap-1.5 mt-1.5">
              <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded-md flex items-center gap-0.5 whitespace-nowrap shrink-0 ${
                item.isAtRisk ? 'text-rose-600 bg-rose-50' : 'text-emerald-600 bg-emerald-50'
              }`}>
                <ArrowUp size={9} strokeWidth={3.5} /> {item.growth}
              </span>
            </div>

            <p className="text-[10px] text-gray-600 font-medium mt-1 truncate">{item.sub}</p>
          </div>

          {/* Bottom Right Wavy Chart */}
          <div className="absolute bottom-0 right-0 w-28 h-12 opacity-90 pointer-events-none">
            <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
              <defs>
                <linearGradient id={`custWaveGrad-${i}`} x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor={item.color} stopOpacity="0.25" />
                  <stop offset="100%" stopColor={item.color} stopOpacity="0" />
                </linearGradient>
              </defs>
              <path 
                d="M0,35 C10,28 15,35 25,28 C35,21 40,30 50,22 C60,14 65,24 75,15 C85,6 90,12 95,4 L95,40 L0,40 Z" 
                fill={`url(#custWaveGrad-${i})`} 
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
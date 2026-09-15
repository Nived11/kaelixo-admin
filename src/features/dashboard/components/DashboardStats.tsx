import { Users, UserPlus, RefreshCw, AlertCircle, IndianRupee, ArrowUp } from "lucide-react";

export default function DashboardStats() {
  const stats = [
    { 
      title: "Total Clients", 
      value: "482", 
      trend: "12%", 
      trendColor: "text-emerald-600 bg-emerald-50", 
      desc: "Across all products", 
      icon: Users, 
      iconColor: "text-indigo-600", 
      iconBg: "bg-indigo-50/80",
      hasChart: true // Shows the wavy string chart
    },
    { 
      title: "New This Month", 
      value: "46", 
      trend: "28%", 
      trendColor: "text-emerald-600 bg-emerald-50", 
      desc: "Joined in Sep 2026", 
      icon: UserPlus, 
      iconColor: "text-[#7a42ff]", 
      iconBg: "bg-[#7a42ff]/10",
    },
    { 
      title: "Renewals Due", 
      value: "68", 
      trend: "16%", 
      trendColor: "text-emerald-600 bg-emerald-50", 
      desc: "Due in next 30 days", 
      icon: RefreshCw, 
      iconColor: "text-amber-500", 
      iconBg: "bg-amber-50",
    },
    { 
      title: "Failed Payments", 
      value: "12", 
      trend: "33%", 
      trendColor: "text-rose-600 bg-rose-50", 
      desc: "In last 30 days", 
      icon: AlertCircle, 
      iconColor: "text-rose-600", 
      iconBg: "bg-rose-50",
    },
    { 
      title: "Monthly Revenue", 
      value: "₹24,68,320", 
      trend: "18%", 
      trendColor: "text-emerald-600 bg-emerald-50", 
      desc: "MRR (excl. GST)", 
      icon: IndianRupee, 
      iconColor: "text-blue-600", 
      iconBg: "bg-blue-50",
      stackTrend: true 
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 xl:gap-4">
      {stats.map((stat, i) => (
        <div key={i} className="bg-white p-3 xl:p-4 rounded-lg border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] relative overflow-hidden flex items-center gap-3 shadow-sm hover:shadow-md transition-all min-w-0">
          
          {/* Left Icon */}
          <div className={`w-[42px] h-[42px] xl:w-[48px] xl:h-[48px] rounded-full flex items-center justify-center shrink-0 ${stat.iconBg} relative z-10`}>
            <stat.icon size={28} strokeWidth={2.5} className={stat.iconColor} />
          </div>

          {/* Right Content */}
          <div className="flex flex-col flex-1 relative z-10 min-w-0">
            <h3 className="text-xs font-bold text-[#030C25] truncate">{stat.title}</h3>
            
            {/* Value & Trend Row */}
            <div className={`flex ${stat.stackTrend ? 'flex-col items-start gap-0.5 mt-0.5' : 'items-center gap-1.5 mt-0.5'} flex-wrap`}>
              <span className="text-xl xl:text-[22px] font-black text-[#030C25] leading-none tracking-tight truncate max-w-full">
                {stat.value}
              </span>
              <span className={`text-[9px] xl:text-[10px] font-extrabold px-1.5 py-0.5 rounded-md flex items-center gap-0.5 whitespace-nowrap ${stat.trendColor}`}>
                <ArrowUp size={10} strokeWidth={3.5} /> {stat.trend}
              </span>
            </div>
            
            <p className="text-[10px] text-[#64748b] font-medium mt-1 truncate">{stat.desc}</p>
          </div>

          {/* Bottom Right Wavy "String" Chart */}
          {stat.hasChart && (
            <div className="absolute bottom-0 right-0 w-24 xl:w-32 h-14 opacity-90 pointer-events-none">
              <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
                <defs>
                  <linearGradient id="waveGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#7a42ff" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#7a42ff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Gradient Fill (Matches the wavy path) */}
                <path 
                  d="M0,35 C10,28 15,35 25,28 C35,21 40,30 50,22 C60,14 65,24 75,15 C85,6 90,12 95,4 L95,40 L0,40 Z" 
                  fill="url(#waveGradient)" 
                />
                {/* Bumpy Wavy Line Stroke */}
                <path 
                  d="M0,35 C10,28 15,35 25,28 C35,21 40,30 50,22 C60,14 65,24 75,15 C85,6 90,12 95,4" 
                  fill="none" 
                  stroke="#7a42ff" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
                {/* The Dot at the end of the line */}
                <circle cx="95" cy="4" r="2.5" fill="#7a42ff" />
              </svg>
            </div>
          )}

        </div>
      ))}
    </div>
  );
}
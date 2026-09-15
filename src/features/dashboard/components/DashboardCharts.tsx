"use client";

import { useState, useMemo } from "react";
import { ChevronDown } from "lucide-react";
import { ComposedChart, Bar, Area, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

// Full 12 Months Data for MRR
const fullMrrData = [
  { name: "Oct", revenue: 8.5 }, { name: "Nov", revenue: 9.2 }, { name: "Dec", revenue: 9.8 },
  { name: "Jan", revenue: 10 }, { name: "Feb", revenue: 11.5 }, { name: "Mar", revenue: 14 },
  { name: "Apr", revenue: 15 }, { name: "May", revenue: 17.5 }, { name: "Jun", revenue: 19 },
  { name: "Jul", revenue: 20 }, { name: "Aug", revenue: 21.5 }, { name: "Sep", revenue: 24.68 }
];

const packageData = [
  { name: "Enterprise", value: 156, pct: "32.4%", color: "#7a42ff" },
  { name: "Professional", value: 142, pct: "29.5%", color: "#FF0052" },
  { name: "Business", value: 98, pct: "20.3%", color: "#2bbcff" },
  { name: "Starter", value: 62, pct: "12.9%", color: "#10b981" },
  { name: "Trial", value: 24, pct: "5.0%", color: "#9ca3af" },
];

const billingData = [
  { name: "Monthly", value: 208, pct: "43.2%", color: "#7a42ff" },
  { name: "Quarterly", value: 104, pct: "21.6%", color: "#2bbcff" },
  { name: "Semi-Annual", value: 72, pct: "14.9%", color: "#FF0052" },
  { name: "Annual", value: 78, pct: "16.2%", color: "#10b981" },
  { name: "One-Time", value: 20, pct: "4.1%", color: "#f59e0b" },
];

export default function DashboardCharts() {
  const [mrrFilter, setMrrFilter] = useState(9);
  
  // Track hovered index
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const displayedMrrData = useMemo(() => fullMrrData.slice(-mrrFilter), [mrrFilter]);
  
  // The index to show the label for (either the hovered one, or the very last one by default)
  const targetIndex = activeIndex !== null ? activeIndex : displayedMrrData.length - 1;

  // Custom DOT & Label Renderer mapping directly to the cx/cy coordinates
  const renderCustomDot = (props: any) => {
    const { cx, cy, index, value } = props;
    
    // Only render the label/tooltip for the currently targeted index
    if (index === targetIndex) {
      return (
        <g key={`custom-dot-${index}`} style={{ transition: 'all 0.2s ease-out', pointerEvents: 'none' }}>
          {/* Outer Halo/Ring around the active dot */}
          <circle cx={cx} cy={cy} r={9} fill="none" stroke="#7a42ff" strokeWidth={3} opacity={0.3} />
          <circle cx={cx} cy={cy} r={5} fill="#6d28d9" stroke="#fff" strokeWidth={2} />
          
          {/* Tooltip Background Rectangle */}
          <rect x={cx - 28} y={cy - 38} width={56} height={22} fill="#5b21b6" rx={4} />
          
          {/* Tooltip Pointer Arrow (Downward Triangle) */}
          <polygon points={`${cx - 5},${cy - 16} ${cx + 5},${cy - 16} ${cx},${cy - 10}`} fill="#5b21b6" />
          
          {/* Tooltip Text - Shows exact value for that month */}
          <text x={cx} y={cy - 23} fill="#fff" textAnchor="middle" fontSize={10} fontWeight="bold">
            ₹{value}L
          </text>
        </g>
      );
    }
    
    // Render normal dots for non-active items
    return (
      <circle key={`dot-${index}`} cx={cx} cy={cy} r={3.5} fill="#6d28d9" stroke="#fff" strokeWidth={1.5} style={{ pointerEvents: 'none' }} />
    );
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
      
      {/* 1. Monthly Revenue Trend (MRR) */}
      <div className="xl:col-span-6 bg-white rounded-[16px] p-4 lg:p-5 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex flex-col h-[290px]">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-[14px] font-bold text-[#030C25]">Monthly Revenue Trend (MRR)</h3>
            <p className="text-[10px] text-[#64748b] font-medium">Steady growth across all products</p>
          </div>
          <div className="relative">
            <select 
              value={mrrFilter}
              onChange={(e) => setMrrFilter(Number(e.target.value))}
              className="appearance-none flex items-center gap-1.5 text-[10px] font-semibold text-gray-600 border border-gray-300 pl-2.5 pr-7 py-1.5 rounded-md hover:bg-gray-50 outline-none cursor-pointer transition-colors"
            >
              <option value={6}>Last 6 Months</option>
              <option value={9}>Last 9 Months</option>
              <option value={12}>Last 12 Months</option>
            </select>
            <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        </div>
        
        <div className="flex-1 w-full relative -ml-4 [&_*:focus]:!outline-none [&_*:active]:!outline-none">
          <ResponsiveContainer width="100%" height="100%" style={{ outline: 'none' }}>
            <ComposedChart 
              key={mrrFilter}
              data={displayedMrrData} 
              margin={{ top: 25, right: 15, bottom: 0, left: -10 }}
              onMouseMove={(e: any) => {
                if (e?.activeTooltipIndex !== undefined && e.activeTooltipIndex !== null) {
                  const newIndex = Number(e.activeTooltipIndex);
                  if (activeIndex !== newIndex) {
                    setActiveIndex(newIndex);
                  }
                }
              }}
              onMouseLeave={() => {
                setActiveIndex(null);
              }}
              style={{ outline: 'none' }}
            >
              <defs>
                <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.25" />
                </linearGradient>
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7a42ff" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#7a42ff" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              <CartesianGrid strokeDasharray="3 3" vertical={true} horizontal={true} stroke="#e2e8f0" />
              
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#030C25' }} dy={10} />
              
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                ticks={[0, 10, 20, 30]}
                domain={[0, 30]}
                tick={{ fontSize: 10, fill: '#030C25' }} 
                tickFormatter={(val) => val === 0 ? "0" : `₹${val}L`} 
              />
              
              {/* cursor={false} removes the vertical hover guide line */}
              <Tooltip cursor={false} content={() => null} />

              <Bar 
                dataKey="revenue" 
                fill="url(#barGrad)" 
                barSize={26} 
                radius={[4, 4, 0, 0]} 
                isAnimationActive={true}
                animationDuration={1000}
              />
              
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stroke="#5b21b6" 
                strokeWidth={2.5} 
                fill="url(#areaGrad)" 
                dot={false}
                activeDot={false}
                isAnimationActive={true} 
                animationDuration={1000}
              />

              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="none" 
                fill="none" 
                dot={renderCustomDot} 
                activeDot={false} 
                isAnimationActive={false} 
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 2. Clients by Package */}
      <div className="xl:col-span-3 bg-white rounded-[16px] p-4 lg:p-5 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex flex-col h-[290px]">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-[14px] font-bold text-[#030C25]">Clients by Package</h3>
            <p className="text-[10px] text-[#64748b] font-medium">Distribution across all products</p>
          </div>
          <div className="relative">
            <select className="appearance-none flex items-center gap-1.5 text-[10px] font-semibold text-gray-600 border border-gray-300 pl-2.5 pr-7 py-1.5 rounded-md hover:bg-gray-50 outline-none cursor-pointer">
              <option>All Products</option>
            </select>
            <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        </div>
        
        <div className="flex-1 flex items-center justify-between">
          <div className="relative w-[120px] h-[120px] shrink-0 -ml-2 mt-2 [&_*:focus]:!outline-none [&_*:active]:!outline-none">
            <ResponsiveContainer width="100%" height="100%" style={{ outline: 'none' }}>
              <PieChart style={{ outline: 'none' }}>
                <Pie data={packageData} innerRadius={35} outerRadius={55} paddingAngle={2} dataKey="value" stroke="none" style={{ outline: 'none' }} animationDuration={1000}>
                  {packageData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} style={{ outline: 'none' }}/>)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-[9px] font-semibold text-gray-500">Total</span>
              <span className="text-[15px] font-black text-[#030C25] leading-tight">482</span>
              <span className="text-[8px] font-medium text-gray-400">Clients</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-2 w-full pl-2">
            {packageData.map((item, i) => (
              <div key={i} className="flex items-center justify-between text-[10px]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-gray-600 font-medium">{item.name}</span>
                </div>
                <div className="flex gap-2 text-right">
                  <span className="font-bold text-[#030C25] w-5">{item.value}</span>
                  <span className="text-gray-400 font-medium w-7">{item.pct}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Billing Cycle Distribution */}
      <div className="xl:col-span-3 bg-white rounded-[16px] p-4 lg:p-5 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex flex-col h-[290px]">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-[14px] font-bold text-[#030C25]">Billing Cycle</h3>
            <p className="text-[10px] text-[#64748b] font-medium">How customers are billed</p>
          </div>
          <div className="relative">
            <select className="appearance-none flex items-center gap-1.5 text-[10px] font-semibold text-gray-600 border border-gray-300 pl-2.5 pr-7 py-1.5 rounded-md hover:bg-gray-50 outline-none cursor-pointer">
              <option>All Products</option>
            </select>
            <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        </div>
        
        <div className="flex-1 flex items-center justify-between">
          <div className="relative w-[120px] h-[120px] shrink-0 -ml-2 mt-2 [&_*:focus]:!outline-none [&_*:active]:!outline-none">
            <ResponsiveContainer width="100%" height="100%" style={{ outline: 'none' }}>
              <PieChart style={{ outline: 'none' }}>
                <Pie data={billingData} innerRadius={35} outerRadius={55} paddingAngle={2} dataKey="value" stroke="none" style={{ outline: 'none' }} animationDuration={1000}>
                  {billingData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} style={{ outline: 'none' }}/>)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-1">
              <span className="text-[15px] font-black text-[#030C25] leading-tight">482</span>
              <span className="text-[8px] font-medium text-gray-400">Clients</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-2 w-full pl-2">
            {billingData.map((item, i) => (
              <div key={i} className="flex items-center justify-between text-[10px]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-gray-600 font-medium">{item.name}</span>
                </div>
                <div className="flex gap-2 text-right">
                  <span className="font-bold text-[#030C25] w-5">{item.value}</span>
                  <span className="text-gray-400 font-medium w-7">{item.pct}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
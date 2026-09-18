"use client";

import { MoreVertical, Search, ChevronDown, Download, Globe, Package, Calendar, Zap, ChevronLeft, ChevronRight } from "lucide-react";

export default function CompaniesTableSection() {
  const tableData = [
    { 
      company: "ABC Travels", avatarInit: "A", avatarBg: "bg-blue-600", 
      products: ["W", "cube"], extraProd: "+1", customers: 24, 
      plan: "Enterprise", cycle: "Annual", region: "India", 
      date: "12 Sep 2026", status: "Active", mrr: "₹1,24,999" 
    },
    { 
      company: "Global Holidays", avatarInit: "G", avatarBg: "bg-purple-600", 
      products: ["cube", "calendar"], extraProd: "", customers: 18, 
      plan: "Professional", cycle: "Monthly", region: "US", 
      date: "16 Sep 2026", status: "Active", mrr: "₹98,320" 
    },
    { 
      company: "Kerala Trips", avatarInit: "K", avatarBg: "bg-emerald-500", 
      products: ["W", "lightning"], extraProd: "", customers: 12, 
      plan: "Business", cycle: "Annual", region: "India", 
      date: "18 Sep 2026", status: "Active", mrr: "₹74,999" 
    },
    { 
      company: "Dream Tours", avatarInit: "D", avatarBg: "bg-pink-500", 
      products: ["W", "calendar"], extraProd: "", customers: 31, 
      plan: "Enterprise", cycle: "Monthly", region: "UAE", 
      date: "20 Sep 2026", status: "Active", mrr: "₹2,19,400" 
    },
    { 
      company: "Explore India", avatarInit: "E", avatarBg: "bg-blue-600", 
      products: ["cube", "lightning"], extraProd: "", customers: 8, 
      plan: "Professional", cycle: "Annual", region: "India", 
      date: "22 Sep 2026", status: "At Risk", mrr: "₹32,400" 
    },
    { 
      company: "Holiday World", avatarInit: "H", avatarBg: "bg-blue-500", 
      products: ["calendar"], extraProd: "", customers: 15, 
      plan: "Business", cycle: "Monthly", region: "UK", 
      date: "24 Sep 2026", status: "Active", mrr: "₹68,320" 
    },
    { 
      company: "Adventure Co", avatarInit: "A", avatarBg: "bg-blue-700", 
      products: ["W", "cube"], extraProd: "", customers: 22, 
      plan: "Enterprise", cycle: "Annual", region: "US", 
      date: "28 Sep 2026", status: "Active", mrr: "₹1,79,999" 
    },
     { 
      company: "Holiday World", avatarInit: "H", avatarBg: "bg-blue-500", 
      products: ["calendar"], extraProd: "", customers: 15, 
      plan: "Business", cycle: "Monthly", region: "UK", 
      date: "24 Sep 2026", status: "Active", mrr: "₹68,320" 
    },
     { 
      company: "Holiday World", avatarInit: "H", avatarBg: "bg-blue-500", 
      products: ["calendar"], extraProd: "", customers: 15, 
      plan: "Business", cycle: "Monthly", region: "UK", 
      date: "24 Sep 2026", status: "Active", mrr: "₹68,320" 
    },
    { 
      company: "Skyline Travels", avatarInit: "S", avatarBg: "bg-purple-500", 
      products: ["lightning"], extraProd: "", customers: 9, 
      plan: "Professional", cycle: "Monthly", region: "Singapore", 
      date: "02 Oct 2026", status: "Active", mrr: "₹54,990" 
    },
  ];

  // Helper to render product icons based on type
  const renderProductIcon = (type: string, i: number) => {
    if (type === "W") {
      return <div key={i} className="w-5 h-5 rounded bg-purple-100 text-[#7a42ff] flex items-center justify-center font-black text-[9px] shrink-0">W</div>;
    }
    if (type === "cube") {
      return <div key={i} className="w-5 h-5 rounded bg-pink-100 text-pink-500 flex items-center justify-center shrink-0"><Package size={10} strokeWidth={3} /></div>;
    }
    if (type === "calendar") {
      return <div key={i} className="w-5 h-5 rounded bg-blue-100 text-blue-500 flex items-center justify-center shrink-0"><Calendar size={10} strokeWidth={3} /></div>;
    }
    if (type === "lightning") {
      return <div key={i} className="w-5 h-5 rounded bg-orange-100 text-orange-500 flex items-center justify-center shrink-0"><Zap size={10} strokeWidth={3} /></div>;
    }
    return null;
  };

  return (
    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
      
      {/* Top Header & Filter Bar */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-4">
        <div>
          <h2 className="text-[15px] font-black text-[#030C25]">All Companies</h2>
          <p className="text-[11px] text-gray-500 font-medium mt-0.5">A complete list of companies using KAELIXO products.</p>
        </div>
        
        <div className="flex items-center gap-2.5 flex-wrap">
          <div className="relative">
            <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search companies..." 
              className="text-[11px] font-medium border border-gray-200 rounded-lg pl-7 pr-3 py-1.5 focus:outline-none focus:border-[#7a42ff] w-[180px] bg-gray-50/50 transition-colors" 
            />
          </div>
          
          <div className="flex items-center gap-1.5 border border-gray-200 bg-gray-50/50 rounded-lg px-2.5 py-1.5 cursor-pointer hover:bg-gray-50 transition-colors">
            <span className="text-[11px] text-gray-600 font-semibold">All Statuses</span>
            <ChevronDown size={13} className="text-gray-400" />
          </div>
          
          <div className="flex items-center gap-1.5 border border-gray-200 bg-gray-50/50 rounded-lg px-2.5 py-1.5 cursor-pointer hover:bg-gray-50 transition-colors">
            <span className="text-[11px] text-gray-600 font-semibold">All Products</span>
            <ChevronDown size={13} className="text-gray-400" />
          </div>
          
          <button className="flex items-center gap-1.5 bg-purple-50 text-[#7a42ff] rounded-lg px-3 py-1.5 hover:bg-purple-100 transition-colors cursor-pointer border border-purple-100">
            <Download size={13} strokeWidth={2.5} />
            <span className="text-[11px] font-bold">Export</span>
          </button>
        </div>
      </div>

      {/* Styled scrollbar wrapper */}
      <div 
        className="overflow-x-auto pb-2"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#cbd5e1 #f8fafc'
        }}
      >
        <table className="w-full text-left border-collapse min-w-[1050px]">
          <thead>
            <tr className="bg-gray-50 rounded-lg text-[10px] text-gray-800 font-bold uppercase tracking-wide whitespace-nowrap border-b border-gray-100">
              <th className="py-3 px-3 w-8"><input type="checkbox" className="rounded border-gray-300 cursor-pointer" /></th>
              <th className="py-3 px-3 font-bold">Company</th>
              <th className="py-3 px-3 font-bold">Products</th>
              <th className="py-3 px-3 font-bold">Active Customers</th>
              <th className="py-3 px-3 font-bold">Plan</th>
              <th className="py-3 px-3 font-bold">Billing Cycle</th>
              <th className="py-3 px-3 font-bold">Region</th>
              <th className="py-3 px-3 font-bold">Renewal Date</th>
              <th className="py-3 px-3 font-bold">Status</th>
              <th className="py-3 px-3 font-bold">MRR (₹)</th>
              <th className="py-3 px-3 font-bold text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-[11.5px] whitespace-nowrap">
            {tableData.map((item, i) => (
              <tr key={i} className="hover:bg-gray-50/60 transition-colors">
                <td className="py-3.5 px-3"><input type="checkbox" className="rounded border-gray-300 cursor-pointer" /></td>
                <td className="py-3.5 px-3">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-[11px] shrink-0 shadow-sm ${item.avatarBg}`}>
                      {item.avatarInit}
                    </div>
                    <span className="font-bold text-[#030C25]">{item.company}</span>
                  </div>
                </td>
                <td className="py-3.5 px-3">
                  <div className="flex items-center gap-1">
                    {item.products.map((p, idx) => renderProductIcon(p, idx))}
                    {item.extraProd && <span className="text-[10px] font-black text-[#7a42ff] ml-1">{item.extraProd}</span>}
                  </div>
                </td>
                <td className="py-3.5 px-3 font-bold text-[#030C25]">{item.customers}</td>
                <td className="py-3.5 px-3 font-semibold text-gray-600">{item.plan}</td>
                <td className="py-3.5 px-3 font-semibold text-gray-600">{item.cycle}</td>
                <td className="py-3.5 px-3">
                  <div className="flex items-center gap-1.5 font-semibold text-gray-600">
                    <Globe size={13} className="text-gray-400" />
                    <span>{item.region}</span>
                  </div>
                </td>
                <td className="py-3.5 px-3 font-semibold text-gray-500">{item.date}</td>
                <td className="py-3.5 px-3">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-bold text-[10px] ${
                    item.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-orange-50 text-orange-500'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="py-3.5 px-3 font-black text-[#030C25]">{item.mrr}</td>
                <td className="py-3.5 px-3 text-center">
                  <button className="text-gray-400 hover:text-[#030C25] transition-colors p-1 cursor-pointer">
                    <MoreVertical size={15} strokeWidth={2.5} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
        <span className="text-[10px] text-gray-500 font-medium">Showing 1-8 of 482 companies</span>
        
        <div className="flex items-center gap-1 text-[11px] font-bold">
          <button className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-700 cursor-pointer">
            <ChevronLeft size={14} />
          </button>
          <button className="w-6 h-6 flex items-center justify-center rounded-md bg-[#7a42ff] text-white shadow-sm cursor-pointer">1</button>
          <button className="w-6 h-6 flex items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 transition-colors cursor-pointer">2</button>
          <button className="w-6 h-6 flex items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 transition-colors cursor-pointer">3</button>
          <button className="w-6 h-6 flex items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 transition-colors cursor-pointer">4</button>
          <button className="w-6 h-6 flex items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 transition-colors cursor-pointer">5</button>
          <span className="text-gray-400 mx-0.5">...</span>
          <button className="w-6 h-6 flex items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 transition-colors cursor-pointer">61</button>
          <button className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-700 cursor-pointer">
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

    </div>
  );
}
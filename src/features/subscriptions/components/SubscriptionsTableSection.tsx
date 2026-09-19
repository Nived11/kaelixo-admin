"use client";

import { MoreHorizontal, ChevronRight, ChevronLeft, Search, Upload, Plus, ChevronDown } from "lucide-react";

export default function SubscriptionsTableSection() {
  const subscriptions = [
    { id: "SUB-001248", company: "ABC Travels", product: "Way We Go CRM", plan: "Professional", cycle: "Monthly", start: "12 Sep 2025", renewal: "12 Oct 2026", status: "Active", mrr: "₹16,249", autoRenew: true },
    { id: "SUB-001247", company: "Global Holidays", product: "CMS Platform", plan: "Business", cycle: "Annual", start: "16 Jan 2026", renewal: "16 Jan 2027", status: "Active", mrr: "₹19,999", autoRenew: true },
    { id: "SUB-001246", company: "Kerala Trips", product: "Booking Engine", plan: "Professional", cycle: "Monthly", start: "18 Aug 2026", renewal: "18 Sep 2026", status: "Trial", mrr: "₹14,999", autoRenew: true },
    { id: "SUB-001245", company: "Dream Tours", product: "Automation Suite", plan: "Business", cycle: "Monthly", start: "20 Jul 2026", renewal: "20 Aug 2026", status: "Pending Renewal", mrr: "₹9,999", autoRenew: true },
    { id: "SUB-001244", company: "Explore India", product: "Way We Go CRM", plan: "Enterprise", cycle: "Annual", start: "05 Mar 2026", renewal: "05 Mar 2027", status: "Active", mrr: "₹49,999", autoRenew: true },
    { id: "SUB-001243", company: "Holiday Hub", product: "CMS Platform", plan: "Starter", cycle: "Monthly", start: "11 Sep 2025", renewal: "11 Oct 2026", status: "Paused", mrr: "₹7,499", autoRenew: false },
    { id: "SUB-001242", company: "Quick Stay", product: "Booking Engine", plan: "Business", cycle: "Annual", start: "02 Feb 2026", renewal: "02 Feb 2027", status: "Active", mrr: "₹24,999", autoRenew: true },
    { id: "SUB-001241", company: "City Explorer", product: "Automation Suite", plan: "Professional", cycle: "Monthly", start: "28 Jun 2026", renewal: "28 Jul 2026", status: "Cancelled", mrr: "₹9,999", autoRenew: false },
    { id: "SUB-001240", company: "Nomad Trips", product: "Way We Go CRM", plan: "Business", cycle: "Monthly", start: "15 Apr 2026", renewal: "15 May 2026", status: "Expired", mrr: "₹12,499", autoRenew: false },
    { id: "SUB-001239", company: "Skyline Travels", product: "CMS Platform", plan: "Professional", cycle: "Annual", start: "10 May 2026", renewal: "10 May 2027", status: "Active", mrr: "₹29,999", autoRenew: true },
    { id: "SUB-001239", company: "Skyline Travels", product: "CMS Platform", plan: "Professional", cycle: "Annual", start: "10 May 2026", renewal: "10 May 2027", status: "Active", mrr: "₹29,999", autoRenew: true },
    { id: "SUB-001239", company: "Skyline Travels", product: "CMS Platform", plan: "Professional", cycle: "Annual", start: "10 May 2026", renewal: "10 May 2027", status: "Active", mrr: "₹29,999", autoRenew: true },
    { id: "SUB-001239", company: "Skyline Travels", product: "CMS Platform", plan: "Professional", cycle: "Annual", start: "10 May 2026", renewal: "10 May 2027", status: "Active", mrr: "₹29,999", autoRenew: true },
    { id: "SUB-001239", company: "Skyline Travels", product: "CMS Platform", plan: "Professional", cycle: "Annual", start: "10 May 2026", renewal: "10 May 2027", status: "Active", mrr: "₹29,999", autoRenew: true },
    { id: "SUB-001239", company: "Skyline Travels", product: "CMS Platform", plan: "Professional", cycle: "Annual", start: "10 May 2026", renewal: "10 May 2027", status: "Active", mrr: "₹29,999", autoRenew: true },
    { id: "SUB-001239", company: "Skyline Travels", product: "CMS Platform", plan: "Professional", cycle: "Annual", start: "10 May 2026", renewal: "10 May 2027", status: "Active", mrr: "₹29,999", autoRenew: true },
  ];

  const getStatusStyle = (status: string) => {
    switch(status) {
      case 'Active': return { bg: 'bg-emerald-50 text-emerald-600', dot: 'bg-emerald-500' };
      case 'Trial': return { bg: 'bg-purple-50 text-[#7a42ff]', dot: 'bg-[#7a42ff]' };
      case 'Pending Renewal': return { bg: 'bg-amber-50 text-amber-600', dot: 'bg-amber-500' };
      case 'Paused': return { bg: 'bg-blue-50 text-blue-600', dot: 'bg-blue-500' };
      case 'Cancelled': return { bg: 'bg-rose-50 text-rose-600', dot: 'bg-rose-500' };
      case 'Expired': return { bg: 'bg-gray-100 text-gray-700', dot: 'bg-gray-600' };
      default: return { bg: 'bg-gray-100 text-gray-600', dot: 'bg-gray-700' };
    }
  };

  return (
    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
      
      {/* Table Header & Top Buttons */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 mb-5">
        <div>
          <h2 className="text-[16px] font-black text-[#030C25]">Subscriptions</h2>
          <p className="text-[11px] text-gray-700 font-medium mt-0.5">View and manage all subscriptions across your products.</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-2 w-full xl:w-auto">
          <button className="px-3 py-1.5 text-[11px] font-bold bg-white text-gray-600 hover:text-[#030C25] hover:bg-gray-50 border border-gray-200 rounded-md transition-colors flex items-center shadow-sm cursor-pointer whitespace-nowrap">
            Reset
          </button>
          <button className="px-4 py-1.5 text-[11px] font-bold bg-[#5c45fd] text-white hover:bg-[#4b35e6] rounded-md transition-colors shadow-sm cursor-pointer whitespace-nowrap">
            Apply Filters
          </button>
          <button className="px-3 py-1.5 text-[11px] font-bold bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 rounded-md transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer whitespace-nowrap">
            <Upload size={12} strokeWidth={2.5} /> Export
          </button>
          <button className="px-4 py-1.5 text-[11px] font-bold bg-[#ec4899] text-white hover:bg-[#db2777] rounded-md transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer whitespace-nowrap">
            <Plus size={14} strokeWidth={3} /> Add Subscription
          </button>
        </div>
      </div>

      {/* Filters Row */}
      <div className="flex flex-col xl:flex-row items-center gap-3 mb-5">
        {/* Search Bar with Max Width */}
        <div className="relative w-full xl:max-w-[280px] shrink-0">
          <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-600" />
          <input 
            type="text" 
            placeholder="Search subscriptions, customers..." 
            className="w-full pl-7 pr-3 py-2 text-[10.5px] border border-gray-200 rounded-md focus:outline-none focus:border-[#5c45fd] transition-colors"
          />
        </div>

        {/* Dropdowns without truncate */}
        <div className="flex flex-wrap items-center gap-2 w-full xl:w-auto overflow-x-auto pb-1 xl:pb-0" style={{ scrollbarWidth: 'none' }}>
          {['All Products', 'All Plans', 'All Billing Cycles', 'All Statuses', 'All Regions'].map((filter, i) => (
            <div key={i} className="relative shrink-0">
              <select className="w-full text-[10px] font-bold text-gray-600 border border-gray-200 rounded-md pl-2.5 pr-7 py-1.5 appearance-none focus:outline-none focus:border-[#5c45fd] bg-white transition-colors cursor-pointer whitespace-nowrap">
                <option>{filter}</option>
              </select>
              <ChevronDown size={11} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Table Content with Custom Scrollbar */}
      <div 
        className="overflow-x-auto pb-2"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#cbd5e1 #f1f5f9'
        }}
      >
        <table className="w-full text-left border-collapse min-w-[1050px]">
          <thead>
            <tr className="border-b border-gray-100 text-[10px] text-gray-700 font-bold tracking-wide whitespace-nowrap">
              <th className="py-2.5 px-3 w-8"><input type="checkbox" className="rounded border-gray-300 w-3.5 h-3.5 cursor-pointer" /></th>
              <th className="py-2.5 px-3 font-semibold">Subscription ID</th>
              <th className="py-2.5 px-3 font-semibold">Customer / Company</th>
              <th className="py-2.5 px-3 font-semibold">Product</th>
              <th className="py-2.5 px-3 font-semibold">Plan</th>
              <th className="py-2.5 px-3 font-semibold">Billing Cycle</th>
              <th className="py-2.5 px-3 font-semibold">Start Date</th>
              <th className="py-2.5 px-3 font-semibold">Renewal Date</th>
              <th className="py-2.5 px-3 font-semibold">Status</th>
              <th className="py-2.5 px-3 font-semibold">Amount / MRR</th>
              <th className="py-2.5 px-3 font-semibold text-center">Auto Renew</th>
              <th className="py-2.5 px-3 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-[10.5px] whitespace-nowrap">
            {subscriptions.map((s, i) => {
              const statusStyle = getStatusStyle(s.status);
              return (
                <tr key={i} className="hover:bg-gray-50/60 transition-colors">
                  <td className="py-2.5 px-3"><input type="checkbox" className="rounded border-gray-300 w-3.5 h-3.5 cursor-pointer" /></td>
                  <td className="py-2.5 px-3 font-bold text-[#5c45fd] hover:underline cursor-pointer">{s.id}</td>
                  <td className="py-2.5 px-3 font-semibold text-[#030C25]">{s.company}</td>
                  <td className="py-2.5 px-3 font-medium text-gray-600">{s.product}</td>
                  <td className="py-2.5 px-3 font-medium text-gray-600">{s.plan}</td>
                  <td className="py-2.5 px-3 font-medium text-gray-600">{s.cycle}</td>
                  <td className="py-2.5 px-3 font-medium text-gray-700">{s.start}</td>
                  <td className="py-2.5 px-3 font-medium text-gray-700">{s.renewal}</td>
                  <td className="py-2.5 px-3">
                    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full font-bold text-[9px] ${statusStyle.bg}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot}`} />
                      {s.status}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 font-black text-[#030C25]">{s.mrr}</td>
                  <td className="py-2.5 px-3">
                    <div className="flex justify-center">
                      <div className={`w-7 h-4 rounded-full flex items-center px-0.5 transition-colors cursor-pointer ${s.autoRenew ? 'bg-[#5c45fd]' : 'bg-gray-200'}`}>
                        <div className={`w-3 h-3 bg-white rounded-full shadow-sm transition-transform ${s.autoRenew ? 'translate-x-3' : 'translate-x-0'}`}></div>
                      </div>
                    </div>
                  </td>
                  <td className="py-2.5 px-3 text-right">
                    <button className="text-gray-600 hover:text-gray-800 p-1 cursor-pointer transition-colors">
                      <MoreHorizontal size={14} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-gray-700">
        <p className="font-medium">Showing 1 to 10 of 1,248 subscriptions</p>
        
        <div className="flex items-center gap-1.5">
          <button className="w-6 h-6 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 cursor-pointer transition-colors"><ChevronLeft size={13} /></button>
          <button className="w-6 h-6 rounded-md bg-[#5c45fd] text-white font-bold flex items-center justify-center shadow-xs">1</button>
          <button className="w-6 h-6 rounded-md border border-gray-200 font-medium flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-600">2</button>
          <button className="w-6 h-6 rounded-md border border-gray-200 font-medium flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-600">3</button>
          <button className="w-6 h-6 rounded-md border border-gray-200 font-medium flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-600">4</button>
          <button className="w-6 h-6 rounded-md border border-gray-200 font-medium flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-600">5</button>
          <span className="px-1 text-gray-600 font-bold tracking-wider">...</span>
          <button className="w-6 h-6 rounded-md border border-gray-200 font-medium flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-600">125</button>
          <button className="w-6 h-6 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 cursor-pointer transition-colors"><ChevronRight size={13} /></button>
        </div>
      </div>

    </div>
  );
}
"use client";

import { MoreVertical, ChevronRight, ChevronLeft, Download } from "lucide-react";

export default function CustomersTable() {
  const customers = [
    { name: "Alex Johnson", email: "alex@travelmate.com", company: "Travel Mate", product: "Way We Go CRM", productBg: "bg-purple-100 text-[#7a42ff]", logoText: "W", plan: "Professional", billing: "Monthly", status: "Active", statusBg: "bg-emerald-50 text-emerald-600", dotBg: "bg-emerald-500", renewal: "12 Sep 2026", mrr: "₹14,999", region: "US", flagUrl: "https://flagcdn.com/w40/us.png", activity: "2m ago" },
    { name: "Sarah Miller", email: "sarah@dreamtours.com", company: "Dream Tours", product: "CMS Platform", productBg: "bg-rose-100 text-[#FF0052]", logoText: "C", plan: "Business", billing: "Yearly", status: "Active", statusBg: "bg-emerald-50 text-emerald-600", dotBg: "bg-emerald-500", renewal: "18 Oct 2026", mrr: "₹24,999", region: "IN", flagUrl: "https://flagcdn.com/w40/in.png", activity: "1h ago" },
    { name: "Rahul Mehta", email: "rahul@globalholidays.com", company: "Global Holidays", product: "Booking Engine", productBg: "bg-sky-100 text-[#0284c7]", logoText: "B", plan: "Professional", billing: "Monthly", status: "Trial", statusBg: "bg-purple-50 text-purple-600", dotBg: "bg-purple-500", renewal: "05 Oct 2026", mrr: "₹9,999", region: "SG", flagUrl: "https://flagcdn.com/w40/sg.png", activity: "3h ago" },
    { name: "Emma Wilson", email: "emma@skylinetravels.com", company: "Skyline Travels", product: "Automation Suite", productBg: "bg-amber-100 text-amber-600", logoText: "A", plan: "Business", billing: "Monthly", status: "Active", statusBg: "bg-emerald-50 text-emerald-600", dotBg: "bg-emerald-500", renewal: "22 Sep 2026", mrr: "₹19,999", region: "UK", flagUrl: "https://flagcdn.com/w40/gb.png", activity: "4h ago" },
    { name: "Daniel Kim", email: "daniel@exploreindia.com", company: "Explore India", product: "Way We Go CRM", productBg: "bg-purple-100 text-[#7a42ff]", logoText: "W", plan: "Enterprise", billing: "Yearly", status: "Active", statusBg: "bg-emerald-50 text-emerald-600", dotBg: "bg-emerald-500", renewal: "08 Nov 2026", mrr: "₹49,999", region: "IN", flagUrl: "https://flagcdn.com/w40/in.png", activity: "5h ago" },
    { name: "Priya Sharma", email: "priya@holidayhub.com", company: "Holiday Hub", product: "CMS Platform", productBg: "bg-rose-100 text-[#FF0052]", logoText: "C", plan: "Starter", billing: "Monthly", status: "Pending", statusBg: "bg-amber-50 text-amber-600", dotBg: "bg-amber-500", renewal: "16 Sep 2026", mrr: "₹4,999", region: "IN", flagUrl: "https://flagcdn.com/w40/in.png", activity: "6h ago" },
    { name: "Michael Chen", email: "michael@nextgenmedia.com", company: "NextGen Media", product: "Booking Engine", productBg: "bg-sky-100 text-[#0284c7]", logoText: "B", plan: "Professional", billing: "Monthly", status: "At Risk", statusBg: "bg-rose-50 text-rose-500", dotBg: "bg-rose-500", renewal: "03 Sep 2026", mrr: "₹12,499", region: "AU", flagUrl: "https://flagcdn.com/w40/au.png", activity: "1d ago" },
    { name: "Laura Garcia", email: "laura@cityexplorer.es", company: "City Explorer", product: "Automation Suite", productBg: "bg-amber-100 text-amber-600", logoText: "A", plan: "Business", billing: "Yearly", status: "Active", statusBg: "bg-emerald-50 text-emerald-600", dotBg: "bg-emerald-500", renewal: "27 Oct 2026", mrr: "₹22,999", region: "ES", flagUrl: "https://flagcdn.com/w40/es.png", activity: "1d ago" },
  ];

  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
      
      {/* Table Header Info */}
      <div className="flex justify-between items-center mb-3">
        <div>
          <h2 className="text-[13px] font-bold text-[#030C25]">Customers (1,482)</h2>
          <p className="text-[10px] text-gray-500 font-medium">View and manage all customers across KAELIXO products.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-2.5 py-1 text-[11px] font-bold bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 rounded-md transition-colors flex items-center gap-1 shadow-sm cursor-pointer">
            <Download size={12} className="text-gray-500" /> Export
          </button>
          <button className="p-1 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 rounded-md transition-colors shadow-sm cursor-pointer">
            <MoreVertical size={14} />
          </button>
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
            <tr className="bg-gray-100/80 rounded-lg text-[9px] text-gray-700 font-bold uppercase tracking-wider whitespace-nowrap">
              <th className="py-2 px-2.5 w-7"><input type="checkbox" className="rounded border-gray-300 w-3.5 h-3.5" /></th>
              <th className="py-2 px-2.5 font-semibold">Customer</th>
              <th className="py-2 px-2.5 font-semibold">Company</th>
              <th className="py-2 px-2.5 font-semibold">Product</th>
              <th className="py-2 px-2.5 font-semibold">Plan</th>
              <th className="py-2 px-2.5 font-semibold">Billing Cycle</th>
              <th className="py-2 px-2.5 font-semibold">Status</th>
              <th className="py-2 px-2.5 font-semibold">Renewal Date</th>
              <th className="py-2 px-2.5 font-semibold">MRR</th>
              <th className="py-2 px-2.5 font-semibold">Region</th>
              <th className="py-2 px-2.5 font-semibold">Last Activity</th>
              <th className="py-2 px-2.5 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-[11px] whitespace-nowrap">
            {customers.map((c, i) => (
              <tr key={i} className="hover:bg-gray-50/60 transition-colors">
                <td className="py-2.5 px-2.5"><input type="checkbox" className="rounded border-gray-300 w-3.5 h-3.5" /></td>
                <td className="py-2.5 px-2.5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-purple-100 text-[#7a42ff] flex items-center justify-center font-bold text-[10px] shrink-0">
                      {c.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-[#030C25] leading-tight">{c.name}</p>
                      <p className="text-[9px] text-gray-400 font-medium">{c.email}</p>
                    </div>
                  </div>
                </td>
                <td className="py-2.5 px-2.5 font-semibold text-gray-800">{c.company}</td>
                <td className="py-2.5 px-2.5">
                  <span className={`inline-flex items-center gap-1 text-[9.5px] font-bold px-2 py-0.5 rounded-full ${c.productBg}`}>
                    <span className="w-3.5 h-3.5 rounded bg-white/80 flex items-center justify-center text-[8px] font-black">{c.logoText}</span>
                    {c.product}
                  </span>
                </td>
                <td className="py-2.5 px-2.5 font-medium text-gray-600">{c.plan}</td>
                <td className="py-2.5 px-2.5 font-medium text-gray-600">{c.billing}</td>
                <td className="py-2.5 px-2.5">
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-bold text-[9.5px] ${c.statusBg}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${c.dotBg}`} />
                    {c.status}
                  </span>
                </td>
                <td className="py-2.5 px-2.5 font-medium text-gray-600">{c.renewal}</td>
                <td className="py-2.5 px-2.5 font-black text-[#030C25]">{c.mrr}</td>
                <td className="py-2.5 px-2.5 font-semibold text-gray-700">
                  <span className="inline-flex items-center gap-1.5">
                    <img src={c.flagUrl} alt={c.region} className="w-4 h-3 object-cover rounded-sm shadow-xs border border-gray-100" /> 
                    <span>{c.region}</span>
                  </span>
                </td>
                <td className="py-2.5 px-2.5 text-gray-400 font-medium">{c.activity}</td>
                <td className="py-2.5 px-2.5 text-right">
                  <button className="text-gray-500 hover:text-gray-800 p-1 cursor-pointer">
                    <MoreVertical size={15} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] text-gray-500">
        <p className="font-medium">Showing 1-8 of 1,482 customers</p>
        
        <div className="flex items-center gap-1">
          <button className="w-6 h-6 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 cursor-pointer"><ChevronLeft size={13} /></button>
          <button className="w-6 h-6 rounded-md bg-[#7a42ff] text-white font-bold flex items-center justify-center shadow-xs">1</button>
          <button className="w-6 h-6 rounded-md border border-gray-200 font-medium flex items-center justify-center hover:bg-gray-50">2</button>
          <button className="w-6 h-6 rounded-md border border-gray-200 font-medium flex items-center justify-center hover:bg-gray-50">3</button>
          <button className="w-6 h-6 rounded-md border border-gray-200 font-medium flex items-center justify-center hover:bg-gray-50">4</button>
          <button className="w-6 h-6 rounded-md border border-gray-200 font-medium flex items-center justify-center hover:bg-gray-50">5</button>
          <span className="px-0.5 text-gray-400 font-bold">...</span>
          <button className="w-6 h-6 rounded-md border border-gray-200 font-medium flex items-center justify-center hover:bg-gray-50">186</button>
          <button className="w-6 h-6 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 cursor-pointer"><ChevronRight size={13} /></button>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="font-medium text-gray-500">Show 8 per page</span>
          <select className="bg-gray-50 border border-gray-200 rounded-md text-[11px] font-semibold text-gray-700 px-1.5 py-0.5 outline-none">
            <option>8</option>
            <option>16</option>
            <option>24</option>
          </select>
        </div>
      </div>

    </div>
  );
}
"use client";

import { MoreVertical, Check } from "lucide-react";

export default function ProductsTable() {
  const tableData = [
    { name: "Way We Go CRM", category: "CRM", clients: 312, subs: 428, revenue: "₹16,24,580", status: "Active", updated: "12 Sep 2026", color: "text-[#7a42ff]", bg: "bg-[#7a42ff]/10", logoText: "W" },
    { name: "CMS Platform", category: "Content & CMS", clients: 98, subs: 142, revenue: "₹5,82,340", status: "Active", updated: "11 Sep 2026", color: "text-[#FF0052]", bg: "bg-[#FF0052]/10", logoText: "C" },
    { name: "Booking Engine", category: "Booking & Travel", clients: 54, subs: 87, revenue: "₹2,61,400", status: "Active", updated: "10 Sep 2026", color: "text-[#2bbcff]", bg: "bg-[#2bbcff]/10", logoText: "B" },
    { name: "Automation Suite", category: "Automation", clients: 18, subs: 36, revenue: "₹98,320", status: "Active", updated: "08 Sep 2026", color: "text-[#f59e0b]", bg: "bg-[#f59e0b]/10", logoText: "A" },
    { name: "AI Tools Suite", category: "AI & Analytics", clients: 0, subs: 0, revenue: "₹0", status: "Beta", updated: "05 Sep 2026", color: "text-[#8b5cf6]", bg: "bg-[#8b5cf6]/10", logoText: "AI" },
    { name: "Analytics Hub", category: "Analytics", clients: 0, subs: 0, revenue: "₹0", status: "In Development", updated: "02 Sep 2026", color: "text-purple-600", bg: "bg-purple-50", logoText: "AH" },
  ];

  return (
    <div className="bg-white rounded-[16px] p-5 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-[14px] font-bold text-[#030C25]">All Products</h2>
          <p className="text-[10px] text-[#64748b] font-medium">Manage and monitor your entire product portfolio</p>
        </div>
      </div>

      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="border-b border-gray-100 text-[9px] text-[#64748b] font-bold uppercase tracking-wider">
              <th className="py-2.5 px-3 w-8"><input type="checkbox" className="rounded border-gray-300" /></th>
              <th className="py-2.5 px-3 font-semibold">Product</th>
              <th className="py-2.5 px-3 font-semibold">Category</th>
              <th className="py-2.5 px-3 font-semibold">Clients</th>
              <th className="py-2.5 px-3 font-semibold">Subscriptions</th>
              <th className="py-2.5 px-3 font-semibold">Monthly Revenue</th>
              <th className="py-2.5 px-3 font-semibold">Status</th>
              <th className="py-2.5 px-3 font-semibold">Last Updated</th>
              <th className="py-2.5 px-3 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-xs">
            {tableData.map((item, i) => (
              <tr key={i} className="hover:bg-gray-50/60 transition-colors">
                <td className="py-3 px-3"><input type="checkbox" className="rounded border-gray-300" /></td>
                <td className="py-3 px-3">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${item.bg} ${item.color}`}>
                      {item.logoText}
                    </div>
                    <span className="font-bold text-[#030C25]">{item.name}</span>
                  </div>
                </td>
                <td className="py-3 px-3 text-[#64748b]">{item.category}</td>
                <td className="py-3 px-3 font-semibold text-[#030C25]">{item.clients}</td>
                <td className="py-3 px-3 text-[#64748b]">{item.subs}</td>
                <td className="py-3 px-3 font-bold text-[#030C25]">{item.revenue}</td>
                <td className="py-3 px-3">
                  <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full font-bold text-[10px] ${
                    item.status === 'Active' ? 'bg-emerald-50 text-emerald-600' :
                    item.status === 'Beta' ? 'bg-purple-50 text-purple-600' : 'bg-amber-50 text-amber-600'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      item.status === 'Active' ? 'bg-emerald-500' :
                      item.status === 'Beta' ? 'bg-purple-500' : 'bg-amber-500'
                    }`} />
                    {item.status}
                  </span>
                </td>
                <td className="py-3 px-3 text-[#64748b]">{item.updated}</td>
                <td className="py-3 px-3 text-right">
                  <button className="text-gray-400 hover:text-gray-600 p-1"><MoreVertical size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
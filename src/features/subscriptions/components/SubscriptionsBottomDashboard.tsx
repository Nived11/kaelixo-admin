"use client";

import { ArrowRight } from "lucide-react";

export default function SubscriptionsBottomDashboard() {
  const recentRenewals = [
    { customer: "ABC Travels", product: "Way We Go", amount: "₹16,249", date: "12 Sep 2026", status: "Success", statusBg: "bg-emerald-50 text-emerald-600" },
    { customer: "Wander More", product: "CMS", amount: "₹9,999", date: "11 Sep 2026", status: "Success", statusBg: "bg-emerald-50 text-emerald-600" },
    { customer: "Travel Mate", product: "Booking", amount: "₹14,999", date: "10 Sep 2026", status: "Success", statusBg: "bg-emerald-50 text-emerald-600" },
    { customer: "Coastal Trips", product: "CRM", amount: "₹29,999", date: "09 Sep 2026", status: "Success", statusBg: "bg-emerald-50 text-emerald-600" },
    { customer: "Holiday Hub", product: "Automation", amount: "₹9,999", date: "08 Sep 2026", status: "Success", statusBg: "bg-emerald-50 text-emerald-600" },
  ];

  const upcomingRenewals = [
    { customer: "Kerala Trips", product: "Booking", amount: "₹14,999", date: "18 Sep 2026" },
    { customer: "Dream Tours", product: "Automation", amount: "₹9,999", date: "20 Sep 2026" },
    { customer: "Explore India", product: "CRM", amount: "₹49,999", date: "05 Oct 2026" },
    { customer: "Quick Stay", product: "Booking", amount: "₹24,999", date: "02 Oct 2026" },
    { customer: "City Explorer", product: "CMS", amount: "₹12,499", date: "15 Oct 2026" },
  ];

  const cancelledExpired = [
    { customer: "City Explorer", product: "Automation", date: "28 Jul 2026", reason: "Customer request" },
    { customer: "Nomad Trips", product: "CRM", date: "15 May 2026", reason: "Payment failed" },
    { customer: "Mountain Stay", product: "CMS", date: "10 May 2026", reason: "Contract ended" },
    { customer: "Beach Holidays", product: "Booking", date: "02 May 2026", reason: "Moved to competitor" },
    { customer: "Urban Travels", product: "Automation", date: "25 Apr 2026", reason: "Inactive account" },
  ];

  const trialConversions = [
    { customer: "Explore World", product: "CRM", convertedOn: "12 Sep 2026" },
    { customer: "Happy Trails", product: "CMS", convertedOn: "10 Sep 2026" },
    { customer: "Route Planner", product: "Booking", convertedOn: "08 Sep 2026" },
    { customer: "Stay Easy", product: "Automation", convertedOn: "06 Sep 2026" },
    { customer: "Vista Holidays", product: "CRM", convertedOn: "04 Sep 2026" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
      
      {/* 1. Recent Renewals */}
      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex flex-col min-w-0">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[11px] font-black text-[#030C25]">Recent Renewals</h2>
          <a href="#" className="text-[11px] font-bold text-[#7a42ff] hover:underline flex items-center gap-0.5 whitespace-nowrap">
            View All <ArrowRight size={11} strokeWidth={2.5} />
          </a>
        </div>
        
        <div className="w-full overflow-x-auto pb-1" style={{ scrollbarWidth: 'thin', scrollbarColor: '#cbd5e1 #f1f5f9' }}>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[10.5px] text-gray-500 font-semibold border-b border-gray-100 whitespace-nowrap">
                <th className="pb-2 pr-3 font-medium">Customer</th>
                <th className="pb-2 pr-3 font-medium">Product</th>
                <th className="pb-2 pr-3 font-medium">Amount</th>
                <th className="pb-2 pr-3 font-medium">Date</th>
                <th className="pb-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-[10.5px]">
              {recentRenewals.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors whitespace-nowrap">
                  <td className="py-2.5 pr-3 font-semibold text-[#5c6ac4] cursor-pointer hover:underline">{item.customer}</td>
                  <td className="py-2.5 pr-3 text-gray-600 font-medium">{item.product}</td>
                  <td className="py-2.5 pr-3 font-semibold text-[#030C25]">{item.amount}</td>
                  <td className="py-2.5 pr-3 text-gray-600 font-medium">{item.date}</td>
                  <td className="py-2.5">
                    <span className={`inline-flex px-1.5 py-0.5 rounded font-bold text-[9px] ${item.statusBg}`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. Upcoming Renewals */}
      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex flex-col min-w-0">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[11px] font-black text-[#030C25]">Upcoming Renewals</h2>
          <a href="#" className="text-[11px] font-bold text-[#7a42ff] hover:underline flex items-center gap-0.5 whitespace-nowrap">
            View All <ArrowRight size={11} strokeWidth={2.5} />
          </a>
        </div>
        
        <div className="w-full overflow-x-auto pb-1" style={{ scrollbarWidth: 'thin', scrollbarColor: '#cbd5e1 #f1f5f9' }}>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[10.5px] text-gray-500 font-semibold border-b border-gray-100 whitespace-nowrap">
                <th className="pb-2 pr-3 font-medium">Customer</th>
                <th className="pb-2 pr-3 font-medium">Product</th>
                <th className="pb-2 pr-3 font-medium">Amount</th>
                <th className="pb-2 font-medium">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-[10.5px]">
              {upcomingRenewals.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors whitespace-nowrap">
                  <td className="py-2.5 pr-3 font-semibold text-[#5c6ac4] cursor-pointer hover:underline">{item.customer}</td>
                  <td className="py-2.5 pr-3 text-gray-600 font-medium">{item.product}</td>
                  <td className="py-2.5 pr-3 font-semibold text-[#030C25]">{item.amount}</td>
                  <td className="py-2.5 text-gray-600 font-medium">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. Cancelled / Expired Subscriptions */}
      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex flex-col min-w-0">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[11px] font-black text-[#030C25]">Cancelled / Expired Subscriptions</h2>
          <a href="#" className="text-[11px] font-bold text-[#7a42ff] hover:underline flex items-center gap-0.5 whitespace-nowrap">
            View All <ArrowRight size={11} strokeWidth={2.5} />
          </a>
        </div>
        
        <div className="w-full overflow-x-auto pb-1" style={{ scrollbarWidth: 'thin', scrollbarColor: '#cbd5e1 #f1f5f9' }}>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[10.5px] text-gray-500 font-semibold border-b border-gray-100 whitespace-nowrap">
                <th className="pb-2 pr-3 font-medium">Customer</th>
                <th className="pb-2 pr-3 font-medium">Product</th>
                <th className="pb-2 pr-3 font-medium">Date</th>
                <th className="pb-2 font-medium">Reason</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-[10.5px]">
              {cancelledExpired.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors whitespace-nowrap">
                  <td className="py-2.5 pr-3 font-semibold text-[#5c6ac4] cursor-pointer hover:underline">{item.customer}</td>
                  <td className="py-2.5 pr-3 text-gray-600 font-medium">{item.product}</td>
                  <td className="py-2.5 pr-3 text-gray-600 font-medium">{item.date}</td>
                  <td className="py-2.5 text-gray-500 font-medium">{item.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Trial Conversions */}
      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex flex-col min-w-0">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[11px] font-black text-[#030C25]">Trial Conversions</h2>
          <a href="#" className="text-[11px] font-bold text-[#7a42ff] hover:underline flex items-center gap-0.5 whitespace-nowrap">
            View All <ArrowRight size={11} strokeWidth={2.5} />
          </a>
        </div>
        
        <div className="w-full overflow-x-auto pb-1" style={{ scrollbarWidth: 'thin', scrollbarColor: '#cbd5e1 #f1f5f9' }}>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[10.5px] text-gray-500 font-semibold border-b border-gray-100 whitespace-nowrap">
                <th className="pb-2 pr-3 font-medium">Customer</th>
                <th className="pb-2 pr-3 font-medium">Product</th>
                <th className="pb-2 font-medium">Converted On</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-[10.5px]">
              {trialConversions.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors whitespace-nowrap">
                  <td className="py-2.5 pr-3 font-semibold text-[#5c6ac4] cursor-pointer hover:underline">{item.customer}</td>
                  <td className="py-2.5 pr-3 text-gray-600 font-medium">{item.product}</td>
                  <td className="py-2.5 text-gray-600 font-medium">{item.convertedOn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
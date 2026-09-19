"use client";

import { ArrowRight } from "lucide-react";

export default function TenantsBottomDashboard() {
  const recentOnboarding = [
    { tenant: "City Explorer", product: "Way We Go", company: "City Explorer", date: "18 Sep 2026", status: "Completed", statusBg: "bg-emerald-50 text-emerald-600" },
    { tenant: "Quick Stay", product: "CMS Platform", company: "Quick Stay", date: "17 Sep 2026", status: "Completed", statusBg: "bg-emerald-50 text-emerald-600" },
    { tenant: "Global Retreat", product: "Booking", company: "Global Retreat", date: "16 Sep 2026", status: "Completed", statusBg: "bg-emerald-50 text-emerald-600" },
    { tenant: "Mountain Go", product: "Automation", company: "Mountain Go", date: "15 Sep 2026", status: "Provisioning", statusBg: "bg-blue-50 text-blue-600" },
    { tenant: "Lake View", product: "Way We Go", company: "Lake View", date: "15 Sep 2026", status: "Completed", statusBg: "bg-emerald-50 text-emerald-600" },
  ];

  const provisioningQueue = [
    { tenant: "Sunrise Tours", product: "CMS", started: "18 Sep 10:20", eta: "5m", status: "In Progress", statusBg: "bg-blue-50 text-blue-600" },
    { tenant: "Heritage India", product: "Booking", started: "18 Sep 09:45", eta: "12m", status: "In Progress", statusBg: "bg-blue-50 text-blue-600" },
    { tenant: "Urban Stays", product: "Automation", started: "18 Sep 09:30", eta: "18m", status: "Pending", statusBg: "bg-amber-50 text-amber-600" },
    { tenant: "Wild Trails", product: "Way We Go", started: "18 Sep 08:15", eta: "25m", status: "Pending", statusBg: "bg-amber-50 text-amber-600" },
    { tenant: "Royal Escapes", product: "CMS", started: "18 Sep 07:50", eta: "40m", status: "Pending", statusBg: "bg-amber-50 text-amber-600" },
  ];

  const expiringRenewals = [
    { tenant: "Holiday Hub", product: "Automation", date: "08 Sep 2026", days: 5, status: "Expiring", statusBg: "bg-orange-50 text-orange-500", daysColor: "text-rose-500" },
    { tenant: "Wander More", product: "CMS", date: "11 Sep 2026", days: 8, status: "Expiring", statusBg: "bg-orange-50 text-orange-500", daysColor: "text-rose-500" },
    { tenant: "Dream Holidays", product: "Way We Go", date: "12 Sep 2026", days: 9, status: "Expiring", statusBg: "bg-orange-50 text-orange-500", daysColor: "text-rose-500" },
    { tenant: "XYZ Tours", product: "Way We Go", date: "15 Sep 2026", days: 12, status: "Upcoming", statusBg: "bg-blue-50 text-blue-600", daysColor: "text-[#030C25]" },
    { tenant: "Explore India", product: "CMS", date: "22 Sep 2026", days: 19, status: "Upcoming", statusBg: "bg-blue-50 text-blue-600", daysColor: "text-[#030C25]" },
  ];

  const tenantIssues = [
    { tenant: "Explore India", product: "CMS", date: "18 Sep 2026", issue: "Provisioning failed" },
    { tenant: "Nomad Trips", product: "Automation", date: "17 Sep 2026", issue: "Payment declined" },
    { tenant: "Travel Lite", product: "Way We Go", date: "16 Sep 2026", issue: "Domain conflict" },
    { tenant: "Budget Stays", product: "CMS", date: "15 Sep 2026", issue: "API error" },
    { tenant: "Green Escapes", product: "Booking", date: "14 Sep 2026", issue: "Provision timeout" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
      
      {/* 1. Recent Tenant Onboarding */}
      <div className="bg-white rounded-[16px] p-4 border border-gray-200 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex flex-col min-w-0">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[10px] font-black text-[#030C25]">Recent Tenant Onboarding</h2>
          <a href="#" className="text-[10px] font-bold text-[#7a42ff] hover:underline flex items-center gap-0.5 whitespace-nowrap">
            View All <ArrowRight size={11} strokeWidth={2.5} />
          </a>
        </div>
        
        {/* Custom Scrollbar Container */}
        <div className="w-full overflow-x-auto pb-1" style={{ scrollbarWidth: 'thin', scrollbarColor: '#cbd5e1 #f1f5f9' }}>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[10.5px] text-gray-700 font-semibold border-b border-gray-200 whitespace-nowrap">
                <th className="pb-2 pr-3 font-medium">Tenant</th>
                <th className="pb-2 pr-3 font-medium">Product</th>
                <th className="pb-2 pr-3 font-medium">Company</th>
                <th className="pb-2 pr-3 font-medium">Created At</th>
                <th className="pb-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-[10.5px]">
              {recentOnboarding.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors whitespace-nowrap">
                  <td className="py-2.5 pr-3 font-semibold text-[#5c6ac4] cursor-pointer hover:underline">{item.tenant}</td>
                  <td className="py-2.5 pr-3 text-gray-600 font-medium">{item.product}</td>
                  <td className="py-2.5 pr-3 text-gray-600 font-medium">{item.company}</td>
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

      {/* 2. Provisioning Queue */}
      <div className="bg-white rounded-[16px] p-4 border border-gray-200 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex flex-col min-w-0">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[10px] font-black text-[#030C25]">Provisioning Queue</h2>
          <a href="#" className="text-[10px] font-bold text-[#7a42ff] hover:underline flex items-center gap-0.5 whitespace-nowrap">
            View All <ArrowRight size={11} strokeWidth={2.5} />
          </a>
        </div>
        
        <div className="w-full overflow-x-auto pb-1" style={{ scrollbarWidth: 'thin', scrollbarColor: '#cbd5e1 #f1f5f9' }}>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[10.5px] text-gray-700 font-semibold border-b border-gray-200 whitespace-nowrap">
                <th className="pb-2 pr-3 font-medium">Tenant</th>
                <th className="pb-2 pr-3 font-medium">Product</th>
                <th className="pb-2 pr-3 font-medium">Started</th>
                <th className="pb-2 pr-3 font-medium">ETA</th>
                <th className="pb-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-[10.5px]">
              {provisioningQueue.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors whitespace-nowrap">
                  <td className="py-2.5 pr-3 font-semibold text-[#5c6ac4] cursor-pointer hover:underline">{item.tenant}</td>
                  <td className="py-2.5 pr-3 text-gray-600 font-medium">{item.product}</td>
                  <td className="py-2.5 pr-3 text-gray-600 font-medium">{item.started}</td>
                  <td className="py-2.5 pr-3 text-gray-600 font-medium">{item.eta}</td>
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

      {/* 3. Expiring Tenants / Renewals */}
      <div className="bg-white rounded-[16px] p-4 border border-gray-200 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex flex-col min-w-0">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[10px] font-black text-[#030C25]">Expiring Tenants / Renewals</h2>
          <a href="#" className="text-[10px] font-bold text-[#7a42ff] hover:underline flex items-center gap-0.5 whitespace-nowrap">
            View All <ArrowRight size={11} strokeWidth={2.5} />
          </a>
        </div>
        
        <div className="w-full overflow-x-auto pb-1" style={{ scrollbarWidth: 'thin', scrollbarColor: '#cbd5e1 #f1f5f9' }}>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[10.5px] text-gray-700 font-semibold border-b border-gray-200 whitespace-nowrap">
                <th className="pb-2 pr-3 font-medium">Tenant</th>
                <th className="pb-2 pr-3 font-medium">Product</th>
                <th className="pb-2 pr-3 font-medium">Renewal Date</th>
                <th className="pb-2 pr-3 font-medium text-center">Days Left</th>
                <th className="pb-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-[10.5px]">
              {expiringRenewals.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors whitespace-nowrap">
                  <td className="py-2.5 pr-3 font-semibold text-[#5c6ac4] cursor-pointer hover:underline">{item.tenant}</td>
                  <td className="py-2.5 pr-3 text-gray-600 font-medium">{item.product}</td>
                  <td className="py-2.5 pr-3 text-gray-600 font-medium">{item.date}</td>
                  <td className={`py-2.5 pr-3 font-bold text-center ${item.daysColor}`}>
                    {item.days}
                  </td>
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

      {/* 4. Tenant Issues / Failed Provisioning */}
      <div className="bg-white rounded-[16px] p-4 border border-gray-200 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex flex-col min-w-0">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[10px] font-black text-[#030C25]">Tenant Issues / Failed Provisioning</h2>
          <a href="#" className="text-[10px] font-bold text-[#7a42ff] hover:underline flex items-center gap-0.5 whitespace-nowrap">
            View All <ArrowRight size={11} strokeWidth={2.5} />
          </a>
        </div>
        
        <div className="w-full overflow-x-auto pb-1" style={{ scrollbarWidth: 'thin', scrollbarColor: '#cbd5e1 #f1f5f9' }}>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[10.5px] text-gray-700 font-semibold border-b border-gray-200 whitespace-nowrap">
                <th className="pb-2 pr-3 font-medium">Tenant</th>
                <th className="pb-2 pr-3 font-medium">Product</th>
                <th className="pb-2 pr-3 font-medium">Date</th>
                <th className="pb-2 font-medium">Issue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-[10.5px]">
              {tenantIssues.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors whitespace-nowrap">
                  <td className="py-2.5 pr-3 font-semibold text-[#5c6ac4] cursor-pointer hover:underline">{item.tenant}</td>
                  <td className="py-2.5 pr-3 text-gray-600 font-medium">{item.product}</td>
                  <td className="py-2.5 pr-3 text-gray-600 font-medium">{item.date}</td>
                  <td className="py-2.5">
                    <span className="inline-flex px-1.5 py-0.5 rounded font-bold text-[9px] bg-rose-50 text-rose-500 whitespace-nowrap">
                      {item.issue}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
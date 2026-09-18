"use client";

import { ArrowRight } from "lucide-react";

export default function CompaniesBottomDashboard() {
  const recentOnboarding = [
    { company: "Nomad Trips", plan: "Business", date: "18 Sep 2026", status: "Active" },
    { company: "Quick Stay", plan: "Professional", date: "16 Sep 2026", status: "Active" },
    { company: "City Explorer", plan: "Business", date: "15 Sep 2026", status: "Active" },
    { company: "Travel Square", plan: "Enterprise", date: "14 Sep 2026", status: "Active" },
    { company: "Wander More", plan: "Professional", date: "12 Sep 2026", status: "Active" },
  ];

  const upcomingRenewals = [
    { company: "Global Holidays", date: "16 Sep 2026", mrr: "₹98,320", status: "Due Soon" },
    { company: "Kerala Trips", date: "18 Sep 2026", mrr: "₹74,999", status: "Due Soon" },
    { company: "Dream Tours", date: "20 Sep 2026", mrr: "₹2,19,400", status: "Due Soon" },
    { company: "Explore India", date: "22 Sep 2026", mrr: "₹32,400", status: "At Risk" },
    { company: "Holiday World", date: "24 Sep 2026", mrr: "₹68,320", status: "Due Soon" },
  ];

  const atRiskCompanies = [
    { company: "Explore India", health: 25, days: 8, reason: "Payment failed" },
    { company: "Nomad Trips", health: 35, days: 12, reason: "Card expiring" },
    { company: "Quick Stay", health: 40, days: 15, reason: "Low usage" },
    { company: "Holiday Hub", health: 45, days: 18, reason: "Support tickets" },
    { company: "City Explorer", health: 50, days: 21, reason: "Plan downgrade" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      
      {/* 1. Recent Company Onboarding */}
      <div className="bg-white rounded-[16px] p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[13px] font-black text-[#030C25]">Recent Company Onboarding</h2>
          <a href="#" className="text-[10px] font-bold text-[#7a42ff] hover:underline flex items-center gap-0.5">
            View All <ArrowRight size={11} strokeWidth={2.5} />
          </a>
        </div>
        
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[12px] text-gray-600 font-semibold border-b border-gray-200">
                <th className="pb-2 ">Company</th>
                <th className="pb-2 ">Plan</th>
                <th className="pb-2 ">Date</th>
                <th className="pb-2 ">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-[10.5px]">
              {recentOnboarding.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-2.5 font-semibold text-[#5c6ac4] cursor-pointer hover:underline">{item.company}</td>
                  <td className="py-2.5 text-gray-800  font-semibold">{item.plan}</td>
                  <td className="py-2.5 text-gray-800  font-semibold">{item.date}</td>
                  <td className="py-2.5">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full font-bold text-[9px] bg-emerald-50 text-emerald-600">
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
      <div className="bg-white rounded-[16px] p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[13px] font-black text-[#030C25]">Upcoming Renewals</h2>
          <a href="#" className="text-[10px] font-bold text-[#7a42ff] hover:underline flex items-center gap-0.5">
            View All <ArrowRight size={11} strokeWidth={2.5} />
          </a>
        </div>
        
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[12px] text-gray-600 font-semibold border-b border-gray-200">
                <th className="pb-2 ">Company</th>
                <th className="pb-2 ">Renewal Date</th>
                <th className="pb-2 ">MRR (₹)</th>
                <th className="pb-2 ">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-[10.5px]">
              {upcomingRenewals.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-2.5 font-semibold text-[#5c6ac4] cursor-pointer hover:underline">{item.company}</td>
                  <td className="py-2.5 text-gray-800  font-semibold">{item.date}</td>
                  <td className="py-2.5 font-semibold text-gray-600">{item.mrr}</td>
                  <td className="py-2.5">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full font-bold text-[9px] ${
                      item.status === 'Due Soon' ? 'bg-amber-50 text-amber-600' : 'bg-orange-50 text-orange-500'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. At-Risk Companies */}
      <div className="bg-white rounded-[16px] p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[13px] font-black text-[#030C25]">At-Risk Companies</h2>
          <a href="#" className="text-[10px] font-bold text-[#7a42ff] hover:underline flex items-center gap-0.5">
            View All <ArrowRight size={11} strokeWidth={2.5} />
          </a>
        </div>
        
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[12px] text-gray-600 font-semibold border-b border-gray-200">
                <th className="pb-2 ">Company</th>
                <th className="pb-2 ">Health Score</th>
                <th className="pb-2  text-center">Days Left</th>
                <th className="pb-2 ">Reason</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-[10.5px]">
              {atRiskCompanies.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-2.5 font-semibold text-[#5c6ac4] cursor-pointer hover:underline">{item.company}</td>
                  <td className="py-2.5">
                    <div className="w-full h-2 bg-gray-100 rounded-full border border-gray-300 overflow-hidden">
                      <div className="h-full bg-[#FF0052] rounded-full" style={{ width: `${item.health}%` }} />
                    </div>
                  </td>
                  <td className={`py-2.5 font-bold text-center ${item.days <= 10 ? 'text-rose-500' : 'text-[#030C25]'}`}>
                    {item.days}
                  </td>
                  <td className="py-2.5 text-gray-800  font-semibold text-[9.5px] truncate max-w-[80px]">
                    {item.reason}
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
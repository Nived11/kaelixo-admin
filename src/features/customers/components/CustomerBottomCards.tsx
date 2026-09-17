"use client";

import { ChevronRight, MoreVertical } from "lucide-react";

export default function CustomerBottomCards() {
  const onboarding = [
    { name: "Oliver Brown", email: "oliver@mountaintrails.co", company: "Mountain Trails", time: "2h ago", logo: "A", logoBg: "bg-purple-100 text-[#7a42ff]" },
    { name: "Neha Kapoor", email: "neha@wellnessspa.in", company: "Wellness Spa", time: "5h ago", logo: "N", logoBg: "bg-emerald-100 text-emerald-600" },
    { name: "Lucas Martins", email: "lucas@brasiladventures.br", company: "Brasil Adv.", time: "8h ago", logo: "L", logoBg: "bg-rose-100 text-[#FF0052]" },
    { name: "Sophie Dubois", email: "sophie@parisgetaways.fr", company: "Paris Get.", time: "12h ago", logo: "S", logoBg: "bg-sky-100 text-[#0284c7]" },
    { name: "Hiro Tanaka", email: "hiro@sakuratravel.jp", company: "Sakura Tr.", time: "1d ago", logo: "H", logoBg: "bg-rose-100 text-[#FF0052]" },
  ];

  const renewals = [
    { customer: "Travel Mate", product: "Way We Go CRM", prodBg: "bg-purple-100 text-[#7a42ff]", logoText: "W", date: "12 Sep 2026", mrr: "₹14,999" },
    { customer: "Holiday Hub", product: "CMS Platform", prodBg: "bg-rose-100 text-[#FF0052]", logoText: "C", date: "16 Sep 2026", mrr: "₹4,999" },
    { customer: "Coastal Trips", product: "Booking Engine", prodBg: "bg-sky-100 text-[#0284c7]", logoText: "B", date: "22 Sep 2026", mrr: "₹9,999" },
    { customer: "Explore India", product: "Automation Suite", prodBg: "bg-amber-100 text-amber-600", logoText: "A", date: "25 Sep 2026", mrr: "₹24,999" },
    { customer: "Dream Tours", product: "CMS Platform", prodBg: "bg-rose-100 text-[#FF0052]", logoText: "C", date: "28 Sep 2026", mrr: "₹19,999" },
    { customer: "Dream Tours", product: "CMS Platform", prodBg: "bg-rose-100 text-[#FF0052]", logoText: "C", date: "28 Sep 2026", mrr: "₹19,999" },
  ];

  const atRisk = [
    { customer: "NextGen Media", product: "Booking Engine", prodBg: "bg-sky-100 text-[#0284c7]", logoText: "B", days: "5 days", mrr: "₹12,499" },
    { customer: "Quick Stay", product: "CMS Platform", prodBg: "bg-rose-100 text-[#FF0052]", logoText: "C", days: "8 days", mrr: "₹7,999" },
    { customer: "Nomad Trips", product: "Way We Go CRM", prodBg: "bg-purple-100 text-[#7a42ff]", logoText: "W", days: "10 days", mrr: "₹9,999" },
    { customer: "Urban Stays", product: "Automation Suite", prodBg: "bg-amber-100 text-amber-600", logoText: "A", days: "12 days", mrr: "₹6,499" },
    { customer: "Royal Vacations", product: "Booking Engine", prodBg: "bg-sky-100 text-[#0284c7]", logoText: "B", days: "15 days", mrr: "₹11,999" },
    { customer: "Royal Vacations", product: "Booking Engine", prodBg: "bg-sky-100 text-[#0284c7]", logoText: "B", days: "15 days", mrr: "₹11,999" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      
      {/* 1. Recent Onboarding Card */}
      <div className="bg-white rounded-[16px] p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex flex-col">
        <div className="flex justify-between items-center mb-0.5">
          <h3 className="text-[13px] font-bold text-[#030C25]">Recent Onboarding</h3>
          <a href="#" className="text-[10px] text-[#7a42ff] font-bold hover:underline flex items-center gap-0.5">
            View All <ChevronRight size={12} strokeWidth={2.5} />
          </a>
        </div>
        <p className="text-[10px] text-gray-400 mb-2.5">Latest customers who joined KAELIXO</p>

        <div 
          className="overflow-x-auto pb-2"
          style={{ scrollbarWidth: 'thin', scrollbarColor: '#cbd5e1 #f1f5f9' }}
        >
          <table className="w-full text-left border-collapse text-[11px] min-w-[340px]">
            <thead>
              <tr className="bg-gray-50/80 rounded-md text-[9px] text-gray-500 font-bold uppercase tracking-wider whitespace-nowrap">
                <th className="py-2 px-2.5 font-semibold">Customer</th>
                <th className="py-2 px-2.5 font-semibold">Company</th>
                <th className="py-2 px-2.5 font-semibold text-right">Joined</th>
                <th className="py-2 px-2.5 font-semibold text-right w-6"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 whitespace-nowrap">
              {onboarding.map((o, i) => (
                <tr key={i} className="hover:bg-gray-50/50">
                  <td className="py-2 px-2.5">
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded-full font-bold text-[10px] flex items-center justify-center shrink-0 ${o.logoBg}`}>
                        {o.logo}
                      </div>
                      <div>
                        <p className="font-bold text-[#030C25] leading-tight text-[11px]">{o.name}</p>
                        <p className="text-[9px] text-gray-400 font-medium">{o.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-2 px-2.5 text-gray-600 font-semibold text-[11px]">{o.company}</td>
                  <td className="py-2 px-2.5 text-right text-gray-500 font-medium text-[10.5px]">{o.time}</td>
                  <td className="py-2 px-2.5 text-right text-gray-400">
                    <button className="hover:text-gray-600"><MoreVertical size={14} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. Upcoming Renewals Card */}
      <div className="bg-white rounded-[16px] p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex flex-col">
        <div className="flex justify-between items-center mb-0.5">
          <h3 className="text-[13px] font-bold text-[#030C25]">Upcoming Renewals</h3>
          <a href="#" className="text-[10px] text-[#7a42ff] font-bold hover:underline flex items-center gap-0.5">
            View All <ChevronRight size={12} strokeWidth={2.5} />
          </a>
        </div>
        <p className="text-[10px] text-gray-400 mb-2.5">Customers with renewals in next 30 days</p>

        <div 
          className="overflow-x-auto pb-2"
          style={{ scrollbarWidth: 'thin', scrollbarColor: '#cbd5e1 #f1f5f9' }}
        >
          <table className="w-full text-left border-collapse text-[11px] min-w-[360px]">
            <thead>
              <tr className="bg-gray-50/80 rounded-md text-[9px] text-gray-500 font-bold uppercase tracking-wider whitespace-nowrap">
                <th className="py-2 px-2.5 font-semibold">Customer</th>
                <th className="py-2 px-2.5 font-semibold">Product</th>
                <th className="py-2 px-2.5 font-semibold">Renewal Date</th>
                <th className="py-2 px-2.5 font-semibold text-right">MRR</th>
                <th className="py-2 px-2.5 font-semibold text-right w-6"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 whitespace-nowrap">
              {renewals.map((r, i) => (
                <tr key={i} className="hover:bg-gray-50/50">
                  <td className="py-2 px-2.5 font-bold text-[#030C25] text-[11px]">{r.customer}</td>
                  <td className="py-2 px-2.5">
                    <span className={`inline-flex items-center gap-1 text-[9.5px] font-bold px-2 py-0.5 rounded-full ${r.prodBg}`}>
                      <span className="w-3.5 h-3.5 rounded bg-white/80 flex items-center justify-center text-[7.5px] font-black">{r.logoText}</span>
                      {r.product}
                    </span>
                  </td>
                  <td className="py-2 px-2.5 text-gray-600 font-semibold text-[11px]">{r.date}</td>
                  <td className="py-2 px-2.5 text-right font-black text-[#030C25] text-[11px]">{r.mrr}</td>
                  <td className="py-2 px-2.5 text-right text-gray-400">
                    <button className="hover:text-gray-600"><MoreVertical size={14} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. At-Risk Customers Card */}
      <div className="bg-white rounded-[16px] p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex flex-col">
        <div className="flex justify-between items-center mb-0.5">
          <h3 className="text-[13px] font-bold text-[#030C25]">At-Risk Customers</h3>
          <a href="#" className="text-[10px] text-[#7a42ff] font-bold hover:underline flex items-center gap-0.5">
            View All <ChevronRight size={12} strokeWidth={2.5} />
          </a>
        </div>
        <p className="text-[10px] text-gray-400 mb-2.5">Customers that may churn soon</p>

        <div 
          className="overflow-x-auto pb-2"
          style={{ scrollbarWidth: 'thin', scrollbarColor: '#cbd5e1 #f1f5f9' }}
        >
          <table className="w-full text-left border-collapse text-[11px] min-w-[360px]">
            <thead>
              <tr className="bg-gray-50/80 rounded-md text-[9px] text-gray-500 font-bold uppercase tracking-wider whitespace-nowrap">
                <th className="py-2 px-2.5 font-semibold">Customer</th>
                <th className="py-2 px-2.5 font-semibold">Product</th>
                <th className="py-2 px-2.5 font-semibold">Days Left</th>
                <th className="py-2 px-2.5 font-semibold text-right">MRR</th>
                <th className="py-2 px-2.5 font-semibold text-right w-6"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 whitespace-nowrap">
              {atRisk.map((ar, i) => (
                <tr key={i} className="hover:bg-gray-50/50">
                  <td className="py-2 px-2.5 font-bold text-[#030C25] text-[11px]">{ar.customer}</td>
                  <td className="py-2 px-2.5">
                    <span className={`inline-flex items-center gap-1 text-[9.5px] font-bold px-2 py-0.5 rounded-full ${ar.prodBg}`}>
                      <span className="w-3.5 h-3.5 rounded bg-white/80 flex items-center justify-center text-[7.5px] font-black">{ar.logoText}</span>
                      {ar.product}
                    </span>
                  </td>
                  <td className="py-2 px-2.5 text-rose-500 font-bold text-[11px]">{ar.days}</td>
                  <td className="py-2 px-2.5 text-right font-black text-[#030C25] text-[11px]">{ar.mrr}</td>
                  <td className="py-2 px-2.5 text-right text-gray-400">
                    <button className="hover:text-gray-600"><MoreVertical size={14} /></button>
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
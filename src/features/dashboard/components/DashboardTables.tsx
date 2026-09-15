"use client";

export default function DashboardTables() {
  const renewals = [
    { company: "ABC Travels", product: "Way We Go", plan: "Pro", date: "15 Sep 2026", amount: "₹29,999", status: "Pending", statusStyle: "bg-amber-50 text-amber-600" },
    { company: "Global Holidays", product: "CMS", plan: "Business", date: "16 Sep 2026", amount: "₹19,999", status: "Pending", statusStyle: "bg-amber-50 text-amber-600" },
    { company: "Kerala Trips", product: "Booking", plan: "Pro", date: "18 Sep 2026", amount: "₹14,999", status: "Pending", statusStyle: "bg-amber-50 text-amber-600" },
    { company: "Dream Tours", product: "Way We Go", plan: "Enterprise", date: "20 Sep 2026", amount: "₹49,999", status: "Confirmed", statusStyle: "bg-emerald-50 text-emerald-600" },
    { company: "Explore India", product: "Automation", plan: "Business", date: "22 Sep 2026", amount: "₹24,999", status: "Pending", statusStyle: "bg-amber-50 text-amber-600" },
  ];

  const payments = [
    { company: "Dream Holidays", product: "CRM", amount: "₹19,999", date: "12 Sep 2026", status: "Success", statusStyle: "bg-emerald-50 text-emerald-600" },
    { company: "Wander More", product: "CMS", amount: "₹9,999", date: "11 Sep 2026", status: "Success", statusStyle: "bg-emerald-50 text-emerald-600" },
    { company: "Travel Mate", product: "Booking", amount: "₹14,999", date: "10 Sep 2026", status: "Success", statusStyle: "bg-emerald-50 text-emerald-600" },
    { company: "Coastal Trips", product: "CRM", amount: "₹29,999", date: "09 Sep 2026", status: "Success", statusStyle: "bg-emerald-50 text-emerald-600" },
    { company: "Holiday Hub", product: "Automation", amount: "₹9,999", date: "08 Sep 2026", status: "Failed", statusStyle: "bg-rose-50 text-rose-600" },
  ];

  const provisioning = [
    { company: "XYZ Tours", product: "Way We Go", subdomain: "xystours", status: "Completed", dotColor: "bg-emerald-500", time: "2m ago" },
    { company: "Explore India", product: "CMS", subdomain: "exploreindia", status: "Running", dotColor: "bg-sky-500", time: "5m ago" },
    { company: "Holiday World", product: "Booking", subdomain: "holidayworld", status: "Completed", dotColor: "bg-emerald-500", time: "12m ago" },
    { company: "Adventure Co", product: "Automation", subdomain: "adventure", status: "Pending", dotColor: "bg-amber-500", time: "18m ago" },
    { company: "Skyline Travels", product: "Way We Go", subdomain: "skylinetravels", status: "Failed", dotColor: "bg-rose-500", time: "25m ago" },
  ];

  const dropped = [
    { company: "Travel Square", product: "CRM", date: "04 Sep 2026", reason: "Not using" },
    { company: "Holiday Hub", product: "CMS", date: "30 Aug 2026", reason: "Business closed" },
    { company: "Quick Stay", product: "Booking", date: "12 Sep 2026", reason: "Moved to competitor" },
    { company: "City Explorer", product: "Automation", date: "15 Sep 2026", reason: "Payment failed" },
    { company: "Nomad Trips", product: "CRM", date: "18 Sep 2026", reason: "Contract ended" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      
      {/* 1. Upcoming Renewals */}
      <div className="bg-white rounded-[16px] border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] p-4 flex flex-col h-72">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-[13px] font-bold text-[#030C25]">Upcoming Renewals</h3>
          <a href="#" className="text-[10px] font-semibold text-[#7a42ff] hover:underline">View All &rarr;</a>
        </div>
        <div className="overflow-x-auto pb-2 flex-1 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
          <table className="w-full text-left border-collapse min-w-[340px]">
            <thead>
              <tr className="border-b border-gray-100 text-[9px] bg-gray-100 rounded-lg text-gray-600 font-bold uppercase tracking-wider">
                <th className="py-2 px-1.5 font-semibold">Company</th>
                <th className="py-2 px-1.5 font-semibold">Product</th>
                <th className="py-2 px-1.5 font-semibold">Plan</th>
                <th className="py-2 px-1.5 font-semibold">Date</th>
                <th className="py-2 px-1.5 font-semibold">Amount</th>
                <th className="py-2 px-1.5 font-semibold text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-[10px]">
              {renewals.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-2 px-1.5 font-bold text-[#030C25] whitespace-nowrap">{item.company}</td>
                  <td className="py-2 px-1.5 text-gray-600 whitespace-nowrap">{item.product}</td>
                  <td className="py-2 px-1.5 text-gray-600 whitespace-nowrap">{item.plan}</td>
                  <td className="py-2 px-1.5 text-gray-600 whitespace-nowrap">{item.date}</td>
                  <td className="py-2 px-1.5 font-semibold text-[#030C25] whitespace-nowrap">{item.amount}</td>
                  <td className="py-2 px-1.5 text-right whitespace-nowrap">
                    <span className={`inline-block px-1.5 py-0.5 rounded-[4px] font-bold text-[9px] ${item.statusStyle}`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. Recent Payments */}
      <div className="bg-white rounded-[16px] border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] p-4 flex flex-col h-72">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-[13px] font-bold text-[#030C25]">Recent Payments</h3>
          <a href="#" className="text-[10px] font-semibold text-[#7a42ff] hover:underline">View All &rarr;</a>
        </div>
        <div className="overflow-x-auto pb-2 flex-1 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
          <table className="w-full text-left border-collapse min-w-[300px]">
            <thead>
              <tr className="border-b border-gray-100 text-[9px] bg-gray-100 rounded-lg text-gray-600 font-bold uppercase tracking-wider">
                <th className="py-2 px-2 font-semibold">Company</th>
                <th className="py-2 px-2 font-semibold">Product</th>
                <th className="py-2 px-2 font-semibold">Amount</th>
                <th className="py-2 px-2 font-semibold">Date</th>
                <th className="py-2 px-2 font-semibold text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-[10px]">
              {payments.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-2 px-2 font-bold text-[#030C25] whitespace-nowrap">{item.company}</td>
                  <td className="py-2 px-2 text-gray-600 whitespace-nowrap">{item.product}</td>
                  <td className="py-2 px-2 font-semibold text-[#030C25] whitespace-nowrap">{item.amount}</td>
                  <td className="py-2 px-2 text-gray-600   whitespace-nowrap">{item.date}</td>
                  <td className="py-2 px-2 text-right whitespace-nowrap">
                    <span className={`inline-block px-1.5 py-0.5 rounded-[4px] font-bold text-[9px] ${item.statusStyle}`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. Provisioning / Tenant Status */}
      <div className="bg-white rounded-[16px] border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] p-4 flex flex-col h-72">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-[13px] font-bold text-[#030C25]">Provisioning / Tenant Status</h3>
          <a href="#" className="text-[10px] font-semibold text-[#7a42ff] hover:underline">View All &rarr;</a>
        </div>
        <div className="overflow-x-auto pb-2 flex-1 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
          <table className="w-full text-left border-collapse min-w-[300px]">
            <thead>
              <tr className="border-b border-gray-100 text-[9px] bg-gray-100 rounded-lg text-gray-600 font-bold uppercase tracking-wider">
                <th className="py-2 px-2 font-semibold">Company</th>
                <th className="py-2 px-2 font-semibold">Product</th>
                <th className="py-2 px-2 font-semibold">Subdomain</th>
                <th className="py-2 px-2 font-semibold">Status</th>
                <th className="py-2 px-2 font-semibold text-right">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-[10px]">
              {provisioning.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-2 px-2 font-bold text-[#030C25] whitespace-nowrap">{item.company}</td>
                  <td className="py-2 px-2 text-gray-600 whitespace-nowrap">{item.product}</td>
                  <td className="py-2 px-2 text-gray-600  whitespace-nowrap ">{item.subdomain}</td>
                  <td className="py-2 px-2 whitespace-nowrap">
                    <div className="flex items-center gap-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${item.dotColor}`} />
                      <span className="font-semibold text-[#030C25]">{item.status}</span>
                    </div>
                  </td>
                  <td className="py-2 px-2 text-right text-gray-600 whitespace-nowrap">{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Dropped / Cancelled Clients */}
      <div className="bg-white rounded-[16px] border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] p-4 flex flex-col h-72">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-[13px] font-bold text-[#030C25]">Dropped / Cancelled Clients</h3>
          <span className="text-[10px] font-semibold text-[#7a42ff] hover:underline cursor-pointer">View All &rarr;</span>
        </div>
        <div className="overflow-x-auto pb-2 flex-1 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
          <table className="w-full text-left border-collapse min-w-[280px]">
            <thead>
              <tr className="border-b border-gray-100 text-[9px] bg-gray-100 rounded-lg text-gray-600  font-bold uppercase tracking-wider">
                <th className="py-2 px-2 font-semibold">Company</th>
                <th className="py-2 px-2 font-semibold">Product</th>
                <th className="py-2 px-2 font-semibold">Date</th>
                <th className="py-2 px-2 font-semibold text-right">Reason</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-[10px]">
              {dropped.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-2 px-2 font-bold text-[#030C25] whitespace-nowrap">{item.company}</td>
                  <td className="py-2 px-2 text-gray-600 whitespace-nowrap">{item.product}</td>
                  <td className="py-2 px-2 text-gray-600 whitespace-nowrap">{item.date}</td>
                  <td className="py-2 px-2 text-right text-rose-600 font-medium whitespace-nowrap">{item.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
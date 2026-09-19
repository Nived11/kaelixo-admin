"use client";

import { MoreHorizontal, ChevronRight, ChevronLeft, Filter, Search, Calendar, Zap, Hexagon } from "lucide-react";

export default function TenantsTableSection() {
  const tenants = [
    { tenant: "Dream Holidays", logo: "DH", logoBg: "bg-blue-600", company: "Dream Holidays", product: "Way We Go CRM", prodType: "W", workspace: "dreamholidays.waywego.in", plan: "Professional", region: "IN", flagUrl: "https://flagcdn.com/w40/in.png", provisioning: "Completed", provBg: "bg-emerald-50 text-emerald-600", health: "Healthy", healthColor: "text-emerald-500", renewal: "12 Sep 2026", activity: "2m ago" },
    { tenant: "Wander More", logo: "WM", logoBg: "bg-purple-500", company: "Wander More", product: "CMS Platform", prodType: "C", workspace: "wandermore.kaelixo.com", plan: "Business", region: "SG", flagUrl: "https://flagcdn.com/w40/sg.png", provisioning: "Completed", provBg: "bg-emerald-50 text-emerald-600", health: "Healthy", healthColor: "text-emerald-500", renewal: "11 Sep 2026", activity: "5m ago" },
    { tenant: "Travel Mate", logo: "TM", logoBg: "bg-blue-500", company: "Travel Mate", product: "Booking Engine", prodType: "B", workspace: "travelmate.kaelixo.com", plan: "Professional", region: "IN", flagUrl: "https://flagcdn.com/w40/in.png", provisioning: "Completed", provBg: "bg-emerald-50 text-emerald-600", health: "At Risk", healthColor: "text-amber-500", renewal: "10 Sep 2026", activity: "18m ago" },
    { tenant: "Coastal Trips", logo: "CT", logoBg: "bg-indigo-700", company: "Coastal Trips", product: "Way We Go CRM", prodType: "W", workspace: "coastaltrips.waywego.in", plan: "Enterprise", region: "AU", flagUrl: "https://flagcdn.com/w40/au.png", provisioning: "Provisioning", provBg: "bg-cyan-50 text-cyan-600", health: "Healthy", healthColor: "text-emerald-500", renewal: "20 Sep 2026", activity: "1h ago" },
    { tenant: "Holiday Hub", logo: "HH", logoBg: "bg-emerald-500", company: "Holiday Hub", product: "Automation Suite", prodType: "A", workspace: "holidayhub.kaelixo.com", plan: "Business", region: "IN", flagUrl: "https://flagcdn.com/w40/in.png", provisioning: "Completed", provBg: "bg-emerald-50 text-emerald-600", health: "Healthy", healthColor: "text-emerald-500", renewal: "8 Sep 2026", activity: "12m ago" },
    { tenant: "XYZ Tours", logo: "XT", logoBg: "bg-fuchsia-500", company: "XYZ Tours", product: "Way We Go CRM", prodType: "W", workspace: "xyztours.waywego.in", plan: "Professional", region: "US", flagUrl: "https://flagcdn.com/w40/us.png", provisioning: "Pending", provBg: "bg-amber-50 text-amber-600", health: "Healthy", healthColor: "text-emerald-500", renewal: "15 Sep 2026", activity: "3h ago" },
    { tenant: "Explore India", logo: "EI", logoBg: "bg-purple-600", company: "Explore India", product: "CMS Platform", prodType: "C", workspace: "exploreindia.kaelixo.com", plan: "Business", region: "IN", flagUrl: "https://flagcdn.com/w40/in.png", provisioning: "Failed", provBg: "bg-rose-50 text-rose-600", health: "At Risk", healthColor: "text-amber-500", renewal: "22 Sep 2026", activity: "6h ago" },
    { tenant: "Adventure Co", logo: "AC", logoBg: "bg-blue-400", company: "Adventure Co", product: "Booking Engine", prodType: "B", workspace: "adventureco.kaelixo.com", plan: "Professional", region: "AE", flagUrl: "https://flagcdn.com/w40/ae.png", provisioning: "Completed", provBg: "bg-emerald-50 text-emerald-600", health: "Healthy", healthColor: "text-emerald-500", renewal: "18 Sep 2026", activity: "1h ago" },
    { tenant: "Skyline Travels", logo: "ST", logoBg: "bg-indigo-500", company: "Skyline Travels", product: "Way We Go CRM", prodType: "W", workspace: "skylinetravels.waywego.in", plan: "Starter", region: "SG", flagUrl: "https://flagcdn.com/w40/sg.png", provisioning: "Completed", provBg: "bg-emerald-50 text-emerald-600", health: "Healthy", healthColor: "text-emerald-500", renewal: "25 Sep 2026", activity: "30m ago" },
    { tenant: "Nomad Trips", logo: "NT", logoBg: "bg-violet-500", company: "Nomad Trips", product: "Automation Suite", prodType: "A", workspace: "nomadtrips.kaelixo.com", plan: "Business", region: "IN", flagUrl: "https://flagcdn.com/w40/in.png", provisioning: "Suspended", provBg: "bg-rose-50 text-rose-600", health: "Unhealthy", healthColor: "text-rose-500", renewal: "18 Sep 2026", activity: "2d ago" },
  ];

  const renderProduct = (type: string, name: string) => {
    switch(type) {
      case "W":
        return (
          <div className="flex items-center gap-1.5 font-bold text-gray-700">
            <span className="text-[12px] font-black text-[#5c45fd]">W</span>
            {name}
          </div>
        );
      case "C":
        return (
          <div className="flex items-center gap-1.5 font-bold text-gray-700">
            <Hexagon size={12} className="text-rose-600" fill="#e11d48" />
            {name}
          </div>
        );
      case "B":
        return (
          <div className="flex items-center gap-1.5 font-bold text-gray-700">
            <Calendar size={12} className="text-blue-500" />
            {name}
          </div>
        );
      default:
        return (
          <div className="flex items-center gap-1.5 font-bold text-gray-700">
            <Zap size={12} className="text-amber-500" fill="#f59e0b" />
            {name}
          </div>
        );
    }
  };

  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
      
      {/* Table Header Info */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <div>
          <h2 className="text-[14px] font-bold text-[#030C25]">All Tenants</h2>
          <p className="text-[11px] text-gray-500 font-medium mt-0.5">View and manage all tenant workspaces, their products, plans and billing status.</p>
        </div>
        
        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          {/* Search Bar */}
          <div className="relative flex-1 sm:w-[220px]">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search tenants, companies..." 
              className="w-full pl-8 pr-3 py-1.5 text-[11px] border border-gray-200 rounded-lg focus:outline-none focus:border-[#5c45fd] transition-colors"
            />
          </div>
          
          {/* Filters Button */}
          <button className="px-3 py-1.5 text-[11px] font-bold bg-white hover:bg-gray-50 text-[#5c45fd] border border-gray-200 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer whitespace-nowrap shrink-0">
            <Filter size={12} strokeWidth={2.5} /> Filters
          </button>
          
          {/* Menu Button */}
          <button className="p-1.5 bg-white hover:bg-gray-50 text-gray-600 border border-gray-200 rounded-lg transition-colors shadow-sm cursor-pointer shrink-0">
            <MoreHorizontal size={14} />
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
            <tr className="bg-gray-50 rounded-lg text-[10px] text-gray-600 font-bold tracking-wide whitespace-nowrap border-b border-gray-100">
              <th className="py-2.5 px-3 w-8"><input type="checkbox" className="rounded border-gray-300 w-3.5 h-3.5 cursor-pointer" /></th>
              <th className="py-2.5 px-3 font-semibold">Tenant</th>
              <th className="py-2.5 px-3 font-semibold">Company</th>
              <th className="py-2.5 px-3 font-semibold">Product</th>
              <th className="py-2.5 px-3 font-semibold">Workspace URL / Subdomain</th>
              <th className="py-2.5 px-3 font-semibold">Plan</th>
              <th className="py-2.5 px-3 font-semibold">Region</th>
              <th className="py-2.5 px-3 font-semibold">Provisioning</th>
              <th className="py-2.5 px-3 font-semibold">Health</th>
              <th className="py-2.5 px-3 font-semibold">Renewal Date</th>
              <th className="py-2.5 px-3 font-semibold">Last Activity</th>
              <th className="py-2.5 px-3 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-[10.5px] whitespace-nowrap">
            {tenants.map((t, i) => (
              <tr key={i} className="hover:bg-gray-50/60 transition-colors">
                <td className="py-2.5 px-3"><input type="checkbox" className="rounded border-gray-300 w-3.5 h-3.5 cursor-pointer" /></td>
                <td className="py-2.5 px-3">
                  <div className="flex items-center gap-2.5">
                    {/* Tenant Logo: Rounded-md with solid background color */}
                    <div className={`w-[28px] h-[28px] rounded-full text-white flex items-center justify-center font-bold text-[9px] shrink-0 shadow-sm ${t.logoBg}`}>
                      {t.logo}
                    </div>
                    <span className="font-bold text-[#030C25]">{t.tenant}</span>
                  </div>
                </td>
                <td className="py-2.5 px-3 font-medium text-gray-800">{t.company}</td>
                <td className="py-2.5 px-3">
                  {/* Product Icon & Name without background pill */}
                  {renderProduct(t.prodType, t.product)}
                </td>
                <td className="py-2.5 px-3 font-semibold text-[#5c45fd] hover:underline cursor-pointer transition-colors">{t.workspace}</td>
                <td className="py-2.5 px-3 font-medium text-gray-700">{t.plan}</td>
                <td className="py-2.5 px-3 font-semibold text-gray-700">
                  <span className="inline-flex items-center gap-1.5">
                    <img src={t.flagUrl} alt={t.region} className="w-4 h-3 object-cover rounded-[2px] shadow-xs border border-gray-100" /> 
                    <span className="text-[10px]">{t.region}</span>
                  </span>
                </td>
                <td className="py-2.5 px-3">
                  <span className={`inline-flex px-2 py-0.5 rounded font-bold text-[9px] ${t.provBg}`}>
                    {t.provisioning}
                  </span>
                </td>
                <td className="py-2.5 px-3 font-bold">
                  <span className={t.healthColor}>{t.health}</span>
                </td>
                <td className="py-2.5 px-3 font-medium text-gray-600">{t.renewal}</td>
                <td className="py-2.5 px-3 text-gray-700 font-medium">{t.activity}</td>
                <td className="py-2.5 px-3 text-right">
                  <button className="text-gray-800 hover:text-gray-800 p-1 cursor-pointer transition-colors">
                    <MoreHorizontal size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-gray-500">
        <p className="font-medium">Showing 1-10 of 482 tenants</p>
        
        <div className="flex items-center gap-1.5">
          <button className="w-6 h-6 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 cursor-pointer transition-colors"><ChevronLeft size={13} /></button>
          <button className="w-6 h-6 rounded-md bg-[#5c45fd] text-white font-bold flex items-center justify-center shadow-xs">1</button>
          <button className="w-6 h-6 rounded-md border border-gray-200 font-medium flex items-center justify-center hover:bg-gray-50 transition-colors">2</button>
          <button className="w-6 h-6 rounded-md border border-gray-200 font-medium flex items-center justify-center hover:bg-gray-50 transition-colors">3</button>
          <button className="w-6 h-6 rounded-md border border-gray-200 font-medium flex items-center justify-center hover:bg-gray-50 transition-colors">4</button>
          <button className="w-6 h-6 rounded-md border border-gray-200 font-medium flex items-center justify-center hover:bg-gray-50 transition-colors">5</button>
          <span className="px-1 text-gray-400 font-bold tracking-wider">...</span>
          <button className="w-6 h-6 rounded-md border border-gray-200 font-medium flex items-center justify-center hover:bg-gray-50 transition-colors">49</button>
          <button className="w-6 h-6 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 cursor-pointer transition-colors"><ChevronRight size={13} /></button>
        </div>
      </div>

    </div>
  );
}
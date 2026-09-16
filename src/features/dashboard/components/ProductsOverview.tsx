import { ArrowRight, Check, MoreVertical, Package, CalendarDays, Zap, Plus } from "lucide-react";

export default function ProductsOverview({ onNavigate }: { onNavigate: (view: string) => void }) {
  const products = [
    { 
      id: "waywego",
      name: "Way We Go CRM", 
      role: "Flagship", 
      clients: "312", 
      revenue: "₹16,24,580", 
      color: "text-[#7a42ff]", 
      bg: "bg-[#7a42ff]/10", 
      hex: "#7a42ff",
      icon: null, 
      logoText: "W",
      chartPath: "M0,35 C12,25 20,38 32,28 C44,18 52,32 64,22 C76,12 84,20 95,4"
    },
    { 
      id: "cms",
      name: "CMS Platform", 
      role: null, 
      clients: "98", 
      revenue: "₹5,82,340", 
      color: "text-[#FF0052]", 
      bg: "bg-[#FF0052]/10", 
      hex: "#FF0052",
      icon: Package,
      logoText: null,
      chartPath: "M0,38 C12,32 20,42 32,34 C44,26 52,36 64,26 C76,16 84,24 95,4"
    },
    { 
      id: "booking",
      name: "Booking Engine", 
      role: null, 
      clients: "54", 
      revenue: "₹2,61,400", 
      color: "text-[#2bbcff]", 
      bg: "bg-[#2bbcff]/10", 
      hex: "#2bbcff",
      icon: CalendarDays,
      logoText: null,
      chartPath: "M0,35 C6,28 12,38 18,31 C24,24 30,34 36,27 C42,20 48,30 54,23 C60,16 66,26 72,19 C78,12 84,22 95,4"
    },
    { 
      id: "automation",
      name: "Automation Suite", 
      role: null, 
      clients: "18", 
      revenue: "₹98,320", 
      color: "text-[#f59e0b]", 
      bg: "bg-[#f59e0b]/10", 
      hex: "#f59e0b",
      icon: Zap,
      logoText: null,
      chartPath: "M0,35 C16,20 26,45 44,28 C62,11 72,35 88,18 C92,12 93,8 95,4"
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
      
      {/* LEFT SECTION: White Container with 4 Products */}
      <div className="lg:col-span-4 bg-white rounded-lg p-4 lg:p-5 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex flex-col">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-5">
          <div>
            <h2 className="text-[15px] font-bold text-[#030C25]">Products Overview</h2>
            <p className="text-[11px] font-medium text-[#64748b] mt-0.5">Your entire product portfolio at a glance</p>
          </div>
          
          {/* Action Area: Create New Product Button navigates to form */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => onNavigate("create")}
              className="px-3.5 py-1.5 rounded-md text-white font-bold text-[11px] shadow-sm transition-all hover:opacity-90 flex items-center gap-1.5 cursor-pointer"
              style={{ background: 'linear-gradient(90deg, #FF0052 0%, #7a42ff 100%)' }}
            >
              Create New Product <ArrowRight size={12} strokeWidth={2.5} />
            </button>
            <a href="#" className="text-[11px] font-bold text-[#7a42ff] hover:text-[#5b21b6] flex items-center gap-1 transition-colors">
              View All Products <ArrowRight size={12} strokeWidth={2.5} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 flex-1">
          {products.map((prod, i) => (
            <div key={i} className="bg-white rounded-lg border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-md hover:border-gray-200 transition-all cursor-pointer flex flex-col pt-4 px-4 pb-8">
              
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <div className={`w-[36px] h-[36px] rounded-full flex items-center justify-center font-black text-[18px] shrink-0 ${prod.bg} ${prod.color}`}>
                    {prod.icon ? <prod.icon size={18} strokeWidth={2.5} fill={prod.id === 'automation' ? 'currentColor' : 'none'} /> : prod.logoText}
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <h3 className="text-[12px] font-bold text-[#030C25] whitespace-nowrap">{prod.name}</h3>
                    {prod.role && (
                      <span className="text-[9px] font-bold text-rose-500 bg-rose-50 px-1.5 py-0.5 rounded-md shrink-0">
                        {prod.role}
                      </span>
                    )}
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600 shrink-0 mt-1">
                  <MoreVertical size={16} />
                </button>
              </div>

              <div className="flex items-center relative z-10 mt-1">
                <div className="pr-3 xl:pr-4">
                  <p className="text-[20px] font-black text-[#030C25] leading-none">{prod.clients}</p>
                  <p className="text-[10px] text-[#64748b] font-semibold mt-1">Clients</p>
                </div>
                <div className="w-px h-8 bg-gray-100 mx-1 shrink-0"></div>
                <div className="pl-3 xl:pl-4 flex-1">
                  <p className="text-[15px] font-black text-[#030C25] leading-none">{prod.revenue}</p>
                  <p className="text-[10px] text-[#64748b] font-semibold mt-1">Monthly Revenue</p>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 w-[55%] h-12 opacity-90 pointer-events-none">
                <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
                  <defs>
                    <linearGradient id={`grad-${prod.id}`} x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor={prod.hex} stopOpacity="0.25" />
                      <stop offset="100%" stopColor={prod.hex} stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d={`${prod.chartPath} L95,40 L0,40 Z`} fill={`url(#grad-${prod.id})`} />
                  <path d={prod.chartPath} fill="none" stroke={prod.hex} strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="95" cy="4" r="2.5" fill={prod.hex} />
                </svg>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SECTION: Unified Billing Gradient Ad Card */}
      <div className="lg:col-span-1 rounded-lg p-5 text-white shadow-lg relative overflow-hidden flex flex-col justify-between"
           style={{ background: 'linear-gradient(30deg, #1d1b54 0%, #6830c2 50%, #ff2975 100%)' }}>
        
        <div className="absolute bottom-0 left-0 right-0 w-full h-[60%] pointer-events-none opacity-40">
           <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
             <path d="M0,40 C30,70 70,20 100,50 L100,100 L0,100 Z" fill="#ffff" opacity="0.2" />
             <path d="M0,60 C40,40 60,80 100,60 L100,100 L0,100 Z" fill="#ffff" opacity="0.2"/>
           </svg>
        </div>

        <div className="relative z-10 flex-1 flex flex-col">
          <div className="flex gap-4 mb-4">
            <div className="w-8 h-8 shrink-0 flex items-end gap-1 mt-1">
               <div className="w-[7px] h-3 bg-[#e2d6ff] rounded-[1px]"></div>
               <div className="w-[7px] h-5 bg-[#e2d6ff] rounded-[1px]"></div>
               <div className="w-[7px] h-8 bg-[#e2d6ff] rounded-[1px]"></div>
            </div>
            <div>
              <h3 className="text-[15px] font-medium leading-tight mb-1.5 tracking-wide">
                Unified Billing for<br/>All KAELIXO Products
              </h3>
              <p className="text-[10px] font-light text-[#e2d6ff] leading-snug">
                One platform. Multiple products.<br/>Scalable for what's next.
              </p>
            </div>
          </div>
          
          <div className="mt-auto pt-4">
            <ul className="space-y-2.5">
              {[
                "Multi-product billing", 
                "Unified customer management", 
                "Flexible plans & pricing", 
                "Ready for future SaaS products"
              ].map((text, i) => (
                <li key={i} className="text-[11px] flex items-center gap-2.5 font-light tracking-wide text-white/95">
                  <div className="w-[16px] h-[16px] rounded-full bg-[#ffff] border-2 border-green-500  flex items-center justify-center shrink-0">
                    <Check size={9} className="text-green-500" strokeWidth={5} />
                  </div>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
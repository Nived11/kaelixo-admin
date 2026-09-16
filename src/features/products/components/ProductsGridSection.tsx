"use client";

import { MoreVertical, ArrowRight, Package, CalendarDays, Zap, Bot, Users, IndianRupee, Tag } from "lucide-react";

export default function ProductsGridSection() {
  const featuredProducts = [
    { 
      name: "Way We Go CRM", 
      role: "Active", 
      desc: "Complete CRM solution for modern businesses with sales, marketing and customer success tools.",
      clients: "312", 
      revenue: "₹16,24,580", 
      type: "SaaS (Subscription)", 
      color: "text-[#7a42ff]", 
      bg: "bg-[#7a42ff]/10", 
      logoText: "W" 
    },
    { 
      name: "CMS Platform", 
      role: "Active", 
      desc: "Flexible content management platform for websites and digital experiences.",
      clients: "98", 
      revenue: "₹5,82,340", 
      type: "SaaS (Subscription)", 
      color: "text-[#FF0052]", 
      bg: "bg-[#FF0052]/10", 
      icon: Package 
    },
    { 
      name: "Booking Engine", 
      role: "Active", 
      desc: "Online booking and reservation system for travel, hospitality and service businesses.",
      clients: "54", 
      revenue: "₹2,61,400", 
      type: "SaaS (Subscription)", 
      color: "text-[#2bbcff]", 
      bg: "bg-[#2bbcff]/10", 
      icon: CalendarDays 
    },
    { 
      name: "Automation Suite", 
      role: "Active", 
      desc: "Workflow automation and integrations to streamline business operations.",
      clients: "18", 
      revenue: "₹98,320", 
      type: "Usage Based", 
      color: "text-[#f59e0b]", 
      bg: "bg-[#f59e0b]/10", 
      icon: Zap 
    },
    { 
      name: "AI Tools Suite", 
      role: "Beta", 
      desc: "Next-generation AI tools for business productivity and customer intelligence.",
      clients: "0", 
      revenue: "₹0", 
      type: "Usage Based", 
      color: "text-[#8b5cf6]", 
      bg: "bg-[#8b5cf6]/10", 
      icon: Bot 
    },
  ];

  return (
    <div className="bg-white rounded-[16px] p-5 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-[14px] font-bold text-[#030C25]">Featured Products</h2>
          <p className="text-[10px] text-[#64748b] font-medium">Key products in the KAELIXO ecosystem</p>
        </div>
        <a href="#" className="text-[11px] font-bold text-[#7a42ff] hover:underline flex items-center gap-1">
          View All Products <ArrowRight size={12} />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5 flex-1">
        {featuredProducts.map((prod, i) => (
          <div key={i} className="bg-white rounded-[14px] border border-gray-100/90 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] p-4 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              {/* Header: Large Circular Icon, Badge & 3-dots */}
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm ${prod.bg} ${prod.color}`}>
                  {prod.icon ? <prod.icon size={20} strokeWidth={2.5} /> : prod.logoText}
                </div>
                
                <div className="flex items-center gap-1.5">
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${prod.role === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-purple-50 text-purple-600'}`}>
                    {prod.role}
                  </span>
                  <button className="text-gray-800 hover:text-gray-600"><MoreVertical size={15} /></button>
                </div>
              </div>
              
              {/* Product Name & Description (3 lines styled) */}
              <h3 className="text-[13px] font-bold text-[#030C25] mb-1">{prod.name}</h3>
              <p className="text-[10px] text-gray-500  mb-5 leading-relaxed h-[36px]">{prod.desc}</p>
              
              {/* Metrics List */}
              <div className="space-y-2 py-2.5 border-t border-b border-gray-50 text-[10px]">
                <div className="flex items-center gap-2">
                  <Users size={13} className="text-gray-800 shrink-0" />
                  <span className="font-bold text-[#030C25]">{prod.clients}</span>
                  <span className="text-gray-600">Active Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <IndianRupee size={13} className="text-gray-800 shrink-0" />
                  <span className="font-bold text-[#030C25]">{prod.revenue}</span>
                  <span className="text-gray-600">MRR</span>
                </div>
                <div className="flex items-center gap-2 truncate">
                  <Tag size={13} className="text-gray-800 shrink-0" />
                  <span className="font-medium text-[#7a42ff] truncate">{prod.type}</span>
                </div>
              </div>
            </div>

            {/* View Details Pill Button */}
            <div className="mt-4">
              <a href="#" className="w-full py-2 bg-gray-50/80 hover:bg-gray-100/90 rounded-xl border border-gray-100 text-[11px] font-bold text-[#7a42ff] hover:underline flex items-center justify-center gap-1.5 transition-colors">
                View Details &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
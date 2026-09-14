"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, LayoutGrid, User, Building2, Server, Briefcase, Rocket,
  FileText, Receipt, PlusCircle, RefreshCw, Cloud, 
  BarChart2, Tag, Percent, CreditCard, 
  Users, History, Settings, ChevronRight, Crown, ChevronUp, ChevronDown, X,
  ArrowLeft, ArrowRight
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean; 
  setIsOpen: (val: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname();
  
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [hoveredTooltip, setHoveredTooltip] = useState<{name: string, top: number} | null>(null);

  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    "Billing & Finance": true,
    "Operations": true,
    "Revenue & Growth": true,
    "Administration": true,
  });

  const toggleGroup = (title: string) => {
    setExpandedGroups(prev => ({ ...prev, [title]: !prev[title] }));
  };

  const handleLinkClick = () => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) setIsOpen(false);
  };

  const menuGroups = [
    {
      title: null,
      items: [
        { name: "Products", icon: LayoutGrid, href: "/products" },
        { name: "Customers", icon: User, href: "/customers" },
        { name: "Companies", icon: Building2, href: "/companies" },
        { name: "Tenants", icon: Server, href: "/tenants" },
        { name: "Subscriptions", icon: Briefcase, href: "/subscriptions" },
        { name: "Plans & Pricing", icon: Rocket, href: "/plans" },
      ]
    },
    {
      title: "Billing & Finance",
      items: [
        { name: "Transactions", icon: FileText, href: "/transactions" },
        { name: "Invoices", icon: Receipt, href: "/invoices" },
        { name: "Refunds", icon: PlusCircle, href: "/refunds" },
        { name: "Renewals", icon: RefreshCw, href: "/renewals" },
      ]
    },
    {
      title: "Operations",
      items: [
        { name: "Provisioning", icon: Cloud, href: "/provisioning" },
      ]
    },
    {
      title: "Revenue & Growth",
      items: [
        { name: "Reports", icon: BarChart2, href: "/reports" },
        { name: "Coupons", icon: Tag, href: "/coupons" },
        { name: "Taxes", icon: Percent, href: "/taxes" },
        { name: "Payment Gateways", icon: CreditCard, href: "/gateways" },
      ]
    },
    {
      title: "Administration",
      items: [
        { name: "Users & Permissions", icon: Users, href: "/users" },
        { name: "Audit Logs", icon: History, href: "/audit-logs" },
        { name: "Settings", icon: Settings, href: "/settings" },
      ]
    }
  ];

  // Dashboard Active State Check
  const isDashboardActive = pathname === "/";

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 z-[50] lg:hidden" onClick={() => setIsOpen(false)} />
      )}

      <aside 
        className={`
          fixed lg:relative inset-y-0 left-0 z-[60]
          bg-[#030C25] text-[#94a3b8] flex flex-col h-screen transition-all duration-300 ease-in-out shadow-2xl
          ${isOpen ? "translate-x-0 w-[260px]" : "-translate-x-full lg:translate-x-0"}
          ${isCollapsed && !isOpen ? "lg:w-[72px]" : "lg:w-[240px]"}
        `}
      >
        
        {/* Centered Collapse Button */}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#030C25] text-white rounded-full items-center justify-center border-[5px] border-[#f8fafc] cursor-pointer hover:bg-[#1e293b] transition-all z-50"
        >
          {isCollapsed ? <ArrowRight size={14} /> : <ArrowLeft size={14} />}
        </button>

        {/* Logo Section */}
        <div className={`h-20 flex items-center shrink-0 border-b border-white/5 ${isCollapsed ? 'justify-center px-0' : 'justify-between px-5'}`}>
          <Link href="/" className="flex items-center outline-none">
            {isCollapsed ? (
              <img 
                src="/kaelixo-logo.png" 
                alt="Kaelixo Logo" 
                style={{ width: '35px', height: '35px' }} 
                className="object-contain"
              />
            ) : (
              <img 
                src="/Kaelixo-fulllogo.png" 
                alt="Kaelixo Full Logo" 
                style={{ width: '130px', height: '40px' }} 
                className="object-contain"
              />
            )}
          </Link>
          
          {/* Mobile Close Button */}
          {!isCollapsed && (
            <button onClick={() => setIsOpen(false)} className="lg:hidden text-gray-400 hover:text-white">
              <X size={20} />
            </button>
          )}
        </div>

        <div 
          className="flex-1 overflow-y-auto custom-scrollbar px-3 pb-6 flex flex-col gap-1 overflow-x-hidden pt-4"
          onMouseLeave={() => setHoveredTooltip(null)} 
        >
          
          {/* Dashboard Link - Now identical in size and gap to others */}
          <Link 
            href="/" 
            onClick={handleLinkClick} 
            onMouseEnter={(e) => {
              if (isCollapsed) {
                const rect = e.currentTarget.getBoundingClientRect();
                setHoveredTooltip({ name: "Dashboard", top: rect.top + rect.height / 2 });
              }
            }}
            className={`flex items-center px-4 py-2.5 rounded-[0.5rem] transition-all whitespace-nowrap text-sm font-medium
              ${isDashboardActive 
                ? "bg-gradient-to-r from-[#FF0052] to-[#7a42ff] text-white shadow-lg shadow-pink-500/20" 
                : "text-[#94a3b8] hover:bg-white/5 hover:text-white"
              }
              ${isCollapsed ? 'justify-center px-0' : 'justify-between'}
            `}
          >
            <div className="flex items-center gap-3">
              <Home size={18} className={`shrink-0 ${isDashboardActive ? "fill-white/20 text-white" : "text-gray-400"}`} />
              {!isCollapsed && <span>Dashboard</span>}
            </div>
            {!isCollapsed && isDashboardActive && <ChevronRight size={16} className="text-white" />}
          </Link>

          {menuGroups.map((group, idx) => {
            const isGroupExpanded = isCollapsed ? true : (group.title ? expandedGroups[group.title] : true);

            return (
              <div key={idx} className="mb-0.5">
                {group.title && (
                  <div 
                    onClick={() => { if(!isCollapsed) toggleGroup(group.title) }}
                    className={`flex items-center justify-between py-3 mt-1 cursor-pointer border-t border-white/10 ${isCollapsed ? 'px-0 justify-center' : 'px-4'}`}
                  >
                    {!isCollapsed ? (
                      <>
                        <span className="text-xs font-semibold text-blue-200/50 hover:text-blue-200/80 transition-colors">{group.title}</span>
                        {expandedGroups[group.title] ? <ChevronUp size={14} className="text-gray-500" /> : <ChevronDown size={14} className="text-gray-500" />}
                      </>
                    ) : (
                      <div className="w-6 h-px bg-white/10 rounded-full" /> 
                    )}
                  </div>
                )}

                <div 
                  className={`space-y-0.5 overflow-hidden transition-all duration-300 ${isGroupExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  {group.items.map((item, i) => {
                    const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                    
                    return (
                      <div 
                        key={i} 
                        className="relative"
                        onMouseEnter={(e) => {
                          if (isCollapsed) {
                            const rect = e.currentTarget.getBoundingClientRect();
                            setHoveredTooltip({ name: item.name, top: rect.top + rect.height / 2 });
                          }
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={handleLinkClick}
                          className={`flex items-center px-4 py-2.5 rounded-xl transition-all whitespace-nowrap text-sm font-medium
                            ${isActive 
                              ? 'bg-gradient-to-r from-[#FF0052] to-[#7a42ff] text-white shadow-lg shadow-pink-500/20' 
                              : 'text-[#94a3b8] hover:bg-white/5 hover:text-white'
                            }
                            ${isCollapsed ? 'justify-center px-0' : 'justify-between'}
                          `}
                        >
                          <div className="flex items-center gap-3">
                            <item.icon size={18} className={`shrink-0 ${isActive ? 'text-white fill-white/20' : 'text-gray-400'}`} />
                            {!isCollapsed && <span>{item.name}</span>}
                          </div>
                          {!isCollapsed && isActive && <ChevronRight size={16} className="text-white" />}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {!isCollapsed && (
            <div className="mt-auto pt-4 border-t border-white/10">
              <div className="bg-gradient-to-br from-[#120B29] to-[#071126] border border-white/10 p-4 rounded-xl cursor-pointer hover:border-white/20 transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <Crown size={18} className="text-amber-500 fill-amber-500" />
                    <span className="text-white font-semibold text-sm">Build What's Next</span>
                  </div>
                  <ChevronRight size={14} className="text-gray-400" />
                </div>
                <p className="text-[11px] text-gray-400 leading-tight">
                  A flexible billing platform for today's products and tomorrow's possibilities.
                </p>
              </div>
            </div>
          )}
        </div>

        {isCollapsed && hoveredTooltip && (
          <div 
            className="fixed z-[100] flex items-center pointer-events-none transition-all duration-75"
            style={{ 
              top: `${hoveredTooltip.top}px`, 
              left: '72px', 
              transform: 'translateY(-50%)' 
            }}
          >
            <div className="w-0 h-0 border-y-4 border-y-transparent border-r-4 border-r-[#FF0052] absolute -left-1"></div>
            <div className="bg-gradient-to-r from-[#FF0052] to-[#7a42ff] text-white font-medium text-[11px] uppercase px-3 py-1.5 rounded-md shadow-lg shadow-pink-500/20 whitespace-nowrap tracking-wide">
              {hoveredTooltip.name}
            </div>
          </div>
        )}

      </aside>
    </>
  );
}
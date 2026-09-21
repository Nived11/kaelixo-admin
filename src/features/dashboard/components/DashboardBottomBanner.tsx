"use client";

import { Rocket, Check, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DashboardBottomBanner({ onNavigate }: { onNavigate?: (view: string) => void }) {
  const router = useRouter();
  const features = [
    "Add new products",
    "Use shared customer base",
    "Flexible billing models",
    "Enterprise ready"
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] px-5 py-2.5 flex items-center justify-between gap-4">
      
      {/* Left: Rocket Icon & Title */}
      <div className="flex items-center gap-3 shrink-0">
        <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-[#7a42ff] shrink-0">
          <Rocket size={15} />
        </div>
        <div className="flex items-center gap-2">
          <h4 className="text-[9px] font-semibold text-[#030C25] whitespace-nowrap">Ready for What's Next?</h4>
          <span className="text-gray-300 hidden md:inline">|</span>
          <p className="text-[8px] text-gray-700 font-medium hidden md:block whitespace-nowrap">Easily launch and manage new SaaS products on KAELIXO.</p>
        </div>
      </div>

      {/* Middle: Feature Checklist */}
      <div className="hidden lg:flex items-center justify-center gap-5">
        <div className="w-px h-5 bg-gray-200"></div>
        {features.map((feat, i) => (
          <div key={i} className="flex items-center gap-1.5 text-[8px] font-semibold text-[#030C25] whitespace-nowrap">
            <Check size={13} className="text-emerald-500 shrink-0" strokeWidth={3} />
            <span>{feat}</span>
          </div>
        ))}
        <div className="w-px h-5 bg-gray-200"></div>
      </div>

      {/* Right: Create New Product Button with trigger */}
      <button 
        onClick={() => router.push("/products/add")}
        className="px-4 py-2 rounded-lg text-white font-bold text-[11px] shadow-sm transition-all hover:opacity-90 flex items-center gap-1.5 cursor-pointer shrink-0 whitespace-nowrap"
        style={{ background: 'linear-gradient(90deg, #FF0052 0%, #7a42ff 100%)' }}
      >
        Create New Product <ArrowRight size={12} strokeWidth={2.5} />
      </button>

    </div>
  );
}
import { Plus, Upload, ChevronRight } from "lucide-react";

export default function ProductsHeader({ onNavigate }: { onNavigate: (view: string) => void }) {
  return (
    <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
      
      {/* Left: Title & Subtitle */}
      <div>
        <h1 className="text-[28px] font-black text-[#030C25] tracking-tight">Products</h1>
        <p className="text-sm text-[#64748b] font-medium mt-1">
          Manage all KAELIXO SaaS products, plans, and lifecycle in one place.
        </p>
      </div>
      
      {/* Right: Banner with Original Image & Precise 95% Violet / 5% Pink Gradient */}
      <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto">
        
        {/* Banner Card */}
        <div className="hidden lg:flex items-center gap-4 px-5 py-2.5 rounded-lg text-white shadow-md cursor-pointer transition-all hover:opacity-95 relative overflow-hidden"
             style={{ background: 'linear-gradient(90deg, #321c8c 0%, #5b21b6 50%, #b010ef 95%, #b010ef 100%)' }}>
          
          <div className="absolute top-2 right-16 w-1 h-1 bg-white rounded-full opacity-50 animate-pulse"></div>
          <div className="absolute bottom-2 right-28 w-1.5 h-1.5 bg-purple-200 rounded-full opacity-60"></div>

          <div className="w-9 h-9 flex items-center justify-center shrink-0 shadow-inner">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/1356/1356479.png" 
              alt="Rocket" 
              className="w-5 h-5 object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            />
          </div>

          <div className="flex flex-col pr-2">
            <p className="text-[12px] font-black leading-tight tracking-wide">One Platform. Endless Possibilities.</p>
            <p className="text-[10px] text-white/90 font-medium mt-0.5">Built for today's products. Ready for tomorrow's.</p>
          </div>

          <div className="w-6 h-6 rounded-md bg-white/30 flex items-center justify-center shrink-0 ml-1">
            <ChevronRight size={14} className="text-white font-bold" />
          </div>
        </div>

        {/* Add New Product Button with trigger */}
        <button 
          onClick={() => onNavigate("create")}
          className="px-4.5 py-3 rounded-lg text-white font-bold text-[11px] shadow-sm transition-all hover:opacity-90 flex items-center gap-1.5 cursor-pointer"
          style={{ background: 'linear-gradient(90deg, #FF0052 0%, #7a42ff 100%)' }}
        >
          <Plus size={14} strokeWidth={3} /> Add New Product
        </button>

        {/* Import Product Button */}
        <button className="px-4.5 py-3 rounded-lg bg-white text-[#030C25] border border-gray-200 font-bold text-[11px] hover:bg-gray-50 transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm">
          <Upload size={14} className="text-[#7a42ff]" /> Import Product
        </button>

      </div>
    </div>
  );
}
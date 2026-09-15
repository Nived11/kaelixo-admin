import { Search, ChevronDown, Filter } from "lucide-react";

export default function ProductsFilterBar() {
  return (
    <div className="bg-white rounded-xl p-3.5 border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.04)] flex flex-wrap items-center justify-between gap-3">
      
      {/* Left Group: Search Bar & Dropdown Filters */}
      <div className="flex flex-wrap items-center gap-3 flex-1">
        
        {/* Search Input with fixed width */}
        <div className="relative w-full sm:w-[280px]">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search products by name, description..." 
            className="w-full pl-10 pr-3.5 py-2.5 bg-gray-50/70 border border-gray-200/80 rounded-lg text-xs font-medium text-[#030C25] outline-none focus:border-[#7a42ff] transition-colors"
          />
        </div>

        {/* Select Dropdowns */}
        {[
          "All Categories", 
          "All Statuses", 
          "All Billing Types", 
          "All Regions"
        ].map((label, i) => (
          <div key={i} className="relative shrink-0">
            <select className="appearance-none bg-gray-50/70 border border-gray-200/80 text-xs font-semibold text-gray-700 pl-3.5 pr-8 py-2.5 rounded-lg outline-none cursor-pointer hover:bg-gray-100/50 transition-colors">
              <option>{label}</option>
            </select>
            <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Right Group: Reset & Gradient Apply Filters Buttons */}
      <div className="flex items-center gap-2.5 shrink-0 ml-auto">
        <button className="text-xs font-bold bg-red-500 rounded-lg text-white hover:text-gray-700 px-4 py-2.5 transition-colors cursor-pointer">
          Reset
        </button>
        <button className="px-4.5 py-2.5 text-white rounded-lg  text-xs font-bold transition-all hover:opacity-90 flex items-center gap-1.5 cursor-pointer shadow-sm"
                style={{ background: 'linear-gradient(90deg, #6d28d9 0%, #7a42ff 100%)' }}>
          <Filter size={13} strokeWidth={2.5} /> Apply Filters
        </button>
      </div>

    </div>
  );
}
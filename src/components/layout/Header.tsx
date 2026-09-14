"use client";

import { Search, Bell, ChevronDown, Globe } from "lucide-react";

interface HeaderProps {
  toggleSidebar: () => void;
  isOpen: boolean;
}

export default function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 shrink-0">
      
      {/* Left section: Hamburger & Breadcrumb/Dropdowns */}
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar}
          className="p-1.5 text-gray-600 hover:bg-gray-100 rounded-lg lg:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        <div className="hidden md:flex items-center gap-3">
          {/* Product Dropdown */}
          <div className="flex items-center bg-white border border-gray-200 rounded-md px-3 py-1.5 cursor-pointer hover:border-gray-300">
            <span className="text-xs font-semibold text-gray-500 mr-2">Product</span>
            <span className="text-sm font-medium text-gray-800 mr-2">All Products</span>
            <ChevronDown size={14} className="text-gray-400" />
          </div>

          {/* Region Dropdown */}
          <div className="flex items-center bg-white border border-gray-200 rounded-md px-3 py-1.5 cursor-pointer hover:border-gray-300">
            <Globe size={14} className="text-indigo-600 mr-2" />
            <span className="text-sm font-medium text-gray-800 mr-2">Global</span>
            <ChevronDown size={14} className="text-gray-400" />
          </div>
        </div>
      </div>

      {/* Right section: Search, Notifications, Profile */}
      <div className="flex items-center gap-4">
        
        {/* Search Bar */}
        <div className="hidden lg:flex items-center bg-white border border-gray-200 rounded-full px-3 py-1.5 w-64 focus-within:ring-2 focus-within:ring-pink-100 focus-within:border-pink-300 transition-all">
          <Search size={16} className="text-gray-400 mr-2 shrink-0" />
          <input 
            type="text" 
            placeholder="Search customers, invoices..." 
            className="bg-transparent border-none outline-none text-xs w-full text-gray-700"
          />
        </div>

        {/* Notification Bell */}
        <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-4 h-4 bg-[#FF0052] text-white text-[10px] font-bold flex items-center justify-center rounded-full border border-white">
            3
          </span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer border-l border-gray-200 pl-4">
          <div className="w-9 h-9 bg-indigo-600 text-white flex items-center justify-center rounded-full font-bold shadow-sm">
            A
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-sm font-bold text-gray-900 leading-tight">Admin</p>
            <p className="text-[10px] font-semibold text-gray-400 tracking-wider">KAELIXO</p>
          </div>
          <ChevronDown size={14} className="text-gray-400 ml-1 hidden sm:block" />
        </div>

      </div>
    </header>
  );
}
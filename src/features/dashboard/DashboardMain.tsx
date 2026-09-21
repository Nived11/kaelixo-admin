"use client";

import React from "react";
import DashboardStats from "./components/DashboardStats";
import ProductsOverview from "./components/ProductsOverview";
import DashboardCharts from "./components/DashboardCharts";
import DashboardTables from "./components/DashboardTables";
import DashboardBottomBanner from "./components/DashboardBottomBanner";
import { ChevronRight } from "lucide-react";

export default function DashboardMain() {
  return (
    <div className="space-y-6 max-w-[1600px] mx-auto pb-6">

      {/* 1. Header Section with Promo Card */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">

        {/* Left: Greeting */}
        <div>
          <h1 className="text-[28px] font-black text-[#030C25] tracking-tight flex gap-2">
            Good Morning, <span className="text-[#8b3dff]">Admin</span>
          </h1>
          <p className="text-sm text-[#64748b] font-medium mt-1">
            Here's what's happening across your KAELIXO products today.
          </p>
        </div>

        {/* Right: Top Promo Card */}
        <div className="hidden lg:flex items-center gap-5 bg-white px-5 py-3.5 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100/80">
          <div className="flex items-center gap-4">
            <span className="text-[36px] font-black text-[#6d28d9] leading-none tracking-tighter">W</span>
            <div className="flex flex-col justify-center">
              <p className="text-[15px] font-black text-[#030C25] leading-tight">Way We Go CRM</p>
              <p className="text-[10px] font-semibold text-[#64748b] mt-0.5">
                Developed and Powered by <span className="text-[#8b3dff]">KAELIXO</span>
              </p>
            </div>
          </div>
          <div className="w-px h-9 bg-gray-200"></div>
          <div className="flex flex-col justify-center">
            <p className="text-[11px] font-bold text-[#8b3dff] leading-tight">Part of a multi-product ecosystem.</p>
            <p className="text-[10px] font-medium text-[#64748b] mt-0.5">Today's CRM. Tomorrow's possibilities.</p>
          </div>
          <button className="w-8 h-8 rounded-md bg-[#f4efff] flex items-center justify-center text-[#8b3dff] hover:bg-[#e9dbff] transition-colors ml-2 cursor-pointer">
            <ChevronRight size={18} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* 2. Top Stats Component */}
      <DashboardStats />

      {/* 3. Products Overview Component */}
      <ProductsOverview />

      {/* 4. Charts Row (MRR & Donuts) */}
      <DashboardCharts />

      {/* 5. Data Tables Row */}
      <DashboardTables />

      {/* 6. Bottom Action Banner */}
      <DashboardBottomBanner />

    </div>
  );
}
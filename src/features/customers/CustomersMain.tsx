"use client";

import React, { useState } from "react";
import CustomerStats from "./components/CustomerStats";
import CustomersFilterBar from "./components/CustomersFilterBar";
import CustomersTable from "./components/CustomersTable";
import CustomerSidebar from "./components/CustomerSidebar";
import CustomerBottomCards from "./components/CustomerBottomCards";
import { Upload, Plus, ArrowRight } from "lucide-react";

export default function CustomersMain() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-4 max-w-[1600px] mx-auto pb-6">
      
      {/* 1. Header Section */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
        <div>
          <h1 className="text-[28px] font-black text-[#030C25] tracking-tight">Customers</h1>
          <p className="text-sm text-[#64748b] font-medium mt-1">
            Manage all customers across KAELIXO products and billing accounts.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          
          <button 
            className="px-4.5 py-3 rounded-lg text-white font-bold text-xs shadow-sm transition-all hover:opacity-90 flex items-center gap-1.5 cursor-pointer"
            style={{ background: 'linear-gradient(90deg, #FF0052 0%, #7a42ff 100%)' }}
          >
            <Plus size={14} strokeWidth={3} /> Add Customer
          </button>
          <button className="px-4 py-3 rounded-lg bg-white text-[#030C25] border border-gray-200 font-bold text-xs hover:bg-gray-50 transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer">
            <Upload size={14} className="text-[#7a42ff]" /> Import Customers
          </button>
        </div>
      </div>

      {/* 2. Top Stats Cards */}
      <CustomerStats />

      {/* 3. Filter Bar */}
      <CustomersFilterBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* 4. Main Grid Section (Left: Table + Bottom Cards, Right: Sidebar with Segments, Lifecycle, Quick Actions & Regions) */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 items-start">
        
        {/* Left Column (9 Cols): Customers Table & Bottom Cards */}
        <div className="xl:col-span-9 flex flex-col gap-4">
          <CustomersTable />
          <CustomerBottomCards />
        </div>

        {/* Right Column (3 Cols): Sidebar */}
        <div className="xl:col-span-3">
          <CustomerSidebar />
        </div>

      </div>

    </div>
  );
}
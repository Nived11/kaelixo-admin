"use client";

import React from "react";
import CompaniesHeader from "./components/CompaniesHeader";
import CompaniesStats from "./components/CompaniesStats";
import CompaniesTableSection from "./components/CompaniesTableSection";
import CompaniesSidebar from "./components/CompaniesSidebar";
import CompaniesBottomDashboard from "./components/CompaniesBottomDashboard";

export default function CompaniesMain() {
  return (
    <div className="space-y-4 max-w-[1600px] mx-auto pb-6">
      
      {/* 1. Header with Add Company Button */}
      <CompaniesHeader />

      {/* 2. Top Stats Cards (6 Cards) */}
      <CompaniesStats />

      {/* 3. Main Grid: Table (Left) and Sidebar (Right) */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 items-start">
        
        {/* Left Column (9 Cols): Table & Filters */}
        <div className="xl:col-span-9 flex flex-col gap-4">
          <CompaniesTableSection />
        </div>

        {/* Right Column (3 Cols): Segments & Regions */}
        <div className="xl:col-span-3 flex flex-col gap-4">
          <CompaniesSidebar />
        </div>

      </div>

      {/* 4. Bottom Grid (4 Columns: Recent, Renewals, At-Risk, Quick Actions) */}
      <CompaniesBottomDashboard />

    </div>
  );
}
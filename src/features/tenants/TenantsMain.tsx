"use client";

import React from "react";
import TenantsHeader from "./components/TenantsHeader";
import TenantsStats from "./components/TenantsStats";
import TenantsTableSection from "./components/TenantsTableSection";
import TenantsSidebar from "./components/TenantsSidebar";
import TenantsBottomDashboard from "./components/TenantsBottomDashboard";

export default function TenantsMain() {
  return (
    <div className="space-y-4 max-w-[1600px] mx-auto pb-6">
      
      {/* 1. Header with Add Tenant Button & Banner */}
      <TenantsHeader />

      {/* 2. Top Stats Cards (6 Cards) */}
      <TenantsStats />

      {/* 3. Main Grid: Table (Left) and Sidebar (Right) */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 items-start">
        
        {/* Left Column (9 Cols): Table & Filters */}
        <div className="xl:col-span-9 flex flex-col gap-4">
          <TenantsTableSection />
        </div>

        {/* Right Column (3 Cols): Distribution, Health & Top Regions */}
        <div className="xl:col-span-3 flex flex-col gap-4">
          <TenantsSidebar />
        </div>

      </div>

      {/* 4. Bottom Grid (4 Columns: Onboarding, Provisioning, Renewals, Issues) */}
      <TenantsBottomDashboard />

    </div>
  );
}
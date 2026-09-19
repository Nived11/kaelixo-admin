"use client";

import React from "react";
import SubscriptionsHeader from "./components/SubscriptionsHeader";
import SubscriptionsStats from "./components/SubscriptionsStats";
import SubscriptionsTableSection from "./components/SubscriptionsTableSection";
import SubscriptionsSidebar from "./components/SubscriptionsSidebar";
import SubscriptionsBottomDashboard from "./components/SubscriptionsBottomDashboard";

export default function SubscriptionsMain() {
  return (
    <div className="space-y-4 max-w-[1600px] mx-auto pb-6">
      
      {/* 1. Header with Add Subscription Button & Banner */}
      <SubscriptionsHeader />

      {/* 2. Top Stats Cards (6 Cards) */}
      <SubscriptionsStats />

      {/* 3. Main Grid: Table (Left) and Sidebar (Right) */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 items-start">
        
        {/* Left Column (9 Cols): Table & Filters */}
        <div className="xl:col-span-9 flex flex-col gap-4">
          <SubscriptionsTableSection />
        </div>

        {/* Right Column (3 Cols): Charts & Segments */}
        <div className="xl:col-span-3 flex flex-col gap-4">
          <SubscriptionsSidebar />
        </div>

      </div>

      {/* 4. Bottom Grid (Recent, Upcoming, Cancelled, Conversions, Quick Actions) */}
      <SubscriptionsBottomDashboard />

    </div>
  );
}
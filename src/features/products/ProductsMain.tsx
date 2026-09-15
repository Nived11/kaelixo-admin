import React from "react";
import ProductsHeader from "./components/ProductsHeader";
import ProductStats from "./components/ProductStats";
import ProductsFilterBar from "./components/ProductsFilterBar";
import ProductsGridSection from "./components/ProductsGridSection";
import ProductRightSidebar from "./components/ProductRightSidebar";
import ProductsTable from "./components/ProductsTable";
import ProductsQuickActions from "./components/ProductsQuickActions";

export default function ProductsMain() {
  return (
    <div className="space-y-4 max-w-[1600px] mx-auto pb-6">
      
      {/* 1. Header & Banner */}
      <ProductsHeader />

      {/* 2. Top Stats Cards */}
      <ProductStats />

      {/* 3. Filter Bar */}
      <ProductsFilterBar />

      {/* 4. Single Unified Grid: Left side has Featured Products & Table, Right side has Categories, Pipeline & Quick Actions */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 items-start">
        
        {/* Left Column (9 Cols): Featured Products on top, Table right below with zero unwanted gap */}
        <div className="xl:col-span-9 flex flex-col gap-4">
          <ProductsGridSection />
          <ProductsTable />
        </div>

        {/* Right Column (3 Cols): Categories, Launch Pipeline & Quick Actions stacked together */}
        <div className="xl:col-span-3 flex flex-col gap-4">
          <ProductRightSidebar />
          <ProductsQuickActions />
        </div>

      </div>

    </div>
  );
}
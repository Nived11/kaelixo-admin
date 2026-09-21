"use client";

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

      {/* 4. Single Unified Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 items-start">
        <div className="xl:col-span-9 flex flex-col gap-4">
          <ProductsGridSection />
          <ProductsTable />
        </div>

        <div className="xl:col-span-3 flex flex-col gap-4">
          <ProductRightSidebar />
          <ProductsQuickActions />
        </div>
      </div>
    </div>
  );
}
"use client";

import React, { useState } from "react";
import ProductsHeader from "./components/ProductsHeader";
import ProductStats from "./components/ProductStats";
import ProductsFilterBar from "./components/ProductsFilterBar";
import ProductsGridSection from "./components/ProductsGridSection";
import ProductRightSidebar from "./components/ProductRightSidebar";
import ProductsTable from "./components/ProductsTable";
import ProductsQuickActions from "./components/ProductsQuickActions";
import ProductForm from "./components/ProductForm";

export default function ProductsMain() {
  const [currentView, setCurrentView] = useState<"overview" | "create">("overview");

  return (
    <div className="space-y-4 max-w-[1600px] mx-auto pb-6">
      
      {currentView === "overview" ? (
        <>
          {/* 1. Header & Banner with navigate handler */}
          <ProductsHeader onNavigate={(view) => setCurrentView(view as "overview" | "create")} />

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
              <ProductsQuickActions onNavigate={(view) => setCurrentView(view as "overview" | "create")} />
            </div>
          </div>
        </>
      ) : (
        /* Render Add New Product Form with Products origin breadcrumb */
        <ProductForm origin="Products" onBack={() => setCurrentView("overview")} />
      )}

    </div>
  );
}
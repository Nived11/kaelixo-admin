import React from "react";

export default function DashboardMain() {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Good Morning, Admin</h1>
        <p className="text-sm text-gray-500 mt-1">
          Here's what's happening across your KAELIXO products today.
        </p>
      </div>

      {/* Dashboard Content Area (Stats & Charts will go here) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Placeholder cards matching the UI layout */}
        <div className="h-32 bg-white rounded-xl border border-gray-100 shadow-sm"></div>
        <div className="h-32 bg-white rounded-xl border border-gray-100 shadow-sm"></div>
        <div className="h-32 bg-white rounded-xl border border-gray-100 shadow-sm"></div>
        <div className="h-32 bg-white rounded-xl border border-gray-100 shadow-sm"></div>
      </div>
    </div>
  );
}
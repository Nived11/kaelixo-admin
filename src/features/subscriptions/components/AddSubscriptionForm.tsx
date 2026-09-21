"use client";

import React, { useState } from 'react';
import {
  ArrowLeft, Users, CheckCircle2, UserPlus, RefreshCw, IndianRupee, ArrowUp, ChevronDown,
  Eye, Receipt, FileText, CheckCircle, Search, Info, Settings, Clock, ChevronRight,
  CreditCard, Plus
} from 'lucide-react';

interface AddSubscriptionFormProps {
  onBack: () => void;
}

export default function AddSubscriptionForm({ onBack }: AddSubscriptionFormProps) {
  const [autoRenew, setAutoRenew] = useState(true);
  const [enableTrial, setEnableTrial] = useState(false);
  const [sendInvoice, setSendInvoice] = useState(true);
  const [provisionAuto, setProvisionAuto] = useState(true);
  const [notes, setNotes] = useState('');

  return (
    // 🌟 മുകളിലത്തെ സ്പേസ് കുറയ്ക്കാൻ pt-2 lg:pt-3 കൊടുത്തു
    <div className="px-2  pt-2 lg:pt-3 pb-8 w-full max-w-[1600px] mx-auto font-sans text-slate-800">

      {/* =====================================
          🌟 HEADER SECTION
      ====================================== */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 mb-8">

        {/* Left: Title & Description */}
        <div>
          <div className="flex items-center gap-2 text-[13px] text-[#8b3dff] mb-2 font-semibold cursor-pointer" onClick={onBack}>
            <ArrowLeft size={16} strokeWidth={2.5} />
            <span className="hover:underline">Subscriptions</span>
            <span className="text-[#64748b] font-medium text-xs">&gt;</span>
            <span className="text-[#64748b] font-medium">Add Subscription</span>
          </div>
          <h1 className="text-[28px] font-black text-[#030C25] tracking-tight leading-tight">Add Subscription</h1>
          <p className="text-[12px] text-[#64748b] font-medium mt-1">
            Create and configure a new subscription across KAELIXO products.
          </p>
        </div>

        {/* Right: Promo Card (Exact Dashboard UI) */}
        <div className="flex w-full xl:w-auto">
          <div className="hidden lg:flex items-center gap-5 bg-white px-5 py-3.5 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100/80 w-full xl:w-auto">
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
      </div>

      {/* =====================================
          🌟 TOP STATS ROW
      ====================================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5 sm:gap-4 mb-8">
        {[
          {
            title: "Total Subscriptions",
            value: "1,248",
            growth: "12%",
            sub: "Across all products",
            icon: Users,
            color: "#5c45fd",
            iconBg: "bg-indigo-50 text-[#5c45fd]",
            isStacked: false,
          },
          {
            title: "Active Subscriptions",
            value: "892",
            growth: "8%",
            sub: "71.5% of total",
            icon: CheckCircle2,
            color: "#10b981",
            iconBg: "bg-emerald-50 text-emerald-500",
            isStacked: false,
          },
          {
            title: "New This Month",
            value: "126",
            growth: "24%",
            sub: "Joined in Sep 2026",
            icon: UserPlus,
            color: "#8b5cf6",
            iconBg: "bg-purple-50 text-purple-600",
            isStacked: false,
          },
          {
            title: "Renewals Due",
            value: "98",
            growth: "16%",
            sub: "Due in next 30 days",
            icon: RefreshCw,
            color: "#f59e0b",
            iconBg: "bg-amber-50 text-amber-500",
            isStacked: false,
          },
          {
            title: "Subscription MRR",
            value: "₹24,68,320",
            growth: "18%",
            sub: "Recurring monthly revenue",
            icon: IndianRupee,
            color: "#3b82f6",
            iconBg: "bg-blue-50 text-blue-600",
            isStacked: true,
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] relative overflow-hidden flex items-center gap-3.5 h-[130px] sm:h-[135px] shadow-sm hover:shadow-md transition-all"
          >
            {/* Left Icon */}
            <div className={`w-[44px] h-[44px] rounded-full flex items-center justify-center shrink-0 ${stat.iconBg} relative z-10`}>
              <stat.icon size={22} strokeWidth={2.5} />
            </div>

            {/* Right Content */}
            <div className="flex flex-col flex-1 relative z-10 min-w-0 justify-center">
              <h3 className="text-[11px] sm:text-[12px] font-bold text-gray-600 truncate">{stat.title}</h3>

              {stat.isStacked ? (
                <div className="flex flex-col mt-0.5">
                  <span className="text-[17px] 2xl:text-[19px] font-black text-[#030C25] leading-tight tracking-tight truncate">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold text-emerald-500 flex items-center gap-0.5 mt-0.5 whitespace-nowrap">
                    <ArrowUp size={10} strokeWidth={3.5} /> {stat.growth}
                  </span>
                </div>
              ) : (
                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <span className="text-[18px] 2xl:text-[20px] font-black text-[#030C25] leading-none tracking-tight truncate">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold text-emerald-500 flex items-center gap-0.5 whitespace-nowrap">
                    <ArrowUp size={10} strokeWidth={3.5} /> {stat.growth}
                  </span>
                </div>
              )}

              {/* Subtitle at Bottom */}
              <p className="text-[9px] sm:text-[10px] text-gray-500 font-medium mt-1 truncate">{stat.sub}</p>
            </div>

            {/* Bottom Right Wavy Chart */}
            <div className="absolute bottom-0 right-0 w-24 sm:w-28 h-10 opacity-80 pointer-events-none">
              <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
                <defs>
                  <linearGradient id={`formWaveGrad-${i}`} x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor={stat.color} stopOpacity="0.25" />
                    <stop offset="100%" stopColor={stat.color} stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,35 C10,28 15,35 25,28 C35,21 40,30 50,22 C60,14 65,24 75,15 C85,6 90,12 100,4 L100,40 L0,40 Z"
                  fill={`url(#formWaveGrad-${i})`}
                />
                <path
                  d="M0,35 C10,28 15,35 25,28 C35,21 40,30 50,22 C60,14 65,24 75,15 C85,6 90,12 100,4"
                  fill="none"
                  stroke={stat.color}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* =====================================
            ⬅️ LEFT COLUMN: FORM SECTIONS
        ====================================== */}
        <div className="xl:col-span-2 space-y-6">

          {/* Section 1: Subscription Information */}
          <div className="bg-white rounded-xl border border-slate-200/60 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">1</div>
              <div>
                <h3 className="text-[15px] font-bold text-[#030C25]">Subscription Information</h3>
                <p className="text-[11px] text-[#64748b] font-medium mt-0.5">Basic details about the subscription and product selection.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Subscription ID</label>
                <input
                  type="text"
                  defaultValue="SUB-001249"
                  className="w-full text-[13px] border border-slate-200 rounded-lg px-3 py-2.5 bg-white text-slate-700 font-medium focus:outline-none focus:border-[#8b3dff]"
                  readOnly
                />
                <p className="text-[9px] text-slate-400 mt-1.5 font-medium">Auto-generated or enter custom ID</p>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Customer / Company <span className="text-red-500">*</span></label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search customer or company..."
                    className="w-full text-[13px] border border-slate-200 rounded-lg px-3 py-2.5 pr-9 focus:ring-1 focus:ring-[#8b3dff] focus:border-[#8b3dff] outline-none transition-all placeholder:text-slate-400 text-slate-700 font-medium bg-white"
                  />
                  <ChevronDown size={14} strokeWidth={2.5} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4338ca] pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Product <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select className="w-full text-[13px] border border-slate-200 rounded-lg px-3 py-2.5 pr-9 appearance-none focus:ring-1 focus:ring-[#8b3dff] focus:border-[#8b3dff] outline-none transition-all text-slate-700 font-medium bg-white cursor-pointer">
                    <option>Way We Go CRM</option>
                  </select>
                  <ChevronDown size={14} strokeWidth={2.5} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4338ca] pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Plan <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select className="w-full text-[13px] border border-slate-200 rounded-lg px-3 py-2.5 pr-9 appearance-none focus:ring-1 focus:ring-[#8b3dff] focus:border-[#8b3dff] outline-none transition-all text-slate-700 font-medium bg-white cursor-pointer">
                    <option>Professional</option>
                    <option>Enterprise</option>
                    <option>Starter</option>
                  </select>
                  <ChevronDown size={14} strokeWidth={2.5} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4338ca] pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Region</label>
                <div className="relative">
                  <select className="w-full text-[13px] border border-slate-200 rounded-lg px-3 py-2.5 pr-9 appearance-none focus:ring-1 focus:ring-[#8b3dff] focus:border-[#8b3dff] outline-none transition-all text-slate-700 font-medium bg-white cursor-pointer">
                    <option>India (IN)</option>
                    <option>United States (US)</option>
                    <option>Europe (EU)</option>
                  </select>
                  <ChevronDown size={14} strokeWidth={2.5} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4338ca] pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Status</label>
                <div className="relative">
                  <div className="w-full flex items-center justify-between border border-slate-200 rounded-lg px-3 py-2.5 bg-white pointer-events-none">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></div>
                      <span className="text-[13px] font-medium text-slate-700">Active</span>
                    </div>
                    <ChevronDown size={14} strokeWidth={2.5} className="text-[#4338ca]" />
                  </div>
                  <select
                    defaultValue="active"
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="pending">Pending</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Billing Setup */}
          <div className="bg-white rounded-xl border border-slate-200/60 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">2</div>
              <div>
                <h3 className="text-[15px] font-bold text-[#030C25]">Billing Setup</h3>
                <p className="text-[11px] text-[#64748b] font-medium mt-0.5">Configure billing cycle, dates and renewal settings.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Billing Cycle <span className="text-red-500">*</span></label>
                <select className="w-full text-[13px] border border-slate-200 rounded-lg px-3 py-2.5 focus:ring-[#8b3dff] focus:border-[#8b3dff] outline-none transition-all text-slate-700 font-medium">
                  <option>Monthly</option>
                  <option>Yearly</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Start Date <span className="text-red-500">*</span></label>
                <input type="date" defaultValue="2026-09-12" className="w-full text-[13px] border border-slate-200 rounded-lg px-3 py-2.5 focus:ring-[#8b3dff] focus:border-[#8b3dff] outline-none transition-all text-slate-700 font-medium" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Renewal Date</label>
                <input type="date" defaultValue="2026-10-12" className="w-full text-[13px] border border-slate-200 rounded-lg px-3 py-2.5 focus:ring-[#8b3dff] focus:border-[#8b3dff] outline-none transition-all text-slate-700 font-medium" />
              </div>
              <div className="flex flex-col gap-4">
                {/* Auto Renew Toggle */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Auto Renew</label>
                  <div className="flex items-center gap-2 mt-1">
                    <button type="button" onClick={() => setAutoRenew(!autoRenew)} className={`w-9 h-5 rounded-full relative transition-colors ${autoRenew ? 'bg-[#8b3dff]' : 'bg-slate-200'}`}>
                      <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${autoRenew ? 'translate-x-4' : 'translate-x-0.5'}`}></div>
                    </button>
                    <span className="text-[9px] text-[#64748b] font-medium leading-tight">Automatically renew<br />at end of cycle</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Trial Period</label>
                <div className="flex items-center gap-2 mt-1">
                  <button type="button" onClick={() => setEnableTrial(!enableTrial)} className={`w-9 h-5 rounded-full relative transition-colors ${enableTrial ? 'bg-[#8b3dff]' : 'bg-slate-200'}`}>
                    <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${enableTrial ? 'translate-x-4' : 'translate-x-0.5'}`}></div>
                  </button>
                  <span className="text-[10px] text-[#64748b] font-medium">Enable free trial</span>
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Trial End Date</label>
                <input type="date" disabled={!enableTrial} className="w-full text-[13px] border border-slate-200 rounded-lg px-3 py-2.5 bg-slate-50 focus:ring-[#8b3dff] focus:border-[#8b3dff] outline-none transition-all disabled:opacity-60 text-slate-500" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Currency <span className="text-red-500">*</span></label>
                <select className="w-full text-[13px] border border-slate-200 rounded-lg px-3 py-2.5 focus:ring-[#8b3dff] focus:border-[#8b3dff] outline-none transition-all text-slate-700 font-medium">
                  <option>INR (₹)</option>
                  <option>USD ($)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 3: Pricing & Charges */}
          <div className="bg-white rounded-xl border border-slate-200/60 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">3</div>
              <div>
                <h3 className="text-[15px] font-bold text-[#030C25]">Pricing & Charges</h3>
                <p className="text-[11px] text-[#64748b] font-medium mt-0.5">Set pricing, discounts, taxes and additional charges.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
              {/* Row 1, Col 1: Base Price */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Base Price <span className="text-red-500">*</span></label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-[13px] font-semibold">₹</span>
                  <input
                    type="text"
                    defaultValue="16,249.00"
                    className="w-full text-[13px] border border-slate-200 rounded-lg pl-8 pr-3 py-2.5 focus:ring-1 focus:ring-[#8b3dff] focus:border-[#8b3dff] outline-none transition-all text-slate-700 font-medium bg-white"
                  />
                </div>
              </div>

              {/* Row 1, Col 2: Discount / Coupon */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Discount / Coupon</label>
                <div className="flex gap-2">
                  <div className="relative flex-1 min-w-0">
                    <select className="w-full text-[13px] border border-slate-200 rounded-lg px-3 py-2.5 pr-8 appearance-none focus:ring-1 focus:ring-[#8b3dff] focus:border-[#8b3dff] outline-none transition-all text-slate-700 font-medium bg-white cursor-pointer">
                      <option>No discount</option>
                      <option>Welcome 10%</option>
                      <option>Annual 20%</option>
                    </select>
                    <ChevronDown size={14} strokeWidth={2.5} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4338ca] pointer-events-none" />
                  </div>
                  <div className="relative w-14 shrink-0">
                    <input
                      type="text"
                      placeholder="%"
                      className="w-full text-[13px] text-center border border-slate-200 rounded-lg px-2 py-2.5 bg-slate-50/70 text-slate-400 font-medium placeholder:text-slate-400 focus:ring-1 focus:ring-[#8b3dff] focus:border-[#8b3dff] outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Row 1, Col 3: Tax Profile */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Tax Profile</label>
                <div className="relative">
                  <select className="w-full text-[13px] border border-slate-200 rounded-lg px-3 py-2.5 pr-8 appearance-none focus:ring-1 focus:ring-[#8b3dff] focus:border-[#8b3dff] outline-none transition-all text-slate-700 font-medium bg-white cursor-pointer">
                    <option>GST 18% (India)</option>
                    <option>VAT 5% (UAE)</option>
                    <option>No Tax (0%)</option>
                  </select>
                  <ChevronDown size={14} strokeWidth={2.5} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4338ca] pointer-events-none" />
                </div>
              </div>

              {/* Row 2, Col 1: Setup Fee */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Setup Fee</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-[13px] font-semibold">₹</span>
                  <input
                    type="text"
                    defaultValue="0.00"
                    className="w-full text-[13px] border border-slate-200 rounded-lg pl-8 pr-3 py-2.5 focus:ring-1 focus:ring-[#8b3dff] focus:border-[#8b3dff] outline-none transition-all text-slate-700 font-medium bg-white"
                  />
                </div>
              </div>

              {/* Row 2, Col 2: Add-ons (Optional) */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Add-ons (Optional)</label>
                <div className="relative">
                  <select className="w-full text-[13px] border border-slate-200 rounded-lg px-3 py-2.5 pr-8 appearance-none focus:ring-1 focus:ring-[#8b3dff] focus:border-[#8b3dff] outline-none transition-all text-slate-400 font-medium bg-white cursor-pointer">
                    <option>Select add-ons</option>
                    <option>Extra Storage (50GB)</option>
                    <option>Priority Support</option>
                    <option>Custom Domain</option>
                  </select>
                  <ChevronDown size={14} strokeWidth={2.5} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4338ca] pointer-events-none" />
                </div>
              </div>

              {/* Row 2, Col 3: Final Amount / MRR Summary Card */}
              <div>
                <label className="block text-[11px] font-bold text-transparent select-none mb-1.5">Summary</label>
                <div className="bg-[#f8f5ff] border border-[#e9dbff] rounded-xl px-4 py-2.5 flex flex-col justify-center">
                  <p className="text-[11px] font-bold text-[#8b3dff] leading-none mb-1">Final Amount / MRR</p>
                  <h4 className="text-[20px] font-black text-[#030C25] leading-tight tracking-tight">
                    ₹ 16,249.00
                  </h4>
                  <p className="text-[10px] text-slate-400 font-medium leading-none mt-0.5">per month</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Payment & Invoice */}
          <div className="bg-white rounded-xl border border-slate-200/60 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">4</div>
              <div>
                <h3 className="text-[15px] font-bold text-[#030C25]">Payment & Invoice</h3>
                <p className="text-[11px] text-[#64748b] font-medium mt-0.5">Configure payment method and invoicing preferences.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
              {/* Row 1, Col 1: Payment Method */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Payment Method <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select className="w-full text-[13px] border border-slate-200 rounded-lg px-3 py-2.5 pr-8 appearance-none focus:ring-1 focus:ring-[#8b3dff] focus:border-[#8b3dff] outline-none transition-all text-slate-700 font-medium bg-white cursor-pointer">
                    <option>Credit Card (Stripe)</option>
                    <option>Bank Transfer (NEFT/RTGS)</option>
                    <option>UPI / Net Banking</option>
                  </select>
                  <ChevronDown size={14} strokeWidth={2.5} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4338ca] pointer-events-none" />
                </div>
              </div>

              {/* Row 1, Col 2: Invoice Frequency */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Invoice Frequency <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select className="w-full text-[13px] border border-slate-200 rounded-lg px-3 py-2.5 pr-8 appearance-none focus:ring-1 focus:ring-[#8b3dff] focus:border-[#8b3dff] outline-none transition-all text-slate-700 font-medium bg-white cursor-pointer">
                    <option>Monthly</option>
                    <option>Quarterly</option>
                    <option>Yearly</option>
                  </select>
                  <ChevronDown size={14} strokeWidth={2.5} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4338ca] pointer-events-none" />
                </div>
              </div>

              {/* Row 1, Col 3: Payment Terms */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Payment Terms</label>
                <div className="relative">
                  <select className="w-full text-[13px] border border-slate-200 rounded-lg px-3 py-2.5 pr-8 appearance-none focus:ring-1 focus:ring-[#8b3dff] focus:border-[#8b3dff] outline-none transition-all text-slate-700 font-medium bg-white cursor-pointer">
                    <option>Net 15</option>
                    <option>Net 30</option>
                    <option>Due Upon Receipt</option>
                  </select>
                  <ChevronDown size={14} strokeWidth={2.5} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4338ca] pointer-events-none" />
                </div>
              </div>

              {/* Row 2, Col 1: Send Invoice Toggle */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Send Invoice</label>
                <div className="flex flex-col gap-1.5 mt-0.5">
                  <button
                    type="button"
                    onClick={() => setSendInvoice(!sendInvoice)}
                    className={`w-11 h-6 rounded-full relative transition-colors ${sendInvoice ? 'bg-[#2563eb]' : 'bg-slate-200'}`}
                  >
                    <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${sendInvoice ? 'translate-x-5' : 'translate-x-0.5'}`}></div>
                  </button>
                  <span className="text-[10px] text-slate-400 font-medium">Send invoice to customer</span>
                </div>
              </div>

              {/* Row 2, Col 2 & 3: Notes (Optional) */}
              <div className="md:col-span-2">
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Notes (Optional)</label>
                <div className="relative">
                  <textarea
                    rows={2}
                    maxLength={500}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Add internal notes or customer notes..."
                    className="w-full text-[13px] border border-slate-200 rounded-lg px-3 py-2.5 pb-6 focus:ring-1 focus:ring-[#8b3dff] focus:border-[#8b3dff] outline-none transition-all placeholder:text-slate-400 text-slate-700 font-medium bg-white resize-none"
                  />
                  <span className="absolute right-3 bottom-2 text-[10px] text-slate-400 font-medium">
                    {notes.length}/500
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Provisioning & Access */}
          <div className="bg-white rounded-xl border border-slate-200/60 shadow-sm p-6 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">5</div>
              <div>
                <h3 className="text-[15px] font-bold text-[#030C25]">Provisioning & Access</h3>
                <p className="text-[11px] text-[#64748b] font-medium mt-0.5">Set up tenant, access and provisioning details.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
              {/* Row 1, Col 1: Tenant / Workspace */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Tenant / Workspace</label>
                <input
                  type="text"
                  placeholder="auto-generate or enter name..."
                  className="w-full text-[13px] border border-slate-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-[#8b3dff] focus:border-[#8b3dff] outline-none transition-all placeholder:text-slate-400 text-slate-700 font-medium bg-white"
                />
                <p className="text-[9px] text-slate-400 mt-1.5 font-medium">Will be created automatically after payment</p>
              </div>

              {/* Row 1, Col 2: Provision Automatically Toggle */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Provision Automatically</label>
                <div className="flex flex-col gap-1.5 mt-0.5">
                  <button
                    type="button"
                    onClick={() => setProvisionAuto(!provisionAuto)}
                    className={`w-11 h-6 rounded-full relative transition-colors ${provisionAuto ? 'bg-[#2563eb]' : 'bg-slate-200'}`}
                  >
                    <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${provisionAuto ? 'translate-x-5' : 'translate-x-0.5'}`}></div>
                  </button>
                  <span className="text-[10px] text-slate-400 font-medium">Create tenant after successful payment</span>
                </div>
              </div>

              {/* Row 1, Col 3: Seat Count */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Seat Count</label>
                <input
                  type="number"
                  defaultValue="5"
                  min="1"
                  className="w-full text-[13px] border border-slate-200 rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-[#8b3dff] focus:border-[#8b3dff] outline-none transition-all text-slate-700 font-medium bg-white"
                />
              </div>

              {/* Row 2, Col 1: Admin User (Optional) */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Admin User (Optional)</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search user..."
                    className="w-full text-[13px] border border-slate-200 rounded-lg px-3 py-2.5 pr-8 focus:ring-1 focus:ring-[#8b3dff] focus:border-[#8b3dff] outline-none transition-all placeholder:text-slate-400 text-slate-700 font-medium bg-white"
                  />
                  <ChevronDown size={14} strokeWidth={2.5} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4338ca] pointer-events-none" />
                </div>
              </div>

              {/* Row 2, Col 2 & 3: Domain / Subdomain */}
              <div className="md:col-span-2">
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Domain / Subdomain</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-slate-200 bg-slate-50 text-slate-500 text-[12px] font-medium">https://</span>
                  <input
                    type="text"
                    placeholder="companyname"
                    className="flex-1 block w-full min-w-0 rounded-none text-[13px] border border-slate-200 px-3 py-2.5 focus:ring-1 focus:ring-[#8b3dff] focus:border-[#8b3dff] outline-none transition-all placeholder:text-slate-400 text-slate-700 font-medium bg-white"
                  />
                  <span className="inline-flex items-center px-3 rounded-r-lg border border-l-0 border-slate-200 bg-slate-50 text-slate-500 text-[12px] font-medium">.waywego.in</span>
                </div>
                <p className="text-[9px] text-slate-400 mt-1.5 font-medium">Auto-generated from company name</p>
              </div>
            </div>
          </div>

        </div>

        {/* =====================================
            ➡️ RIGHT COLUMN: SIDEBAR (Sticky)
        ====================================== */}
        <div className="xl:col-span-1">
          <div className="sticky top-4 space-y-4">

            {/* 1. Subscription Preview Card */}
            <div className="bg-white rounded-xl border border-slate-200/60 shadow-sm p-5">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#f4efff] text-[#6d28d9] flex items-center justify-center">
                    <Eye size={18} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-[13px] font-bold text-[#030C25]">Subscription Preview</h3>
                    <p className="text-[10px] text-slate-400 font-medium">Review the subscription details before creating.</p>
                  </div>
                </div>
                <button type="button" className="text-[11px] font-bold text-[#8b3dff] hover:underline cursor-pointer">
                  Edit
                </button>
              </div>

              {/* Product Info */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[32px] font-black text-[#6d28d9] leading-none tracking-tighter">W</span>
                <div>
                  <h4 className="text-[14px] font-black text-[#030C25] leading-tight">Way We Go CRM</h4>
                  <p className="text-[10px] text-slate-400 font-medium">Customer Relationship Management</p>
                </div>
              </div>

              {/* Badges */}
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#f4efff] text-[#8b3dff]">
                  Professional
                </span>
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#eff6ff] text-[#3b82f6]">
                  Monthly
                </span>
              </div>

              {/* Pricing Breakdown */}
              <div className="space-y-2 text-[12px] pt-3 border-t border-slate-100">
                <div className="flex justify-between items-center text-slate-600 font-medium">
                  <span>Base Price</span>
                  <span className="font-bold text-[#030C25]">₹ 16,249.00</span>
                </div>
                <div className="flex justify-between items-center text-slate-600 font-medium">
                  <span>Discount</span>
                  <span className="font-bold text-emerald-500">- ₹ 0.00</span>
                </div>
                <div className="flex justify-between items-center text-slate-600 font-medium">
                  <span>GST (18%)</span>
                  <span className="font-bold text-[#030C25]">₹ 2,924.82</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center pt-3 mt-3 border-t border-slate-100">
                <span className="text-[13px] font-bold text-[#030C25]">Total (Monthly)</span>
                <span className="text-[17px] font-black text-[#030C25]">₹ 19,173.82</span>
              </div>
            </div>

            {/* 2. Setup Checklist Card */}
            <div className="bg-white rounded-xl border border-slate-200/60 shadow-sm p-5">
              <div className="flex items-center justify-between mb-3.5">
                <h3 className="text-[13px] font-bold text-[#030C25]">Setup Checklist</h3>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="w-0 h-full bg-[#8b3dff] rounded-full"></div>
                  </div>
                  <span className="text-[11px] font-bold text-[#8b3dff]">0/5</span>
                </div>
              </div>

              <div className="space-y-2.5">
                {[
                  "Subscription details completed",
                  "Billing configuration set",
                  "Pricing and taxes configured",
                  "Payment method selected",
                  "Provisioning settings ready"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-[11px] font-medium text-slate-600">
                    <div className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center shrink-0"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. What happens next? Card */}
            <div className="bg-white rounded-xl border border-slate-200/60 shadow-sm p-5">
              <h3 className="text-[13px] font-bold text-[#030C25] mb-3.5">What happens next?</h3>

              <div className="space-y-3.5">
                {[
                  {
                    title: "1. Invoice Generation",
                    desc: "An invoice will be generated for the customer.",
                    icon: FileText
                  },
                  {
                    title: "2. Payment Collection",
                    desc: "Payment will be processed via the selected method.",
                    icon: CreditCard
                  },
                  {
                    title: "3. Tenant Activation",
                    desc: "Tenant/workspace will be provisioned automatically.",
                    icon: Settings
                  },
                  {
                    title: "4. Renewal Tracking",
                    desc: "Subscription will be added to renewal schedule.",
                    icon: RefreshCw
                  }
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#eff6ff] text-[#2563eb] flex items-center justify-center shrink-0 mt-0.5">
                      <step.icon size={14} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold text-[#030C25] leading-tight">{step.title}</h4>
                      <p className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Action Buttons */}
            <div className="flex flex-col gap-2.5 pt-1">
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  className="flex-1 py-3 px-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-[12px] font-bold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                >
                  <FileText size={15} className="text-[#6d28d9]" strokeWidth={2.5} />
                  Save Draft
                </button>
                <button
                  type="button"
                  className="flex-[1.4] py-3 px-3 rounded-xl bg-gradient-to-r from-[#d91680] via-[#c026d3] to-[#8b3dff] hover:opacity-95 text-white text-[12px] font-bold flex items-center justify-center gap-1.5 shadow-md shadow-purple-500/20 transition-all cursor-pointer whitespace-nowrap"
                >
                  <Plus size={16} strokeWidth={3} />
                  Create Subscription
                </button>
              </div>

              <button
                type="button"
                onClick={onBack}
                className="w-full py-2.5 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 text-[12px] font-bold flex items-center justify-center transition-all cursor-pointer shadow-sm"
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
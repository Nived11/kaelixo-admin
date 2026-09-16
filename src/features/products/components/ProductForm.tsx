"use client";

import { useState } from "react";
import { 
  Package, CheckCircle2, ChevronRight, Upload, 
  Code2, IndianRupee, Eye, ArrowRight, Info, ArrowLeft, ArrowUp, Star, Users, BarChart3, Sparkles, ArrowUpRight, User, Palette, Calculator, Zap, Send 
} from "lucide-react";

export default function ProductForm({ origin = "Products", onBack }: { origin?: string; onBack: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    desc: "",
    type: "SaaS Product",
    category: "Analytics",
    owner: "Admin User",
    status: "In Development",
    billingModel: "Subscription",
    currency: "INR (₹)",
    taxProfile: "Standard (18% GST)",
    planPrefix: "",
    monthlyPrice: "",
    quarterlyPrice: "",
    yearlyPrice: "",
    trialDays: "14",
    setupFee: "0",
    accentColor: "#7C3AED",
    visibility: "Public",
    isFeatured: true,
    subdomain: "acme",
    autoProvision: true,
    sendEmail: true,
    adminSeats: "1",
    hasLogo: false,
    hasIcon: true
  });

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isProductInfoComplete = formData.name.trim() !== "" && formData.slug.trim() !== "" && formData.desc.trim() !== "";
  const isBrandingComplete = formData.hasLogo || formData.hasIcon;
  const isBillingComplete = formData.monthlyPrice.trim() !== "" && formData.planPrefix.trim() !== "";
  const isProvisioningComplete = formData.subdomain.trim() !== "" && formData.adminSeats.trim() !== "";

  const completedCount = [
    isProductInfoComplete, 
    isBrandingComplete, 
    isBillingComplete, 
    isProvisioningComplete, 
    false, 
    false, 
    false
  ].filter(Boolean).length;
  
  const completionPercentage = Math.round((completedCount / 7) * 100);

  const formStats = [
    { 
      title: "Total Products", 
      value: "12", 
      growth: "+20%", 
      sub: "Across all categories", 
      icon: Package, 
      color: "#7a42ff",
      iconBg: "bg-purple-50 text-[#7a42ff]" 
    },
    { 
      title: "Active Products", 
      value: "8", 
      growth: "+14%", 
      sub: "Live and available", 
      icon: CheckCircle2, 
      color: "#10b981",
      iconBg: "bg-emerald-50 text-emerald-600" 
    },
    { 
      title: "In Development", 
      value: "3", 
      growth: "+50%", 
      sub: "In build or testing", 
      icon: Code2, 
      color: "#FF0052",
      iconBg: "bg-rose-50 text-rose-500" 
    },
    { 
      title: "Product Revenue", 
      value: "₹24,68,320", 
      growth: "+26%", 
      sub: "Monthly recurring", 
      icon: IndianRupee, 
      color: "#0284c7",
      iconBg: "bg-sky-50 text-sky-500" 
    },
  ];

  return (
    <div className="space-y-5">
      
      {/* Top Header & Breadcrumb with Dynamic Origin (Products vs Dashboard) */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 text-[11px] text-gray-500 font-medium">
          <button onClick={onBack} className="hover:text-[#7a42ff] flex items-center gap-1 font-semibold text-[#030C25] bg-transparent cursor-pointer">
            <ArrowLeft size={13} strokeWidth={2.5} /> {origin}
          </button>
          <ChevronRight size={12} className="text-gray-600" />
          <span className="text-gray-500">Add New Product</span>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-[20px] font-black text-[#030C25]">Add New Product</h1>
            <p className="text-[11px] text-[#64748b] font-medium">Create and configure a new SaaS product for the KAELIXO ecosystem.</p>
          </div>
        </div>
      </div>

      {/* Main Grid: Left side contains Stats & Form Sections (9 cols), Right side contains Preview & Checklist (3 cols) */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-start">
        
        {/* LEFT COLUMN (9 Cols): Stats Bar + Form Sections */}
        <div className="xl:col-span-9 space-y-5">
          
          {/* Top Mini Stats Bar with Area Gradient Wave Chart */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {formStats.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] relative overflow-hidden flex items-center gap-3 h-[130px] shadow-sm">
                
                {/* Left Icon */}
                <div className={`w-[44px] h-[44px] rounded-full flex items-center justify-center shrink-0 ${item.iconBg} relative z-10`}>
                  <item.icon size={22} strokeWidth={2.5} />
                </div>

                {/* Right Content */}
                <div className="flex flex-col flex-1 relative z-10 min-w-0 justify-center">
                  <h3 className="text-[11px] font-bold text-gray-600 truncate">{item.title}</h3>
                  
                  <span className="text-[16px] font-black text-[#030C25] leading-none tracking-tight truncate mt-1">
                    {item.value}
                  </span>
                  
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-md text-emerald-600 bg-emerald-50 flex items-center gap-0.5 whitespace-nowrap shrink-0">
                      <ArrowUp size={9} strokeWidth={3.5} /> {item.growth}
                    </span>
                  </div>

                  <p className="text-[10px] text-gray-600 font-medium mt-1 truncate">{item.sub}</p>
                </div>

                {/* Bottom Right Wavy Chart */}
                <div className="absolute bottom-0 right-0 w-28 h-12 opacity-90 pointer-events-none">
                  <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
                    <defs>
                      <linearGradient id={`formWaveGrad-${i}`} x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor={item.color} stopOpacity="0.25" />
                        <stop offset="100%" stopColor={item.color} stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M0,35 C10,28 15,35 25,28 C35,21 40,30 50,22 C60,14 65,24 75,15 C85,6 90,12 95,4 L95,40 L0,40 Z" 
                      fill={`url(#formWaveGrad-${i})`} 
                    />
                    <path 
                      d="M0,35 C10,28 15,35 25,28 C35,21 40,30 50,22 C60,14 65,24 75,15 C85,6 90,12 95,4" 
                      fill="none" 
                      stroke={item.color} 
                      strokeWidth="2" 
                      strokeLinecap="round"
                    />
                    <circle cx="95" cy="4" r="2.5" fill={item.color} />
                  </svg>
                </div>

              </div>
            ))}
          </div>

          {/* SECTION 1: Product Information */}
          <div className="bg-white rounded-[16px] p-5 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-gray-50">
              <div className="w-6 h-6 rounded-xl bg-[#7a42ff] text-white flex items-center justify-center text-xs font-bold">1</div>
              <div>
                <h2 className="text-[13px] font-bold text-[#030C25]">Product Information</h2>
                <p className="text-[10px] text-gray-500">Basic details about your product</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Product Name <span className="text-rose-500">*</span></label>
                <input 
                  type="text" 
                  placeholder="e.g. Analytics Hub"
                  value={formData.name} 
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#7a42ff]" 
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Product Slug <span className="text-rose-500">*</span></label>
                <input 
                  type="text" 
                  placeholder="e.g. analytics-hub"
                  value={formData.slug} 
                  onChange={(e) => handleChange("slug", e.target.value)}
                  className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#7a42ff]" 
                />
                <span className="text-[9px] text-gray-600 mt-1 block">https://yourdomain.com/products/{formData.slug || 'product-slug'}</span>
              </div>
              <div className="sm:col-span-1">
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Short Description <span className="text-rose-500">*</span></label>
                <input 
                  type="text" 
                  placeholder="Brief description of your product"
                  value={formData.desc} 
                  onChange={(e) => handleChange("desc", e.target.value)}
                  className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#7a42ff]" 
                />
                <div className="flex justify-end mt-1">
                  <span className="text-[9px] text-gray-600">{formData.desc.length}/200</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Product Type <span className="text-rose-500">*</span></label>
                <select 
                  value={formData.type}
                  onChange={(e) => handleChange("type", e.target.value)}
                  className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#7a42ff]"
                >
                  <option>SaaS Product</option>
                  <option>Usage Based</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Category <span className="text-rose-500">*</span></label>
                <select 
                  value={formData.category}
                  onChange={(e) => handleChange("category", e.target.value)}
                  className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#7a42ff]"
                >
                  <option>Analytics</option>
                  <option>CRM</option>
                  <option>CMS</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Product Owner <span className="text-rose-500">*</span></label>
                <div className="relative">
                  <select 
                    value={formData.owner}
                    onChange={(e) => handleChange("owner", e.target.value)}
                    className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-xl pl-8 pr-3 py-2.5 focus:outline-none focus:border-[#7a42ff] appearance-none"
                  >
                    <option>Admin User</option>
                    <option>Team Lead</option>
                  </select>
                  <User size={14} className="absolute left-2.5 top-3 text-[#7a42ff]" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Launch Status <span className="text-rose-500">*</span></label>
                <select 
                  value={formData.status}
                  onChange={(e) => handleChange("status", e.target.value)}
                  className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#7a42ff]"
                >
                  <option>In Development</option>
                  <option>Active</option>
                  <option>Beta</option>
                </select>
              </div>
            </div>
          </div>

          {/* SECTION 2: Branding & Visibility */}
          <div className="bg-white rounded-[16px] p-5 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-gray-50">
              <div className="w-6 h-6 rounded-xl bg-[#7a42ff] text-white flex items-center justify-center text-xs font-bold">2</div>
              <div>
                <h2 className="text-[13px] font-bold text-[#030C25]">Branding & Visibility</h2>
                <p className="text-[10px] text-gray-500">Set your product's identity and visibility</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-center">
              
              {/* Product Logo */}
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Product Logo</label>
                <div 
                  onClick={() => handleChange("hasLogo", true)}
                  className="border border-dashed border-gray-300 rounded-xl p-2 text-center cursor-pointer hover:bg-gray-50 flex flex-col items-center justify-center h-[76px]"
                >
                  <div className="flex items-center gap-1 text-[#7a42ff] font-bold text-[10px]">
                    <Upload size={13} strokeWidth={2.5} /> {formData.hasLogo ? "Logo Uploaded" : "Upload Logo"}
                  </div>
                  <span className="text-[7px] text-gray-600 mt-0.5">PNG, JPG or SVG</span>
                </div>
              </div>

              {/* Product Icon */}
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Product Icon</label>
                <div className="flex items-center justify-between px-2.5 rounded-lg border border-gray-200 h-[76px]">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 text-[#7a42ff] flex items-center justify-center font-bold shadow-sm shrink-0 text-xs">📊</div>
                  <button 
                    onClick={() => handleChange("hasIcon", true)}
                    className="text-[9px] font-bold text-[#7a42ff] bg-white border border-purple-100 px-2 py-1.5 rounded-md shadow-sm hover:bg-purple-50 transition-colors whitespace-nowrap"
                  >
                    Change Icon
                  </button>
                </div>
              </div>

              {/* Accent Color */}
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Accent Color</label>
                <div className="flex items-center gap-1 p-1.5 rounded-lg border border-gray-200 h-[76px]">
                  <div className="flex items-center gap-1 bg-white px-1.5 py-1 rounded-md border border-gray-200 flex-1 min-w-0">
                    <div className="w-4 h-4 rounded-md shadow-sm shrink-0" style={{ backgroundColor: formData.accentColor }} />
                    <input 
                      type="text" 
                      value={formData.accentColor}
                      onChange={(e) => handleChange("accentColor", e.target.value)}
                      className="text-[11px] font-mono font-bold text-[#030C25] w-14 bg-transparent focus:outline-none"
                    />
                  </div>
                  <label className="w-8 h-8 rounded-md bg-white border border-gray-200 flex items-center justify-center cursor-pointer shadow-sm hover:bg-gray-50 shrink-0 relative overflow-hidden">
                    <Palette size={14} className="text-[#7a42ff]" />
                    <input 
                      type="color" 
                      value={formData.accentColor}
                      onChange={(e) => handleChange("accentColor", e.target.value)}
                      className="absolute opacity-0 inset-0 cursor-pointer"
                    />
                  </label>
                </div>
              </div>

              {/* Visibility Toggle */}
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Visibility</label>
                <div className="flex gap-1 text-[9px] font-bold h-[76px] items-center">
                  <button 
                    onClick={() => handleChange("visibility", "Public")}
                    className={`px-2 py-2 rounded-md transition-all whitespace-nowrap cursor-pointer ${
                      formData.visibility === 'Public' 
                        ? 'bg-white text-[#7a42ff] shadow-sm border border-[#7a42ff]/40' 
                        : 'bg-gray-50/80 text-gray-500 border border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    Public (Listed)
                  </button>
                  <button 
                    onClick={() => handleChange("visibility", "Internal")}
                    className={`px-2 py-2 rounded-md transition-all whitespace-nowrap cursor-pointer ${
                      formData.visibility === 'Internal' 
                        ? 'bg-white text-[#7a42ff] shadow-sm border border-[#7a42ff]/40' 
                        : 'bg-gray-50/80 text-gray-500 border border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    Internal (Private)
                  </button>
                </div>
              </div>

              {/* Featured Product Toggle Switch */}
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Featured Product</label>
                <div className="flex items-center gap-1.5 bg-gray-50/60 p-2 rounded-xl border border-gray-200 h-[76px]">
                  <div 
                    onClick={() => handleChange("isFeatured", !formData.isFeatured)}
                    className={`w-8 h-4.5 rounded-full transition-colors relative cursor-pointer flex items-center px-0.5 shrink-0 ${formData.isFeatured ? 'bg-[#7a42ff]' : 'bg-gray-300'}`}
                  >
                    <div className={`w-3.5 h-3.5 bg-white rounded-full shadow-md transition-transform ${formData.isFeatured ? 'translate-x-3.5' : 'translate-x-0'}`} />
                  </div>
                  <span className="text-[8px] text-gray-600 font-medium leading-tight line-clamp-3">Show on marketplace</span>
                </div>
              </div>

            </div>
          </div>

          {/* SECTION 3: Billing & Pricing */}
          <div className="bg-white rounded-[16px] p-5 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-gray-50">
              <div className="w-6 h-6 rounded-xl bg-[#7a42ff] text-white flex items-center justify-center text-xs font-bold">3</div>
              <div>
                <h2 className="text-[13px] font-bold text-[#030C25]">Billing & Pricing</h2>
                <p className="text-[10px] text-gray-500">Configure how your product is billed</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Billing Model <span className="text-rose-500">*</span></label>
                <select 
                  value={formData.billingModel}
                  onChange={(e) => handleChange("billingModel", e.target.value)}
                  className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#7a42ff]"
                >
                  <option>Subscription</option>
                  <option>One-time</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Currency <span className="text-rose-500">*</span></label>
                <select 
                  value={formData.currency}
                  onChange={(e) => handleChange("currency", e.target.value)}
                  className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#7a42ff]"
                >
                  <option>INR (₹)</option>
                  <option>USD ($)</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Tax Profile <span className="text-rose-500">*</span></label>
                <select 
                  value={formData.taxProfile}
                  onChange={(e) => handleChange("taxProfile", e.target.value)}
                  className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#7a42ff]"
                >
                  <option>Standard (18% GST)</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Plan Name Prefix <span className="text-rose-500">*</span></label>
                <input 
                  type="text" 
                  placeholder="e.g. Pro Plan"
                  value={formData.planPrefix} 
                  onChange={(e) => handleChange("planPrefix", e.target.value)}
                  className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#7a42ff]" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              <div>
                <label className="block text-[10px] font-semibold text-gray-500 mb-1">Monthly Price</label>
                <div className="flex items-center bg-white border border-gray-200 rounded-xl px-3 py-2">
                  <span className="text-xs text-gray-500 font-bold mr-2">₹</span>
                  <input 
                    type="text" 
                    placeholder="0.00"
                    value={formData.monthlyPrice} 
                    onChange={(e) => handleChange("monthlyPrice", e.target.value)}
                    className="w-full text-xs bg-transparent font-bold text-[#030C25] focus:outline-none" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-semibold text-gray-500 mb-1">Quarterly Price</label>
                <div className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-3 py-2">
                  <div className="flex items-center flex-1 min-w-0">
                    <span className="text-xs text-gray-500 font-bold mr-2">₹</span>
                    <input 
                      type="text" 
                      placeholder="0.00"
                      value={formData.quarterlyPrice} 
                      onChange={(e) => handleChange("quarterlyPrice", e.target.value)}
                      className="w-full text-xs bg-transparent font-bold text-[#030C25] focus:outline-none" 
                    />
                  </div>
                  <span className="text-[9px] bg-emerald-50 text-emerald-600 font-extrabold px-1.5 py-0.5 rounded whitespace-nowrap ml-1">Save 13%</span>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-semibold text-gray-500 mb-1">Yearly Price</label>
                <div className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-3 py-2">
                  <div className="flex items-center flex-1 min-w-0">
                    <span className="text-xs text-gray-500 font-bold mr-2">₹</span>
                    <input 
                      type="text" 
                      placeholder="0.00"
                      value={formData.yearlyPrice} 
                      onChange={(e) => handleChange("yearlyPrice", e.target.value)}
                      className="w-full text-xs bg-transparent font-bold text-[#030C25] focus:outline-none" 
                    />
                  </div>
                  <span className="text-[9px] bg-emerald-50 text-emerald-600 font-extrabold px-1.5 py-0.5 rounded whitespace-nowrap ml-1">Save 33%</span>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-semibold text-gray-500 mb-1">Trial Period</label>
                <div className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-3 py-2">
                  <input 
                    type="text" 
                    value={formData.trialDays} 
                    onChange={(e) => handleChange("trialDays", e.target.value)}
                    className="w-full text-xs bg-transparent font-bold text-[#030C25] focus:outline-none" 
                  />
                  <span className="text-[10px] text-gray-600 font-medium whitespace-nowrap ml-1">days</span>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-semibold text-gray-500 mb-1">Setup Fee</label>
                <div className="flex items-center bg-white border border-gray-200 rounded-xl px-3 py-2">
                  <span className="text-xs text-gray-500 font-bold mr-2">₹</span>
                  <input 
                    type="text" 
                    value={formData.setupFee} 
                    onChange={(e) => handleChange("setupFee", e.target.value)}
                    className="w-full text-xs bg-transparent font-bold text-[#030C25] focus:outline-none" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 4: Provisioning & Access */}
          <div className="bg-white rounded-[16px] p-5 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-gray-50">
              <div className="w-6 h-6 rounded-xl bg-[#7a42ff] text-white flex items-center justify-center text-xs font-bold">4</div>
              <div>
                <h2 className="text-[13px] font-bold text-[#030C25]">Provisioning & Access</h2>
                <p className="text-[10px] text-gray-500">Configure tenant setup and access settings</p>
              </div>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
              
              <div className="sm:col-span-2">
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Tenant Type <span className="text-rose-500">*</span></label>
                <select className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-lg px-2.5 py-2.5 focus:outline-none focus:border-[#7a42ff]">
                  <option>Multi-tenant</option>
                  <option>Single-tenant</option>
                </select>
              </div>

              <div className="sm:col-span-3">
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Auto-provisioning</label>
                <div className="flex items-center gap-2 bg-gray-50/60 px-2.5 py-2 rounded-lg border border-gray-200 h-[38px]">
                  <div 
                    onClick={() => handleChange("autoProvision", !formData.autoProvision)}
                    className={`w-7 h-4 rounded-full transition-colors relative cursor-pointer flex items-center px-0.5 shrink-0 ${formData.autoProvision ? 'bg-[#7a42ff]' : 'bg-gray-300'}`}
                  >
                    <div className={`w-3 h-3 bg-white rounded-full shadow-md transition-transform ${formData.autoProvision ? 'translate-x-3' : 'translate-x-0'}`} />
                  </div>
                  <span className="text-[8.5px] text-gray-600 font-medium truncate">Automatically create tenant</span>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Subdomain Pattern</label>
                <div className="flex items-center bg-white border border-gray-200 rounded-lg px-2.5 py-1.5 h-[38px]">
                  <input 
                    type="text" 
                    value={formData.subdomain}
                    onChange={(e) => handleChange("subdomain", e.target.value)}
                    className="w-30 text-xs font-medium text-[#030C25] bg-gray-50 border border-gray-200 rounded-md px-1.5 py-1 focus:outline-none"
                  />
                  <span className="text-[10px] text-gray-600 ml-1 truncate">.kaelixo.com</span>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Workspace URL Preview</label>
                <input 
                  type="text" 
                  readOnly 
                  value={`https://${formData.subdomain || 'company'}.kaelixo.com`} 
                  className="w-full text-xs bg-gray-50 text-gray-500 border border-gray-200 rounded-lg px-3 py-2.5 font-medium cursor-not-allowed truncate" 
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center pt-1">
              
              <div className="sm:col-span-4">
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Send Onboarding Email</label>
                <div className="flex items-center gap-2 bg-gray-50/60 px-3 py-2 rounded-lg border border-gray-200 h-[38px]">
                  <div 
                    onClick={() => handleChange("sendEmail", !formData.sendEmail)}
                    className={`w-8 h-4.5 rounded-full transition-colors relative cursor-pointer flex items-center px-0.5 shrink-0 ${formData.sendEmail ? 'bg-[#7a42ff]' : 'bg-gray-300'}`}
                  >
                    <div className={`w-3.5 h-3.5 bg-white rounded-full shadow-md transition-transform ${formData.sendEmail ? 'translate-x-3.5' : 'translate-x-0'}`} />
                  </div>
                  <span className="text-[9px] text-gray-600 font-medium truncate">Send welcome email with setup instructions</span>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Default Admin Seats</label>
                <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg px-3 py-1.5 h-[38px]">
                  <input 
                    type="text" 
                    value={formData.adminSeats}
                    onChange={(e) => handleChange("adminSeats", e.target.value)}
                    className="w-full text-xs font-bold text-[#030C25] bg-transparent focus:outline-none"
                  />
                  <span className="text-[10px] text-gray-600 font-medium">seats</span>
                </div>
              </div>

              <div className="sm:col-span-5">
                <div className="flex items-center gap-2 p-2.5 bg-blue-50/60 rounded-lg border border-blue-100 text-[10px] text-blue-800 h-[38px]">
                  <Info size={14} className="shrink-0 text-blue-600" />
                  <span className="text-[9px] leading-tight line-clamp-2">A new tenant will be automatically provisioned with default settings. when a customer subscribes to this product.</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT COLUMN (3 Cols): Product Preview & Dynamic Checklist */}
        <div className="xl:col-span-3 space-y-4">
          
          {/* Product Preview Card */}
          <div className="bg-white rounded-[16px] p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#030C25]">
                <Eye size={15} strokeWidth={2.5} className="text-[#7a42ff]" />
                <span>Product Preview</span>
              </div>
              <a href="#" className="text-[10px] text-[#7a42ff] font-bold hover:underline flex items-center gap-0.5">
                View in Marketplace <ArrowUpRight size={14} strokeWidth={2.5} />
              </a>
            </div>

            {/* Top Icon & Title Layout */}
            <div className="flex items-start gap-3 mb-3">
              <div className="w-14 h-14 rounded-2xl bg-[#7a42ff] text-white flex items-center justify-center shrink-0 shadow-md">
                <BarChart3 size={28} strokeWidth={2.5} />
              </div>
              <div className="min-w-0 flex-1 pt-0.5">
                <div className="inline-flex items-center gap-1 text-[9px] bg-emerald-50 text-emerald-600 font-bold px-2 py-0.5 rounded-full mb-1">
                  <Star size={9} strokeWidth={3} className="fill-emerald-600" /> In Development
                </div>
                <h3 className="text-[14px] font-black text-[#030C25] truncate">{formData.name || 'Product Name'}</h3>
              </div>
            </div>

            {/* Description with break-words */}
            <p className="text-[10px] text-gray-500 leading-relaxed mb-3 break-words">
              {formData.desc || 'Product description will appear here as you type...'}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pb-3 border-b border-gray-100">
              <span className="text-[9px] bg-purple-50 text-[#7a42ff] font-bold px-2.5 py-1 rounded-full">{formData.category}</span>
              <span className="text-[9px] bg-purple-50 text-[#7a42ff] font-bold px-2.5 py-1 rounded-full">Reports</span>
              <span className="text-[9px] bg-purple-50 text-[#7a42ff] font-bold px-2.5 py-1 rounded-full">AI Powered</span>
            </div>

            {/* Bottom Metrics */}
            <div className="grid grid-cols-3 gap-1 pt-3 text-[10px] text-center">
              <div className="flex flex-col items-center border-r border-gray-100 pr-1">
                <div className="flex items-center gap-1 text-[#030C25] font-black text-xs">
                  <Users size={12} strokeWidth={2.5} className="text-[#7a42ff]" /> 500+
                </div>
                <span className="text-[8px] text-gray-700 mt-0.5 font-medium">Active Clients</span>
              </div>
              <div className="flex flex-col items-center border-r border-gray-100 pr-1">
                <div className="flex items-center gap-0.5 text-[#030C25] font-black text-xs">
                  <IndianRupee size={12} strokeWidth={2.5} className="text-[#7a42ff]" /> {formData.monthlyPrice || '4,999'}
                </div>
                <span className="text-[8px] text-gray-700 mt-0.5 font-medium">Starting / month</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1 text-[#030C25] font-black text-xs">
                  <Star size={12} strokeWidth={2.5} className="text-amber-500 fill-amber-500" /> 4.8
                </div>
                <span className="text-[8px] text-gray-700 mt-0.5 font-medium">(120 reviews)</span>
              </div>
            </div>
          </div>

          {/* Configuration Checklist */}
          <div className="bg-white rounded-[16px] p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-[12px] font-bold text-[#030C25]">Configuration Checklist</h3>
              <span className="text-[10px] font-bold text-[#7a42ff]">{completedCount} of 7 completed</span>
            </div>
            
            <div className="w-full bg-gray-100 h-1.5 rounded-full mb-3 overflow-hidden">
              <div className="bg-[#7a42ff] h-full transition-all duration-300" style={{ width: `${completionPercentage}%` }} />
            </div>

            <div className="space-y-2 text-[10px]">
              <div className={`flex items-center gap-2 font-medium ${isProductInfoComplete ? 'text-emerald-600' : 'text-gray-600'}`}>
                {isProductInfoComplete ? <CheckCircle2 size={13} strokeWidth={2.5} /> : <div className="w-3 h-3 rounded-full border border-gray-300" />}
                <span>Product information</span>
              </div>
              <div className={`flex items-center gap-2 font-medium ${isBrandingComplete ? 'text-emerald-600' : 'text-gray-600'}`}>
                {isBrandingComplete ? <CheckCircle2 size={13} strokeWidth={2.5} /> : <div className="w-3 h-3 rounded-full border border-gray-300" />}
                <span>Branding & visibility</span>
              </div>
              <div className={`flex items-center gap-2 font-medium ${isBillingComplete ? 'text-emerald-600' : 'text-gray-600'}`}>
                {isBillingComplete ? <CheckCircle2 size={13} strokeWidth={2.5} /> : <div className="w-3 h-3 rounded-full border border-gray-300" />}
                <span>Billing & pricing</span>
              </div>
              <div className={`flex items-center gap-2 font-medium ${isProvisioningComplete ? 'text-emerald-600' : 'text-gray-600'}`}>
                {isProvisioningComplete ? <CheckCircle2 size={13} strokeWidth={2.5} /> : <div className="w-3 h-3 rounded-full border border-gray-300" />}
                <span>Provisioning & access</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-3 h-3 rounded-full border border-gray-300" />
                <span>Features & modules</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-3 h-3 rounded-full border border-gray-300" />
                <span>Integrations</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-3 h-3 rounded-full border border-gray-300" />
                <span>Internal notes</span>
              </div>
            </div>
          </div>

          {/* Pricing Summary (Exact matching reference with Calculator Icon & Row Borders) */}
          <div className="bg-white rounded-[16px] p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] text-[10px] space-y-3">
            <div className="flex items-center gap-2 pb-2.5 border-b border-gray-100 text-[#030C25]">
              <Calculator size={15} className="text-[#7a42ff]" />
              <h3 className="text-[12px] font-bold">Pricing Summary</h3>
            </div>
            
            <div className="divide-y divide-gray-50 space-y-2 pt-1">
              <div className="flex justify-between items-center py-1.5">
                <span className="text-gray-500 font-medium">Monthly Price</span>
                <span className="font-bold text-[#030C25]">₹{formData.monthlyPrice || '4,999'}</span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-gray-500 font-medium">Quarterly Price</span>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] bg-emerald-50 text-emerald-600 font-extrabold px-1.5 py-0.5 rounded">Save 13%</span>
                  <span className="font-bold text-[#030C25]">₹{formData.quarterlyPrice || '12,999'}</span>
                </div>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-gray-500 font-medium">Yearly Price</span>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] bg-emerald-50 text-emerald-600 font-extrabold px-1.5 py-0.5 rounded">Save 33%</span>
                  <span className="font-bold text-[#030C25]">₹{formData.yearlyPrice || '39,999'}</span>
                </div>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-gray-500 font-medium">Trial Period</span>
                <span className="font-bold text-[#030C25]">{formData.trialDays} days</span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-gray-500 font-medium">Setup Fee</span>
                <span className="font-bold text-[#030C25]">₹{formData.setupFee}</span>
              </div>
            </div>
          </div>

          {/* Quick Actions (Exact matching reference with Zap icon & Button Styles) */}
          <div className="bg-white rounded-[16px] p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] space-y-3">
            <div className="flex items-center gap-2 pb-2.5 border-b border-gray-100 text-[#030C25]">
              <Zap size={15} className="text-[#7a42ff]" />
              <h3 className="text-[12px] font-bold">Quick Actions</h3>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button className="py-2.5 bg-white hover:bg-gray-50 text-[#7a42ff] font-bold rounded-xl text-xs transition-colors border border-gray-200 shadow-sm cursor-pointer">
                Save Draft
              </button>
              <button className="py-2.5 bg-[#7a42ff] hover:bg-[#6832e0] text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm cursor-pointer">
                <Send size={12} /> Publish Product
              </button>
            </div>

            <button onClick={onBack} className="block text-center w-full py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold rounded-xl text-xs transition-colors border border-gray-200 cursor-pointer">
              Cancel
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
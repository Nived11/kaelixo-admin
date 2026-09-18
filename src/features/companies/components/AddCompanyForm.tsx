"use client";

import { useState, useRef, useEffect } from "react";
import { 
  Building2, Users, UserPlus, IndianRupee, ArrowUp, ArrowDown, ChevronRight, 
  Mail, Phone, ChevronDown, Calendar, Link as LinkIcon, Globe, CheckCircle2, 
  Circle, FileText, Building, X
} from "lucide-react";

export default function AddCompanyForm({ onBack }: { onBack: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    legalName: "",
    type: "",
    industry: "",
    size: "",
    website: "",
    description: "",
    
    contactName: "",
    workEmail: "",
    phoneCode: "+91",
    phone: "",
    adminName: "",
    adminEmail: "",
    adminPhoneCode: "+91",
    adminPhone: "",
    
    products: ["Way We Go CRM", "CMS Platform", "Booking Engine"],
    plan: "",
    billingCycle: "",
    accountType: "Trial",
    startDate: "12 Sep 2026",
    renewalDate: "12 Sep 2027",
    
    currency: "INR (₹)",
    taxProfile: "",
    billingEmail: "",
    invoiceNotes: "",
    
    country: "",
    timezone: "",
    subdomain: "",
    autoProvision: true,
    sendOnboarding: true,
    status: "Active"
  });

  const [productInput, setProductInput] = useState("");
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const productDropdownRef = useRef<HTMLDivElement>(null);

  const availableProducts = ["Way We Go CRM", "CMS Platform", "Booking Engine", "Analytics Hub", "Automation Suite"];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (productDropdownRef.current && !productDropdownRef.current.contains(event.target as Node)) {
        setIsProductDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddProduct = (prodToAdd: string) => {
    if (prodToAdd.trim() !== "" && !formData.products.includes(prodToAdd)) {
      setFormData(prev => ({ ...prev, products: [...prev.products, prodToAdd] }));
    }
    setProductInput("");
    setIsProductDropdownOpen(false);
  };

  const handleProductKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && productInput.trim() !== "") {
      e.preventDefault();
      handleAddProduct(productInput);
    }
  };

  const handleRemoveProduct = (prodToRemove: string) => {
    setFormData(prev => ({ ...prev, products: prev.products.filter(p => p !== prodToRemove) }));
  };

  // Checklist Validation rules
  const isInfoComplete = formData.name.trim() !== "" && formData.workEmail.trim() !== "";
  const isBillingComplete = formData.billingEmail.trim() !== "";
  const isProductComplete = formData.plan.trim() !== "";
  const isAddressComplete = formData.country.trim() !== "";
  const isProvisioningComplete = formData.subdomain.trim() !== "";

  const completedCount = [
    isInfoComplete, 
    isBillingComplete, 
    isProductComplete, 
    isAddressComplete, 
    isProvisioningComplete
  ].filter(Boolean).length;

  const topStats = [
    { title: "Total Companies", value: "482", growth: "+12%", isPositive: true, sub: "Across all products", icon: Building2, color: "#7a42ff", iconBg: "bg-purple-50 text-[#7a42ff]" },
    { title: "Active Companies", value: "421", growth: "+14%", isPositive: true, sub: "87.3% active", icon: Users, color: "#10b981", iconBg: "bg-emerald-50 text-emerald-600" },
    { title: "New This Month", value: "28", growth: "+27%", isPositive: true, sub: "Joined in Sep 2026", icon: UserPlus, color: "#8b5cf6", iconBg: "bg-violet-50 text-violet-600" },
    { title: "Company Revenue", value: "₹24,68,320", growth: "+18%", isPositive: true, sub: "MRR (excl. GST)", icon: IndianRupee, color: "#6366f1", iconBg: "bg-indigo-50 text-indigo-600" },
  ];

  const checklist = [
    "Company details", "Primary contact", "Billing profile", 
    "Product setup", "Provisioning settings", "Review & launch"
  ];

  return (
    <div className="space-y-5">
      
      {/* Top Header & Breadcrumb */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 text-[11px] text-gray-500 font-medium">
          <button onClick={onBack} className="hover:text-[#7a42ff] flex items-center gap-1 font-semibold text-[#030C25] bg-transparent cursor-pointer">
             Companies
          </button>
          <ChevronRight size={12} className="text-gray-500" />
          <span className="text-[#030C25] font-semibold">Add New Company</span>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-[20px] font-black text-[#030C25]">Add New Company</h1>
            <p className="text-[11px] text-gray-500 font-medium">Create and configure a company account across KAELIXO products and billing accounts.</p>
          </div>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-start">
        
        {/* LEFT COLUMN (9 Cols) */}
        <div className="xl:col-span-9 space-y-4 flex flex-col min-h-[800px]">
          
          {/* 4 Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {topStats.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] relative overflow-hidden flex items-center gap-3 h-[130px] shadow-sm hover:shadow-md transition-all">
                
                {/* Left Icon */}
                <div className={`w-[44px] h-[44px] rounded-full flex items-center justify-center shrink-0 ${item.iconBg} relative z-10`}>
                  <item.icon size={24} strokeWidth={2.5} />
                </div>

                {/* Right Content */}
                <div className="flex flex-col flex-1 relative z-10 min-w-0 justify-center">
                  <h3 className="text-[11px] font-bold text-gray-600 truncate">{item.title}</h3>
                  
                  {/* Value */}
                  <span className="text-[18px] 2xl:text-[20px] font-black text-[#030C25] leading-none tracking-tight truncate mt-1">
                    {item.value}
                  </span>
                  
                  {/* Growth Badge */}
                  <div className="flex items-center gap-1.5 mt-1.5">
                    {item.isPositive ? (
                      <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-md text-emerald-600 bg-emerald-50 flex items-center gap-0.5 whitespace-nowrap shrink-0">
                        <ArrowUp size={9} strokeWidth={3.5} /> {item.growth}
                      </span>
                    ) : (
                      <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-md text-rose-500 bg-rose-50 flex items-center gap-0.5 whitespace-nowrap shrink-0">
                        <ArrowDown size={9} strokeWidth={3.5} /> {item.growth}
                      </span>
                    )}
                  </div>

                  {/* Subtitle at Bottom */}
                  <p className="text-[10px] text-gray-500 font-medium mt-1 truncate">{item.sub}</p>
                </div>

                {/* Wavy Chart BG */}
                <div className="absolute bottom-0 right-0 w-28 h-12 opacity-90 pointer-events-none">
                  <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
                    <defs>
                      <linearGradient id={`cmpGrad-${i}`} x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor={item.color} stopOpacity="0.2" />
                        <stop offset="100%" stopColor={item.color} stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,35 C10,28 15,35 25,28 C35,21 40,30 50,22 C60,14 65,24 75,15 C85,6 90,12 95,4 L95,40 L0,40 Z" fill={`url(#cmpGrad-${i})`} />
                    <path d="M0,35 C10,28 15,35 25,28 C35,21 40,30 50,22 C60,14 65,24 75,15 C85,6 90,12 95,4" fill="none" stroke={item.color} strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>

              </div>
            ))}
          </div>

          {/* Form Content Container (White BG) */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex-1 flex flex-col">
            
            {/* Form Inner Sections */}
            <div className="p-6 space-y-8 flex-1">
              
              {/* SECTION 1: Company Information */}
              <div>
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-6 h-6 rounded-full bg-[#5c45fd] text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">1</div>
                  <div>
                    <h2 className="text-[14px] font-black text-[#030C25]">Company Information</h2>
                    <p className="text-[10.5px] text-gray-500 font-medium mt-0.5">Basic details about the company.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Company Name <span className="text-rose-500">*</span></label>
                    <input type="text" placeholder="e.g. ABC Travels" className="w-full text-xs border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#7a42ff] placeholder:text-gray-600" />
                  </div>
                  <div>
                    <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Company Slug <span className="text-rose-500">*</span></label>
                    <input type="text" placeholder="e.g. abc-travels" className="w-full text-xs border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#7a42ff] placeholder:text-gray-600" />
                  </div>
                  <div>
                    <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Legal Name</label>
                    <input type="text" placeholder="e.g. ABC Travels Private Limited" className="w-full text-xs border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#7a42ff] placeholder:text-gray-600" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Company Type <span className="text-rose-500">*</span></label>
                    <div className="relative">
                      <select className="w-full text-xs border border-gray-200 rounded-lg px-3 py-2.5 appearance-none text-gray-500 focus:outline-none focus:border-[#7a42ff]">
                        <option>Select company type</option>
                      </select>
                      <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Industry</label>
                    <div className="relative">
                      <select className="w-full text-xs border border-gray-200 rounded-lg px-3 py-2.5 appearance-none text-gray-500 focus:outline-none focus:border-[#7a42ff]">
                        <option>Select industry</option>
                      </select>
                      <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Company Size</label>
                    <div className="relative">
                      <select className="w-full text-xs border border-gray-200 rounded-lg px-3 py-2.5 appearance-none text-gray-500 focus:outline-none focus:border-[#7a42ff]">
                        <option>Select company size</option>
                      </select>
                      <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Website</label>
                    <div className="relative">
                      <LinkIcon size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input type="text" placeholder="https://www.example.com" className="w-full text-xs border border-gray-200 rounded-lg pl-8 pr-3 py-2.5 focus:outline-none focus:border-[#7a42ff] placeholder:text-gray-600" />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Description</label>
                    <div className="relative">
                      <textarea 
                        rows={3}
                        placeholder="Brief description about the company..." 
                        className="w-full text-xs border border-gray-200 rounded-lg px-3 py-2.5 pb-7 focus:outline-none focus:border-[#7a42ff] placeholder:text-gray-600 resize-none min-h-[70px]" 
                      />
                      <span className="absolute bottom-2.5 right-3 text-[9px] text-gray-500 font-medium bg-white px-1">0/500</span>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* SECTION 2: Contact & Admin Details */}
              <div>
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-6 h-6 rounded-full bg-[#5c45fd] text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">2</div>
                  <div>
                    <h2 className="text-[14px] font-black text-[#030C25]">Contact & Admin Details</h2>
                    <p className="text-[10.5px] text-gray-500 font-medium mt-0.5">Primary contact and admin account information.</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Primary Contact Name <span className="text-rose-500">*</span></label>
                    <input type="text" placeholder="e.g. Rajesh Kumar" className="w-full text-xs border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#7a42ff] placeholder:text-gray-600" />
                  </div>
                  <div>
                    <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Work Email <span className="text-rose-500">*</span></label>
                    <div className="relative">
                      <Mail size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input type="email" placeholder="rajesh@company.com" className="w-full text-xs border border-gray-200 rounded-lg pl-8 pr-3 py-2.5 focus:outline-none focus:border-[#7a42ff] placeholder:text-gray-600" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Phone Number</label>
                    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden h-[38px] focus-within:border-[#7a42ff]">
                      <div className="flex items-center px-2 bg-gray-50 border-r border-gray-200 h-full">
                        <Phone size={12} className="text-gray-500 mr-1" />
                        <span className="text-xs font-semibold text-gray-600">+91</span>
                      </div>
                      <input type="text" placeholder="98765 43210" className="w-full text-xs px-3 py-2.5 focus:outline-none bg-transparent placeholder:text-gray-600" />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Admin Full Name <span className="text-rose-500">*</span></label>
                    <input type="text" placeholder="e.g. Priya Sharma" className="w-full text-xs border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#7a42ff] placeholder:text-gray-600" />
                  </div>
                  <div>
                    <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Admin Email <span className="text-rose-500">*</span></label>
                    <div className="relative">
                      <Mail size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input type="email" placeholder="admin@company.com" className="w-full text-xs border border-gray-200 rounded-lg pl-8 pr-3 py-2.5 focus:outline-none focus:border-[#7a42ff] placeholder:text-gray-600" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Admin Phone</label>
                    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden h-[38px] focus-within:border-[#7a42ff]">
                      <div className="flex items-center px-2 bg-gray-50 border-r border-gray-200 h-full">
                        <Phone size={12} className="text-gray-500 mr-1" />
                        <span className="text-xs font-semibold text-gray-600">+91</span>
                      </div>
                      <input type="text" placeholder="98765 43210" className="w-full text-xs px-3 py-2.5 focus:outline-none bg-transparent placeholder:text-gray-600" />
                    </div>
                  </div>
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* SECTION 3: Product & Subscription Setup */}
              <div className="bg-white rounded-xl py-2">
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-6 h-6 rounded-full bg-[#5c45fd] text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">3</div>
                  <div>
                    <h2 className="text-[14px] font-black text-[#030C25]">Product & Subscription Setup</h2>
                    <p className="text-[10.5px] text-gray-500 font-medium mt-0.5">Select products and subscription details.</p>
                  </div>
                </div>

                <div className="flex flex-col xl:flex-row gap-3.5 mb-4" ref={productDropdownRef}>
                  
                  {/* Associated Products */}
                  <div className="flex-[1.5] xl:flex-[2] relative">
                    <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Associated Product(s) <span className="text-rose-500">*</span></label>
                    <div 
                      onClick={() => setIsProductDropdownOpen(true)}
                      className="flex flex-wrap gap-1.5 p-1 border border-gray-200 rounded-lg items-center cursor-text relative min-h-[38px] focus-within:border-[#7a42ff] pr-8"
                    >
                      {formData.products.map((prod, i) => {
                        const colorClasses = i % 3 === 0 ? "bg-pink-50 text-pink-600" : i % 3 === 1 ? "bg-blue-50 text-blue-600" : "bg-purple-50 text-purple-600";
                        return (
                          <span key={i} className={`text-[9.5px] font-bold px-2 py-1 rounded-md flex items-center gap-1 ${colorClasses}`}>
                            {prod} <X size={10} className="cursor-pointer hover:opacity-70" onClick={(e) => { e.stopPropagation(); handleRemoveProduct(prod); }} />
                          </span>
                        );
                      })}
                      <input 
                        type="text" 
                        value={productInput}
                        onChange={(e) => {
                          setProductInput(e.target.value);
                          setIsProductDropdownOpen(true);
                        }}
                        onKeyDown={handleProductKeyDown}
                        className="text-xs bg-transparent focus:outline-none px-1 py-0.5 text-gray-600 flex-1 min-w-[50px]"
                      />
                      <ChevronDown 
                        size={14} 
                        className="absolute right-3 text-gray-500 cursor-pointer" 
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsProductDropdownOpen(!isProductDropdownOpen);
                        }}
                      />
                    </div>

                    {/* Products Dropdown */}
                    {isProductDropdownOpen && (
                      <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-40 overflow-y-auto">
                        <div className="p-1.5 text-[10px] text-gray-600 font-semibold px-2.5 border-b border-gray-100">Available Products</div>
                        {availableProducts
                          .filter(p => p.toLowerCase().includes(productInput.toLowerCase()) && !formData.products.includes(p))
                          .map((p, idx) => (
                            <div 
                              key={idx}
                              onClick={() => handleAddProduct(p)}
                              className="px-3 py-2 text-xs font-medium text-[#030C25] hover:bg-purple-50 hover:text-[#7a42ff] cursor-pointer transition-colors"
                            >
                              {p}
                            </div>
                          ))
                        }
                        {productInput.trim() !== "" && !availableProducts.some(p => p.toLowerCase() === productInput.trim().toLowerCase()) && (
                          <div 
                            onClick={() => handleAddProduct(productInput)}
                            className="px-3 py-2 text-xs font-bold text-[#7a42ff] hover:bg-purple-50 cursor-pointer flex items-center gap-1.5 border-t border-gray-100"
                          >
                            + Add "{productInput}"
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Plan */}
                  <div className="flex-1">
                    <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Plan <span className="text-rose-500">*</span></label>
                    <div className="relative">
                      <select 
                        value={formData.plan}
                        onChange={(e) => handleChange("plan", e.target.value)}
                        className="w-full text-xs border border-gray-200 rounded-lg px-3 py-2.5 appearance-none text-gray-500 focus:outline-none focus:border-[#7a42ff]"
                      >
                        <option value="">Select plan</option>
                        <option value="Enterprise">Enterprise</option>
                        <option value="Professional">Professional</option>
                      </select>
                      <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                    </div>
                  </div>

                  {/* Billing Cycle */}
                  <div className="flex-1">
                    <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Billing Cycle <span className="text-rose-500">*</span></label>
                    <div className="relative">
                      <select 
                        value={formData.billingCycle}
                        onChange={(e) => handleChange("billingCycle", e.target.value)}
                        className="w-full text-xs border border-gray-200 rounded-lg px-3 py-2.5 appearance-none text-gray-500 focus:outline-none focus:border-[#7a42ff]"
                      >
                        <option value="">Select billing cycle</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Annually">Annually</option>
                      </select>
                      <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                    </div>
                  </div>

                  {/* Account Type */}
                  <div className="w-[110px] shrink-0">
                    <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Account Type</label>
                    <div className="flex items-center bg-gray-50 rounded-lg p-0.5 border border-gray-100 h-[38px]">
                      <button 
                        onClick={() => handleChange("accountType", "Trial")}
                        className={`flex-1 text-[10px] font-bold rounded-md py-1.5 transition-colors ${formData.accountType === 'Trial' ? 'bg-[#5c45fd] text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                      >
                        Trial
                      </button>
                      <button 
                        onClick={() => handleChange("accountType", "Live")}
                        className={`flex-1 text-[10px] font-bold rounded-md py-1.5 transition-colors ${formData.accountType === 'Live' ? 'bg-[#5c45fd] text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                      >
                        Live
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Start Date <span className="text-rose-500">*</span></label>
                    <div className="relative">
                      <Calendar size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input type="text" value={formData.startDate} onChange={(e) => handleChange("startDate", e.target.value)} className="w-full text-xs border border-gray-200 rounded-lg pl-8 pr-3 py-2.5 text-gray-600 focus:outline-none focus:border-[#7a42ff]" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Renewal Date</label>
                    <div className="relative">
                      <Calendar size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input type="text" value={formData.renewalDate} onChange={(e) => handleChange("renewalDate", e.target.value)} className="w-full text-xs border border-gray-200 rounded-lg pl-8 pr-3 py-2.5 text-gray-600 focus:outline-none focus:border-[#7a42ff]" />
                    </div>
                  </div>
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* SECTION 4: Billing & Account Details */}
              <div>
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-6 h-6 rounded-full bg-[#5c45fd] text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">4</div>
                  <div>
                    <h2 className="text-[14px] font-black text-[#030C25]">Billing & Account Details</h2>
                    <p className="text-[10.5px] text-gray-500 font-medium mt-0.5">Billing configuration and financial details.</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Currency <span className="text-rose-500">*</span></label>
                    <div className="relative">
                      <select className="w-full text-xs border border-gray-200 rounded-lg px-3 py-2.5 appearance-none text-[#030C25] font-semibold focus:outline-none focus:border-[#7a42ff]">
                        <option>INR (₹)</option>
                      </select>
                      <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Tax / GST Profile</label>
                    <div className="relative">
                      <select className="w-full text-xs border border-gray-200 rounded-lg px-3 py-2.5 appearance-none text-gray-500 focus:outline-none focus:border-[#7a42ff]">
                        <option>Select tax profile</option>
                      </select>
                      <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Billing Email <span className="text-rose-500">*</span></label>
                    <div className="relative">
                      <Mail size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input type="email" placeholder="billing@company.com" className="w-full text-xs border border-gray-200 rounded-lg pl-8 pr-3 py-2.5 focus:outline-none focus:border-[#7a42ff] placeholder:text-gray-600" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Invoice Notes</label>
                    <input type="text" placeholder="Additional notes for invoices..." className="w-full text-xs border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#7a42ff] placeholder:text-gray-600" />
                  </div>
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* SECTION 5: Region & Provisioning */}
              <div>
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-6 h-6 rounded-full bg-[#5c45fd] text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">5</div>
                  <div>
                    <h2 className="text-[14px] font-black text-[#030C25]">Region & Provisioning</h2>
                    <p className="text-[10.5px] text-gray-500 font-medium mt-0.5">Region settings and account provisioning.</p>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row items-end gap-3.5 flex-wrap">
                  
                  {/* Country / Region */}
                  <div className="flex-1 min-w-[160px]">
                    <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Country / Region <span className="text-rose-500">*</span></label>
                    <div className="relative">
                      <Globe size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                      <select 
                        value={formData.country}
                        onChange={(e) => handleChange("country", e.target.value)}
                        className="w-full text-xs border border-gray-200 rounded-lg pl-8.5 pr-7 py-2.5 appearance-none text-gray-500 focus:outline-none focus:border-[#7a42ff] bg-white h-[38px]"
                      >
                        <option value="">Select country</option>
                        <option value="India">India</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="UAE">UAE</option>
                      </select>
                      <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                    </div>
                  </div>

                  {/* Time Zone (Reduced Width) */}
                  <div className="w-[170px] shrink-0">
                    <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Time Zone <span className="text-rose-500">*</span></label>
                    <div className="relative">
                      <select 
                        value={formData.timezone}
                        onChange={(e) => handleChange("timezone", e.target.value)}
                        className="w-full text-xs border border-gray-200 rounded-lg pl-3 pr-7 py-2.5 appearance-none text-gray-500 focus:outline-none focus:border-[#7a42ff] bg-white h-[38px] truncate"
                      >
                        <option value="">Select time zone</option>
                        <option value="IST">(GMT+05:30) IST</option>
                        <option value="UTC">(GMT+00:00) UTC</option>
                        <option value="EST">(GMT-05:00) EST</option>
                      </select>
                      <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                    </div>
                  </div>

                  {/* Workspace / Subdomain (Flexible & Full Typeable) */}
                  <div className="flex-1 min-w-[210px]">
                    <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Workspace / Subdomain <span className="text-rose-500">*</span></label>
                    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden h-[38px] focus-within:border-[#7a42ff] bg-white">
                      <div className="relative flex-1 flex items-center h-full">
                        <LinkIcon size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500" />
                        <input 
                          type="text" 
                          value={formData.subdomain}
                          onChange={(e) => handleChange("subdomain", e.target.value)}
                          placeholder="e.g. abc-travels" 
                          className="w-full text-xs pl-7 pr-2 py-2 focus:outline-none placeholder:text-gray-600 bg-transparent text-[#030C25]" 
                        />
                      </div>
                      <span className="text-[10px] font-medium text-gray-500 bg-gray-50 border-l border-gray-200 px-2.5 py-2.5 whitespace-nowrap h-full flex items-center">
                        .kaelixo.com
                      </span>
                    </div>
                  </div>

                  {/* Toggles */}
                  <div className="flex flex-col gap-2 shrink-0 pb-0.5">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleChange("autoProvision", !formData.autoProvision)}>
                      <div className={`w-7 h-4 rounded-full flex items-center px-0.5 transition-colors ${formData.autoProvision ? 'bg-[#5c45fd]' : 'bg-gray-200'}`}>
                        <div className={`w-3 h-3 bg-white rounded-full transition-transform ${formData.autoProvision ? 'translate-x-3' : 'translate-x-0'}`}></div>
                      </div>
                      <span className="text-[9.5px] font-medium text-gray-600 select-none">Auto-provision company</span>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleChange("sendOnboarding", !formData.sendOnboarding)}>
                      <div className={`w-7 h-4 rounded-full flex items-center px-0.5 transition-colors ${formData.sendOnboarding ? 'bg-[#5c45fd]' : 'bg-gray-200'}`}>
                        <div className={`w-3 h-3 bg-white rounded-full transition-transform ${formData.sendOnboarding ? 'translate-x-3' : 'translate-x-0'}`}></div>
                      </div>
                      <span className="text-[9.5px] font-medium text-gray-600 select-none">Send onboarding email</span>
                    </div>
                  </div>

                  {/* Account Status */}
                  <div className="w-[105px] shrink-0">
                    <label className="block text-[9px] text-gray-500 mb-1">Account Status *</label>
                    <div className="relative">
                      <select 
                        value={formData.status}
                        onChange={(e) => handleChange("status", e.target.value)}
                        className="w-full text-[10.5px] font-bold text-emerald-600 border border-gray-200 rounded-lg pl-2.5 pr-6 py-2 appearance-none focus:outline-none focus:border-[#7a42ff] bg-white h-[38px]"
                      >
                        <option value="Active">Active</option>
                        <option value="Pending">Pending</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                      <ChevronDown size={11} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Bottom Footer Bar */}
            <div className="border-t border-gray-100 bg-gray-50/50 p-4 rounded-b-xl flex items-center justify-end mt-auto">
              <div className="flex items-center gap-3">
                <button onClick={onBack} className="text-[11.5px] font-bold text-gray-600 px-4 py-2.5 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">Cancel</button>
                <button className="text-[11.5px] font-bold text-[#5c45fd] px-5 py-2.5 border border-[#5c45fd]/20 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors cursor-pointer">Save Draft</button>
                <button className="text-[11.5px] font-bold text-white px-6 py-2.5 rounded-lg bg-[#5c45fd] shadow-sm hover:opacity-90 transition-opacity cursor-pointer">Create Company</button>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN (3 Cols): Preview & Summaries (Sticky) */}
        <div className="xl:col-span-3 space-y-4 self-start sticky top-5">
          
          {/* Company Preview Card */}
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[13px] font-black text-[#030C25]">Company Preview</h3>
              <span className="text-[9.5px] font-bold text-[#7a42ff] cursor-pointer">View Example</span>
            </div>

            <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-[#5c45fd] shrink-0 border border-indigo-100">
                <Building2 size={18} strokeWidth={2.5} />
              </div>
              <div className="min-w-0">
                <h4 className="text-[13px] font-black text-[#030C25] truncate">ABC Travels</h4>
                <p className="text-[9.5px] text-gray-500 truncate mt-0.5">Travel and Tourism Solutions</p>
                <div className="flex items-center gap-1 mt-1.5 flex-wrap">
                  <span className="text-[8.5px] bg-purple-100 text-purple-600 font-bold px-1.5 py-0.5 rounded">Way We Go CRM</span>
                  <span className="text-[8.5px] bg-blue-100 text-blue-600 font-bold px-1.5 py-0.5 rounded">CMS Platform</span>
                  <span className="text-[8.5px] bg-indigo-100 text-indigo-600 font-bold px-1.5 py-0.5 rounded">Booking Engine</span>
                </div>
              </div>
            </div>

            <div className="py-3 space-y-2.5 text-[10.5px]">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 flex items-center gap-1.5"><Calendar size={11} /> Plan</span>
                <span className="font-bold text-[#5c45fd] bg-purple-50 px-2 py-0.5 rounded-full">Enterprise</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 flex items-center gap-1.5"><Globe size={11} /> Region</span>
                <span className="font-bold text-[#030C25] flex items-center gap-1">🇮🇳 India</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 flex items-center gap-1.5"><IndianRupee size={11} /> Estimated MRR</span>
                <span className="font-bold text-[#030C25]">₹1,24,999 / month</span>
              </div>
            </div>
          </div>

          {/* Onboarding Checklist */}
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[13px] font-black text-[#030C25]">Onboarding Checklist</h3>
              <span className="text-[10px] font-bold text-[#5c45fd]">0% complete</span>
            </div>

            <div className="w-full bg-gray-100 h-1.5 rounded-full mb-3 overflow-hidden">
              <div className="bg-[#5c45fd] h-full w-0" />
            </div>

            <div className="space-y-2.5 text-[10.5px]">
              {checklist.map((item, i) => (
                <div key={i} className="flex items-center justify-between text-gray-500 font-medium">
                  <div className="flex items-center gap-2">
                    <Circle size={12} className="text-gray-300" />
                    <span>{item}</span>
                  </div>
                  <span className="text-[8.5px] text-gray-600">Pending</span>
                </div>
              ))}
            </div>
          </div>

          {/* Billing Summary */}
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
            <h3 className="text-[13px] font-black text-[#030C25] mb-3">Billing Summary</h3>
            <div className="space-y-2 text-[10.5px] border-b border-gray-100 pb-3">
              <div className="flex justify-between">
                <span className="text-gray-500">Plan (Enterprise)</span>
                <span className="font-bold text-[#030C25]">₹1,24,999</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Billing Cycle</span>
                <span className="font-bold text-[#030C25]">Monthly</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Tax (GST 18%)</span>
                <span className="font-bold text-[#030C25]">₹22,500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Setup Fee</span>
                <span className="font-bold text-[#030C25]">₹0</span>
              </div>
            </div>
            <div className="flex justify-between items-center pt-3 text-[11px]">
              <span className="font-bold text-[#030C25]">Estimated Total <span className="text-gray-500 font-normal">(Monthly)</span></span>
              <span className="font-black text-[14px] text-[#030C25]">₹1,47,499</span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
            <h3 className="text-[13px] font-black text-[#030C25] mb-3">Quick Actions</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <UserPlus size={14} />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-[#030C25] group-hover:text-[#5c45fd] transition-colors">Invite Admin</h4>
                    <p className="text-[9px] text-gray-500">Send an invitation to company admin</p>
                  </div>
                </div>
                <ChevronRight size={13} className="text-gray-600" />
              </div>
              <div className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                    <Mail size={14} />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-[#030C25] group-hover:text-[#5c45fd] transition-colors">Send Welcome Email</h4>
                    <p className="text-[9px] text-gray-500">Send onboarding instructions</p>
                  </div>
                </div>
                <ChevronRight size={13} className="text-gray-600" />
              </div>
              <div className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
                    <FileText size={14} />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-[#030C25] group-hover:text-[#5c45fd] transition-colors">Create First Invoice</h4>
                    <p className="text-[9px] text-gray-500">Generate initial invoice</p>
                  </div>
                </div>
                <ChevronRight size={13} className="text-gray-600" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
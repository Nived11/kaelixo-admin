"use client";

import { useState, useRef, useEffect } from "react";
import { 
  Users, UserCheck, UserPlus, IndianRupee, ArrowUp, ArrowLeft, ChevronRight, 
  CheckCircle2, Eye, Mail, X, Send, User, Zap, Star, BarChart3, ChevronDown, CreditCard, Calendar, Check, Hash, Phone, Plus, ArrowRight 
} from "lucide-react";

export default function AddCustomerForm({ onBack }: { onBack: () => void }) {
  const [formData, setFormData] = useState({
    name: "Alex Johnson",
    company: "Travel Mate",
    email: "alex@travelmate.com",
    phone: "98765 43210",
    countryCode: "+91",
    flag: "🇮🇳",
    customerType: "Business",
    status: "Active",
    region: "Asia Pacific (APAC)",
    billingEmail: "billing@travelmate.com",
    billingCycle: "Monthly",
    currency: "INR (₹)",
    taxProfile: "GST (India)",
    paymentMethod: "Credit Card (Default)",
    customerId: "CUST-TRM-2026-001",
    accountOwner: "Admin User",
    product: "Way We Go CRM",
    plan: "Professional",
    trialActive: true,
    trialDays: "14",
    subDate: "2026-09-12",
    renewalDate: "2026-10-12",
    seatCount: "25",
    mrr: "24,999",
    country: "India",
    state: "Maharashtra",
    city: "Mumbai",
    zip: "400001",
    address: "123 Business Park, Andheri East, Mumbai",
    timezone: "(GMT+05:30) India Standard Time (IST)",
    subdomain: "travelmate",
    autoCreateTenant: true,
    sendOnboardingEmail: true,
    enableApiAccess: false,
    internalNotes: "Referred by partner. Interested in multi-country expansion.\nFollow up after trial period.",
    tags: ["#Travel", "#APAC", "#High Potential"]
  });

  const [tagInput, setTagInput] = useState("");
  const [isTagDropdownOpen, setIsTagDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const availableTags = ["#Enterprise", "#APAC", "#High Potential", "#Travel", "#SaaS", "#VIP", "#Partner", "#Growth", "#Starter"];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsTagDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddTag = (tagToAdd: string) => {
    const formattedTag = tagToAdd.startsWith("#") ? tagToAdd : `#${tagToAdd}`;
    if (formattedTag.trim() !== "" && !formData.tags.includes(formattedTag)) {
      setFormData(prev => ({ ...prev, tags: [...prev.tags, formattedTag] }));
    }
    setTagInput("");
    setIsTagDropdownOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && tagInput.trim() !== "") {
      e.preventDefault();
      handleAddTag(tagInput);
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData(prev => ({ ...prev, tags: prev.tags.filter(tag => tag !== tagToRemove) }));
  };

  // Checklist Validation rules
  const isInfoComplete = formData.name.trim() !== "" && formData.email.trim() !== "" && formData.company.trim() !== "";
  const isBillingComplete = formData.billingEmail.trim() !== "";
  const isProductComplete = formData.product.trim() !== "" && formData.plan.trim() !== "";
  const isAddressComplete = formData.country.trim() !== "" && formData.city.trim() !== "" && formData.address.trim() !== "";
  const isProvisioningComplete = formData.subdomain.trim() !== "";
  const isNotesComplete = formData.internalNotes.trim() !== "";

  const completedCount = [
    isInfoComplete, 
    isBillingComplete, 
    isProductComplete, 
    isAddressComplete, 
    isProvisioningComplete, 
    isNotesComplete
  ].filter(Boolean).length;

  const topStats = [
    { title: "Total Customers", value: "1,482", growth: "+12%", sub: "Across all products", icon: Users, color: "#7a42ff", iconBg: "bg-purple-50 text-[#7a42ff]" },
    { title: "Active Customers", value: "1,124", growth: "+14%", sub: "75.9% of total", icon: UserCheck, color: "#10b981", iconBg: "bg-emerald-50 text-emerald-600" },
    { title: "New This Month", value: "86", growth: "+28%", sub: "Joined in Sep 2026", icon: UserPlus, color: "#0284c7", iconBg: "bg-sky-50 text-sky-500" },
    { title: "Customer Revenue", value: "₹24,68,320", growth: "+18%", sub: "MRR (excl. GST)", icon: IndianRupee, color: "#0284c7", iconBg: "bg-sky-50 text-sky-500" },
  ];

  return (
    <div className="space-y-5">
      
      {/* Top Header & Breadcrumb */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 text-[11px] text-gray-600 font-medium">
          <button onClick={onBack} className="hover:text-[#7a42ff] flex items-center gap-1 font-semibold text-[#030C25] bg-transparent cursor-pointer">
            <ArrowLeft size={13} strokeWidth={2.5} /> Customers
          </button>
          <ChevronRight size={12} className="text-gray-600" />
          <span className="text-gray-600">Add Customer</span>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-[20px] font-black text-[#030C25]">Add Customer</h1>
            <p className="text-[11px] text-[#64748b] font-medium">Create a new customer across KAELIXO products and billing accounts.</p>
          </div>
        </div>
      </div>

      {/* Main Grid: Left side Form Sections (9 cols), Right side Preview & Checklist (3 cols) */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-start">
        
        {/* LEFT COLUMN (9 Cols): Stats Bar + Sections */}
        <div className="xl:col-span-9 space-y-4">
          
          {/* Top Mini Stats Bar with Wave Charts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {topStats.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] relative overflow-hidden flex items-center gap-3 h-[130px]">
                <div className={`w-[44px] h-[44px] rounded-full flex items-center justify-center shrink-0 ${item.iconBg} relative z-10`}>
                  <item.icon size={22} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col flex-1 relative z-10 min-w-0 justify-center">
                  <h3 className="text-[11px] font-bold text-gray-600 truncate">{item.title}</h3>
                  <span className="text-[16px] font-black text-[#030C25] leading-none tracking-tight truncate mt-1">{item.value}</span>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-md text-emerald-600 bg-emerald-50 flex items-center gap-0.5 whitespace-nowrap shrink-0">
                      <ArrowUp size={9} strokeWidth={3.5} /> {item.growth}
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-600 font-medium mt-1 truncate">{item.sub}</p>
                </div>
                
                {/* Wave Chart */}
                <div className="absolute bottom-0 right-0 w-28 h-12 opacity-90 pointer-events-none">
                  <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
                    <defs>
                      <linearGradient id={`custFormWave-${i}`} x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor={item.color} stopOpacity="0.25" />
                        <stop offset="100%" stopColor={item.color} stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,35 C10,28 15,35 25,28 C35,21 40,30 50,22 C60,14 65,24 75,15 C85,6 90,12 95,4 L95,40 L0,40 Z" fill={`url(#custFormWave-${i})`} />
                    <path d="M0,35 C10,28 15,35 25,28 C35,21 40,30 50,22 C60,14 65,24 75,15 C85,6 90,12 95,4" fill="none" stroke={item.color} strokeWidth="2" strokeLinecap="round" />
                    <circle cx="95" cy="4" r="2.5" fill={item.color} />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* SECTION 1: Customer Information */}
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-gray-50">
              <div className="w-6 h-6 rounded-lg bg-[#7a42ff] text-white flex items-center justify-center text-xs font-bold">1</div>
              <div>
                <h2 className="text-[13px] font-bold text-[#030C25]">Customer Information</h2>
                <p className="text-[10px] text-gray-600">Basic details about the customer and their organization.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3.5 mb-3.5">
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Customer Name <span className="text-rose-500">*</span></label>
                <input 
                  type="text" 
                  value={formData.name} 
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#7a42ff]" 
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Company Name <span className="text-rose-500">*</span></label>
                <input 
                  type="text" 
                  value={formData.company} 
                  onChange={(e) => handleChange("company", e.target.value)}
                  className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#7a42ff]" 
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Email Address <span className="text-rose-500">*</span></label>
                <input 
                  type="email" 
                  value={formData.email} 
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#7a42ff]" 
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Phone Number</label>
                <div className="flex items-center bg-gray-50/70 border border-gray-200 rounded-lg overflow-hidden px-2 h-[38px]">
                  <span className="text-xs mr-1">{formData.flag}</span>
                  <select 
                    value={formData.countryCode}
                    onChange={(e) => handleChange("countryCode", e.target.value)}
                    className="text-xs bg-transparent font-bold text-gray-700 focus:outline-none cursor-pointer"
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </select>
                  <input 
                    type="text" 
                    value={formData.phone} 
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="w-full text-xs bg-transparent focus:outline-none pl-1" 
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Customer Type <span className="text-rose-500">*</span></label>
                <div className="relative">
                  <select 
                    value={formData.customerType}
                    onChange={(e) => handleChange("customerType", e.target.value)}
                    className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#7a42ff] appearance-none"
                  >
                    <option>Business</option>
                    <option>Individual</option>
                    <option>Enterprise</option>
                  </select>
                  <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Status <span className="text-rose-500">*</span></label>
                <div className="relative">
                  <select 
                    value={formData.status}
                    onChange={(e) => handleChange("status", e.target.value)}
                    className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-lg pl-8 pr-3 py-2.5 focus:outline-none focus:border-[#7a42ff] appearance-none font-semibold text-emerald-600"
                  >
                    <option>Active</option>
                    <option>Trial</option>
                    <option>Pending</option>
                    <option>At Risk</option>
                  </select>
                  <span className="absolute left-3 top-3 w-2 h-2 rounded-full bg-emerald-500 pointer-events-none" />
                  <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Region <span className="text-rose-500">*</span></label>
                <div className="relative">
                  <select 
                    value={formData.region}
                    onChange={(e) => handleChange("region", e.target.value)}
                    className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#7a42ff] appearance-none"
                  >
                    <option>Asia Pacific (APAC)</option>
                    <option>North America (US)</option>
                    <option>Europe (EU)</option>
                  </select>
                  <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: Billing & Account Setup */}
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-gray-50">
              <div className="w-6 h-6 rounded-lg bg-[#7a42ff] text-white flex items-center justify-center text-xs font-bold">2</div>
              <div>
                <h2 className="text-[13px] font-bold text-[#030C25]">Billing & Account Setup</h2>
                <p className="text-[10px] text-gray-600">Configure billing details and account settings.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3.5 mb-3.5">
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Billing Email <span className="text-rose-500">*</span></label>
                <input 
                  type="email" 
                  value={formData.billingEmail} 
                  onChange={(e) => handleChange("billingEmail", e.target.value)}
                  className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#7a42ff]" 
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Billing Cycle <span className="text-rose-500">*</span></label>
                <div className="relative">
                  <select 
                    value={formData.billingCycle}
                    onChange={(e) => handleChange("billingCycle", e.target.value)}
                    className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#7a42ff] appearance-none"
                  >
                    <option>Monthly</option>
                    <option>Yearly</option>
                  </select>
                  <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Currency <span className="text-rose-500">*</span></label>
                <div className="relative">
                  <select 
                    value={formData.currency}
                    onChange={(e) => handleChange("currency", e.target.value)}
                    className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#7a42ff] appearance-none"
                  >
                    <option>INR (₹)</option>
                    <option>USD ($)</option>
                  </select>
                  <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Tax Profile</label>
                <div className="relative">
                  <select 
                    value={formData.taxProfile}
                    onChange={(e) => handleChange("taxProfile", e.target.value)}
                    className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#7a42ff] appearance-none"
                  >
                    <option>GST (India)</option>
                    <option>Standard Tax</option>
                  </select>
                  <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Payment Method</label>
                <div className="relative">
                  <select 
                    value={formData.paymentMethod}
                    onChange={(e) => handleChange("paymentMethod", e.target.value)}
                    className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-lg pl-8 pr-7 py-2.5 focus:outline-none focus:border-[#7a42ff] appearance-none font-medium"
                  >
                    <option>Credit Card (Default)</option>
                    <option>Bank Transfer</option>
                  </select>
                  <CreditCard size={14} className="absolute left-2.5 top-3 text-[#7a42ff]" />
                  <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Customer ID <span className="text-rose-500">*</span></label>
                <input 
                  type="text" 
                  value={formData.customerId} 
                  onChange={(e) => handleChange("customerId", e.target.value)}
                  className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#7a42ff]" 
                />
                <span className="text-[9px] text-gray-600 mt-0.5 block">Auto-generated if left empty</span>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Account Owner <span className="text-rose-500">*</span></label>
                <div className="relative">
                  <select 
                    value={formData.accountOwner}
                    onChange={(e) => handleChange("accountOwner", e.target.value)}
                    className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-lg pl-8 pr-7 py-2.5 focus:outline-none focus:border-[#7a42ff] appearance-none font-semibold text-[#030C25]"
                  >
                    <option>Admin User</option>
                    <option>Sales Lead</option>
                  </select>
                  <span className="absolute left-2.5 top-2.5 w-4 h-4 rounded-full bg-[#7a42ff] text-white flex items-center justify-center font-bold text-[9px]">A</span>
                  <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 3: Product Subscription */}
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-gray-50">
              <div className="w-6 h-6 rounded-lg bg-[#7a42ff] text-white flex items-center justify-center text-xs font-bold">3</div>
              <div>
                <h2 className="text-[13px] font-bold text-[#030C25]">Product Subscription</h2>
                <p className="text-[10px] text-gray-600">Select the product and plan for this customer.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3.5 mb-3.5">
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Product <span className="text-rose-500">*</span></label>
                <div className="relative">
                  <select 
                    value={formData.product}
                    onChange={(e) => handleChange("product", e.target.value)}
                    className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-lg pl-8 pr-7 py-2.5 focus:outline-none focus:border-[#7a42ff] appearance-none font-bold text-[#030C25]"
                  >
                    <option>Way We Go CRM</option>
                    <option>CMS Platform</option>
                    <option>Booking Engine</option>
                  </select>
                  <span className="absolute left-2.5 top-2.5 w-4 h-4 rounded bg-purple-100 text-[#7a42ff] flex items-center justify-center text-[9px] font-black">W</span>
                  <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Plan <span className="text-rose-500">*</span></label>
                <div className="relative">
                  <select 
                    value={formData.plan}
                    onChange={(e) => handleChange("plan", e.target.value)}
                    className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#7a42ff] appearance-none font-medium"
                  >
                    <option>Professional</option>
                    <option>Enterprise</option>
                    <option>Starter</option>
                  </select>
                  <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Trial Period</label>
                <div className="flex items-center gap-2.5 bg-gray-50/60 px-3 py-2 rounded-lg border border-gray-200 h-[38px]">
                  <div 
                    onClick={() => handleChange("trialActive", !formData.trialActive)}
                    className={`w-8 h-4.5 rounded-full transition-colors relative cursor-pointer flex items-center px-0.5 shrink-0 ${formData.trialActive ? 'bg-[#7a42ff]' : 'bg-gray-300'}`}
                  >
                    <div className={`w-3.5 h-3.5 bg-white rounded-full shadow-md transition-transform ${formData.trialActive ? 'translate-x-3.5' : 'translate-x-0'}`} />
                  </div>
                  <span className="text-[10px] font-medium text-gray-600 truncate">{formData.trialDays} days free trial</span>
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Subscription Start Date <span className="text-rose-500">*</span></label>
                <div className="relative">
                  <input 
                    type="date" 
                    value={formData.subDate} 
                    onChange={(e) => handleChange("subDate", e.target.value)}
                    className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-lg pl-8 pr-3 py-2.5 focus:outline-none focus:border-[#7a42ff]" 
                  />
                  <Calendar size={13} className="absolute left-2.5 top-3 text-[#7a42ff] pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Renewal Date <span className="text-rose-500">*</span></label>
                <div className="relative">
                  <input 
                    type="date" 
                    value={formData.renewalDate} 
                    onChange={(e) => handleChange("renewalDate", e.target.value)}
                    className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-lg pl-8 pr-3 py-2.5 focus:outline-none focus:border-[#7a42ff]" 
                  />
                  <Calendar size={13} className="absolute left-2.5 top-3 text-[#7a42ff] pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Seat Count <span className="text-rose-500">*</span></label>
                <input 
                  type="number" 
                  min="1"
                  value={formData.seatCount} 
                  onChange={(e) => handleChange("seatCount", e.target.value)}
                  className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#7a42ff]" 
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Monthly Price (MRR) <span className="text-rose-500">*</span></label>
                <div className="flex items-center bg-gray-50/70 border border-gray-200 rounded-lg px-3 py-2">
                  <span className="text-xs text-gray-600 font-bold mr-2">₹</span>
                  <input 
                    type="text" 
                    value={formData.mrr} 
                    onChange={(e) => handleChange("mrr", e.target.value)}
                    className="w-full text-xs bg-transparent font-bold text-[#030C25] focus:outline-none" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 4: Company & Address */}
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-gray-50">
              <div className="w-6 h-6 rounded-lg bg-[#7a42ff] text-white flex items-center justify-center text-xs font-bold">4</div>
              <div>
                <h2 className="text-[13px] font-bold text-[#030C25]">Company & Address</h2>
                <p className="text-[10px] text-gray-600">Customer's business address and location.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3.5 mb-3.5">
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Country <span className="text-rose-500">*</span></label>
                <div className="relative">
                  <select 
                    value={formData.country}
                    onChange={(e) => handleChange("country", e.target.value)}
                    className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#7a42ff] appearance-none"
                  >
                    <option>India</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                  </select>
                  <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">State / Province <span className="text-rose-500">*</span></label>
                <input 
                  type="text" 
                  value={formData.state} 
                  onChange={(e) => handleChange("state", e.target.value)}
                  className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#7a42ff]" 
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">City <span className="text-rose-500">*</span></label>
                <input 
                  type="text" 
                  value={formData.city} 
                  onChange={(e) => handleChange("city", e.target.value)}
                  className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#7a42ff]" 
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">ZIP / Postcode <span className="text-rose-500">*</span></label>
                <input 
                  type="text" 
                  value={formData.zip} 
                  onChange={(e) => handleChange("zip", e.target.value)}
                  className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#7a42ff]" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Full Address <span className="text-rose-500">*</span></label>
                <input 
                  type="text" 
                  value={formData.address} 
                  onChange={(e) => handleChange("address", e.target.value)}
                  className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#7a42ff]" 
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#030C25] mb-1">Timezone <span className="text-rose-500">*</span></label>
                <div className="relative">
                  <select 
                    value={formData.timezone}
                    onChange={(e) => handleChange("timezone", e.target.value)}
                    className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#7a42ff] appearance-none"
                  >
                    <option>(GMT+05:30) India Standard Time (IST)</option>
                    <option>(GMT+00:00) Greenwich Mean Time</option>
                  </select>
                  <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 5 & 6 */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            
            {/* SECTION 5: Access & Provisioning */}
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4 pb-2.5 border-b border-gray-50">
                  <div className="w-6 h-6 rounded-lg bg-[#7a42ff] text-white flex items-center justify-center text-xs font-bold">5</div>
                  <div>
                    <h2 className="text-[13px] font-bold text-[#030C25]">Access & Provisioning</h2>
                    <p className="text-[10px] text-gray-600">Set up tenant and access options.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div 
                      onClick={() => handleChange("autoCreateTenant", !formData.autoCreateTenant)}
                      className={`w-8 h-4.5 rounded-full transition-colors relative cursor-pointer flex items-center px-0.5 shrink-0 ${formData.autoCreateTenant ? 'bg-[#7a42ff]' : 'bg-gray-300'}`}
                    >
                      <div className={`w-3.5 h-3.5 bg-white rounded-full shadow-md transition-transform ${formData.autoCreateTenant ? 'translate-x-3.5' : 'translate-x-0'}`} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-[#030C25]">Auto-create tenant</p>
                      <p className="text-[9px] text-gray-600">Automatically provision a new tenant</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div 
                      onClick={() => handleChange("sendOnboardingEmail", !formData.sendOnboardingEmail)}
                      className={`w-8 h-4.5 rounded-full transition-colors relative cursor-pointer flex items-center px-0.5 shrink-0 ${formData.sendOnboardingEmail ? 'bg-[#7a42ff]' : 'bg-gray-300'}`}
                    >
                      <div className={`w-3.5 h-3.5 bg-white rounded-full shadow-md transition-transform ${formData.sendOnboardingEmail ? 'translate-x-3.5' : 'translate-x-0'}`} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-[#030C25]">Send onboarding email</p>
                      <p className="text-[9px] text-gray-600">Send welcome email to customer</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#030C25] mb-1">Subdomain <span className="text-rose-500">*</span></label>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center bg-white border border-gray-200 rounded-lg px-2.5 py-1.5 flex-1 shadow-xs">
                        <input 
                          type="text" 
                          value={formData.subdomain}
                          onChange={(e) => handleChange("subdomain", e.target.value)}
                          className="text-xs font-medium text-[#030C25] bg-transparent focus:outline-none w-24"
                        />
                        <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-medium">.kaelixo.com</span>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-2 rounded-lg border border-emerald-100 shrink-0">
                        <Check size={12} strokeWidth={3} /> Available
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-0.5">
                    <div className="flex items-center gap-3">
                      <div 
                        onClick={() => handleChange("enableApiAccess", !formData.enableApiAccess)}
                        className={`w-8 h-4.5 rounded-full transition-colors relative cursor-pointer flex items-center px-0.5 shrink-0 ${formData.enableApiAccess ? 'bg-[#7a42ff]' : 'bg-gray-300'}`}
                      >
                        <div className={`w-3.5 h-3.5 bg-white rounded-full shadow-md transition-transform ${formData.enableApiAccess ? 'translate-x-3.5' : 'translate-x-0'}`} />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-[#030C25]">Enable API access</p>
                        <p className="text-[9px] text-gray-600">Generate API keys for this customer</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[9.5px] text-gray-600 font-medium block">Workspace URL Preview</span>
                      <a href="#" className="text-[10.5px] font-bold text-[#7a42ff] hover:underline">
                        https://{formData.subdomain || 'company'}.kaelixo.com
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* SECTION 6: Notes & Tags */}
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex flex-col justify-between" ref={dropdownRef}>
              <div>
                <div className="flex items-center gap-2.5 mb-4 pb-2.5 border-b border-gray-50">
                  <div className="w-6 h-6 rounded-lg bg-[#7a42ff] text-white flex items-center justify-center text-xs font-bold">6</div>
                  <div>
                    <h2 className="text-[13px] font-bold text-[#030C25]">Notes & Tags</h2>
                    <p className="text-[10px] text-gray-600">Add internal notes and labels for better organization.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-[11px] font-bold text-[#030C25]">Internal Notes</label>
                      <span className="text-[9px] text-gray-600">0/500</span>
                    </div>
                    <textarea 
                      rows={3}
                      value={formData.internalNotes}
                      onChange={(e) => handleChange("internalNotes", e.target.value)}
                      placeholder="Add internal notes..."
                      className="w-full text-xs bg-gray-50/70 border border-gray-200 rounded-lg p-2.5 focus:outline-none focus:border-[#7a42ff] resize-none"
                    />
                  </div>

                  <div className="relative">
                    <label className="block text-[11px] font-bold text-[#030C25] mb-1">Tags / Labels</label>
                    <div 
                      onClick={() => setIsTagDropdownOpen(true)}
                      className="flex flex-wrap gap-1.5 p-2 bg-gray-50/70 border border-gray-200 rounded-lg items-center cursor-text relative min-h-[42px]"
                    >
                      {formData.tags.map((tag, i) => (
                        <span key={i} className="text-[9.5px] bg-purple-50 text-[#7a42ff] font-bold px-2 py-1 rounded-md flex items-center gap-1">
                          {tag} <X size={10} className="cursor-pointer hover:text-rose-500" onClick={(e) => { e.stopPropagation(); handleRemoveTag(tag); }} />
                        </span>
                      ))}
                      <input 
                        type="text" 
                        value={tagInput}
                        onChange={(e) => {
                          setTagInput(e.target.value);
                          setIsTagDropdownOpen(true);
                        }}
                        onKeyDown={handleKeyDown}
                        placeholder={formData.tags.length === 0 ? "Add a tag..." : ""} 
                        className="text-xs bg-transparent focus:outline-none px-1 py-0.5 text-gray-600 flex-1 min-w-[80px]"
                      />
                      <ChevronDown size={14} className="absolute right-3 text-gray-600 pointer-events-none" />
                    </div>

                    {/* Tag Suggestions Dropdown */}
                    {isTagDropdownOpen && (
                      <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-40 overflow-y-auto">
                        <div className="p-1.5 text-[10px] text-gray-600 font-semibold px-2.5 border-b border-gray-100">Suggested Tags</div>
                        {availableTags
                          .filter(t => t.toLowerCase().includes(tagInput.toLowerCase()) && !formData.tags.includes(t))
                          .map((t, idx) => (
                            <div 
                              key={idx}
                              onClick={() => handleAddTag(t)}
                              className="px-3 py-2 text-xs font-medium text-[#030C25] hover:bg-purple-50 hover:text-[#7a42ff] cursor-pointer flex items-center gap-1.5 transition-colors"
                            >
                              <Hash size={12} className="text-[#7a42ff]" /> {t}
                            </div>
                          ))
                        }
                        {tagInput.trim() !== "" && !availableTags.some(t => t.toLowerCase() === tagInput.trim().toLowerCase()) && (
                          <div 
                            onClick={() => handleAddTag(tagInput)}
                            className="px-3 py-2 text-xs font-bold text-[#7a42ff] hover:bg-purple-50 cursor-pointer flex items-center gap-1.5 border-t border-gray-100"
                          >
                            + Add "{tagInput.startsWith('#') ? tagInput : `#${tagInput}`}"
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT COLUMN (3 Cols): Preview Card (Horizontal Header Layout + Left-Aligned Labels & Right-Aligned Values), Setup Checklist, & Quick Actions */}
        <div className="xl:col-span-3 space-y-4 self-start sticky top-5">
          
          {/* Customer Preview Card */}
          <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#030C25]">
                <Eye size={15} strokeWidth={2.5} className="text-[#7a42ff]" />
                <span>Customer Preview</span>
              </div>
            </div>

            {/* Horizontal Header: AJ Avatar on Left, Details on Right */}
            <div className="flex items-center gap-3.5 pb-3 border-b border-gray-100">
              <div className="w-14 h-14 rounded-full bg-[#7a42ff] text-white flex items-center justify-center font-semibold text-lg shadow-md shrink-0">
               AJ
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-[13px] font-black text-[#030C25] truncate">{formData.name || 'Customer Name'}</h3>
                <p className="text-[10px] font-bold text-gray-600 truncate">{formData.company || 'Company Name'}</p>
                
                <div className="flex items-center gap-1 text-[9px] text-gray-600 mt-1 truncate">
                  <Mail size={10} className="text-gray-600 shrink-0" /> 
                  <span className="font-medium truncate">{formData.email || 'email@domain.com'}</span>
                </div>
                
                <div className="flex items-center gap-1 text-[9px] text-gray-600 mt-0.5 truncate">
                  <Phone size={10} className="text-gray-600 shrink-0" /> 
                  <span className="font-medium truncate">+{formData.countryCode.replace('+', '')} {formData.phone || '00000 00000'}</span>
                </div>
              </div>
            </div>

            <div className="py-3 border-b border-gray-100 space-y-2 text-[10px]">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Customer Type</span>
                <span className="font-bold text-[#030C25] text-right">{formData.customerType}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Status</span>
                <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1 text-[9px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> {formData.status}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Region</span>
                <span className="font-bold text-[#030C25] text-right">{formData.region}</span>
              </div>
            </div>

            <div className="py-3 border-b border-gray-100 space-y-2 text-[10px]">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Selected Product</span>
                <span className="font-bold text-[#7a42ff] flex items-center gap-1 text-right">
                  <span className="w-3.5 h-3.5 rounded bg-purple-100 flex items-center justify-center text-[7.5px] font-black shrink-0">W</span> {formData.product}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Plan</span>
                <span className="font-bold text-[#030C25] text-right">{formData.plan}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Billing Cycle</span>
                <span className="font-bold text-[#030C25] text-right">{formData.billingCycle}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Seat Count</span>
                <span className="font-bold text-[#030C25] text-right">{formData.seatCount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Monthly Recurring Revenue</span>
                <span className="font-black text-[#030C25] text-right">₹{formData.mrr}</span>
              </div>
            </div>

            <div className="py-3 border-b border-gray-100 space-y-2 text-[10px]">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Subscription Start</span>
                <span className="font-bold text-[#030C25] text-right">{formData.subDate ? '12 Sep 2026' : '-'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Renewal Date</span>
                <span className="font-bold text-[#030C25] text-right">{formData.renewalDate ? '12 Oct 2026' : '-'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Trial Period</span>
                <span className="font-bold text-[#030C25] text-right">{formData.trialDays} days</span>
              </div>
            </div>

            <div className="pt-3 flex justify-between items-center text-[10px]">
              <span className="text-gray-600 font-medium">Onboarding Status</span>
              <span className="font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full text-[9px] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Not Started
              </span>
            </div>
          </div>

          {/* Setup Checklist */}
          <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-[12px] font-bold text-[#030C25]">Setup Checklist</h3>
              <span className="text-[10px] font-bold text-gray-600">{completedCount} of 6 complete</span>
            </div>

            <div className="space-y-2.5 text-[10px]">
              <div className="flex items-center gap-2.5 text-gray-600 font-medium">
                <div className={`w-3.5 h-3.5 rounded-full border ${isInfoComplete ? 'border-[#7a42ff] bg-[#7a42ff] text-white flex items-center justify-center text-[8px]' : 'border-gray-300'}`}>
                  {isInfoComplete && '✓'}
                </div>
                <span>Customer information</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-600 font-medium">
                <div className={`w-3.5 h-3.5 rounded-full border ${isBillingComplete ? 'border-[#7a42ff] bg-[#7a42ff] text-white flex items-center justify-center text-[8px]' : 'border-gray-300'}`}>
                  {isBillingComplete && '✓'}
                </div>
                <span>Billing configuration</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-600 font-medium">
                <div className={`w-3.5 h-3.5 rounded-full border ${isProductComplete ? 'border-[#7a42ff] bg-[#7a42ff] text-white flex items-center justify-center text-[8px]' : 'border-gray-300'}`}>
                  {isProductComplete && '✓'}
                </div>
                <span>Product subscription</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-600 font-medium">
                <div className={`w-3.5 h-3.5 rounded-full border ${isAddressComplete ? 'border-[#7a42ff] bg-[#7a42ff] text-white flex items-center justify-center text-[8px]' : 'border-gray-300'}`}>
                  {isAddressComplete && '✓'}
                </div>
                <span>Company address</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-600 font-medium">
                <div className={`w-3.5 h-3.5 rounded-full border ${isProvisioningComplete ? 'border-[#7a42ff] bg-[#7a42ff] text-white flex items-center justify-center text-[8px]' : 'border-gray-300'}`}>
                  {isProvisioningComplete && '✓'}
                </div>
                <span>Provisioning setup</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-600 font-medium">
                <div className="w-3.5 h-3.5 rounded-full border border-gray-300" />
                <span>Send invitation</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] space-y-3">
            <div>
              <h3 className="text-[12px] font-bold text-[#030C25]">Quick Actions</h3>
              <p className="text-[9.5px] text-gray-600">Common actions for this customer</p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button className="py-2.5 bg-white hover:bg-gray-50 text-[#7a42ff] font-bold rounded-xl text-xs transition-colors border border-gray-200 shadow-sm flex items-center justify-center gap-1.5 cursor-pointer">
                <FileTextIcon size={13} /> Save Draft
              </button>
              <button className="py-2.5 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm cursor-pointer" style={{ background: 'linear-gradient(90deg, #7a42ff 0%, #FF0052 100%)' }}>
                <Plus size={13} strokeWidth={3} /> Create Customer
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button className="py-2.5 bg-white hover:bg-gray-50 text-[#7a42ff] font-bold rounded-xl text-xs transition-colors border border-gray-200 flex items-center justify-center gap-1.5 cursor-pointer">
                <Send size={13} className="rotate-45" /> Send Invitation
              </button>
              <button onClick={onBack} className="py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold rounded-xl text-xs transition-colors border border-rose-100 flex items-center justify-center gap-1.5 cursor-pointer">
                <X size={13} strokeWidth={3} /> Cancel
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

function FileTextIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}
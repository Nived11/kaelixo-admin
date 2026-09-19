"use client";

import { useState } from "react";
import { 
  ArrowLeft, ChevronRight, UploadCloud, ChevronDown, CheckCircle2, 
  ExternalLink, Calendar, Zap, Hexagon, Sparkles, Check, Rocket, X, FileText
} from "lucide-react";

export default function AddTenantForm({ onBack }: { onBack: () => void }) {
  const [formData, setFormData] = useState({
    tenantName: "Acme Corp",
    tenantSlug: "acme-corp",
    displayName: "Acme Corporation",
    description: "A leading travel company managing global bookings and customer experiences.",
    industry: "Travel & Hospitality",
    
    company: "ABC Travels",
    plan: "Professional",
    billingCycle: "Monthly",
    currency: "INR (₹)",
    
    products: ["Way We Go CRM", "Booking Engine", "AI Tools Suite"],
    
    workspaceUrl: "acme",
    region: "India (IN)",
    environment: "Production",
    adminUser: "John Smith",
    sendWelcomeEmail: true
  });

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleProduct = (productName: string) => {
    setFormData(prev => {
      if (prev.products.includes(productName)) {
        return { ...prev, products: prev.products.filter(p => p !== productName) };
      } else {
        return { ...prev, products: [...prev.products, productName] };
      }
    });
  };

  const availableProductsList = [
    { name: "Way We Go CRM", desc: "Customer management", icon: "W", color: "text-[#5c45fd]", type: "text" },
    { name: "CMS Platform", desc: "Content management", icon: Hexagon, color: "text-rose-600", type: "icon" },
    { name: "Booking Engine", desc: "Travel & reservations", icon: Calendar, color: "text-blue-600", type: "icon" },
    { name: "Automation Suite", desc: "Workflow automation", icon: Zap, color: "text-amber-500", type: "icon" },
    { name: "AI Tools Suite", desc: "Business productivity", icon: Sparkles, color: "text-[#5c45fd]", type: "icon" }
  ];

  const steps = [
    { num: 1, title: "Basic Information", sub: "Tenant details" },
    { num: 2, title: "Company & Plan", sub: "Link and assign plan" },
    { num: 3, title: "Products & Features", sub: "Enable products" },
    { num: 4, title: "Provisioning & Access", sub: "Setup environment" },
    { num: 5, title: "Review & Create", sub: "Confirm details" },
  ];

  return (
    <div className="space-y-4 pt-1">
      
      {/* Top Header & Breadcrumb */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 text-[11px] text-gray-700 font-medium">
          <button onClick={onBack} className="hover:text-[#5c45fd] flex items-center gap-1 font-medium text-gray-700 bg-transparent cursor-pointer">
             <ArrowLeft size={13} strokeWidth={2.5} /> Tenants
          </button>
          <ChevronRight size={12} className="text-gray-600" />
          <span className="text-[#030C25] font-bold">Add Tenant</span>
        </div>
        <div>
          <h1 className="text-[22px] font-black text-[#030C25]">Add New Tenant</h1>
          <p className="text-[12px] text-gray-700 font-medium mt-0.5">Create and configure a new tenant workspace for the KAELIXO ecosystem.</p>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-start">
        
        {/* LEFT COLUMN (Stepper + Form Sections - 9 Cols for wider area) */}
        <div className="xl:col-span-9 space-y-4">

          {/* Stepper INSIDE Left Column (No Scroll, Flex Wrap for small screens) */}
          <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] flex flex-wrap xl:flex-nowrap items-center justify-between gap-3">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center gap-2 lg:gap-3">
                <div className="flex items-center gap-2.5">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 ${
                    i <= 3 ? 'bg-[#5c45fd] text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {step.num}
                  </div>
                  <div className="hidden sm:block">
                    <h3 className={`text-[11.5px] font-bold leading-tight ${i <= 3 ? 'text-[#030C25]' : 'text-gray-600'}`}>{step.title}</h3>
                    <p className="text-[9.5px] text-gray-600 font-medium leading-tight mt-0.5">{step.sub}</p>
                  </div>
                </div>
                {i !== steps.length - 1 && <ChevronRight size={16} className="text-gray-300 ml-1 lg:ml-2" strokeWidth={2} />}
              </div>
            ))}
          </div>
          
          {/* SECTION 1: Basic Information */}
          <div className="bg-white rounded-lg p-5 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
            <div className="flex items-start gap-3 mb-5">
              <div className="w-6 h-6 rounded-full bg-[#5c45fd] text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">1</div>
              <div>
                <h2 className="text-[13.5px] font-black text-[#030C25]">Basic Information</h2>
                <p className="text-[10.5px] text-gray-700 font-medium mt-0.5">Enter the basic details for the tenant workspace.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Tenant Name <span className="text-rose-500">*</span></label>
                <input type="text" value={formData.tenantName} onChange={(e) => handleChange("tenantName", e.target.value)} className="w-full text-[11.5px] font-medium text-[#030C25] border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-[#5c45fd] bg-white" />
              </div>
              <div>
                <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Tenant Slug <span className="text-rose-500">*</span></label>
                <input type="text" value={formData.tenantSlug} onChange={(e) => handleChange("tenantSlug", e.target.value)} className="w-full text-[11.5px] font-medium text-[#030C25] border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-[#5c45fd] bg-white" />
                <p className="text-[9px] text-gray-600 mt-1">https://{formData.tenantSlug}.kaelixo.com</p>
              </div>
              <div>
                <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Display Name <span className="text-rose-500">*</span></label>
                <input type="text" value={formData.displayName} onChange={(e) => handleChange("displayName", e.target.value)} className="w-full text-[11.5px] font-medium text-[#030C25] border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-[#5c45fd] bg-white" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-6">
                <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Description</label>
                <div className="relative">
                  <textarea 
                    rows={3}
                    value={formData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    className="w-full text-[11.5px] font-medium text-[#030C25] border border-gray-200 rounded-lg px-3 py-2 pb-6 focus:outline-none focus:border-[#5c45fd] bg-white resize-none h-[78px]" 
                  />
                  <span className="absolute bottom-2 right-2.5 text-[9px] text-gray-600 font-medium">68/500</span>
                </div>
              </div>
              <div className="md:col-span-3">
                <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Tenant Logo</label>
                <div className="border border-dashed border-gray-300 rounded-lg h-[78px] flex items-center justify-center bg-gray-50/50 hover:bg-gray-50 cursor-pointer transition-colors px-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center text-[#5c45fd] shrink-0">
                      <UploadCloud size={15} />
                    </div>
                    <div>
                      <p className="text-[10.5px] font-bold text-[#030C25]">Upload Logo</p>
                      <p className="text-[8.5px] text-gray-600">PNG, JPG or SVG (Max 2MB)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-3">
                <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Industry</label>
                <div className="relative">
                  <select 
                    value={formData.industry}
                    onChange={(e) => handleChange("industry", e.target.value)}
                    className="w-full text-[11.5px] font-medium text-[#030C25] border border-gray-200 rounded-lg px-3 py-2 appearance-none focus:outline-none focus:border-[#5c45fd] bg-white h-[36px]"
                  >
                    <option value="Travel & Hospitality">Travel & Hospitality</option>
                    <option value="Technology">Technology</option>
                    <option value="Retail">Retail</option>
                  </select>
                  <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: Company & Plan */}
          <div className="bg-white rounded-lg p-5 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
            <div className="flex items-start gap-3 mb-5">
              <div className="w-6 h-6 rounded-full bg-[#5c45fd] text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">2</div>
              <div>
                <h2 className="text-[13.5px] font-black text-[#030C25]">Company & Plan</h2>
                <p className="text-[10.5px] text-gray-700 font-medium mt-0.5">Link to a company and assign the subscription plan.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Company <span className="text-rose-500">*</span></label>
                <div className="relative">
                  <div className="w-full text-[11.5px] font-semibold text-[#030C25] border border-gray-200 rounded-lg px-3 py-2 bg-white flex items-center justify-between cursor-pointer h-[36px]">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-blue-700 text-white flex items-center justify-center text-[8px] font-bold">AL</div>
                      <span className="truncate max-w-[80px]">ABC Travels</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-600 shrink-0">
                      <X size={12} className="hover:text-gray-600" />
                      <ChevronDown size={13} />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Subscription Plan <span className="text-rose-500">*</span></label>
                <div className="relative">
                  <select 
                    value={formData.plan}
                    onChange={(e) => handleChange("plan", e.target.value)}
                    className="w-full text-[11.5px] font-medium text-[#030C25] border border-gray-200 rounded-lg px-3 py-2 appearance-none focus:outline-none focus:border-[#5c45fd] bg-white h-[36px]"
                  >
                    <option value="Professional">Professional</option>
                    <option value="Enterprise">Enterprise</option>
                  </select>
                  <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Billing Cycle <span className="text-rose-500">*</span></label>
                <div className="relative">
                  <select 
                    value={formData.billingCycle}
                    onChange={(e) => handleChange("billingCycle", e.target.value)}
                    className="w-full text-[11.5px] font-medium text-[#030C25] border border-gray-200 rounded-lg px-3 py-2 appearance-none focus:outline-none focus:border-[#5c45fd] bg-white h-[36px]"
                  >
                    <option value="Monthly">Monthly</option>
                    <option value="Annually">Annually</option>
                  </select>
                  <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Currency <span className="text-rose-500">*</span></label>
                <div className="relative">
                  <select 
                    value={formData.currency}
                    onChange={(e) => handleChange("currency", e.target.value)}
                    className="w-full text-[11.5px] font-medium text-[#030C25] border border-gray-200 rounded-lg px-3 py-2 appearance-none focus:outline-none focus:border-[#5c45fd] bg-white h-[36px]"
                  >
                    <option value="INR (₹)">INR (₹)</option>
                    <option value="USD ($)">USD ($)</option>
                  </select>
                  <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 3: Products & Features */}
          <div className="bg-white rounded-lg p-5 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-6 h-6 rounded-full bg-[#5c45fd] text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">3</div>
              <div>
                <h2 className="text-[13.5px] font-black text-[#030C25]">Products & Features</h2>
                <p className="text-[10.5px] text-gray-700 font-medium mt-0.5">Select the products and modules to enable for this tenant.</p>
              </div>
            </div>

            <label className="block text-[10.5px] font-bold text-[#030C25] mb-2.5">Available Products</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2.5">
              {availableProductsList.map((prod, i) => {
                const isSelected = formData.products.includes(prod.name);
                return (
                  <div 
                    key={i} 
                    onClick={() => toggleProduct(prod.name)}
                    className={`border rounded-md p-2.5 cursor-pointer transition-all flex items-start gap-2 select-none ${
                      isSelected ? 'border-[#5c45fd] bg-[#fbfaff]' : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className={`w-3.5 h-3.5 rounded mt-0.5 flex items-center justify-center shrink-0 transition-colors ${
                      isSelected ? 'bg-[#5c45fd] text-white' : 'border border-gray-300 bg-white'
                    }`}>
                      {isSelected && <Check size={11} strokeWidth={3.5} />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 whitespace-nowrap">
                        {prod.type === 'text' ? (
                          <span className={`text-[13px] font-black leading-none ${prod.color}`}>{prod.icon as string}</span>
                        ) : (
                          <span className={prod.color}>
                            {/* @ts-ignore */}
                            <prod.icon size={13} fill="currentColor" strokeWidth={0} />
                          </span>
                        )}
                        <h4 className="text-[10.5px] font-bold text-[#030C25] whitespace-nowrap">{prod.name}</h4>
                      </div>
                      <p className="text-[8.5px] text-gray-600 font-medium mt-0.5 whitespace-nowrap">{prod.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SECTION 4: Provisioning & Access */}
          <div className="bg-white rounded-lg p-5 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
            <div className="flex items-start gap-3 mb-5">
              <div className="w-6 h-6 rounded-full bg-[#5c45fd] text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">4</div>
              <div>
                <h2 className="text-[13.5px] font-black text-[#030C25]">Provisioning & Access</h2>
                <p className="text-[10.5px] text-gray-700 font-medium mt-0.5">Configure workspace, domain and admin access.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
              <div className="md:col-span-5">
                <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Workspace URL <span className="text-rose-500">*</span></label>
                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden h-[36px] focus-within:border-[#5c45fd] bg-white">
                  <input 
                    type="text" 
                    value={formData.workspaceUrl}
                    onChange={(e) => handleChange("workspaceUrl", e.target.value)}
                    className="w-full text-[11.5px] font-medium px-3 py-1.5 focus:outline-none bg-transparent text-[#030C25]" 
                  />
                  <span className="text-[10.5px] font-medium text-gray-700 bg-gray-50 border-l border-gray-200 px-2.5 h-full flex items-center shrink-0">
                    .kaelixo.com
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[9.5px] font-bold text-emerald-600 mt-1 ml-0.5">
                  <Check size={11} strokeWidth={3} /> Available
                </div>
              </div>
              <div className="md:col-span-3">
                <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Region <span className="text-rose-500">*</span></label>
                <div className="relative">
                  <select 
                    value={formData.region}
                    onChange={(e) => handleChange("region", e.target.value)}
                    className="w-full text-[11.5px] font-medium text-[#030C25] border border-gray-200 rounded-lg px-3 py-2 appearance-none focus:outline-none focus:border-[#5c45fd] bg-white h-[36px]"
                  >
                    <option value="India (IN)">🇮🇳 India (IN)</option>
                    <option value="US (East)">🇺🇸 US (East)</option>
                  </select>
                  <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
                </div>
              </div>
              <div className="md:col-span-4">
                <label className="block text-[10.5px] font-bold text-[#030C25] mb-2">Environment <span className="text-rose-500">*</span></label>
                <div className="flex items-center gap-4 h-[36px]">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${formData.environment === 'Production' ? 'border-[#5c45fd]' : 'border-gray-300'}`}>
                      {formData.environment === 'Production' && <div className="w-1.5 h-1.5 rounded-full bg-[#5c45fd]" />}
                    </div>
                    <span className="text-[11.5px] font-medium text-[#030C25]">Production</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${formData.environment === 'Staging' ? 'border-[#5c45fd]' : 'border-gray-300'}`}>
                      {formData.environment === 'Staging' && <div className="w-1.5 h-1.5 rounded-full bg-[#5c45fd]" />}
                    </div>
                    <span className="text-[11.5px] font-medium text-gray-600">Staging</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10.5px] font-bold text-[#030C25] mb-1.5">Admin User <span className="text-rose-500">*</span></label>
                <div className="relative">
                  <select 
                    value={formData.adminUser}
                    onChange={(e) => handleChange("adminUser", e.target.value)}
                    className="w-full text-[11.5px] font-medium text-[#030C25] border border-gray-200 rounded-lg px-3 py-2 appearance-none focus:outline-none focus:border-[#5c45fd] bg-white h-[36px]"
                  >
                    <option value="John Smith">John Smith (john@acmetravel.com)</option>
                  </select>
                  <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-[10.5px] font-bold text-[#030C25] mb-2">Send Welcome Email</label>
                <div className="flex items-center gap-2.5 cursor-pointer h-[36px]" onClick={() => handleChange("sendWelcomeEmail", !formData.sendWelcomeEmail)}>
                  <div className={`w-7 h-4 rounded-full flex items-center px-0.5 transition-colors shrink-0 ${formData.sendWelcomeEmail ? 'bg-[#5c45fd]' : 'bg-gray-300'}`}>
                    <div className={`w-3 h-3 bg-white rounded-full transition-transform ${formData.sendWelcomeEmail ? 'translate-x-3' : 'translate-x-0'}`}></div>
                  </div>
                  <span className="text-[10.5px] font-medium text-gray-700 select-none">Send setup instructions to the tenant admin</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN (Preview & Summary - 3 Cols for compact width) */}
        <div className="xl:col-span-3 space-y-4 sticky top-5">
          
          {/* Tenant Preview */}
          <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-1.5">
                <ExternalLink size={13} className="text-[#5c45fd]" strokeWidth={2.5} />
                <h3 className="text-[12px] font-black text-[#030C25]">Tenant Preview</h3>
              </div>
              <span className="text-[9px] font-bold text-[#5c45fd] cursor-pointer hover:underline flex items-center gap-1">
                View in Portal <ExternalLink size={9} />
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#5c45fd] text-white flex items-center justify-center text-[16px] font-black shadow-sm shrink-0">
                AC
              </div>
              <div className="min-w-0 pt-0.5">
                <div className="flex items-center gap-1 text-[8px] font-bold text-emerald-600 mb-0.5">
                  <CheckCircle2 size={9} /> Ready to Create
                </div>
                <h4 className="text-[13px] font-black text-[#030C25] truncate leading-tight">Acme Corporation</h4>
                <p className="text-[9px] text-gray-600 truncate mt-0.5">https://acme.kaelixo.com</p>
                
                <div className="flex flex-wrap items-center gap-1.5 mt-2">
                  <span className="text-[8px] font-bold text-[#5c45fd] bg-purple-50 px-1.5 py-0.5 rounded whitespace-nowrap">Professional Plan</span>
                  <span className="text-[8px] font-bold text-[#5c45fd] bg-purple-50 px-1.5 py-0.5 rounded whitespace-nowrap">Monthly Billing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Configuration Summary */}
          <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-1.5 mb-3.5">
              <FileText size={13} className="text-[#5c45fd]" strokeWidth={2.5} />
              <h3 className="text-[12px] font-black text-[#030C25]">Configuration Summary</h3>
            </div>

            <div className="space-y-3 text-[10px]">
              <div className="flex justify-between items-center gap-2">
                <span className="text-gray-700 font-medium shrink-0">Tenant Name</span>
                <span className="font-bold text-[#030C25] truncate text-right">{formData.tenantName}</span>
              </div>
              <div className="flex justify-between items-center gap-2">
                <span className="text-gray-700 font-medium shrink-0">Tenant Slug</span>
                <span className="font-bold text-[#030C25] truncate text-right">{formData.tenantSlug}</span>
              </div>
              <div className="flex justify-between items-center gap-2">
                <span className="text-gray-700 font-medium shrink-0">Company</span>
                <span className="font-bold text-[#030C25] truncate text-right">{formData.company}</span>
              </div>
              <div className="flex justify-between items-center gap-2">
                <span className="text-gray-700 font-medium shrink-0">Plan</span>
                <span className="font-bold text-[#030C25] truncate text-right">{formData.plan}</span>
              </div>
              <div className="flex justify-between items-center gap-2">
                <span className="text-gray-700 font-medium shrink-0">Billing Cycle</span>
                <span className="font-bold text-[#030C25] truncate text-right">{formData.billingCycle}</span>
              </div>
              <div className="flex justify-between items-center gap-2">
                <span className="text-gray-700 font-medium shrink-0">Currency</span>
                <span className="font-bold text-[#030C25] truncate text-right">{formData.currency}</span>
              </div>
              
              <div className="pt-2 border-t border-gray-50">
                <span className="text-gray-700 font-medium block mb-2">Products</span>
                <div className="space-y-1.5">
                  {formData.products.includes("Way We Go CRM") && (
                    <div className="flex items-center justify-end gap-1.5 font-bold text-[#030C25]">
                      <span className="text-[10px] font-black text-[#5c45fd] leading-none">W</span> Way We Go CRM
                    </div>
                  )}
                  {formData.products.includes("Booking Engine") && (
                    <div className="flex items-center justify-end gap-1.5 font-bold text-[#030C25]">
                      <Calendar size={10} className="text-blue-600" /> Booking Engine
                    </div>
                  )}
                  {formData.products.includes("AI Tools Suite") && (
                    <div className="flex items-center justify-end gap-1.5 font-bold text-[#030C25]">
                      <Sparkles size={10} className="text-[#5c45fd]" /> AI Tools Suite
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-2 border-t border-gray-50 flex justify-between items-center gap-2">
                <span className="text-gray-700 font-medium shrink-0">Region</span>
                <span className="font-bold text-[#030C25] flex items-center gap-1.5 truncate text-right">
                  <img src="https://flagcdn.com/w40/in.png" alt="IN" className="w-3.5 h-2.5 rounded-[1px] object-cover shrink-0" /> {formData.region}
                </span>
              </div>
              <div className="flex justify-between items-center gap-2">
                <span className="text-gray-700 font-medium shrink-0">Environment</span>
                <span className="font-bold text-emerald-600 flex items-center gap-1 truncate text-right">
                  <CheckCircle2 size={10} className="shrink-0" /> {formData.environment}
                </span>
              </div>
              <div className="flex justify-between items-start pt-1 gap-2">
                <span className="text-gray-700 font-medium pt-0.5 shrink-0">Admin User</span>
                <div className="text-right min-w-0">
                  <span className="font-bold text-[#5c45fd] block truncate">{formData.adminUser}</span>
                  <span className="text-[8.5px] text-gray-600 font-medium truncate block">(john@acmetravel.com)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ready to Create Action Box */}
          <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-1.5 mb-2">
              <Rocket size={13} className="text-[#5c45fd]" strokeWidth={2.5} />
              <h3 className="text-[12px] font-black text-[#030C25]">Ready to Create?</h3>
            </div>
            <p className="text-[9px] text-gray-600 font-medium mb-4 leading-relaxed">
              The tenant will be provisioned with the selected products and settings. You can modify these settings later.
            </p>
            <div className="space-y-2 flex flex-col">
              <button className="w-full bg-[#5c45fd] hover:bg-[#4a34e8] text-white font-bold text-[11px] py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer">
                <Rocket size={12} /> Create Tenant
              </button>
              <button onClick={onBack} className="w-full bg-white hover:bg-gray-50 text-gray-600 font-bold text-[11px] py-2 rounded-lg transition-colors cursor-pointer border border-gray-200">
                Cancel
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
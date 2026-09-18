"use client";

import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CompaniesHeader() {
  const router = useRouter();

  return (
    <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
      <div>
        <h1 className="text-[28px] font-black text-[#030C25] tracking-tight">Companies</h1>
        <p className="text-sm text-[#64748b] font-medium mt-1">
          Manage all companies across KAELIXO products and billing accounts.
        </p>
      </div>
      <button 
        onClick={() => router.push("/companies/add")}
        className="px-4.5 py-3 rounded-lg text-white font-bold text-xs shadow-sm transition-all hover:opacity-90 flex items-center gap-1.5 cursor-pointer"
        style={{ background: 'linear-gradient(90deg, #7a42ff 0%, #FF0052 100%)' }}
      >
        <Plus size={14} strokeWidth={3} /> Add Company
      </button>
    </div>
  );
}
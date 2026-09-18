"use client";

import AddCompanyForm from "@/features/companies/components/AddCompanyForm";
import { useRouter } from "next/navigation";

export default function AddCompanyPage() {
  const router = useRouter();

  return (
    <div className="max-w-[1600px] mx-auto pb-10">
      <AddCompanyForm 
        onBack={() => {
          if (window.history.length > 1) {
            router.back();
          } else {
            router.push("/companies");
          }
        }} 
      />
    </div>
  );
}
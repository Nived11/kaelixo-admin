"use client";

import AddTenantForm from "@/features/tenants/components/AddTenantForm";
import { useRouter } from "next/navigation";

export default function AddTenantPage() {
  const router = useRouter();

  return (
    <div className="max-w-[1600px] mx-auto pb-10">
      <AddTenantForm 
        onBack={() => {
          if (window.history.length > 1) {
            router.back();
          } else {
            router.push("/tenants");
          }
        }} 
      />
    </div>
  );
}
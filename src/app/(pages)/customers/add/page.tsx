"use client";

import AddCustomerForm from "@/features/customers/components/AddCustomerForm";
import { useRouter } from "next/navigation";

export default function AddCustomerPage() {
  const router = useRouter();

  return (
    <div className="max-w-[1600px] mx-auto pb-10">
      <AddCustomerForm 
        onBack={() => {
          if (window.history.length > 1) {
            router.back();
          } else {
            router.push("/customers");
          }
        }} 
      />
    </div>
  );
}
"use client";

import AddSubscriptionForm from "@/features/subscriptions/components/AddSubscriptionForm";
import { useRouter } from "next/navigation";

export default function AddSubscriptionPage() {
  const router = useRouter();

  return (
    <div className="max-w-[1600px] mx-auto pb-10 bg-slate-50 min-h-screen">
      <AddSubscriptionForm 
        onBack={() => {
          if (window.history.length > 1) {
            router.back();
          } else {
            router.push("/subscriptions");
          }
        }} 
      />
    </div>
  );
}
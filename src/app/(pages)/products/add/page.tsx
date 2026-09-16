"use client";

import ProductForm from "@/features/products/components/ProductForm";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const router = useRouter();

  return (
    <div className="max-w-[1600px] mx-auto pb-10">
      <ProductForm 
        origin="Products" 
        onBack={() => {
          // If router can go back, go back, else push to products overview
          if (window.history.length > 1) {
            router.back();
          } else {
            router.push("/products");
          }
        }} 
      />
    </div>
  );
}
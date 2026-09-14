"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Lock, Mail, ArrowRight, Loader2 } from "lucide-react";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Dummy API Call Simulation (1 second delay)
    setTimeout(() => {
      // Setting a dummy cookie for the middleware to read
      document.cookie = "admin_token=dummy_kaelixo_token; path=/; max-age=86400";
      
      toast.success("Welcome back, Admin!");
      
      // window.location forces a hard navigation so middleware triggers properly
     window.location.href = "/";
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        
        <div className="p-8">
          {/* Logo Area */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-[#FF0052] rounded-xl flex items-center justify-center shadow-lg shadow-rose-200">
              <Lock className="text-white w-8 h-8" />
            </div>
          </div>
          
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Kaelixo Admin</h2>
            <p className="text-sm text-gray-500 mt-2">Enter your credentials to access the dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  required
                  defaultValue="admin@kaelixo.com"
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF0052] focus:border-[#FF0052] outline-none transition-all text-sm"
                  placeholder="admin@kaelixo.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  required
                  defaultValue="password123"
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF0052] focus:border-[#FF0052] outline-none transition-all text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded text-[#FF0052] focus:ring-[#FF0052]" defaultChecked />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-[#FF0052] hover:underline font-medium">Forgot password?</a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 bg-[#FF0052] hover:bg-[#e60049] text-white py-2.5 rounded-lg font-medium transition-all focus:ring-4 focus:ring-rose-200 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Sign In <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
        
        <div className="bg-gray-50 text-center py-4 border-t border-gray-100">
          <p className="text-xs text-gray-500">
            &copy; 2026 Kaelixo. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
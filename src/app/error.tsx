"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AlertOctagon, RefreshCw, Home, Mail, ShieldAlert } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to your analytics or console
    console.error("Application Error:", error);
  }, [error]);

  return (
    <>
      <Navbar />

      <main className="flex-1 flex flex-col justify-center relative overflow-hidden bg-slate-50 dark:bg-slate-950 py-24 select-none">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-10 grid-bg" />

        {/* Ambient glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-gradient-to-tr from-rose-500/10 to-[#0392EA]/10 rounded-full filter blur-[80px] sm:blur-[120px] pointer-events-none animate-pulse-slow" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          {/* Animated Graphic Element */}
          <div className="relative mb-8 group">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-[#0392EA] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse-slow" />
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl flex items-center justify-center text-rose-500 animate-float shadow-xl">
              <AlertOctagon className="w-12 sm:w-14 h-12 sm:h-14 text-rose-500 animate-pulse-slow" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-rose-500 text-white rounded-full p-2 border-4 border-white dark:border-slate-950 shadow-md">
              <ShieldAlert className="w-5 h-5" />
            </div>
          </div>

          <h1 className="text-7xl sm:text-9xl font-black tracking-tighter bg-gradient-to-r from-rose-500 to-[#0392EA] bg-clip-text text-transparent mb-4">
            500
          </h1>
          
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            Unexpected System Interruption
          </h2>
          
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
            The server encountered an internal issue and could not complete your request. Our engineering team has been notified.
          </p>

          {/* Error Digest (if present, helpful for debugging without leaking detail) */}
          {error.digest && (
            <div className="mb-8 px-4 py-2 bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-lg max-w-sm mx-auto">
              <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400 select-all">
                DIGEST ID: {error.digest}
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => reset()}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#0392EA] hover:bg-[#037AC3] text-white font-bold rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 text-sm flex items-center justify-center gap-2 group cursor-pointer"
            >
              <RefreshCw className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              Try Again
            </button>

            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-3.5 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold rounded-xl border border-slate-200 dark:border-slate-800 transition-all duration-300 text-sm flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4 text-[#0392EA]" />
              Return Home
            </Link>
          </div>

          {/* Support Link */}
          <div className="mt-12 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <span>Still experiencing issues?</span>
            <a href="mailto:hello@ushaconsultancy.com" className="text-[#0392EA] hover:underline font-bold inline-flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" />
              Contact Support
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

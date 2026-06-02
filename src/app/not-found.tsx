import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Compass, ArrowRight, Home, Phone, HelpCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Usha Consultancy",
  description: "The page you are looking for does not exist or has been moved.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="flex-1 flex flex-col justify-center relative overflow-hidden bg-slate-50 dark:bg-slate-950 py-24 select-none">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-10 grid-bg" />

        {/* Ambient glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-gradient-to-tr from-[#0392EA]/20 to-[#00F2FE]/20 rounded-full filter blur-[80px] sm:blur-[120px] pointer-events-none animate-pulse-slow" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          {/* Animated Graphic Element */}
          <div className="relative mb-8 group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0392EA] to-[#00F2FE] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse-slow" />
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl flex items-center justify-center text-[#0392EA] animate-float shadow-xl">
              <Compass className="w-12 sm:w-14 h-12 sm:h-14 animate-spin-slow text-[#0392EA]" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white rounded-full p-2 border-4 border-white dark:border-slate-950 shadow-md">
              <HelpCircle className="w-5 h-5" />
            </div>
          </div>

          <h1 className="text-7xl sm:text-9xl font-black tracking-tighter bg-gradient-to-r from-[#0392EA] to-[#00F2FE] bg-clip-text text-transparent mb-4">
            404
          </h1>
          
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            Lost in the Cloud?
          </h2>
          
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-md mx-auto mb-10 leading-relaxed">
            The page you are looking for has been moved, renamed, or doesn&apos;t exist in this repository. Let&apos;s get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-3.5 bg-[#0392EA] hover:bg-[#037AC3] text-white font-bold rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 text-sm flex items-center justify-center gap-2 group"
            >
              <Home className="w-4 h-4" />
              Return Home
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3.5 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold rounded-xl border border-slate-200 dark:border-slate-800 transition-all duration-300 text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#0392EA]" />
              Support Team
            </Link>
          </div>

          {/* Quick Helpful Links Grid */}
          <div className="mt-16 pt-8 border-t border-slate-200/60 dark:border-slate-800/80 w-full max-w-lg">
            <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">
              Popular Destinations
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="/services/web-development"
                className="p-3 text-left bg-white/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 hover:border-[#0392EA]/40 rounded-xl transition-all group flex items-center justify-between"
              >
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-[#0392EA]">Web Engineering</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#0392EA]" />
              </Link>
              <Link
                href="/services/cloud-devops"
                className="p-3 text-left bg-white/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 hover:border-[#0392EA]/40 rounded-xl transition-all group flex items-center justify-between"
              >
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-[#0392EA]">Cloud & DevOps</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#0392EA]" />
              </Link>
              <Link
                href="/case-studies"
                className="p-3 text-left bg-white/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 hover:border-[#0392EA]/40 rounded-xl transition-all group flex items-center justify-between"
              >
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-[#0392EA]">Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#0392EA]" />
              </Link>
              <Link
                href="/about"
                className="p-3 text-left bg-white/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 hover:border-[#0392EA]/40 rounded-xl transition-all group flex items-center justify-between"
              >
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-[#0392EA]">About Company</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#0392EA]" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

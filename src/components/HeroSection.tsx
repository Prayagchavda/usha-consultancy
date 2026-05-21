"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-28 md:py-36 grid-bg">
      {/* Glow shapes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0392EA]/10 dark:bg-[#0392EA]/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-[#00F2FE]/10 dark:bg-[#00F2FE]/5 rounded-full filter blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Pill Tagline */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 mb-6 cursor-pointer select-none"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#0392EA]" />
              <span className="uppercase tracking-wider">Build. Scale. Elevate with Usha Consultancy</span>
              <ChevronRight className="w-3 h-3 text-slate-400" />
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-white"
            >
              A Software Engineering <br />
              <span className="bg-gradient-to-r from-[#0392EA] to-[#00F2FE] bg-clip-text text-transparent">
                Company Powering
              </span> <br />
              Digital Innovation
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-600 dark:text-slate-400 mt-6 max-w-2xl leading-relaxed"
            >
              We design, build, and optimize high-performing digital systems, custom cloud engines, and e-commerce platforms for enterprises that demand mission-critical performance.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="px-8 py-4 flex items-center justify-center gap-2 bg-[#0392EA] hover:bg-[#037AC3] border border-[#037AC3] shadow-[0px_2px_1px_rgba(0,117,189,0.20),4px_4px_16px_rgba(1,29,47,0.12),inset_0px_7px_7px_rgba(255,255,255,0.25)] transition-all duration-300 rounded-2xl text-lg font-bold text-white cursor-pointer"
              >
                Book a Strategy Call
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services/web-development"
                className="px-8 py-4 flex items-center justify-center gap-2 bg-white dark:bg-slate-900 text-sky-500 dark:text-sky-400 font-bold rounded-2xl border border-sky-300 dark:border-sky-800 shadow-[4px_4px_16px_rgba(1,29,47,0.12)] hover:bg-sky-50 dark:hover:bg-slate-800 transition-all duration-300 text-lg cursor-pointer"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>

          {/* Right Side: High-Tech Concentric Arcs */}
          <div className="lg:col-span-5 flex justify-center items-center relative h-[400px] md:h-[450px]">
            <div className="absolute w-[350px] h-[350px] md:w-[400px] md:h-[400px] flex items-center justify-center">
              
              {/* Outer Circular Track */}
              <div className="absolute inset-0 rounded-full border border-dashed border-slate-200 dark:border-slate-800 animate-spin-slow" />
              
              {/* Middle Circular Track */}
              <div className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-slate-300 dark:border-slate-800/80 animate-spin-reverse-slow" />

              {/* Inner Circular Track */}
              <div className="absolute w-[60%] h-[60%] rounded-full border border-slate-200 dark:border-slate-800" />

              {/* Glow Center circle */}
              <div className="absolute w-[40%] h-[40%] rounded-full bg-gradient-to-br from-[#0392EA] to-[#00F2FE] opacity-20 filter blur-xl animate-pulse-slow" />
              
              {/* Central Logo */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute w-20 h-20 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center shadow-2xl z-10"
              >
                <span className="font-extrabold text-2xl bg-gradient-to-r from-[#0392EA] to-[#00F2FE] bg-clip-text text-transparent">UC</span>
              </motion.div>

              {/* Orbiting Tech Nodes */}
              {/* React (Outer Ring) */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full shadow-lg flex items-center justify-center animate-float">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-6 h-6" />
              </div>

              {/* Next.js (Outer Ring Right) */}
              <div className="absolute top-1/2 -right-6 -translate-y-1/2 w-12 h-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-6 h-6 dark:invert" />
              </div>

              {/* Node.js (Outer Ring Left) */}
              <div className="absolute top-1/2 -left-6 -translate-y-1/2 w-12 h-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: "2s" }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-6 h-6" />
              </div>

              {/* Shopify (Middle Ring Bottom Right) */}
              <div className="absolute bottom-6 right-10 w-11 h-11 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: "1.5s" }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg" alt="Shopify" className="w-6 h-6" />
              </div>

              {/* Tailwind CSS (Middle Ring Bottom Left) */}
              <div className="absolute bottom-6 left-10 w-11 h-11 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: "2.5s" }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-6 h-6" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

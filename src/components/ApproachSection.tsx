"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Rocket, BarChart3 } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "Discovery & Architecture",
    desc: "We analyze your business context, uncover performance bottlenecks in your current stack, and architect a robust technical specification tailored to scale.",
    icon: Search,
    color: "from-blue-500 to-indigo-500",
  },
  {
    num: "02",
    title: "High-Performance Implementation",
    desc: "Our engineers write clean, scalable TypeScript/Next.js code, compile modular component libraries, and build fast, responsive, modern digital interfaces.",
    icon: PenTool,
    color: "from-cyan-500 to-teal-500",
  },
  {
    num: "03",
    title: "Optimization & Launch",
    desc: "Before going live, we optimize every assets delivery, run accessibility tests, conduct secure data migrations, and ensure a seamless, zero-downtime deployment.",
    icon: Rocket,
    color: "from-amber-500 to-orange-500",
  },
  {
    num: "04",
    title: "Scale & Grow",
    desc: "We continuously monitor web vitals, execute search optimization audits, optimize conversion flows, and run growth campaigns to maximize customer value.",
    icon: BarChart3,
    color: "from-purple-500 to-pink-500",
  },
];

export default function ApproachSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold text-[#0392EA] tracking-widest uppercase mb-3">Our Methodology</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How We Partner For Success
          </p>
          <p className="text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
            Our systematic engineering-first approach eliminates uncertainty, ensuring projects launch on time, perform under load, and deliver measurable growth.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 hover:border-[#0392EA]/40 dark:hover:border-[#0392EA]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step number and Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-4xl font-black text-slate-200 dark:text-slate-800 group-hover:text-[#0392EA]/20 transition-colors">
                      {step.num}
                    </span>
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} p-2.5 flex items-center justify-center text-white shadow-md`}>
                      <Icon className="w-full h-full" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Zap, Users, TrendingUp } from "lucide-react";

const STATS = [
  {
    value: "98%",
    label: "Client Retention Rate",
    desc: "Long-term engineering partnerships driven by trust and high-performance delivery.",
    icon: Users,
    color: "from-blue-500 to-indigo-500",
  },
  {
    value: "$250M+",
    label: "E-Commerce Revenue Managed",
    desc: "Optimized storefront engines driving commerce velocity and seamless transactional scale.",
    icon: TrendingUp,
    color: "from-cyan-500 to-teal-500",
  },
  {
    value: "< 2.0s",
    label: "Average Page Load Time",
    desc: "Lighthouse audit optimizations that reduce bounce rates and maximize search rankings.",
    icon: Zap,
    color: "from-amber-500 to-orange-500",
  },
  {
    value: "100+",
    label: "Enterprise Projects Completed",
    desc: "Custom web frameworks, SaaS platforms, and digital products engineered to perform.",
    icon: Award,
    color: "from-purple-500 to-pink-500",
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-slate-50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 hover:border-[#0392EA]/40 dark:hover:border-[#0392EA]/40 hover:shadow-xl dark:hover:shadow-[#0392EA]/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} p-2.5 flex items-center justify-center text-white mb-6 shadow-md`}>
                    <Icon className="w-full h-full" />
                  </div>
                  <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {stat.value}
                  </h3>
                  <p className="text-base font-bold text-slate-800 dark:text-slate-200 mt-2">
                    {stat.label}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
                    {stat.desc}
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

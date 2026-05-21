"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CASE_STUDIES = [
  {
    title: "WooCommerce to Shopify Migration",
    client: "Volt Premium Apparel",
    metrics: "+40% speed boost, +15% conversion rate",
    desc: "Migrated a catalog of 15,000 SKUs with zero downtime. Preserved 100% of organic search rankings, imported full historical customer database, and optimized Shopify checkout.",
    tags: ["E-Commerce", "Migration", "Shopify"],
    tech: ["Shopify Liquid", "Cart JS API", "AWS Lambda"],
    color: "from-blue-600 to-indigo-600",
  },
  {
    title: "Headless SaaS Dashboard Platform",
    client: "Apex Metrics Corp",
    metrics: "99 Lighthouse Score, < 1.2s page load",
    desc: "Engineered a headless dashboard application consuming real-time analytics. Replaced legacy PHP setup with custom API integration and responsive Tailwind UI layouts.",
    tags: ["Web Dev", "SaaS", "Next.js"],
    tech: ["Next.js", "React Charting", "GraphQL"],
    color: "from-cyan-600 to-teal-600",
  },
  {
    title: "High-Converting Sales Funnel",
    client: "Lumina Skincare",
    metrics: "-30% Customer Acquisition Cost (CAC)",
    desc: "Redesigned landing pages and built re-entry triggers. Engineered a custom subscription flow with payment integrations that reduced friction and increased customer value.",
    tags: ["Marketing", "CRO", "Funnel Strategy"],
    tech: ["TailwindCSS", "Segment", "Web3Forms"],
    color: "from-pink-600 to-purple-600",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold text-[#0392EA] tracking-widest uppercase mb-3">Client Success</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Case Studies
            </p>
            <p className="text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
              Read how Usha Consultancy partners with startups and enterprises to solve complex software engineering and digital growth challenges.
            </p>
          </div>
          <div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm transition-all"
            >
              View All Case Studies
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, idx) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col justify-between p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700/80 hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Tech tag highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="text-xs font-bold text-[#0392EA] tracking-wide uppercase">
                  {study.client}
                </span>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-2 group-hover:text-[#0392EA] transition-colors flex items-start gap-1.5 justify-between">
                  {study.title}
                </h3>

                <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-2 bg-emerald-500/5 dark:bg-emerald-500/10 px-3 py-1 rounded-lg inline-block">
                  {study.metrics}
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
                  {study.desc}
                </p>
              </div>

              {/* Technologies used */}
              <div className="mt-8 border-t border-slate-100 dark:border-slate-800/80 pt-6">
                <div className="flex flex-wrap gap-1.5">
                  {study.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-slate-500 dark:text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

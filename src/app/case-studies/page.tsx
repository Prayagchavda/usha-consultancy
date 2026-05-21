"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { ChevronRight, ArrowUpRight, TrendingUp, Cpu, ShoppingBag } from "lucide-react";

const CASE_STUDIES = [
  {
    title: "WooCommerce to Shopify Migration",
    client: "Volt Premium Apparel",
    metrics: "+40% speed boost, +15% conversion rate",
    desc: "Migrated a catalog of 15,000 SKUs with zero downtime. Preserved 100% of organic search rankings, imported full historical customer database, and optimized Shopify checkout.",
    challenge: "Volt was losing customers due to slow load times (5s+) on WooCommerce and high cart abandonment during checkout. They needed a secure migration of customer order history and an immediate performance upgrade.",
    solution: "We mapped and executed a secure SQL data migration. Preserved SEO via structured 301 URL redirects, coded a fast custom Liquid theme, and integrated optimized local payment gateways.",
    tags: ["E-Commerce", "Migration", "Shopify"],
    tech: ["Shopify Liquid", "Cart JS API", "AWS Lambda", "SQL"],
    icon: ShoppingBag,
    color: "text-blue-500 bg-blue-500/10",
  },
  {
    title: "Headless SaaS Dashboard Platform",
    client: "Apex Metrics Corp",
    metrics: "99 Lighthouse Score, < 1.2s page load",
    desc: "Engineered a headless dashboard application consuming real-time analytics. Replaced legacy PHP setup with custom API integration and responsive Tailwind UI layouts.",
    challenge: "Apex Metrics dashboard was laggy, struggling to load charts when millions of data rows were queried. The backend PHP server was hitting physical memory limits.",
    solution: "We decoupled the system, rewriting the dashboard as a Next.js App routing UI hosted on Vercel. We built NestJS backend endpoints caching queried datasets in Redis.",
    tags: ["Web Dev", "SaaS", "Next.js"],
    tech: ["Next.js", "React Charting", "GraphQL", "NestJS", "Redis"],
    icon: Cpu,
    color: "text-cyan-500 bg-cyan-500/10",
  },
  {
    title: "High-Converting Sales Funnel",
    client: "Lumina Skincare",
    metrics: "-30% Customer Acquisition Cost (CAC)",
    desc: "Redesigned landing pages and built re-entry triggers. Engineered a custom subscription flow with payment integrations that reduced friction and increased customer value.",
    challenge: "Lumina wanted to launch a new product subscription line but had low conversion rates (1.2%) on standard catalog checkout flows, resulting in expensive advertising acquisitions.",
    solution: "We designed a dedicated high-speed subscription landing page with floating checkout drawers. Coded dynamic re-entry email reminders and integrated Stripe billing cycles.",
    tags: ["Marketing", "CRO", "Funnel Strategy"],
    tech: ["TailwindCSS", "Segment", "Stripe Billing", "Hotjar"],
    icon: TrendingUp,
    color: "text-pink-500 bg-pink-500/10",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb Header */}
        <section className="bg-slate-50 dark:bg-slate-950/40 border-b border-slate-100 dark:border-slate-900 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider select-none">
              <Link href="/" className="hover:text-[#0392EA]">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-slate-800 dark:text-slate-300">Case Studies</span>
            </div>
          </div>
        </section>

        {/* Detailed Listing */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-bold text-[#0392EA] tracking-widest uppercase mb-3 block">Portfolio</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Case Studies &amp; Success Stories
              </h1>
              <p className="text-base text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
                Explore detailed technical breakdowns of projects we have successfully deployed. We focus on real, measurable engineering parameters—load speeds, data integrity, and conversion ratios.
              </p>
            </div>

            <div className="flex flex-col gap-16">
              {CASE_STUDIES.map((study, idx) => {
                const Icon = study.icon;
                return (
                  <div
                    key={study.title}
                    className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-sm relative overflow-hidden"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                      
                      {/* Left: General Summary */}
                      <div className="lg:col-span-7">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {study.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <span className="text-xs font-bold text-[#0392EA] uppercase tracking-wider">{study.client}</span>
                        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">{study.title}</h2>
                        
                        <div className="inline-block mt-3 bg-emerald-500/5 dark:bg-emerald-500/10 px-3.5 py-1.5 rounded-xl">
                          <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{study.metrics}</span>
                        </div>

                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-6 leading-relaxed">
                          {study.desc}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pt-8 border-t border-slate-100 dark:border-slate-800/80">
                          <div>
                            <span className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider block mb-2">The Challenge</span>
                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{study.challenge}</p>
                          </div>
                          <div>
                            <span className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider block mb-2">Our Solution</span>
                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{study.solution}</p>
                          </div>
                        </div>
                      </div>

                      {/* Right: Icon Box & Tech Details */}
                      <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/80 select-none">
                        <div className={`w-12 h-12 rounded-2xl ${study.color} p-3 flex items-center justify-center mb-6`}>
                          <Icon className="w-full h-full" />
                        </div>
                        
                        <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 mb-3">Technologies Leveraged</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.tech.map((t) => (
                            <span
                              key={t}
                              className="px-3 py-1 rounded-lg text-xs font-mono bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form CTA */}
        <section className="py-20 bg-slate-50 border-t border-slate-200/80 text-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 grid-bg" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5 text-center lg:text-left">
                <h2 className="text-3xl font-extrabold tracking-tight">
                  Have a Similar Project?
                </h2>
                <p className="text-sm text-slate-600 mt-4 leading-relaxed max-w-md mx-auto lg:mx-0">
                  Partner with Usha Consultancy to design and execute your technology transitions. Schedule a technical call.
                </p>
              </div>
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

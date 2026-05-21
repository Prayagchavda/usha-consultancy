"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code, ShoppingBag, Palette, Cloud, ShieldCheck, Megaphone, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    title: "Web Development",
    href: "/services/web-development",
    desc: "We build custom React, Next.js, and Node.js solutions engineered for high performance, maximum security, and infinite horizontal scale.",
    icon: Code,
    color: "text-blue-500 bg-blue-500/10",
  },
  {
    title: "Shopify E-Commerce",
    href: "/services/shopify-ecommerce",
    desc: "Complete storefront setup, custom theme coding, WooCommerce/Magento migrations, custom headless solutions, and payment checkout optimizations.",
    icon: ShoppingBag,
    color: "text-cyan-500 bg-cyan-500/10",
  },
  {
    title: "Product Design (UI/UX)",
    href: "/services/product-design",
    desc: "User-centric premium wireframing, high-fidelity UI styling, user journey mapping, and conversion-focused interaction engineering.",
    icon: Palette,
    color: "text-purple-500 bg-purple-500/10",
  },
  {
    title: "Cloud & DevOps",
    href: "/services/cloud-devops",
    desc: "Cloud infrastructure provisioning on AWS/GCP, automated CI/CD deployment setups, Docker container orchestration, and server performance monitoring.",
    icon: Cloud,
    color: "text-teal-500 bg-teal-500/10",
  },
  {
    title: "QA & Testing",
    href: "/services/qa-testing",
    desc: "Rigorous unit, integration, and manual system testing pipelines ensuring bug-free software deployment and smooth updates.",
    icon: ShieldCheck,
    color: "text-emerald-500 bg-emerald-500/10",
  },
  {
    title: "Digital Marketing",
    href: "/services/digital-marketing",
    desc: "Conversion-optimized funnel strategy, targeted narrative creation, SEO optimization, and social brand authority management.",
    icon: Megaphone,
    color: "text-pink-500 bg-pink-500/10",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background grids */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full filter blur-[80px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-500/5 rounded-full filter blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-[#0392EA] tracking-widest uppercase mb-3">Our Core Offerings</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            High-Performance Digital Services
          </p>
          <p className="text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
            We partner with disruptive startups and forward-looking enterprises to build web assets that demand attention and convert traffic into commercial growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group flex flex-col justify-between p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 hover:border-[#0392EA]/40 dark:hover:border-[#0392EA]/40 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Glow on hover */}
                <div className="absolute -inset-px bg-gradient-to-br from-[#0392EA]/10 to-[#00F2FE]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-2xl ${service.color} p-3 flex items-center justify-center mb-6`}>
                    <Icon className="w-full h-full" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-auto">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0392EA] hover:text-[#037AC3] transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import ApproachSection from "@/components/ApproachSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Cpu, Check } from "lucide-react";

// List of technologies supported by Usha Consultancy, complete with CDN icon URLs
const TECH_STACK = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "NestJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Shopify", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg" },
  { name: "WooCommerce", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" }, // Next logo as placeholder for Vercel
];

// Main landing page component for the Usha Consultancy website
export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Stats Section */}
        <StatsSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Technologies Grid Section */}
        <section id="technologies" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950/40 border-t border-b border-slate-100 dark:border-slate-900 select-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xs font-bold text-[#0392EA] tracking-widest uppercase mb-3">Our Toolkit</h2>
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Technologies We Master
              </p>
              <p className="text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
                We select robust, modern frameworks to build secure, lightning-fast digital assets tailored to support enterprise load and scale.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {TECH_STACK.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-2xl shadow-sm hover:border-[#0392EA]/40 transition-colors"
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className={`w-10 h-10 mb-3 ${tech.name === "Next.js" || tech.name === "Vercel" ? "dark:invert" : ""}`}
                  />
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <ApproachSection />

        {/* Case Studies Section */}
        <CaseStudiesSection />

        {/* CTA Contact Form Section */}
        <section className="py-24 relative overflow-hidden bg-slate-50 border-t border-slate-200/80 text-slate-900">
          {/* Subtle grid background */}
          <div className="absolute inset-0 opacity-5 grid-bg" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0392EA]/10 rounded-full filter blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Column: CTA Pitch */}
              <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="w-12 h-12 rounded-2xl bg-[#0392EA]/10 p-3 flex items-center justify-center text-[#0392EA] mb-6">
                  <Cpu className="w-full h-full" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Let’s Build Something <br />
                  <span className="bg-gradient-to-r from-[#0392EA] to-[#00F2FE] bg-clip-text text-transparent">
                    Exceptional Together
                  </span>
                </h2>
                <p className="text-slate-600 mt-4 leading-relaxed">
                  We don’t just write code; we partner with your team to architect technology systems that unlock operational efficiency and accelerate commercial scale.
                </p>

                <div className="flex flex-col gap-4 mt-8 w-full sm:w-auto">
                  <div className="flex items-center gap-3 text-slate-700 text-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 p-1 flex items-center justify-center text-emerald-600">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Zero lock-in contracts</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 text-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 p-1 flex items-center justify-center text-emerald-600">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Senior engineers on every project</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 text-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 p-1 flex items-center justify-center text-emerald-600">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Flexible sprints & deliverables</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
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

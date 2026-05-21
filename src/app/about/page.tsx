"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { ChevronRight, Award, Compass, Users2, ShieldAlert } from "lucide-react";

const VALUES = [
  {
    title: "Engineering Excellence",
    desc: "We do not write lazy code or cut corners. We build systems that perform under load, scale seamlessly, and are easy to maintain.",
    icon: Award,
    color: "text-blue-500 bg-blue-500/10",
  },
  {
    title: "Client Partnership",
    desc: "We embed deeply into client teams to solve product design, DevOps automation, and marketing challenges in perfect alignment.",
    icon: Users2,
    color: "text-cyan-500 bg-cyan-500/10",
  },
  {
    title: "Transparency First",
    desc: "Clear deliverable logs, weekly velocity updates, and open access to staging domains. Zero hidden agendas or consulting bureaucracy.",
    icon: Compass,
    color: "text-amber-500 bg-amber-500/10",
  },
  {
    title: "Secured Integrity",
    desc: "Rigorous attention to database security, GDPR/CCPA privacy standards, automated regression tests, and zero data leakage.",
    icon: ShieldAlert,
    color: "text-purple-500 bg-purple-500/10",
  },
];

export default function AboutPage() {
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
              <span className="text-slate-800 dark:text-slate-300">About Us</span>
            </div>
          </div>
        </section>

        {/* Detailed Pitch */}
        <section className="py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Column: Heading */}
              <div className="lg:col-span-6">
                <span className="text-xs font-bold text-[#0392EA] tracking-widest uppercase mb-3 block">Who We Are</span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                  We Build Digital Engines <br />
                  <span className="bg-gradient-to-r from-[#0392EA] to-[#00F2FE] bg-clip-text text-transparent">
                    For Disruptive Growth
                  </span>
                </h1>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-6 leading-relaxed">
                  Usha Consultancy was founded by a team of senior software engineers and e-commerce growth specialists who grew tired of standard consulting agencies delivering bloated, slow code.
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
                  We believe that technology should be an asset, not a bottleneck. We eliminate standard agency overhead and focus 100% of our energy on creating robust, secure, and fast architectures that drive transactional value.
                </p>
              </div>

              {/* Right Column: Mission stats */}
              <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800">
                <h3 className="font-extrabold text-xl text-slate-900 dark:text-white mb-6">Our Philosophy</h3>
                <blockquote className="border-l-4 border-[#0392EA] pl-4 italic text-sm text-slate-600 dark:text-slate-300">
                  &ldquo;A software systems performance determines a business&apos;s ultimate velocity. If you are not building for scale, you are actively designing your own bottleneck.&rdquo;
                </blockquote>
                
                <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                  <div>
                    <span className="text-2xl font-black text-slate-900 dark:text-white">100+</span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Successfully Deployed Projects</p>
                  </div>
                  <div>
                    <span className="text-2xl font-black text-slate-900 dark:text-white">98%</span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Long-term Client Retention</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-slate-50 dark:bg-slate-950/40 border-t border-slate-100 dark:border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-xs font-bold text-[#0392EA] tracking-widest uppercase mb-3">Our Principles</h2>
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Values That Guide Our Delivery</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {VALUES.map((val) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.title}
                    className="p-6 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-2xl shadow-sm hover:border-[#0392EA]/30 transition-all duration-300"
                  >
                    <div className={`w-10 h-10 rounded-xl ${val.color} p-2.5 flex items-center justify-center mb-4`}>
                      <Icon className="w-full h-full" />
                    </div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">{val.title}</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{val.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Contact Form Section */}
        <section className="py-20 bg-slate-50 border-t border-slate-200/80 text-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 grid-bg" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5 text-center lg:text-left">
                <h2 className="text-3xl font-extrabold tracking-tight">
                  Work With Us
                </h2>
                <p className="text-sm text-slate-600 mt-4 leading-relaxed max-w-md mx-auto lg:mx-0">
                  Ready to optimize your tech stack? Reach out to schedule a technical discovery call with our senior architects.
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

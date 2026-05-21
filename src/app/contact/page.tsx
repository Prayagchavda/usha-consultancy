"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { ChevronRight, Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
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
              <span className="text-slate-800 dark:text-slate-300">Contact Us</span>
            </div>
          </div>
        </section>

        {/* Form and Details grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column: Contact details */}
              <div className="lg:col-span-5 flex flex-col gap-8">
                <div>
                  <span className="text-xs font-bold text-[#0392EA] tracking-widest uppercase mb-3 block">Get In Touch</span>
                  <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                    Let’s Connect
                  </h1>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
                    Have questions about our services, migrations, pricing, or capabilities? Drop us a line. We typically respond to all technical queries within 24 hours.
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 p-2.5 flex items-center justify-center text-[#0392EA] shrink-0">
                      <Phone className="w-full h-full" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Phone Support</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">US: +1 (512) 254-9606</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">IN: +91 63582 63796</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 p-2.5 flex items-center justify-center text-cyan-500 shrink-0">
                      <Mail className="w-full h-full" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Email Inquiry</h4>
                      <a href="mailto:hello@ushaconsultancy.com" className="text-sm text-[#0392EA] hover:text-[#037AC3] hover:underline mt-1 block">
                        hello@ushaconsultancy.com
                      </a>
                    </div>
                  </div>

                  {/* Office Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 p-2.5 flex items-center justify-center text-purple-500 shrink-0">
                      <MapPin className="w-full h-full" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">HQ Address</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                        Usha Consultancy HQ<br />
                        Gujarat, India
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 p-2.5 flex items-center justify-center text-amber-500 shrink-0">
                      <Clock className="w-full h-full" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Business Hours</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Monday &ndash; Friday, 9:00 AM &ndash; 6:00 PM IST</p>
                    </div>
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

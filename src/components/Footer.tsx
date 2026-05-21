import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-t border-slate-200/80 dark:border-slate-900 pt-16 pb-8 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo & About */}
          <div className="flex flex-col gap-4">
            <Logo className="h-10 mb-2" />
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
              Usha Consultancy is a premier software engineering company. We design, build, and optimize high-performing digital systems, custom cloud applications, and e-commerce solutions that scale.
            </p>
          </div>

          {/* Services Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm text-slate-900 dark:text-white tracking-wider uppercase">Services</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/services/web-development" className="hover:text-[#0392EA] dark:hover:text-white transition-colors flex items-center gap-1 group">
                  Web Development
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/services/shopify-ecommerce" className="hover:text-[#0392EA] dark:hover:text-white transition-colors flex items-center gap-1 group">
                  Shopify E-Commerce
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/services/product-design" className="hover:text-[#0392EA] dark:hover:text-white transition-colors flex items-center gap-1 group">
                  Product Design (UI/UX)
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-devops" className="hover:text-[#0392EA] dark:hover:text-white transition-colors flex items-center gap-1 group">
                  Cloud & DevOps
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/services/qa-testing" className="hover:text-[#0392EA] dark:hover:text-white transition-colors flex items-center gap-1 group">
                  QA & Testing
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="hover:text-[#0392EA] dark:hover:text-white transition-colors flex items-center gap-1 group">
                  Digital Marketing
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm text-slate-900 dark:text-white tracking-wider uppercase">Company</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-[#0392EA] dark:hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-[#0392EA] dark:hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/#technologies" className="hover:text-[#0392EA] dark:hover:text-white transition-colors">
                  Technologies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#0392EA] dark:hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-[#0392EA] dark:hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm text-slate-900 dark:text-white tracking-wider uppercase">Connect</h4>
            <div className="flex flex-col gap-3 text-sm">
              <span className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0392EA] shrink-0 mt-0.5" />
                <span className="text-slate-600 dark:text-slate-400">Usha Consultancy HQ<br />Gujarat, India</span>
              </span>
              <span className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0392EA] shrink-0" />
                <div className="flex flex-col text-slate-600 dark:text-slate-400">
                  <span>US: +1 (512) 254-9606</span>
                  <span>IN: +91 63582 63796</span>
                </div>
              </span>
              <a
                href="mailto:hello@ushaconsultancy.com"
                className="flex items-center gap-2.5 hover:text-[#0392EA] dark:hover:text-white text-slate-600 dark:text-slate-400 transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#0392EA] shrink-0" />
                <span>hello@ushaconsultancy.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <span>
            &copy; {currentYear} Usha Consultancy. All rights reserved.
          </span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#0392EA] dark:hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#0392EA] dark:hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
} from "lucide-react";
import Logo from "./Logo";

const SERVICES_LIST = [
  { name: "Web Development", href: "/services/web-development", desc: "Custom web applications & React/Next.js systems." },
  { name: "Shopify E-Commerce", href: "/services/shopify-ecommerce", desc: "Migrations, checkout optimizations & online stores." },
  { name: "Product Design (UI/UX)", href: "/services/product-design", desc: "Premium interface design and user experience journeys." },
  { name: "Cloud & DevOps", href: "/services/cloud-devops", desc: "Scalable infrastructure, CI/CD, and AWS management." },
  { name: "QA & Testing", href: "/services/qa-testing", desc: "Mission-critical reliability & performance validation." },
  { name: "Digital Marketing", href: "/services/digital-marketing", desc: "Funnel strategy, narrative engineering & growth sprints." },
];

// Devicons CDN base
const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const TECH_CATEGORIES = [
  {
    name: "Frontend Development",
    items: [
      { name: "React", icon: `${DI}/react/react-original.svg` },
      { name: "Next.js", icon: `${DI}/nextjs/nextjs-original.svg` },
      { name: "TypeScript", icon: `${DI}/typescript/typescript-original.svg` },
      { name: "Tailwind CSS", icon: `${DI}/tailwindcss/tailwindcss-original.svg` },
      { name: "Vue", icon: `${DI}/vuejs/vuejs-original.svg` },
      { name: "Bootstrap", icon: `${DI}/bootstrap/bootstrap-original.svg` },
    ],
  },
  {
    name: "Backend Development",
    items: [
      { name: "Node.js", icon: `${DI}/nodejs/nodejs-original.svg` },
      { name: "NestJS", icon: `${DI}/nestjs/nestjs-original.svg` },
      { name: "Python", icon: `${DI}/python/python-original.svg` },
      { name: "Django", icon: `${DI}/django/django-plain.svg` },
      { name: "Laravel", icon: `${DI}/laravel/laravel-original.svg` },
      { name: "Express.js", icon: `${DI}/express/express-original.svg` },
    ],
  },
  {
    name: "Mobile App Development",
    items: [
      { name: "React Native", icon: `${DI}/react/react-original.svg` },
      { name: "Flutter", icon: `${DI}/flutter/flutter-original.svg` },
      { name: "Swift", icon: `${DI}/swift/swift-original.svg` },
      { name: "Kotlin", icon: `${DI}/kotlin/kotlin-original.svg` },
    ],
  },
  {
    name: "E-commerce Platforms",
    items: [
      { name: "Shopify", icon: `${DI}/shopify/shopify-original.svg` },
      { name: "WooCommerce", icon: `${DI}/woocommerce/woocommerce-original.svg` },
    ],
  },
  {
    name: "Databases",
    items: [
      { name: "PostgreSQL", icon: `${DI}/postgresql/postgresql-original.svg` },
      { name: "MongoDB", icon: `${DI}/mongodb/mongodb-original.svg` },
      { name: "MySQL", icon: `${DI}/mysql/mysql-original.svg` },
      { name: "Redis", icon: `${DI}/redis/redis-original.svg` },
      { name: "Firebase", icon: `${DI}/firebase/firebase-original.svg` },
    ],
  },
  {
    name: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: `${DI}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Docker", icon: `${DI}/docker/docker-original.svg` },
      { name: "Kubernetes", icon: `${DI}/kubernetes/kubernetes-original.svg` },
      { name: "GitHub Actions", icon: `${DI}/github/github-original.svg` },
      { name: "Vercel", icon: `${DI}/nextjs/nextjs-original.svg` },
    ],
  },
];

// Technologies mega-dropdown panel (desktop + mobile)
function TechDropdownPanel({ onClose }: { onClose?: () => void }) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [mobileOpenCategory, setMobileOpenCategory] = useState<number | null>(null);

  return (
    <>
      {/* Desktop panel */}
      <div className="hidden lg:block bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 w-full min-h-[460px]">
        <div className="grid grid-cols-[220px_1fr] gap-6 h-full">
          {/* Left: category list */}
          <div className="border-r border-gray-100 pr-4">
            <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-5 leading-5">
              TECHNOLOGIES
            </p>
            <div className="flex flex-col gap-1">
              {TECH_CATEGORIES.map((cat, idx) => (
                <div
                  key={cat.name}
                  onMouseEnter={() => setActiveCategory(idx)}
                  onClick={() => setActiveCategory(idx)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all duration-150 ${
                    activeCategory === idx
                      ? "bg-gradient-to-r from-white to-[#eaf3f9] shadow-sm"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <span className="text-sm font-semibold text-slate-900 leading-5">
                    {cat.name}
                  </span>
                  {activeCategory === idx && (
                    <ChevronRight className="w-4 h-4 text-[#0392EA] flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: technology cards grid */}
          <div className="pl-2">
            <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-5 leading-5">
              {TECH_CATEGORIES[activeCategory].name.toUpperCase()}
            </p>
            <div className="grid grid-cols-3 xl:grid-cols-4 gap-4">
              {TECH_CATEGORIES[activeCategory].items.map((tech) => (
                <Link
                  key={tech.name}
                  href="/#technologies"
                  onClick={onClose}
                  className="flex flex-col items-center justify-center text-center gap-3 bg-gray-50 border border-gray-100 hover:border-[#0392EA]/30 hover:bg-blue-50/30 rounded-2xl py-5 px-2 transition-all duration-150 group"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className={`w-9 h-9 object-contain ${tech.name === "Next.js" || tech.name === "Vercel" || tech.name === "Express.js" ? "opacity-80 group-hover:opacity-100" : ""}`}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";
                    }}
                  />
                  <span className="text-xs font-medium text-slate-700 leading-4 group-hover:text-[#0392EA] transition-colors">
                    {tech.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile accordion panel */}
      <div className="lg:hidden flex flex-col w-full pl-2 gap-0">
        {TECH_CATEGORIES.map((cat, idx) => (
          <div key={cat.name} className="w-full border-b border-slate-100 last:border-none">
            <button
              onClick={() => setMobileOpenCategory(mobileOpenCategory === idx ? null : idx)}
              className="flex justify-between items-center w-full py-3 cursor-pointer text-left"
            >
              <span className={`text-sm font-medium leading-5 pl-4 ${mobileOpenCategory === idx ? "text-[#0392EA]" : "text-slate-500"}`}>
                {cat.name}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-slate-700 transition-transform duration-200 flex-shrink-0 ${mobileOpenCategory === idx ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`flex flex-col overflow-hidden transition-all duration-300 ${
                mobileOpenCategory === idx ? "max-h-[600px] pb-3" : "max-h-0"
              }`}
            >
              <div className="flex flex-col gap-4 pl-10 pt-2">
                {cat.items.map((tech) => (
                  <Link
                    key={tech.name}
                    href="/#technologies"
                    onClick={onClose}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-800 leading-5 group-hover:text-[#0392EA] transition-colors">
                      {tech.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"services" | "technologies" | null>(null);
  const [mobileServicesDropdown, setMobileServicesDropdown] = useState(false);
  const [mobileTechDropdown, setMobileTechDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const navDropdownRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLDivElement>(null);
  const techButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on page change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileServicesDropdown(false);
    setMobileTechDropdown(false);
  }, [pathname]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        navDropdownRef.current && !navDropdownRef.current.contains(target) &&
        servicesButtonRef.current && !servicesButtonRef.current.contains(target) &&
        techButtonRef.current && !techButtonRef.current.contains(target)
      ) {
        setActiveDropdown(null);
      }
    };
    if (activeDropdown) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [activeDropdown]);

  const closeAll = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="w-full bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-2 select-none z-50 relative">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors">
            <Phone className="w-3 h-3 text-[#0392EA]" />
            <span>US: +1 (512) 254-9606</span>
          </span>
          <span className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors">
            <Phone className="w-3 h-3 text-[#0392EA]" />
            <span>IN: +91 63582 63796</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="mailto:hello@ushaconsultancy.com"
            className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <Mail className="w-3 h-3 text-[#0392EA]" />
            <span>hello@ushaconsultancy.com</span>
          </a>
        </div>
      </div>

      {/* Backdrop overlay when dropdown open */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-30 bg-black/10 hidden lg:block"
          style={{ top: scrolled ? "0px" : "100px" }}
          onClick={() => setActiveDropdown(null)}
        />
      )}

      {/* Main Header */}
      <header
        className={`sticky top-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "glassmorphism shadow-md py-3 bg-white/85 dark:bg-[#011d2f]/85"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Logo className="h-9 md:h-10" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {/* Home */}
              <Link
                href="/"
                className={`font-semibold text-sm transition-colors hover:text-[#0392EA] ${
                  pathname === "/" ? "text-[#0392EA]" : "text-slate-700 dark:text-slate-300"
                }`}
              >
                Home
              </Link>

              {/* Services Dropdown Trigger */}
              <div
                ref={servicesButtonRef}
                onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
                className={`flex items-center gap-1 font-semibold text-sm transition-colors hover:text-[#0392EA] cursor-pointer select-none ${
                  pathname.startsWith("/services") || activeDropdown === "services"
                    ? "text-[#0392EA]"
                    : "text-slate-700 dark:text-slate-300"
                }`}
                aria-expanded={activeDropdown === "services"}
                aria-haspopup="true"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180" : ""}`}
                />
              </div>

              {/* Technologies Dropdown Trigger */}
              <div
                ref={techButtonRef}
                onClick={() => setActiveDropdown(activeDropdown === "technologies" ? null : "technologies")}
                className={`flex items-center gap-1 font-semibold text-sm transition-colors hover:text-[#0392EA] cursor-pointer select-none ${
                  activeDropdown === "technologies"
                    ? "text-[#0392EA]"
                    : "text-slate-700 dark:text-slate-300"
                }`}
                aria-expanded={activeDropdown === "technologies"}
                aria-haspopup="true"
              >
                Technologies
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "technologies" ? "rotate-180" : ""}`}
                />
              </div>

              {/* Case Studies */}
              <Link
                href="/case-studies"
                className={`font-semibold text-sm transition-colors hover:text-[#0392EA] ${
                  pathname === "/case-studies" ? "text-[#0392EA]" : "text-slate-700 dark:text-slate-300"
                }`}
              >
                Case Studies
              </Link>

              {/* About Us */}
              <Link
                href="/about"
                className={`font-semibold text-sm transition-colors hover:text-[#0392EA] ${
                  pathname === "/about" ? "text-[#0392EA]" : "text-slate-700 dark:text-slate-300"
                }`}
              >
                About Us
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-[#0392EA] hover:bg-[#037AC3] text-white font-bold rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 text-sm"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-700 dark:text-slate-300 hover:text-[#0392EA] focus:outline-none p-1"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Mega-Dropdown Panel - full-width below header */}
        {(activeDropdown === "services" || activeDropdown === "technologies") && (
          <div
            ref={navDropdownRef}
            className="hidden lg:block w-full border-t border-slate-100"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              {activeDropdown === "services" && (
                <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-5 grid grid-cols-2 gap-2">
                  {SERVICES_LIST.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      onClick={() => setActiveDropdown(null)}
                      className="group flex flex-col p-3 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-bold text-sm text-slate-900 group-hover:text-[#0392EA] transition-colors flex items-center gap-1">
                        {service.name}
                        <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </span>
                      <span className="text-xs text-slate-500 mt-0.5">{service.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
              {activeDropdown === "technologies" && (
                <TechDropdownPanel onClose={() => setActiveDropdown(null)} />
              )}
            </div>
          </div>
        )}

        {/* Mobile Side Drawer Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Mobile Side Drawer Menu */}
        <div
          className={`fixed top-0 right-0 bottom-0 z-40 w-80 max-w-full bg-white dark:bg-slate-950 border-l border-slate-200 dark:border-slate-800 shadow-2xl p-6 transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-between overflow-y-auto ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-4 mb-6">
              <Logo className="h-8" />
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-5">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`font-bold text-lg ${
                  pathname === "/" ? "text-[#0392EA]" : "text-slate-800 dark:text-slate-200"
                }`}
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setMobileServicesDropdown(!mobileServicesDropdown)}
                  className="flex items-center justify-between w-full font-bold text-lg text-slate-800 dark:text-slate-200 hover:text-[#0392EA] transition-colors text-left"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${mobileServicesDropdown ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`pl-4 flex flex-col gap-3 border-l border-slate-100 dark:border-slate-800 transition-all duration-300 overflow-hidden ${
                    mobileServicesDropdown ? "max-h-96 opacity-100 py-1 mt-1" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  {SERVICES_LIST.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      onClick={() => { setIsOpen(false); setMobileServicesDropdown(false); }}
                      className={`text-sm ${
                        pathname === service.href
                          ? "text-[#0392EA] font-semibold"
                          : "text-slate-600 dark:text-slate-400"
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Technologies Accordion */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setMobileTechDropdown(!mobileTechDropdown)}
                  className="flex items-center justify-between w-full font-bold text-lg text-slate-800 dark:text-slate-200 hover:text-[#0392EA] transition-colors text-left"
                >
                  <span>Technologies</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${mobileTechDropdown ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    mobileTechDropdown ? "max-h-[800px] opacity-100 mt-1" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <TechDropdownPanel onClose={closeAll} />
                </div>
              </div>

              <Link
                href="/case-studies"
                onClick={() => setIsOpen(false)}
                className={`font-bold text-lg ${
                  pathname === "/case-studies" ? "text-[#0392EA]" : "text-slate-800 dark:text-slate-200"
                }`}
              >
                Case Studies
              </Link>

              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className={`font-bold text-lg ${
                  pathname === "/about" ? "text-[#0392EA]" : "text-slate-800 dark:text-slate-200"
                }`}
              >
                About Us
              </Link>
            </nav>
          </div>

          <div className="mt-8 border-t border-slate-100 dark:border-slate-800 pt-6">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center py-3 bg-[#0392EA] text-white font-bold rounded-xl shadow-lg text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

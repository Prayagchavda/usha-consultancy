"use client";

import React from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { ArrowLeft, CheckCircle2, ChevronRight, HelpCircle } from "lucide-react";

interface ServiceDetail {
  title: string;
  heading: string;
  desc: string;
  features: string[];
  technologies: string[];
  faqs: { q: string; a: string }[];
}

const SERVICES_DATA: Record<string, ServiceDetail> = {
  "web-development": {
    title: "Web Development",
    heading: "Powering Scale with Custom Web Engineering",
    desc: "We build tailored web applications and custom systems designed for startups and enterprises that refuse to hit architectural walls. From low-latency Next.js portals to secure, high-throughput Node.js microservices, we write clean, type-safe code that delivers top-tier speed and scalability.",
    features: [
      "Next.js App Router & Server Components optimization",
      "Robust REST & GraphQL API integrations",
      "Type-safe development utilizing TypeScript",
      "State-of-the-art database modeling (PostgreSQL, Redis)",
      "Infinite horizontal scaling and cloud caching systems",
      "95+ Lighthouse score audit guarantees",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "Redis"],
    faqs: [
      { q: "Why do you recommend Next.js?", a: "Next.js provides hybrid static and server-side rendering, ensuring your web application loads instantly for users and search engines while keeping client-side javascript size minimal." },
      { q: "Do you build custom APIs?", a: "Yes, we design RESTful and GraphQL APIs built on Node.js/NestJS with strict validation, schema documentation, and authentication controls." },
    ],
  },
  "shopify-ecommerce": {
    title: "Shopify E-Commerce",
    heading: "High-Converting Storefronts & migrations",
    desc: "We help brands migrate seamlessly from WooCommerce, Magento, and custom architectures to Shopify. We construct bespoke Liquid themes, optimize checkouts to increase purchase conversions, and deploy headless commerce configurations using Shopify Hydrogen/Storefront APIs.",
    features: [
      "Meticulous data migrations with 100% SEO preservation",
      "Custom theme design & pixel-perfect frontend coding",
      "Checkout conversion rate optimization (CRO)",
      "Shopify Plus script customizations and app integrations",
      "Headless commerce setup with Storefront APIs",
      "Custom app development for internal workflows",
    ],
    technologies: ["Shopify Liquid", "Hydrogen", "Cart JS API", "GraphQL", "Tailwind CSS", "Node.js"],
    faqs: [
      { q: "Will I lose my SEO rankings during migration?", a: "No. We implement a rigorous URL mapping and redirect system, preserve all metadata, and ensure search engines experience zero disruption during transition." },
      { q: "Do you develop custom Shopify Apps?", a: "Yes, we construct custom apps hosted on secure cloud infrastructure to handle custom integrations, automated workflows, and CRM synchronizations." },
    ],
  },
  "product-design": {
    title: "Product Design (UI/UX)",
    heading: "Premium Interactions that Drive Conversions",
    desc: "A great digital product must feel as good as it looks. We combine rigorous user research with state-of-the-art visual design to build user journeys that eliminate friction, maximize engagement, and establish immediate technical authority.",
    features: [
      "User journey mapping & high-fidelity wireframing",
      "Interactive Figma prototyping & design systems",
      "Conversion-focused user interface (UI) design",
      "Interactive micro-animations and transitions",
      "Accessibility audits conforming to WCAG standards",
      "Continuous iterative user testing & feedback loops",
    ],
    technologies: ["Figma", "Adobe CC", "Framer Motion", "Tailwind CSS", "Storybook"],
    faqs: [
      { q: "What is your design process?", a: "We begin with discovery sprints to map out features, followed by wireframing, high-fidelity prototypes in Figma, interactive validation, and finally developer handoff." },
      { q: "Do you provide Figma design files?", a: "Yes, we hand over fully organized design systems, style tokens, and mockups in Figma." },
    ],
  },
  "cloud-devops": {
    title: "Cloud & DevOps",
    heading: "Bulletproof Infrastructure & Deployments",
    desc: "We automate deployment cycles and manage secure, scalable cloud infrastructure. From Dockerized container setups using Kubernetes to Serverless architectures on AWS, we ensure your codebase is securely deployed and scales dynamically with load.",
    features: [
      "Infrastructure as Code (IaC) using Terraform",
      "Automated CI/CD deployment pipelines (GitHub Actions)",
      "Secure AWS, Google Cloud, and Vercel management",
      "Docker container orchestration and scaling",
      "Real-time logging, metrics alerts, and performance audits",
      "SSL, firewall, and data encryption compliance",
    ],
    technologies: ["AWS", "Terraform", "GitHub Actions", "Docker", "Kubernetes", "Linux", "Vercel"],
    faqs: [
      { q: "What cloud providers do you support?", a: "We primarily build on Amazon Web Services (AWS), Google Cloud Platform (GCP), and Vercel for modern Next.js deployments." },
      { q: "How do you ensure zero downtime?", a: "We design rolling updates, multi-zone clusters, and blue-green deployments where changes are verified before routing live traffic." },
    ],
  },
  "qa-testing": {
    title: "QA & Testing",
    heading: "Ensuring System Stability Under Load",
    desc: "Buggy software leads to churn. We integrate comprehensive automated and manual testing pipelines directly into your build processes to ensure code behaves as expected, pages render correctly, and APIs perform under extreme concurrency.",
    features: [
      "Automated unit testing with Jest & Vitest",
      "End-to-End browser simulation using Playwright",
      "API payload validation & security penetration checks",
      "Load capacity and benchmark stress testing",
      "Cross-browser and responsive layout checks",
      "Detailed QA audit reporting & bug tracking systems",
    ],
    technologies: ["Jest", "Playwright", "Cypress", "Postman", "Lighthouse", "SonarQube"],
    faqs: [
      { q: "What is your testing philosophy?", a: "We advocate for a test-pyramid structure: robust unit tests for logic, integration tests for API flows, and critical end-to-end user path automated tests." },
      { q: "Do you perform load testing?", a: "Yes, we run custom scripts to simulate thousands of concurrent requests to discover server bottleneck limits." },
    ],
  },
  "digital-marketing": {
    title: "Digital Marketing & CRO",
    heading: "Engineering Conversion Funnels that Convert",
    desc: "We help market disruptors design narratives and sales paths that demand attention. By building high-converting landing pages, setting up attribution tracking, and optimizing transactional triggers, we convert user interest into transactional value.",
    features: [
      "Attribution analytics setup (Segment, GA4, GTM)",
      "Landing page conversion rate optimization (CRO)",
      "Narrative strategy and technical copy creation",
      "SEO audits and search visibility optimization",
      "Re-entry customer flows & transactional email loops",
      "A/B testing of button positions, copies, and models",
    ],
    technologies: ["Segment", "Google Analytics", "Hotjar", "Google Tag Manager", "Mailchimp"],
    faqs: [
      { q: "What is CRO?", a: "Conversion Rate Optimization (CRO) is the scientific process of increasing the percentage of website visitors who take a desired action, such as booking a call or checking out." },
      { q: "How do you track user behaviors?", a: "We implement secure, GDPR-compliant tracking scripts (Hotjar, GA4) to capture scroll-depth, button-clicks, and screen recordings to find user confusion points." },
    ],
  },
};

export default function ServicePage() {
  const params = useParams();
  const serviceKey = params.service as string;

  const service = SERVICES_DATA[serviceKey];

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Header Breadcrumb */}
        <section className="bg-slate-50 dark:bg-slate-950/40 border-b border-slate-100 dark:border-slate-900 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider select-none">
              <Link href="/" className="hover:text-[#0392EA]">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/#services" className="hover:text-[#0392EA]">Services</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-slate-800 dark:text-slate-300">{service.title}</span>
            </div>
          </div>
        </section>

        {/* Detailed Description */}
        <section className="py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column: Details & Tech */}
              <div className="lg:col-span-7">
                <Link
                  href="/#services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0392EA] hover:text-[#037AC3] uppercase tracking-wider mb-6 group"
                >
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                  Back to Services
                </Link>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                  {service.heading}
                </h1>
                
                <p className="text-base text-slate-600 dark:text-slate-400 mt-6 leading-relaxed">
                  {service.desc}
                </p>

                {/* Key Benefits / Offerings */}
                <div className="mt-10">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-6">What We Deliver</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 text-sm">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 p-1 flex items-center justify-center text-emerald-500 shrink-0 mt-0.5">
                          <CheckCircle2 className="w-full h-full" />
                        </div>
                        <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-12 border-t border-slate-100 dark:border-slate-800/80 pt-8">
                  <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-4">Core Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3.5 py-1.5 rounded-xl font-bold text-xs bg-slate-100 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: FAQ List */}
              <div className="lg:col-span-5 p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 select-none">
                <div className="flex items-center gap-2 mb-6">
                  <HelpCircle className="w-5 h-5 text-[#0392EA]" />
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">Frequently Asked Questions</h3>
                </div>

                <div className="flex flex-col gap-6">
                  {service.faqs.map((faq) => (
                    <div key={faq.q} className="border-b border-slate-200/60 dark:border-slate-800 pb-5 last:border-0 last:pb-0">
                      <p className="font-bold text-sm text-slate-800 dark:text-slate-200">
                        {faq.q}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Dynamic CTA Form Section */}
        <section className="py-20 bg-slate-50 border-t border-slate-200/80 text-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 grid-bg" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5 text-center lg:text-left">
                <h2 className="text-3xl font-extrabold tracking-tight">
                  Interested in {service.title}?
                </h2>
                <p className="text-sm text-slate-600 mt-4 leading-relaxed max-w-md mx-auto lg:mx-0">
                  Request a consultation below. Our technology experts will review your objectives and map out a solution design.
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

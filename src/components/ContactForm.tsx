"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  // State hook to manage individual form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  
  // State to store field-level validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  // Tracks whether the form has been successfully sent
  const [submitted, setSubmitted] = useState(false);
  // Controls loading spinner and button disabled states during submission
  const [loading, setLoading] = useState(false);

  // Generic change handler for text inputs, select dropdowns, and textareas
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    // Update local state with the new value
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error for this field if the user is typing/correcting it
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Validates required fields and email formats before submission
  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.service) newErrors.service = "Please select a service.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
    return newErrors;
  };

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Perform client-side validation
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    // Simulate an external API call or server action delay (1.2s)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Reset form data after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    }, 1200);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-8 sm:p-10 rounded-3xl glassmorphism bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
      
      {submitted ? (
        <div className="flex flex-col items-center text-center py-10">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 p-3.5 flex items-center justify-center text-emerald-500 mb-6 animate-bounce">
            <CheckCircle2 className="w-full h-full" />
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">Message Sent Successfully!</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md leading-relaxed">
            Thank you for reaching out. A senior engineering consultant from Usha Consultancy will review your details and contact you within 24 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-8 px-6 py-3 bg-[#0392EA] hover:bg-[#037AC3] text-white font-bold rounded-xl shadow-md transition-colors text-sm"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="text-center md:text-left mb-2">
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">Ready to Elevate Your Technology?</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
              Fill out the form below. We will get back to you to schedule your initial architecture consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={`px-4 py-3 bg-slate-50 dark:bg-slate-950 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0392EA] transition-all ${
                  errors.name ? "border-red-500 dark:border-red-500/60" : "border-slate-200 dark:border-slate-800"
                }`}
              />
              {errors.name && (
                <span className="text-xs text-red-500 flex items-center gap-1 mt-0.5">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@company.com"
                className={`px-4 py-3 bg-slate-50 dark:bg-slate-950 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0392EA] transition-all ${
                  errors.email ? "border-red-500 dark:border-red-500/60" : "border-slate-200 dark:border-slate-800"
                }`}
              />
              {errors.email && (
                <span className="text-xs text-red-500 flex items-center gap-1 mt-0.5">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                </span>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0392EA] transition-all"
              />
            </div>

            {/* Company */}
            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Acme Inc."
                className="px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0392EA] transition-all"
              />
            </div>
          </div>

          {/* Service Needed */}
          <div className="flex flex-col gap-2">
            <label htmlFor="service" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              Service Needed *
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`px-4 py-3 bg-slate-50 dark:bg-slate-950 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0392EA] transition-all ${
                errors.service ? "border-red-500 dark:border-red-500/60" : "border-slate-200 dark:border-slate-800"
              }`}
            >
              <option value="">Select a service...</option>
              <option value="web-dev">Web Development & Custom Systems</option>
              <option value="ecommerce">Shopify E-Commerce Setup & Optimization</option>
              <option value="product-design">Product Design (UI/UX)</option>
              <option value="cloud-devops">Cloud Architecture & DevOps Pipelines</option>
              <option value="qa-testing">Quality Assurance & System Audits</option>
              <option value="marketing">Digital Marketing & Funnel CRO</option>
            </select>
            {errors.service && (
              <span className="text-xs text-red-500 flex items-center gap-1 mt-0.5">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.service}
              </span>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              Project Description *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about your project requirements, timelines, and current bottlenecks..."
              className={`px-4 py-3 bg-slate-50 dark:bg-slate-950 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0392EA] transition-all resize-none ${
                errors.message ? "border-red-500 dark:border-red-500/60" : "border-slate-200 dark:border-slate-800"
              }`}
            />
            {errors.message && (
              <span className="text-xs text-red-500 flex items-center gap-1 mt-0.5">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-[#0392EA] hover:bg-[#037AC3] border border-[#037AC3] shadow-[0px_2px_1px_rgba(0,117,189,0.20),4px_4px_16px_rgba(1,29,47,0.12),inset_0px_7px_7px_rgba(255,255,255,0.25)] transition-all duration-300 py-4 rounded-xl text-base font-bold text-white cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                Submit Consultation Request
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

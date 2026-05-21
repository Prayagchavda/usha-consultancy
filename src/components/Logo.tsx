import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
}

export default function Logo({ className = "h-9", showText = true, light = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto filter drop-shadow-sm"
      >
        {/* Gradients */}
        <defs>
          <linearGradient id="logo-u-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#037AC3" />
            <stop offset="100%" stopColor="#0392EA" />
          </linearGradient>
          <linearGradient id="logo-c-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" />
            <stop offset="100%" stopColor="#0083B0" />
          </linearGradient>
          <linearGradient id="logo-glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0392EA" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Subtle Background Glow */}
        <circle cx="50" cy="50" r="45" fill="url(#logo-glow)" />

        {/* Stylized U (Left side) */}
        <path
          d="M25 25V60C25 71 34 80 45 80C51 80 56.5 77 60 72.5"
          stroke="url(#logo-u-grad)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M42 25V45"
          stroke="url(#logo-u-grad)"
          strokeWidth="10"
          strokeLinecap="round"
        />

        {/* Stylized C (Right side overlapping) */}
        <path
          d="M75 35C71.5 30 66 27 60 27C49 27 40 36 40 47.5C40 59 49 68 60 68C66 68 71.5 65 75 60"
          stroke="url(#logo-c-grad)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Circuit lines extending from C */}
        {/* Line 1 (Top right) */}
        <path
          d="M72 40H88"
          stroke="url(#logo-c-grad)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle cx="88" cy="40" r="3.5" fill="#00E5FF" />

        {/* Line 2 (Middle top right) */}
        <path
          d="M75 48H92"
          stroke="url(#logo-c-grad)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle cx="92" cy="48" r="3.5" fill="#00E5FF" />

        {/* Line 3 (Middle bottom right) */}
        <path
          d="M75 56H92"
          stroke="url(#logo-c-grad)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle cx="92" cy="56" r="3.5" fill="#00E5FF" />

        {/* Line 4 (Bottom right) */}
        <path
          d="M72 64H86"
          stroke="url(#logo-c-grad)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle cx="86" cy="64" r="3.5" fill="#00E5FF" />
      </svg>

      {showText && (
        <div className="flex flex-col justify-center">
          <span
            className={`font-sans font-extrabold text-xl tracking-tight leading-none ${
              light ? "text-white" : "text-slate-900 dark:text-white"
            }`}
          >
            USHA
          </span>
          <span
            className={`font-sans font-semibold text-[10px] tracking-[0.2em] leading-none mt-1 ${
              light ? "text-slate-300" : "text-[#0392EA] dark:text-[#0392EA]"
            }`}
          >
            CONSULTANCY
          </span>
        </div>
      )}
    </div>
  );
}

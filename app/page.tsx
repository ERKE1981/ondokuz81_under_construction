"use client"

import { useState } from "react"
import Image from "next/image"

const t = {
  tr: {
    heading: "Yenileniyoruz.",
    sub: "Yeni projeler ve genişleyen ekibimizle\nsizinle yenileniyoruz.",
    contact: "Bize Ulaşın",
    email: "info@ondokuz81.com",
    linkedin: "LinkedIn",
    copy: "© 2025 ondokuz81. Tüm hakları saklıdır.",
  },
  en: {
    heading: "We're Renewing.",
    sub: "We are renewing ourselves with new projects\nand our growing team.",
    contact: "Contact Us",
    email: "info@ondokuz81.com",
    linkedin: "LinkedIn",
    copy: "© 2025 ondokuz81. All rights reserved.",
  },
}

export default function Page() {
  const [lang, setLang] = useState<"tr" | "en">("tr")
  const c = t[lang]

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Lang toggle */}
      <div className="fixed top-6 right-6 z-50 lang-toggle flex items-center gap-1 bg-white border border-gray-200 rounded-full px-2 py-1 shadow-sm">
        <button
          onClick={() => setLang("tr")}
          className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all ${lang === "tr" ? "bg-primary text-white" : "text-foreground/50 hover:text-foreground"}`}
        >
          TR
        </button>
        <span className="text-gray-300 text-xs">|</span>
        <button
          onClick={() => setLang("en")}
          className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all ${lang === "en" ? "bg-primary text-white" : "text-foreground/50 hover:text-foreground"}`}
        >
          EN
        </button>
      </div>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
        <div className="fade-up fade-up-delay-1 mb-10">
          <Image
            src="/81_brush_yeni1.png"
            alt="ondokuz81"
            width={120}
            height={120}
            className="mx-auto object-contain"
            priority
          />
        </div>

        <div className="fade-up fade-up-delay-2 mb-4">
          <div className="divider mx-auto mb-8" />
          <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tight leading-none">
            {c.heading}
          </h1>
        </div>

        <p className="fade-up fade-up-delay-3 mt-6 text-lg md:text-xl text-foreground/60 font-light max-w-md leading-relaxed whitespace-pre-line">
          {c.sub}
        </p>
      </section>

      {/* Contact */}
      <section className="border-t border-gray-100 py-14 px-6">
        <div className="max-w-xl mx-auto text-center fade-up fade-up-delay-4">
          <p className="text-xs font-bold tracking-widest text-primary uppercase mb-4">
            {c.contact}
          </p>
          <a
            href={`mailto:${c.email}`}
            className="text-2xl md:text-3xl font-semibold text-foreground hover:text-primary transition-colors duration-200"
          >
            {c.email}
          </a>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/company/ondokuz81"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/50 hover:text-primary transition-colors duration-200 flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <span className="text-gray-200">|</span>
            <a
              href="https://www.instagram.com/ondokuz81"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/50 hover:text-primary transition-colors duration-200 flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5 px-6 border-t border-gray-100 text-center">
        <p className="text-xs text-foreground/30">{c.copy}</p>
      </footer>
    </main>
  )
}

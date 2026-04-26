"use client"

import { useState } from "react"
import Image from "next/image"

const t = {
  tr: {
    heading: "Yenileniyoruz.",
    sub: "Yeni projeler ve genişleyen\nekibimizle sizinle yenileniyoruz.",
    contact: "Bize Ulaşın",
    nameLabel: "Ad Soyad", namePh: "Ad ve soyadınız",
    phoneLabel: "Telefon", phonePh: "0532 xxx xx xx",
    emailLabel: "E-posta", emailPh: "ornek@email.com",
    messageLabel: "Mesaj", messagePh: "Projeniz hakkında detayları paylaşın...",
    send: "Gönder", sending: "Gönderiliyor...", sent: "Mesajınız iletildi!",
    copy: "© 2026 ondokuz81. Tüm hakları saklıdır.",
  },
  en: {
    heading: "We're Rebrewing.",
    sub: "We are rebrewing ourselves with\nnew projects and our growing team.",
    contact: "Contact Us",
    nameLabel: "Full Name", namePh: "Your full name",
    phoneLabel: "Phone", phonePh: "+90 532 xxx xx xx",
    emailLabel: "Email", emailPh: "example@email.com",
    messageLabel: "Message", messagePh: "Share details about your project...",
    send: "Send", sending: "Sending...", sent: "Message sent!",
    copy: "© 2026 ondokuz81. All rights reserved.",
  },
}

export default function Page() {
  const [lang, setLang] = useState<"tr" | "en">("en")
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const c = t[lang]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    const form = e.target as HTMLFormElement
    const data = Object.fromEntries(new FormData(form))
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      setSent(true)
      form.reset()
      setTimeout(() => setSent(false), 4000)
    } finally {
      setSending(false)
    }
  }

  return (
    <main className="h-screen flex flex-col overflow-hidden bg-white">

      {/* Lang toggle */}
      <div className="fixed top-5 right-5 z-50 flex items-center gap-1 bg-white border border-gray-200 rounded-full px-2 py-1 shadow-sm">
        <button onClick={() => setLang("tr")} className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all ${lang === "tr" ? "bg-primary text-white" : "text-foreground/50 hover:text-foreground"}`}>TR</button>
        <span className="text-gray-300 text-xs">|</span>
        <button onClick={() => setLang("en")} className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all ${lang === "en" ? "bg-primary text-white" : "text-foreground/50 hover:text-foreground"}`}>EN</button>
      </div>

      {/* Main — two columns */}
      <div className="flex-1 flex items-stretch min-h-0">

        {/* Left: brand */}
        <div className="hidden md:flex flex-col items-start justify-center px-16 lg:px-24 w-1/2 border-r border-gray-100">
          <Image src="/81_brush_yeni1.png" alt="ondokuz81" width={88} height={88} className="object-contain mb-6" priority />
          <div className="w-8 h-0.5 bg-primary mb-6" />
          <h1 className="text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-none mb-4">
            {c.heading}
          </h1>
          <p className="text-base text-foreground/50 font-light leading-relaxed whitespace-pre-line">
            {c.sub}
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="https://www.linkedin.com/company/ondokuz81" target="_blank" rel="noopener noreferrer" className="text-xs text-foreground/40 hover:text-primary transition-colors flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <span className="text-gray-200 text-xs">|</span>
            <a href="https://www.instagram.com/ondokuz81" target="_blank" rel="noopener noreferrer" className="text-xs text-foreground/40 hover:text-primary transition-colors flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              Instagram
            </a>
          </div>
        </div>

        {/* Right: form */}
        <div className="flex flex-col justify-center px-8 md:px-12 lg:px-16 w-full md:w-1/2 py-16 md:py-8">

          {/* Mobile: logo + heading */}
          <div className="md:hidden mb-6 text-center">
            <Image src="/81_brush_yeni1.png" alt="ondokuz81" width={64} height={64} className="object-contain mx-auto mb-4" priority />
            <h1 className="text-4xl font-black text-foreground tracking-tight">{c.heading}</h1>
            <p className="text-sm text-foreground/50 mt-2 whitespace-pre-line">{c.sub}</p>
          </div>

          <p className="text-xs font-bold tracking-widest text-primary uppercase mb-5">{c.contact}</p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-foreground mb-1">{c.nameLabel}</label>
                <input name="name" type="text" placeholder={c.namePh} required className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
              </div>
              <div>
                <label className="block text-xs font-medium text-foreground mb-1">{c.phoneLabel}</label>
                <input name="phone" type="tel" placeholder={c.phonePh} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-foreground mb-1">{c.emailLabel}</label>
              <input name="email" type="email" placeholder={c.emailPh} required className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
            </div>
            <div>
              <label className="block text-xs font-medium text-foreground mb-1">{c.messageLabel}</label>
              <textarea name="message" placeholder={c.messagePh} rows={4} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none" />
            </div>
            <button type="submit" disabled={sending} className="w-full py-3 rounded-full font-bold text-white text-sm transition-all disabled:opacity-70" style={{ background: "linear-gradient(135deg,#f15a22,#e04010)", boxShadow: "0 4px 20px rgba(241,90,34,0.25)" }}>
              {sent ? c.sent : sending ? c.sending : c.send}
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-3 px-8 text-center flex-shrink-0">
        <p className="text-xs text-foreground/30">{c.copy}</p>
      </footer>

    </main>
  )
}

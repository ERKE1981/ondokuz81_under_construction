import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "ondokuz81 | Yenileniyoruz",
  description: "Yeni projeler ve genişleyen ekibimizle sizinle yenileniyoruz.",
  robots: "noindex, nofollow",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f15a22",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/81_brush_yeni1.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  )
}

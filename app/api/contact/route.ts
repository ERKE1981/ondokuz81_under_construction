import { Resend } from "resend"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { name, phone, email, message } = await req.json()

  const { error } = await resend.emails.send({
    from: "ondokuz81 <noreply@ondokuz81.com>",
    to: "info@ondokuz81.com",
    replyTo: email,
    subject: `Yeni İletişim Formu: ${name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; color: #31312e;">
        <img src="https://ondokuz81underconstruction.vercel.app/81_brush_yeni1.png" width="60" alt="ondokuz81" style="margin-bottom: 24px;" />
        <h2 style="margin: 0 0 24px; font-size: 20px;">Yeni İletişim Formu Mesajı</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; font-weight: 600; width: 120px;">Ad Soyad</td><td style="padding: 8px 0;">${name}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: 600;">Telefon</td><td style="padding: 8px 0;">${phone || "—"}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: 600;">E-posta</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #f15a22;">${email}</a></td></tr>
        </table>
        <div style="margin-top: 20px; padding: 16px; background: #f5f5f5; border-radius: 8px; border-left: 3px solid #f15a22;">
          <p style="margin: 0; white-space: pre-line;">${message || "—"}</p>
        </div>
        <p style="margin-top: 24px; font-size: 12px; color: #999;">ondokuz81.com iletişim formu aracılığıyla gönderildi.</p>
      </div>
    `,
  })

  if (error) {
    return NextResponse.json({ error }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}

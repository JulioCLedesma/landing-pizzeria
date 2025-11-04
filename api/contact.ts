// api/contact.ts (Vercel Serverless)
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Método no permitido" });
  }

  try {
    const { name, email, message } = req.body || {};
    const OWNER_EMAIL = process.env.OWNER_EMAIL;
    const FROM_EMAIL = process.env.FROM_EMAIL || "onboarding@resend.dev";

    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: "Faltan campos requeridos." });
    }
    if (!OWNER_EMAIL) {
      return res.status(500).json({ ok: false, error: "OWNER_EMAIL no configurado." });
    }
    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({ ok: false, error: "RESEND_API_KEY no configurado." });
    }

    // 1) Email al negocio
    await resend.emails.send({
      from: FROM_EMAIL,
      to: OWNER_EMAIL,
      subject: `Nuevo contacto: ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
      html: `
        <h2>Nuevo contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <pre style="white-space:pre-wrap;">${message}</pre>
      `,
    });

    // 2) Confirmación al usuario
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Recibimos tu mensaje – Pizzería",
      text: `Hola ${name},\n\nGracias por escribirnos. Ya recibimos tu mensaje y te contactaremos pronto.\n\nTu mensaje:\n${message}\n\n– Pizzería`,
      html: `
        <p>Hola ${name},</p>
        <p>Gracias por escribirnos. Ya recibimos tu mensaje y te contactaremos pronto.</p>
        <p><strong>Tu mensaje:</strong></p>
        <pre style="white-space:pre-wrap;">${message}</pre>
        <p>— Pizzería</p>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error("[api/contact]", err?.message || err);
    return res.status(500).json({ ok: false, error: "No se pudo enviar el correo." });
  }
}

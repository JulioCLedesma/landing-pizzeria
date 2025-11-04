// api/contact-express.ts
import "dotenv/config"; // Asegúrate de que esto esté aquí
import type { Request, Response } from "express";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const contactHandler = async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body || {};
    const OWNER_EMAIL = process.env.OWNER_EMAIL;
    const FROM_EMAIL = process.env.FROM_EMAIL || "onboarding@resend.dev";

    // Validaciones básicas
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: "Faltan campos requeridos." });
    }
    if (!OWNER_EMAIL) {
      return res.status(500).json({ ok: false, error: "OWNER_EMAIL no configurado." });
    }
    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({ ok: false, error: "RESEND_API_KEY no configurado." });
    }

    // --- INICIA EL CAMBIO ---

    // 1) Correo al negocio
    // Ahora capturamos la respuesta: { data, error }
    const { data: dataOwner, error: errorOwner } = await resend.emails.send({
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

    // Si hubo un error en el primer correo, lo reportamos y salimos
    if (errorOwner) {
      console.error("[Resend Error Owner]", errorOwner);
      return res.status(400).json({ ok: false, error: errorOwner.message });
    }

    // 2) Confirmación al usuario
    // Capturamos la respuesta: { data, error }
    const { data: dataUser, error: errorUser } = await resend.emails.send({
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

    // Si hubo un error en el segundo correo, lo reportamos y salimos
    if (errorUser) {
      console.error("[Resend Error User]", errorUser);
      return res.status(400).json({ ok: false, error: errorUser.message });
    }

    // --- FIN DEL CAMBIO ---

    // Si llegamos aquí, ambos correos fueron aceptados por Resend
    console.log("Correos enviados exitosamente:", { dataOwner, dataUser });
    return res.status(200).json({ ok: true, data: { dataOwner, dataUser } });

  } catch (err: any) {
    console.error("[contact] error general:", err?.message || err);
    return res.status(500).json({ ok: false, error: "No se pudo enviar el correo." });
  }
};
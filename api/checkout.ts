import type { VercelRequest, VercelResponse } from "@vercel/node";
import Stripe from "stripe";

// Asegúrate de que STRIPE_SECRET_KEY esté en tus variables de Vercel
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20", // Siempre es bueno fijar una versión
});

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  try {
    // --- ESTA ES LA CORRECCIÓN ---
    // El error era `req.json is not a function`.
    // Usamos `req.body` en su lugar.
    const items = req.body.items ?? [];
    // --- FIN DE LA CORRECCIÓN ---

    if (!Array.isArray(items) || !items.length) {
      return res.status(400).json({ error: "Carrito vacío" });
    }

    // Asegúrate de tener NEXT_PUBLIC_SITE_URL en Vercel
    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:5173";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: items.map((i: any) => ({
        quantity: i.qty,
        price_data: {
          currency: "mxn",
          unit_amount: Math.round(i.price * 100),
          product_data: { name: i.name },
        },
      })),
      success_url: `${siteUrl}/ordenar?success=true`,
      cancel_url: `${siteUrl}/ordenar?canceled=true`,
    });

    if (!session.url) {
      return res
        .status(500)
        .json({ error: "Error al crear la sesión de Stripe." });
    }

    return res.json({ url: session.url });
  } catch (err: any) {
    console.error("❌ Error en Stripe (Vercel):", err.message);
    return res.status(500).json({ error: err.message });
  }
}
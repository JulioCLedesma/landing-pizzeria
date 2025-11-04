// api/checkout.ts
import Stripe from "stripe";

export default async function handler(req: Request) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json();
    const items = body?.items ?? [];

    if (!Array.isArray(items) || !items.length) {
      return new Response(JSON.stringify({ error: "Carrito vacío" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

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
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/ordenar?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/ordenar?canceled=true`,
    });

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e: any) {
    console.error(e);
    return new Response(JSON.stringify({ error: e?.message ?? "Stripe error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

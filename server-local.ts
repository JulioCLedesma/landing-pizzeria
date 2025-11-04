// server-local.ts
import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import Stripe from "stripe";
import { contactHandler } from "./api/contact-express.ts";


const app = express();
app.use(cors());
app.use(bodyParser.json());



app.post("/api/contact", contactHandler);
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// simple test
app.get("/", (_, res) => res.send("Servidor Stripe local activo ✅"));

app.post("/api/checkout", async (req, res) => {
  try {
    const items = req.body.items ?? [];

    if (!Array.isArray(items) || !items.length) {
      return res.status(400).json({ error: "Carrito vacío" });
    }

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
      success_url: "http://localhost:5173/ordenar?success=true",
      cancel_url: "http://localhost:5173/ordenar?canceled=true",
    });

    return res.json({ url: session.url });
  } catch (err: any) {
    console.error("❌ Error en Stripe:", err.message);
    return res.status(500).json({ error: err.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`✅ Servidor backend en http://localhost:${PORT}`);
  console.log("🔑 Clave Stripe:", process.env.STRIPE_SECRET_KEY?.slice(0, 15) + "...");
});

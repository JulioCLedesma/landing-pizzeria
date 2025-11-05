// components/Contact.tsx
import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await resp.json();
      if (!resp.ok || !data.ok) {
        throw new Error(data?.error || "Error al enviar el mensaje.");
      }

      toast.success("Mensaje enviado. Te llegará una confirmación por correo.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      toast.error(err.message || "No se pudo enviar tu mensaje.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-xl border p-3"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-xl border p-3"
        required
      />
      <textarea
        name="message"
        placeholder="Mensaje"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full rounded-xl border p-3 h-36"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="px-5 py-3 rounded-xl bg-emerald-600 text-white font-medium shadow
                   hover:shadow-md transition active:scale-[.98] disabled:opacity-60"
      >
        {loading ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
};

export default Contact;

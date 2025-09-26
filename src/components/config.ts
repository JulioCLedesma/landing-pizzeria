// src/config.ts
const required = (v: string | undefined, name: string) => {
  if (!v || !v.trim()) {
    console.warn(`[config] Falta la variable ${name}. Usaré string vacío.`);
    return "";
  }
  return v.trim();
};

export const DIDI_STORE_WEB = required(import.meta.env.VITE_DIDI_STORE_WEB, "VITE_DIDI_STORE_WEB");
export const DIDI_APP_URI   = (import.meta.env.VITE_DIDI_APP_URI ?? "").toString().trim();

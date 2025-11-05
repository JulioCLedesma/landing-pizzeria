import type { VercelRequest, VercelResponse } from "@vercel/node";
export default function handler(_: VercelRequest, res: VercelResponse) {
  res.json({
    ok: true,
    hasResend: !!process.env.RESEND_API_KEY,
    hasOwner: !!process.env.OWNER_EMAIL,
    hasFrom: !!process.env.FROM_EMAIL
  });
}

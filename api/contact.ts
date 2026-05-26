import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Destinatarios: lista separada por coma. Cuando esten creados los buzones
// @legaleduca.cl, cambiala en Vercel -> Settings -> Environment Variables.
const RECIPIENTS = (process.env.CONTACT_RECIPIENTS ?? "aaron@mainbrain.cl")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

// Remitente: requiere dominio verificado en Resend.
const FROM = process.env.CONTACT_FROM ?? "Legal Educa <contacto@legaleduca.cl>";

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => {
    const map: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return map[c]!;
  });
}

function renderEmail(data: {
  nombre: string;
  email: string;
  telefono: string;
  tema: string;
  mensaje: string;
}): string {
  const rows: Array<[string, string]> = [
    ["Nombre", data.nombre],
    ["Correo electrónico", data.email],
    ["Teléfono", data.telefono],
    ["Tema de consulta", data.tema],
  ].filter(([, v]) => v && v.trim()) as Array<[string, string]>;

  const tableRows = rows
    .map(
      ([k, v]) => `
        <tr>
          <td style="padding:10px 0;color:#5b5560;font-size:13px;width:170px;vertical-align:top">${k}</td>
          <td style="padding:10px 0;color:#1a1623;font-size:14px;font-weight:500">${escapeHtml(v)}</td>
        </tr>`
    )
    .join("");

  const message = escapeHtml(data.mensaje).replace(/\n/g, "<br>");
  const fecha = new Date().toLocaleString("es-CL", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "America/Santiago",
  });

  return `<!doctype html>
<html lang="es">
  <body style="margin:0;padding:24px 12px;background:#faf9f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Inter,Arial,sans-serif">
    <div style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #e7e2dc;border-radius:18px;overflow:hidden">
      <div style="padding:22px 30px;background:linear-gradient(100deg,#e6266e 0%,#fb7a2a 60%,#fbb03b 100%);color:#ffffff">
        <div style="font-size:12px;letter-spacing:0.2em;text-transform:uppercase;opacity:0.95">Legal Educa</div>
        <div style="font-size:20px;font-weight:600;margin-top:4px;line-height:1.25">Nueva consulta desde el sitio web</div>
      </div>
      <div style="padding:24px 30px">
        <table style="width:100%;border-collapse:collapse">${tableRows}</table>
        <div style="margin-top:22px;padding-top:20px;border-top:1px solid #e7e2dc">
          <div style="color:#5b5560;font-size:13px;margin-bottom:8px">Mensaje</div>
          <div style="color:#1a1623;font-size:14px;line-height:1.6">${message}</div>
        </div>
      </div>
      <div style="padding:14px 30px;background:#f3f1ed;color:#5b5560;font-size:12px;line-height:1.5">
        Para responder, simplemente responde este correo y le llegará directamente a
        <strong style="color:#1a1623">${escapeHtml(data.email)}</strong>.
        <br>Recibido el ${fecha}.
      </div>
    </div>
  </body>
</html>`;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, error: "Método no permitido" });
  }

  try {
    const body =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body ?? {};

    const data = {
      nombre: String(body["Nombre"] ?? "").trim(),
      email: String(body["Correo electrónico"] ?? "").trim(),
      telefono: String(body["Teléfono"] ?? "").trim(),
      tema: String(body["Tema de consulta"] ?? "").trim(),
      mensaje: String(body["Mensaje"] ?? "").trim(),
      botcheck: body.botcheck,
    };

    // Honeypot: si lo llenó un bot, simulamos éxito y descartamos.
    if (data.botcheck) {
      return res.status(200).json({ success: true });
    }

    if (!data.nombre || !data.email || !data.mensaje) {
      return res
        .status(400)
        .json({ success: false, error: "Faltan campos obligatorios" });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return res
        .status(400)
        .json({ success: false, error: "Correo inválido" });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("Falta RESEND_API_KEY en variables de entorno");
      return res
        .status(500)
        .json({ success: false, error: "Servicio de correo no configurado" });
    }

    const html = renderEmail(data);
    const subject = `Nueva consulta: ${data.tema || "Sin tema"} — ${data.nombre}`;

    const result = await resend.emails.send({
      from: FROM,
      to: RECIPIENTS,
      replyTo: data.email,
      subject,
      html,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return res
        .status(500)
        .json({ success: false, error: "No se pudo enviar el correo" });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Contact handler error:", err);
    return res.status(500).json({ success: false, error: "Error interno" });
  }
}

import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "El nombre es requerido").max(100),
  email: z.string().email("Email inválido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres").max(2000),
});

const EMAILJS_URL = "https://api.emailjs.com/api/v1.0/email/send";

async function sendEmailJS(templateId: string, params: Record<string, unknown>) {
  const res = await fetch(EMAILJS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: templateId,
      user_id: process.env.EMAILJS_PUBLIC_KEY,
      template_params: params,
    }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`EmailJS error (${res.status}): ${text}`);
  }
}

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator(contactSchema)
  .handler(async ({ data }) => {
    await Promise.all([
      sendEmailJS("template_fm6weeq", {
        name: data.name,
        title: data.message,
        email: data.email,
        to_email: data.email,
      }),
      sendEmailJS("template_zzlfs1b", {
        name: data.name,
        email: data.email,
        message: data.message,
      }),
    ]);
    return { success: true };
  });

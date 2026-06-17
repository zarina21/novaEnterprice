import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "El nombre es requerido").max(100),
  email: z.string().email("Email inválido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres").max(2000),
});

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export const submitContact = createServerFn({ method: "POST" })
  .validator(contactSchema)
  .handler(async ({ data }) => {
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      throw new Error("WEB3FORMS_ACCESS_KEY is not configured");
    }

    const res = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        name: data.name,
        email: data.email,
        message: data.message,
        subject: `Nuevo mensaje de ${data.name}`,
        from_name: "Nova Enterprice Online",
      }),
    });

    const result = await res.json();
    if (!result.success) {
      throw new Error(`Web3Forms error: ${JSON.stringify(result)}`);
    }

    return { success: true };
  });

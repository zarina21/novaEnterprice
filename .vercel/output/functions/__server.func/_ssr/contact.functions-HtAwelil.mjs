import { T as TSS_SERVER_FUNCTION, a as createServerFn } from "./server-E7C9-A0c.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const contactSchema = objectType({
  name: stringType().min(1, "El nombre es requerido").max(100),
  email: stringType().email("Email inválido"),
  message: stringType().min(10, "El mensaje debe tener al menos 10 caracteres").max(2e3)
});
const EMAILJS_URL = "https://api.emailjs.com/api/v1.0/email/send";
async function sendEmailJS(templateId, params) {
  const res = await fetch(EMAILJS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: templateId,
      user_id: process.env.EMAILJS_PUBLIC_KEY,
      template_params: params
    })
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`EmailJS error (${res.status}): ${text}`);
  }
}
const submitContact_createServerFn_handler = createServerRpc({
  id: "f89a2e5e681e9af767c0434e24c12a718b0b01fca0227036608f98c4b9390f88",
  name: "submitContact",
  filename: "src/lib/api/contact.functions.ts"
}, (opts) => submitContact.__executeServer(opts));
const submitContact = createServerFn({
  method: "POST"
}).validator(contactSchema).handler(submitContact_createServerFn_handler, async ({
  data
}) => {
  await Promise.all([sendEmailJS("template_fm6weeq", {
    name: data.name,
    title: data.message,
    email: data.email,
    to_email: data.email
  }), sendEmailJS("template_zzlfs1b", {
    name: data.name,
    email: data.email,
    message: data.message
  })]);
  return {
    success: true
  };
});
export {
  submitContact_createServerFn_handler
};

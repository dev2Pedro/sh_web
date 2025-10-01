"use server";

import { api } from "@/lib/axios"; // seu axios.ts

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string | undefined;
  const service = formData.get("service") as string;
  const message = formData.get("message") as string;

  try {
    const response = await api.post("/contact", {
      name,
      email,
      phone,
      service,
      message,
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao enviar formulário:", error);
    return { success: false, message: "Erro ao enviar formulário" };
  }
}

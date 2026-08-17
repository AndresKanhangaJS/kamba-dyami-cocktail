import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Introduz o teu nome"),
  email: z.string().email("Introduz um email válido"),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

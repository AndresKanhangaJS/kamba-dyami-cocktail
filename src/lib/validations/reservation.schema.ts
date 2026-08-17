import { z } from "zod";

export const reservationFormSchema = z.object({
  name: z.string().min(2, "Introduz o teu nome completo"),
  email: z.string().email("Introduz um email válido"),
  phone: z.string().min(9, "Introduz um número de telefone válido"),
  date: z.string().min(1, "Escolhe uma data"),
  time: z.string().min(1, "Escolhe uma hora"),
  guests: z.coerce
    .number({ message: "Indica o número de pessoas" })
    .min(1, "Mínimo 1 pessoa")
    .max(20, "Para grupos maiores, contacta-nos directamente"),
  occasion: z.string().optional(),
  special_requests: z.string().optional(),
});

export type ReservationFormValues = z.infer<typeof reservationFormSchema>;

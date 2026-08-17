import { z } from "zod";

export const reservationFormSchema = z.object({
  name: z.string().min(2, "Introduz o teu nome completo"),
  email: z.string().email("Introduz um email válido"),
  phone: z.string().min(9, "Introduz um número de telefone válido"),
  date: z.string().min(1, "Escolhe uma data"),
  time: z.string().min(1, "Escolhe uma hora"),
  location: z.string().min(3, "Indica o local do evento"),
  guests: z.coerce
    .number({ message: "Indica o número de convidados" })
    .min(1, "Mínimo 1 convidado")
    .max(20, "Para grupos maiores, contacta-nos directamente"),
  occasion: z.string().optional(),
  special_requests: z.string().optional(),
});

export type ReservationFormValues = z.infer<typeof reservationFormSchema>;

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  reservationFormSchema,
  type ReservationFormValues,
} from "@/lib/validations/reservation.schema";
import type { Reservation } from "@/types/reservation.types";

export function useReservation() {
  const [confirmedReservation, setConfirmedReservation] = useState<Reservation | null>(null);

  const form = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationFormSchema),
    defaultValues: { guests: 2 },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    // Fase 1: sem backend — simula o pedido e confirma no cliente.
    await new Promise((resolve) => setTimeout(resolve, 600));

    setConfirmedReservation({
      id: crypto.randomUUID(),
      status: "pending",
      ...values,
    });
    form.reset({ guests: 2 });
  });

  return { ...form, onSubmit, confirmedReservation };
}

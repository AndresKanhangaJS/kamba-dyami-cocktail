"use client";

import { CalendarCheck } from "lucide-react";
import { useReservation } from "@/hooks/useReservation";
import { Input } from "@/components/ui/Input";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { cn } from "@/lib/utils/cn";

const TIME_SLOTS = Array.from({ length: 12 }, (_, i) => {
  const totalMinutes = 18 * 60 + i * 30;
  const hours = String(Math.floor(totalMinutes / 60)).padStart(2, "0");
  const minutes = String(totalMinutes % 60).padStart(2, "0");
  return `${hours}:${minutes}`;
});

const selectClasses =
  "h-11 rounded-lg border border-mist bg-obsidian px-4 font-body text-cream transition-colors duration-200 focus-visible:border-gold-kamba focus-visible:outline-none";

function todayISODate() {
  return new Date().toISOString().split("T")[0];
}

export function ReservationSection() {
  const {
    register,
    onSubmit,
    formState: { errors, isSubmitting },
    confirmedReservation,
  } = useReservation();

  if (confirmedReservation) {
    return (
      <ScrollReveal className="mx-auto flex max-w-lg flex-col items-center gap-4 rounded-2xl border border-teal-ilha/40 bg-smoke p-10 text-center">
        <CalendarCheck size={40} className="text-teal-ilha" />
        <h2 className="font-display text-2xl font-semibold text-cream">
          Reserva pedida com sucesso!
        </h2>
        <p className="font-body text-sm text-cream/70">
          Obrigado, {confirmedReservation.name}. Entraremos em contacto por email ou telefone
          para confirmar a tua reserva de {confirmedReservation.guests}{" "}
          {confirmedReservation.guests === 1 ? "pessoa" : "pessoas"} no dia{" "}
          {confirmedReservation.date} às {confirmedReservation.time}.
        </p>
      </ScrollReveal>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="mx-auto flex max-w-2xl flex-col gap-6 rounded-2xl border border-mist bg-smoke p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Input label="Nome completo" error={errors.name?.message} {...register("name")} />
        <Input
          type="email"
          label="Email"
          error={errors.email?.message}
          {...register("email")}
        />
        <Input
          type="tel"
          label="Telefone"
          placeholder="+244 900 000 000"
          error={errors.phone?.message}
          {...register("phone")}
        />
        <Input
          type="number"
          label="Número de pessoas"
          min={1}
          max={20}
          error={errors.guests?.message}
          {...register("guests")}
        />
        <Input
          type="date"
          label="Data"
          min={todayISODate()}
          error={errors.date?.message}
          {...register("date")}
        />
        <div className="flex flex-col gap-1.5">
          <label htmlFor="time" className="font-body text-sm text-cream/80">
            Hora
          </label>
          <select
            id="time"
            defaultValue=""
            className={cn(selectClasses, errors.time && "border-red-angola")}
            {...register("time")}
          >
            <option value="" disabled>
              Escolhe uma hora
            </option>
            {TIME_SLOTS.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          {errors.time && (
            <p className="font-body text-xs text-red-angola">{errors.time.message}</p>
          )}
        </div>
      </div>

      <Input
        label="Ocasião (opcional)"
        placeholder="Aniversário, encontro, celebração..."
        error={errors.occasion?.message}
        {...register("occasion")}
      />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="special_requests" className="font-body text-sm text-cream/80">
          Pedidos especiais (opcional)
        </label>
        <textarea
          id="special_requests"
          rows={4}
          placeholder="Alergias, preferências de mesa, celebrações especiais..."
          className={cn(selectClasses, "h-auto resize-none py-3")}
          {...register("special_requests")}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="h-12 rounded-full bg-coral-angola font-body font-medium text-cream transition-all duration-200 hover:bg-amber disabled:opacity-50"
      >
        {isSubmitting ? "A enviar..." : "Pedir Reserva"}
      </button>
    </form>
  );
}

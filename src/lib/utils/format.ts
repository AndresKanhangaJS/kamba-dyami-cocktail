import { SITE_CONFIG } from "@/constants/config";

const aoaFormatter = new Intl.NumberFormat("pt-AO", {
  style: "currency",
  currency: SITE_CONFIG.currency,
  maximumFractionDigits: 0,
});

export function formatAOA(value: number): string {
  return aoaFormatter.format(value);
}

const dateFormatter = new Intl.DateTimeFormat("pt-AO", {
  timeZone: SITE_CONFIG.timezone,
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export function formatDate(date: string | Date): string {
  return dateFormatter.format(new Date(date));
}

export function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

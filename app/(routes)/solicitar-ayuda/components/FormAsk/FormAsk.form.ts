import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  address: z.string().min(2).max(50, { message: "Dirección inválida" }),
  phone: z.string().min(2).max(50, { message: "Número de teléfono inválido" }),
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "Tienes que seleccionar al menos un artículo.",
  }),
  portal: z.number().optional(),
  lat: z.string(),
  lon: z.string(),
});

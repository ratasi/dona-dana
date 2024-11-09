import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, { message: "Introduce tu nombre" }),
  state: z.string().min(2, { message: "Introduce tu localidad" }),
  email: z.string().min(2, { message: "Introduce tu correo electrónico" }),
  document: z.string().min(1, { message: "El documento es obligatorio" }),
  phone: z
    .string()
    .min(2, { message: "Introduce un teléfono válido" })
    .max(50, { message: "Número de teléfono inválido" }),
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "Tienes que seleccionar al menos un artículo.",
  }),
});

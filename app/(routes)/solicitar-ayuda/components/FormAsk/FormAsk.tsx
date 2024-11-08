"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { items } from "./FormAsk.data";
import { useEffect, useState } from "react";
import { AddressSearchResult } from "./FormAsk.types";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  address: z.string().min(2).max(50, { message: "Dirección inválida" }),
  phone: z.string().min(2).max(50, { message: "Número de teléfono inválido" }),
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "Tienes que seleccionar al menos un artículo.",
  }),
  portal: z.number().optional(),
  lat: z.string(),
  lon: z.string(),
});

export function FormAsk() {
  const [addressError, setAddressError] = useState("");
  const [addressSearched, setAddressSearched] = useState<
    AddressSearchResult | []
  >([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: "",
      phone: "",
      lat: "",
      lon: "",
      items: [""],
    },
  });

  const verifyAddress = async (address: string) => {
    if (address.length < 3) return;

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          address
        )}&format=json`
      );
      const data = await response.json();
      console.log(data);

      if (data.length === 0) {
        setAddressError("Dirección no encontrada. Intenta ser más específico.");
      } else {
        setAddressSearched(data);
        setAddressError("");
      }
    } catch (error) {
      console.error("Error al verificar la dirección:", error);
      setAddressError("Error al verificar la dirección.");
    }
  };

  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === "address" && value.address) {
        verifyAddress(value.address);
      }
    });

    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.watch]);

  const handleSelectAddress = (selectedAddress: AddressSearchResult) => {
    // Establece la dirección seleccionada en el campo address
    form.setValue("address", selectedAddress.name);
    // Limpia el listado de direcciones para evitar más búsquedas
    setAddressSearched([]);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Nombre" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Tu número de teléfono" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dirección de tu domicilio afectado</FormLabel>
                <FormControl>
                  <Input placeholder="Introduce tu dirección" {...field} />
                </FormControl>
                <div>
                  {addressError && !addressSearched && (
                    <div>
                      <p>
                        No se han encontrador resultados para esa dirección.
                      </p>
                    </div>
                  )}
                  {addressSearched.length > 0 && (
                    <div>
                      {addressSearched.map((result, index) => (
                        <div
                          key={index}
                          className="cursor-pointer"
                          onClick={() => handleSelectAddress(result)}
                        >
                          {result?.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="items"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">Necesidades</FormLabel>
                  <FormDescription>
                    Selecciona al menos un artículo que necesites.
                  </FormDescription>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                  {items.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="items"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-center space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Solicitar ayuda</Button>
        </form>
      </Form>
    </div>
  );
}

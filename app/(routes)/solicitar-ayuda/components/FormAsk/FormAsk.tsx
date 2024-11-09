"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
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
import { provincesData } from "./FormAsk.data";
import { formSchema } from "./FormAsk.form";

import axios from "axios";
import { UploadButton } from "@/utils/uploadthing";
import { LoaderCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { FormAskProps, OrderResponse } from "./FormAsk.types";
import Link from "next/link";

export function FormAsk(props: FormAskProps) {
  const { items } = props;
  const [isLoadingUploadedImage, setIsLoadingUploadedImage] = useState(false);
  const [successForm, setSuccessForm] = useState(false);

  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      state: "",
      email: "",
      items: [],
      document: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post<OrderResponse>(
        `${process.env.NEXT_PUBLIC_BACKEND_HOST}/forms/order`,
        values
      );

      if (response.data.message === "Usuario ya existe") {
        toast({
          title: "Este usuario ya ha solicitado ayuda.",
          description: "Cada usuario solo puede solicitar ayuda una vez.",
        });
      }

      if (response.data.message === "Pedido guardado exitosamente") {
        setSuccessForm(true);
        toast({
          title: "Formulario enviado correctamente.",
        });
        form.reset();
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Ha ocurrido un error. Inténtelo de nuevo más tarde.",
        variant: "destructive",
      });
    }
  };

  return (
    <div>
      {successForm ? (
        <div>
          <h1 className="text-2xl font-semibold">
            ¡Formulario enviado correctamente!
          </h1>
          <h3 className="mb-4">
            Vamos a intentar que tu casa vuelva a ser hogar lo antes posible.
          </h3>

          <Button asChild>
            <Link href="/">Volver a la página de inicio</Link>
          </Button>
        </div>
      ) : (
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
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Introduce tu correo electrónico"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona tu localidad afectada" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {provincesData.map((province) => (
                          <SelectItem
                            value={province.value}
                            key={province.value}
                          >
                            {province.value}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name="document"
                render={({ field }) => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel>Documento de Identificación new</FormLabel>
                      <FormDescription>
                        Adjunta un documento que identifique tu vivienda (ej.
                        factura de luz, agua, internet).
                      </FormDescription>
                    </div>

                    {field.value ? (
                      <p>Documento subido correctamente. 🎉</p>
                    ) : (
                      <div className="p-6 border-[1px] rounded-lg cursor-pointer">
                        {isLoadingUploadedImage ? (
                          <div className="flex items-center justify-center">
                            <LoaderCircle className="animate-spin" />
                          </div>
                        ) : (
                          <UploadButton
                            content={{
                              button: "Arrastra o sube tu documento",
                              allowedContent: "PNG | JPG | PDF",
                            }}
                            endpoint="imageUploader"
                            onChange={() => {
                              setIsLoadingUploadedImage(true);
                            }}
                            onClientUploadComplete={(res) => {
                              form.setValue("document", res[0].url);
                              setIsLoadingUploadedImage(false);
                            }}
                            onUploadError={(error: Error) => {
                              console.log(error);
                              toast({
                                title:
                                  "Ha ocurrido un error. Inténtelo de nuevo más tarde.",
                              });
                            }}
                          />
                        )}
                      </div>
                    )}

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

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
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {items.map((item) => (
                      <FormField
                        key={item.name}
                        control={form.control}
                        name="items"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.name}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.name)}
                                  onCheckedChange={(checked) => {
                                    const newValue = checked
                                      ? [...(field.value || []), item.name]
                                      : (field.value || []).filter(
                                          (value) => value !== item.name
                                        );
                                    field.onChange(newValue);
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">
                                {item.name}
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

            <div className="flex justify-center">
              <Button
                type="submit"
                className="w-52"
                disabled={!form.formState.isValid}
              >
                Solicitar ayuda
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
}

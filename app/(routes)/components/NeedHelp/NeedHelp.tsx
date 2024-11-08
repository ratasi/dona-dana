import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function NeedHelp() {
  return (
    <div className="p-6 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">¿Necesitas ayuda?</h2>
            <p className="mb-4">
              Si has sido afectado por la Dana y necesitas objetos esenciales
              para tu hogar, estamos aquí para ayudarte. Completa el formulario
              a continuación con los artículos que necesitas —como herramientas,
              productos de limpieza, muebles, y más— y nosotros nos encargaremos
              de organizar un crowdfunding. Una vez reunamos suficiente apoyo,
              enviaremos directamente los artículos a tu hogar. Juntos, podemos
              ayudarte a reconstruir tu espacio y tu vida.
            </p>
            <Button size="lg" asChild>
              <Link href="/solicitar-ayuda">Solicitar ayuda</Link>
            </Button>
          </div>

          <div>
            <Image
              src="/dana-2.webp"
              alt="dana"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function WantHelp() {
  return (
    <div className="p-6 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div>
            <Image
              src="/dana-2.webp"
              alt="dana"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4">
              Únete a la Ayuda para los Afectados por Dana
            </h3>
            <p className="mb-4">
              Tu contribución puede marcar una gran diferencia. A través de
              nuestro sistema de crowdfunding, puedes ayudarnos a cubrir
              necesidades específicas de familias afectadas, como productos de
              limpieza, muebles, herramientas y más. Cada aportación nos acerca
              un paso más a reconstruir hogares y devolver estabilidad a quienes
              han perdido tanto. Únete a esta causa solidaria y sé parte de la
              recuperación de nuestra comunidad.
            </p>
            <Button size="lg" asChild>
              <Link href="/solicitar-ayuda">Solicitar ayuda</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

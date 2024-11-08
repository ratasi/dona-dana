import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroBlock() {
  return (
    <div className="p-6 md:py-32">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-xl md:text-5xl font-bold mb-4">
            Unidos para Reconstruir
          </h2>
          <p className="mb-4">
            Apoya a los afectados por la Dana proveyendo las necesidades
            esenciales para reconstruir sus hogares y vidas. Cada aporte cuenta.
          </p>
          <div className="flex flex-col md:flex-row  gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/solicitar-ayuda">SOLICITAR AYUDA</Link>
            </Button>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

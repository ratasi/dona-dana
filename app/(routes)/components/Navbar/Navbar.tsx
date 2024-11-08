import { Button } from "@/components/ui/button";
import Link from "next/link";

const dataNavbar = [
  {
    name: "Quienes somos",
    href: "/",
  },
  {
    name: "¿Cómo funciona?",
    href: "/",
  },
  {
    name: "Contacto",
    href: "/",
  },
];
export function Navbar() {
  return (
    <nav className="p-4 border-b">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="text-lg font-semibold">Tornem a casa</h1>
          </Link>
          <div className="flex gap-8 items-center">
            {dataNavbar.map(({ name, href }) => (
              <Link key={name} href={href}>
                {name}
              </Link>
            ))}
            <Button asChild>
              <Link href="/solicitar-ayuda">Solicitar ayuda</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

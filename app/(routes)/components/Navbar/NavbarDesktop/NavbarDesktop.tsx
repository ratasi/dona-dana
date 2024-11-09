import { Button } from "@/components/ui/button";
import { NavbarRoutes } from "../NavbarRoutes";
import Link from "next/link";

export function NavbarDesktop() {
  return (
    <div className="hidden md:flex gap-8 items-center">
      <NavbarRoutes />

      <Button asChild className="hover:">
        <Link href="/solicitar-ayuda">Solicitar ayuda</Link>
      </Button>
    </div>
  );
}

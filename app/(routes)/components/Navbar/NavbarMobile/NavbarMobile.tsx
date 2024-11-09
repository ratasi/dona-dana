import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavbarRoutes } from "../NavbarRoutes";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function NavbarMobile() {
  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Tornem a casa</SheetTitle>
            <SheetDescription>
              <NavbarRoutes />
              <div className="flex items-start mt-4">
                <Button asChild>
                  <Link href="/solicitar-ayuda">Solicitar ayuda</Link>
                </Button>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

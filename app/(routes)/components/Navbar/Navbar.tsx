import Link from "next/link";
import { NavbarMobile } from "./NavbarMobile";
import { NavbarDesktop } from "./NavbarDesktop";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="p-4 border-b">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1>
              <Image
                src="/logo-tornem.png"
                alt="Logo Tornem a casa"
                width={75}
                height={75}
              />
            </h1>
          </Link>

          <NavbarMobile />

          <NavbarDesktop />
        </div>
      </div>
    </nav>
  );
}

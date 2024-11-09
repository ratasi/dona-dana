import Link from "next/link";
import { dataNavbar } from "./NavbarRoutes.data";

export function NavbarRoutes() {
  return (
    <div className="flex flex-col gap-4 md:flex-row text-left">
      {dataNavbar.map(({ name, href }) => (
        <Link
          key={name}
          href={href}
          className="hover:text-primary transition-all duration-300 hover:underline-offset-8 hover:underline"
        >
          {name}
        </Link>
      ))}
    </div>
  );
}

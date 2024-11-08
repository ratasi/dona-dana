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
          <h1 className="text-lg font-semibold">Dana Solidaria</h1>
          <div className="flex gap-8">
            {dataNavbar.map(({ name, href }) => (
              <Link key={name} href={href}>
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

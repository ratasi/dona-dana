import Image from "next/image";

export function WhyWeDoThat() {
  return (
    <div className="p-6 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div>
            <Image
              src="/dana.webp"
              alt="dana"
              width={600}
              height={600}
              className="rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-2">
              ¿Por qué hacemos esto?
            </h2>
            <p>
              Miles de familias han perdido sus hogares y pertenencias debido a
              la devastación de la Dana. Este es el momento de unirnos para
              proporcionar lo necesario: desde materiales de construcción,
              productos de limpieza, hasta muebles y utensilios. Con tu ayuda,
              podemos llevar esperanza y apoyo a cada hogar afectado,
              permitiendo que cada familia empiece a reconstruir su vida con
              dignidad. Únete a esta misión solidaria y convierte tu apoyo en
              una realidad concreta para quienes más lo necesitan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

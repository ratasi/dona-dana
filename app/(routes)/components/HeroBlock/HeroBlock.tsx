import { Button } from "@/components/ui/button";

export default function HeroBlock() {
  return (
    <div className="p-6 md:py-32">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-semibold mb-4">QUE HACEMOS</h2>
          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi. Proin
          </p>
          <Button>Solicitar ayuda</Button>
        </div>
      </div>
      ;
    </div>
  );
}

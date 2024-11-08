import { Navbar } from "../components/Navbar";
import { FormAsk } from "./components/FormAsk";

export default function SolicitarAyuda() {
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto py-4 md:py-12">
        <div className="border rounded-lg p-4 md:p-8">
          <h1 className="text-4xl font-bold mb-4">Solicitar Ayuda</h1>

          <FormAsk />
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import { Navbar } from "@/components/Shared/Navbar";

import { FormAsk } from "./components/FormAsk";
import { ItemsProps } from "./page.types";

export default function SolicitarAyuda() {
  const [items, setItems] = useState<ItemsProps>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_HOST}/forms/items`
        );
        console.log(response);

        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto py-4 md:py-12">
        <div className="border rounded-lg p-4 md:p-8">
          <h1 className="text-4xl font-bold mb-8">Solicitar Ayuda</h1>

          <FormAsk items={items} />
        </div>
      </div>
    </div>
  );
}

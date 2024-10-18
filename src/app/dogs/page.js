"use client";

import TarjetaPerro from "@/components/TarjetaPerro";
import { useState } from "react";

export default function Page() {
  const [dog, setDog] = useState(null);

  async function fetchDog() {
    try {
      const response = await fetch(`https://dog.ceo/api/breeds/image/random`);

      if (!response.ok) {
        throw new Error("Error al obtener los datos del perro");
      }

      const result = await response.json();

      setDog(result);
      console.log("Perro encontrado: ", result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main>
      <div className="w-screen h-screen flex justify-end">
        <div className="w-2/3 pt-8 flex items-center flex-col bg-white">
          <h1 className="text-4xl pb-4 text-purple-900 ">Perritos</h1>

          <button
            className="bg-purple-500 rounded-md border-2 w-1/4 text-gray-700"
            onClick={fetchDog}
          >
            Pulsa para mostrar un perro random
          </button>
          <div className="flex justify-around w-full border-2 h-full mt-4 p-4">
            {dog && <TarjetaPerro dog={dog} />}
          </div>
        </div>
      </div>
    </main>
  );
}

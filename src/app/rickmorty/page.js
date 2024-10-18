"use client";

import PersonajeRick from "@/components/PersonajeRick";
import { useState } from "react";

export default function Page() {
  const [personaje, setPersonaje] = useState();

  async function fetchPersonaje() {
    try {
      const randomId = Math.floor(Math.random() * 19) + 1;

      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${randomId}`
      );

      if (!response.ok) {
        throw new Error("Error al obtener los datos del Personaje");
      }

      const result = await response.json();

      setPersonaje(result);
      console.log("Personaje encontrado: ", result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main>
      <div className="w-screen h-screen flex justify-end">
        <div className="w-2/3 pt-8 flex items-center flex-col bg-white">
          <h1 className="text-4xl pb-4 text-sky-500 ">Rick and Morty</h1>

          <button
            className="bg-green-500 rounded-md border-2 w-1/4 text-gray-700"
            onClick={fetchPersonaje}
          >
            Pulsa para mostrar un personaje random
          </button>
          <div className="flex justify-around w-full border-2 h-full mt-4 p-4">
            {personaje && <PersonajeRick personaje={personaje} />}
          </div>
        </div>
      </div>
    </main>
  );
}

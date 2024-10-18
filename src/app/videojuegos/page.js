"use client";
import TarjetaJuego from "@/components/TarjetaJuego";
import { useEffect, useState } from "react";

export default function Page() {
  const [pokemon, setPokemon] = useState();

  async function fetchPokemon() {
    try {
      const randomId = Math.floor(Math.random() * 898) + 1;

      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomId}`
      );

      if (!response.ok) {
        throw new Error("Error al obtener los datos del Pokémon");
      }

      const result = await response.json();

      setPokemon(result);
      console.log("Pokemon encontrado: ", result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main>
      <div className="w-screen h-screen flex justify-end">
        <div className="w-2/3 pt-8 flex items-center flex-col bg-white">
          <h1 className="text-4xl pb-4 text-yellow-500 ">Pokemon</h1>

          <button
            className="bg-yellow-500 rounded-md border-2 w-1/4 text-gray-700"
            onClick={fetchPokemon}
          >
            Pulsa para mostrar un pokemon random
          </button>
          <div className="flex justify-around w-full border-2 h-full mt-4 p-4">
            {pokemon && <TarjetaJuego pokemon={pokemon} />}
          </div>
        </div>
      </div>
    </main>
  );
}

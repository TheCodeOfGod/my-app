import Link from "next/link";

export default function NavBar() {
  return (
    <div className="fixed h-screen w-1/3 bg-sky-500 flex justify-around items-center flex-col">
      <h1 className="text-white text-4xl mb-0">Elije tu api</h1>

      <a
        href="/videojuegos"
        className="w-2/3 h-12 bg-slate-100 rounded-md text-gray-950 flex justify-center items-center"
      >
        Pokemon
      </a>

      <a
        href="/rickmorty"
        className="w-2/3 h-12 bg-slate-100 rounded-md text-gray-950 flex justify-center items-center"
      >
        Personajes Rick & Morty
      </a>

      <a
        href="/dogs"
        className="w-2/3 h-12 bg-slate-100 rounded-md text-gray-950 flex justify-center items-center"
      >
        Perros
      </a>
    </div>
  );
}

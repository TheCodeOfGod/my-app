export default function PersonajeRick({ personaje }) {
  return (
    <div className="w-5/12 h-fit rounded-2xl border-2 bg-green-300 flex flex-col items-center">
      <h1 className="text-xl pb-2 text-gray-700 mt-2">{personaje.name}</h1>
      <img
        src={personaje.image}
        className="w-4/5 border-2 rounded-md mb-4 bg-white"
      />
    </div>
  );
}

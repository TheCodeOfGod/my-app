export default function TarjetaPerro({ dog }) {
  return (
    <div className="w-5/12 h-fit rounded-2xl border-2 bg-purple-800 flex flex-col items-center">
      <h1 className="text-xl pb-2 text-gray-100 mt-2">Un perrito</h1>
      <img
        src={dog.message}
        alt="imagen de un perro"
        className="w-4/5 border-2 rounded-md mb-4 bg-white"
      />
    </div>
  );
}

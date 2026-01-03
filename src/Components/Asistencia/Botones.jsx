const estilos = {
  primary: "bg-sky-600 hover:bg-sky-700",
  secondary: "bg-indigo-600 hover:bg-indigo-700",
};

const Botones = ({ accion, variante = "primary", icono: Icono, contenido }) => {
  return (
    <button
      onClick={accion}
      className={`flex font-bold items-center gap-3 text-white px-5 py-3 rounded-2xl shadow-md hover:scale-105 transition-transform ${estilos[variante]}`}
    >
      {Icono && <Icono className="text-xl" />}
      {contenido}
    </button>
  );
};

export default Botones;

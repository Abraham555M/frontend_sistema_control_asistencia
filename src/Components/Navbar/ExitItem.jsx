import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logout } from "../../Services/Autenticacion/Auth";
import ModalCondicional from "../Modales/ModalCondicional";

const ExitItem = ({ valor }) => {
  const navigate = useNavigate();
  const [mostrarModal, setMostrarModal] = useState(false);
  const [loading, setLoading] = useState(false);

  // Se ejecuta SOLO si el usuario confirma
  const confirmarLogout = async () => {
    setLoading(true);

    try {
      await Logout();
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    } finally {
      // Borra token siempre
      localStorage.removeItem("token");
      setLoading(false);
      setMostrarModal(false);
      navigate("/");
    }
  };

  return (
    <>
      {/* Botón cerrar sesión */}
      <button
        onClick={() => setMostrarModal(true)}
        className="
          block w-full rounded-md px-4 py-3
          bg-red-300/20 text-center font-semibold
          transition hover:bg-red-400 hover:text-gray-200
        "
      >
        {valor}
      </button>

      {/* Modal de confirmación */}
      <ModalCondicional
        open={mostrarModal}
        onClose={() => setMostrarModal(false)}
        title="Cerrar sesión"
        message="¿Desea cerrar sesión de su cuenta?"
        onConfirm={confirmarLogout}
        loading={loading}
      />
    </>
  );
};

export default ExitItem;

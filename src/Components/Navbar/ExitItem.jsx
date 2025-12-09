import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Logout } from "../../Services/Autenticacion/Auth";

const ExitItem = ({ direccion, valor }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const resp = await Logout();

    // Borra token sin importar la respuesta
    localStorage.removeItem("token");

    // Redirige al login
    navigate("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="block w-full rounded-md px-4 py-3 bg-red-300/20 text-center font-semibold transition hover:bg-red-400 hover:text-gray-200"
    >
      {valor}
    </button>
  );
};

export default ExitItem;

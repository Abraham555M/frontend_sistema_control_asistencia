import { NavLink } from "react-router-dom";

const MenuItem = ({ direccion, valor }) => {
  return (
    <NavLink
      to={direccion}
      className={({ isActive }) =>
        `block rounded-md px-4 py-3 text-center font-semibold transition cursor-pointer ${
          isActive
            ? "bg-gray-200 text-purple-700"
            : "hover:bg-[#6B4B9E] hover:text-gray-200"
        }`
      }
    >
      {valor}
    </NavLink>
  );
};

export default MenuItem;

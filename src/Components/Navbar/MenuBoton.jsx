import { motion, AnimatePresence } from "framer-motion";
import { IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const MenuBoton = ({ valor, id, openMenu, toggleMenu, items }) => {
  const isOpen = openMenu === id;

  return (
    <>
      <button
        onClick={() => toggleMenu(id)}
        className="w-full flex justify-between items-center rounded-md px-4 py-3 font-semibold transition hover:bg-[#6B4B9E]"
      >
        {valor}
        {isOpen ? (
          <IoChevronUpOutline className="text-lg" />
        ) : (
          <IoChevronDownOutline className="text-lg" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="ml-4 mt-2 space-y-2 border-l border-purple-300 pl-3 overflow-hidden"
          >
            {items.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-2 font-medium text-sm transition ${
                      isActive
                        ? "bg-gray-200 text-purple-700"
                        : "hover:bg-[#6B4B9E] hover:text-gray-200"
                    }`
                  }
                >
                  {item.valor}
                </NavLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default MenuBoton;

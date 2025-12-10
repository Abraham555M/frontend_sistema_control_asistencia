import React from "react";

const Toggle = ({ enabled, setEnabled }) => {
  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`relative w-10 h-5 rounded-full transition-colors duration-300
        ${enabled ? "bg-green-500" : "bg-gray-300"}`}
    >
      <span
        className={`absolute top-[2px] left-[2px] w-4 h-4 bg-white rounded-full shadow-md
          transform transition-transform duration-300
          ${enabled ? "translate-x-5" : "translate-x-0"}`}
      ></span>
    </button>
  );
};

export default Toggle;

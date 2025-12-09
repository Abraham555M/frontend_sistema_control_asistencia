import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const GlassModal = ({ open, onClose, title, message, children }) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="
              fixed inset-0 flex justify-center items-center z-50
            "
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div
              className="
                bg-white/10 backdrop-blur-xl 
                border border-white/20
                shadow-lg shadow-black/40
                rounded-3xl p-6
                w-[320px]
                text-white
                relative
              "
            >
              {/* Botón cerrar */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 text-white/70 hover:text-white transition"
              >
                <FaTimes size={20} />
              </button>

              {/* Título */}
              {title && (
                <h2 className="text-xl font-semibold mb-3 text-center">
                  {title}
                </h2>
              )}

              {/* Mensaje */}
              {message && (
                <p className="text-white/80 text-center mb-5">
                  {message}
                </p>
              )}

              {/* Botón(s) o contenido extra */}
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default GlassModal;

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ModalGlass = ({ open, onClose, children }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* CONTENIDO DEL MODAL */}
          <motion.div
            className="
              bg-white/20 
              backdrop-blur-xl 
              border border-white/30 
              shadow-xl 
              rounded-2xl 
              p-6 
              w-[90%] max-w-md
            "
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalGlass;

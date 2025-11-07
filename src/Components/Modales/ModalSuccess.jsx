import { motion, AnimatePresence } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ModalSuccess = ({ isOpen, onClose, title = "Operación Exitosa", message = "Los cambios se guardaron correctamente." }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Contenedor del modal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="
              bg-white/10 
              backdrop-blur-2xl
              border border-white/10
              rounded-3xl 
              shadow-2xl shadow-black/40
              p-8 
              w-[350px] 
              flex flex-col items-center
              text-white
            "
          >
            {/* Ícono de éxito */}
            <div className="w-24 h-24 rounded-full bg-white/20 flex justify-center items-center shadow-inner mb-4">
              <CheckCircleIcon sx={{ fontSize: 70 }} className="!text-green-400 opacity-90" />
            </div>

            {/* Texto */}
            <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
            <p className="text-white/80 text-center mb-6">{message}</p>

            {/* Botón de cerrar */}
            <button
              onClick={onClose}
              className="w-full py-3 text-lg font-semibold text-white 
                bg-gradient-to-r from-purple-600 to-indigo-600 
                rounded-full shadow-lg shadow-purple-900/50 
                hover:from-purple-700 hover:to-indigo-700 
                transition duration-300"
            >
              Aceptar
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalSuccess;

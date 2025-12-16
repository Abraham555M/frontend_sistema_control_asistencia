import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const ModalCondicional = ({
  open,
  onClose,
  title,
  message,
  onConfirm,
  loading = false,
}) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={!loading ? onClose : undefined}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 flex justify-center items-center z-50"
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
                w-[420px]
                text-white
                relative
              "
            >
              {/* Botón cerrar */}
              {!loading && (
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 text-white/70 hover:text-white transition"
                >
                  <FaTimes size={20} />
                </button>
              )}

              {/* Título */}
              {title && (
                <h2 className="text-xl font-semibold mb-3 text-center">
                  {title}
                </h2>
              )}

              {/* Mensaje */}
              {message && (
                <p className="text-white/80 text-center mb-6">
                  {message}
                </p>
              )}

              {/* Botones */}
              <div className="flex justify-between gap-4 mt-6">
                {/* NO */}
                <button
                  onClick={onClose}
                  disabled={loading}
                  className={`
                    w-full py-2 rounded-xl transition
                    ${
                      loading
                        ? "bg-white/10 cursor-not-allowed"
                        : "bg-white/20 hover:bg-white/30"
                    }
                  `}
                >
                  Rechazar
                </button>

                {/* SÍ */}
                <button
                  onClick={onConfirm}
                  disabled={loading}
                  className={`
                    w-full py-2 rounded-xl font-semibold transition
                    ${
                      loading
                        ? "bg-green-500/40 cursor-not-allowed"
                        : "bg-green-500/80 hover:bg-green-500"
                    }
                  `}
                >
                  {loading ? "Cerrando..." : "Aceptar"}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ModalCondicional;

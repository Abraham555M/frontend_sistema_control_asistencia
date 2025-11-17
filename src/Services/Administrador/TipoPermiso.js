import api from '../api'

export const listarTipoPermiso = () => {
    return api.get("tipo-permiso/lista-tipo-permiso"); 
}
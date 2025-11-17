import api from "../api"

export const listarGeneros = () => {
    return api.get("generos/lista-generos"); 
}; 


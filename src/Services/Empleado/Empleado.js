import api from '../api.js'

export const listarEmpleados = () => {
    return api.get("empleados/lista-empleados"); 
}



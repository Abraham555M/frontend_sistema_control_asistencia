import api from '../api.js'

export const listarEmpleados = () => {
    return api.get("empleados/lista-empleados"); 
}

export const obtenerEmpleadoHeader = () => {
  return api.get("empleados/obtener-empleado-header");
};




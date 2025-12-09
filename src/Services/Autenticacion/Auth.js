import api from '../api'

export const Login = async (usr_usuario, pas_usuario) => {
  try {
    const response = await api.post('/auth/login', {
      usr_usuario,
      pas_usuario
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      return { error: true, message: error.response.data.message };
    }
    return { error: true, message: "Error de conexión" };
  }
};

export const Logout = async () => {
  try {
    const response = await api.post('/auth/logout');
    return response.data;
  } catch (error) {
    return { error: true, message: "Error al cerrar sesión" };
  }
};
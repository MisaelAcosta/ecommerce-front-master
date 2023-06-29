import axios from 'axios';

const crearEnvio = async (datosEnvio) => {
  try {
    const response = await axios.post('http://54.197.91.243:8000/envios', datosEnvio);
    return response.data; // Retornar la respuesta de la API para manejarla en otro lugar si es necesario
  } catch (error) {
    throw new Error('No se pudo crear el envío'); // Lanzar un error si ocurre algún problema
  }
};

export default crearEnvio;


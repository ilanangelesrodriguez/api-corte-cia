import cors from 'cors';

const corsOptions = {
  origin: 'http://localhost:3000', // Permite solicitudes solo desde esta URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Cabeceras permitidas
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;

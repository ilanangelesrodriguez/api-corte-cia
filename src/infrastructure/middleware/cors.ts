import cors from 'cors';

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Cabeceras permitidas
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;

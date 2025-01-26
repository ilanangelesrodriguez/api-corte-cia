import express from 'express';
import dotenv from 'dotenv';
import { setupSwagger } from './infrastructure/utils/swagger';
import './infrastructure/persistence/mongoConnection'; // Importa la conexión a MongoDB
import routes from './infrastructure/routes';
import bodyParser from 'body-parser';
import corsMiddleware from './infrastructure/middleware/cors';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(corsMiddleware);

// Configurar Swagger
setupSwagger(app);

app.get('/', (req, res) => {
    res.json({
        message: "Bienvenido a la API de Gestión de Eventos - Corte & Cía",
        version: "1.0",
        description: "Esta API proporciona servicios para la gestión de eventos, incluyendo la administración de asistentes, ponentes, y más.",
        documentation: "/api-docs",
        endpoints: [
            "/v1/api/events",
            "/v1/api/organizers",
            "/v1/api/speakers",
            "/v1/api/attendees",
            "/v1/api/tickets",
            "/v1/api/sponsors",
            "/v1/api/locations",
            "/v1/api/comments"
        ]
    });
});

app.use('/v1/api', routes);

const port = parseInt(process.env.PORT || '3000');
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});

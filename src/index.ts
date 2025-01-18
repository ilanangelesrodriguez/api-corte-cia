import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.json({
        message: "Bienvenido a la API de Gestión de Eventos - Corte & Cía",
        version: "1.0",
        description: "Esta API proporciona servicios para la gestión de eventos, incluyendo la administración de asistentes, ponentes, y más.",
        documentation: "http://localhost:3000/api-docs",
        endpoints: [
            "/events",
            "/organizers",
            "/speakers",
            "/attendees",
            "/tickets",
            "/sponsors",
            "/locations",
            "/categories",
            "/comments"
        ]
    });
});

const port = parseInt(process.env.PORT || '3000');
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});

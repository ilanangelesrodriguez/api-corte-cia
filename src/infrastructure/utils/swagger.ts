import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const port = parseInt(process.env.PORT || '3000');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Gestión de Eventos - Corte & Cía',
      version: '1.0.0',
      description: 'Esta API proporciona servicios para la gestión de eventos, incluyendo la administración de asistentes, ponentes, y más.',
    },
    servers: [
      {
        url: "https://api-corte-cia.vercel.app/",
        description: "API de Gestión de Eventos - Documentación",
      },
      {
        url: `http://localhost:${port}/`,
        description: "Servidor Local",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./src/domain/models/**/*.ts', './src/infrastructure/routes/*.ts'],
};

const specs = swaggerJsdoc(options);
const CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css";

export function setupSwagger(app: Express) {
  app.use(
    '/api-docs', 
    swaggerUi.serve, 
    swaggerUi.setup(specs, { 
      customCssUrl: CSS_URL,
    })
  );
}

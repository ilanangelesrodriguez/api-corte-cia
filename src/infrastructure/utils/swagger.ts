import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Gestión de Eventos - Corte & Cía',
      version: '1.1.0',
      description: 'Esta API proporciona servicios para la gestión de eventos, incluyendo la administración de asistentes, ponentes, y más.',
    },
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
  apis: ['./src/domain/models/**/*.ts', './src/infrastructure/routes/*.ts', './src/infrastructure/routes/*.js', './src/domain/models/**/*.js'],
};

const specs = swaggerJsdoc(options);

export function setupSwagger(app: Express) {
  app.use(
    '/api-docs', 
    swaggerUi.serve, 
    swaggerUi.setup(
      specs,
      {
        customCss:
        '.swagger-ui .opblock .opblock-summary-path-description-wrapper { align-items: center; display: flex; flex-wrap: wrap; gap: 0 10px; padding: 0 10px; width: 100%; }',
        customCssUrl: CSS_URL 
      }
    )
  );
}

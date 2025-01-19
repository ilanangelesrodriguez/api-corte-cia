import { Document } from 'mongoose';

/**
 * @swagger
 * components:
 *   schemas:
 *     Organizer:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - contact
 *       properties:
 *         name:
 *           type: string
 *           description: El nombre del organizador.
 *         description:
 *           type: string
 *           description: Una breve descripción del organizador.
 *         contact:
 *           type: string
 *           description: Información de contacto del organizador.
 *         website:
 *           type: string
 *           description: (Opcional) Sitio web del organizador.
 */
export interface IOrganizer extends Document {
  name: string;
  description: string;
  contact: string;
  website?: string;
}

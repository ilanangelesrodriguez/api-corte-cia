import { Document } from 'mongoose';

/**
 * @swagger
 * components:
 *   schemas:
 *     IOrganizer:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - contact
 *         - email
 *         - password
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
 *         email:
 *           type: string
 *           description: El correo electrónico del organizador.
 *         password:
 *           type: string
 *           description: La contraseña del organizador.
 */
export interface IOrganizer extends Document {
  name: string;
  description: string;
  contact: string;
  website?: string;
  email: string;
  password: string;
}

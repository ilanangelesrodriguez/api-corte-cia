import { Document } from 'mongoose';
import { IEvent } from '../event/event.interface';

/**
 * @swagger
 * components:
 *   schemas:
 *     ISpeaker:
 *       type: object
 *       required:
 *         - fullName
 *         - biography
 *         - specialty
 *         - events
 *       properties:
 *         fullName:
 *           type: string
 *           description: El nombre completo del orador.
 *         biography:
 *           type: string
 *           description: La biografía del orador.
 *         specialty:
 *           type: string
 *           description: La especialidad del orador.
 *         image:
 *           type: string
 *           description: La URL de la imagen del orador.
 *         events:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IEvent'
 *           description: Una lista de eventos en los que el orador participa.
 */
export interface ISpeaker extends Document {
  fullName: string;
  biography: string;
  specialty: string;
  image?: string;
  events: IEvent[];
}

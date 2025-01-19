import { Document } from 'mongoose';
import { IEvent } from '../event/event.interface';

/**
 * @swagger
 * components:
 *   schemas:
 *     ISponsor:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - logo
 *         - events
 *       properties:
 *         name:
 *           type: string
 *           description: El nombre del patrocinador.
 *         description:
 *           type: string
 *           description: Una breve descripción del patrocinador.
 *         logo:
 *           type: string
 *           description: URL del logo del patrocinador.
 *         events:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IEvent'
 *           description: Lista de eventos asociados con el patrocinador.
 */
export interface ISponsor extends Document {
  name: string;
  description: string;
  logo: string;
  events: IEvent[];
}

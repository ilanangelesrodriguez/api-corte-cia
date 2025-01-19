import { Document, Types } from 'mongoose';

/**
 * @swagger
 * components:
 *   schemas:
 *     Comment:
 *       type: object
 *       required:
 *         - attendeeId
 *         - eventId
 *         - text
 *         - date
 *       properties:
 *         attendeeId:
 *           type: string
 *           format: ObjectId
 *           description: El ID del asistente que hizo el comentario.
 *         eventId:
 *           type: string
 *           format: ObjectId
 *           description: El ID del evento al que está asociado el comentario.
 *         text:
 *           type: string
 *           description: El contenido del comentario.
 *         date:
 *           type: string
 *           format: date-time
 *           description: La fecha y hora en que se hizo el comentario.
 */
export interface IComment extends Document {
  attendeeId: Types.ObjectId;
  eventId: Types.ObjectId;
  text: string;
  date: Date;
}

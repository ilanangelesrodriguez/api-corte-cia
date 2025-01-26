import mongoose, { Schema } from 'mongoose';
import { IEvent } from './event.interface';
import { EventStatus, EventType, CategoryName } from '../../enums';

/**
 * @swagger
 * components:
 *   schemas:
 *     IEvent:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - startDate
 *         - endDate
 *         - location
 *         - eventType
 *         - status
 *         - category
 *       properties:
 *         name:
 *           type: string
 *           description: El nombre del evento.
 *         description:
 *           type: string
 *           description: Una breve descripción del evento.
 *         startDate:
 *           type: string
 *           format: date-time
 *           description: La fecha y hora de inicio del evento.
 *         endDate:
 *           type: string
 *           format: date-time
 *           description: La fecha y hora de finalización del evento.
 *         location:
 *           type: string
 *           description: El lugar donde se llevará a cabo el evento.
 *         eventType:
 *           type: string
 *           description: El tipo de evento.
 *         status:
 *           type: string
 *           description: El estado actual del evento.
 *         category:
 *           type: string
 *           description: El nombre de la categoría del evento.
 *         image:
 *           type: string
 *           format: binary
 *           description: Una imagen opcional del evento.
 */
const EventSchema: Schema<IEvent> = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    location: { type: String, required: true },
    eventType: { type: String, enum: Object.values(EventType), required: true },
    status: { type: String, enum: Object.values(EventStatus), default: EventStatus.Active },
    category: { type: String, enum: Object.values(CategoryName), required: true },
    image: { type: Buffer, required: false }
  },
  { timestamps: true }
);

export default mongoose.model<IEvent>('Event', EventSchema);

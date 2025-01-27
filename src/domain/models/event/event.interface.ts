import { EventStatus, EventType, CategoryName } from '../../enums';
import { Document } from 'mongoose';

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
 *           description: Una imagen opcional del evento.
 */
export interface IEvent extends Document {
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    location: string;
    eventType: EventType;
    status: EventStatus;
    category: CategoryName;
    image?: string;
}

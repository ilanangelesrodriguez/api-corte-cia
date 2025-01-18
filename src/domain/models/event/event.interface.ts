import { EventStatus, EventType, CategoryName } from '../../enums';
import { Document } from 'mongoose';

/**
 * @swagger
 * components:
 *   schemas:
 *     Event:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID único (Primary Key)
 *         name:
 *           type: string
 *           description: Nombre del evento
 *         description:
 *           type: string
 *           description: Descripción breve del evento
 *         startDate:
 *           type: string
 *           format: date-time
 *           description: Fecha y hora de inicio del evento
 *         endDate:
 *           type: string
 *           format: date-time
 *           description: Fecha y hora de finalización
 *         location:
 *           type: string
 *           description: Ubicación del evento
 *         eventType:
 *           $ref: '#/components/schemas/EventType'
 *           description: Tipo de evento
 *         status:
 *           $ref: '#/components/schemas/EventStatus'
 *           description: Estado del evento
 *         category:
 *           $ref: '#/components/schemas/CategoryName'
 *           description: Categoría del evento
 *         image:
 *           type: string
 *           description: Imagen opcional
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
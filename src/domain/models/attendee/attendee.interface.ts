import { RegistrationStatus } from '../../enums';
import { Document } from 'mongoose';
import { IEvent } from '../event/event.interface';

/**
 * @swagger
 * components:
 *   schemas:
 *     IAttendee:
 *       type: object
 *       required:
 *         - fullName
 *         - email
 *         - events
 *         - registrationStatus
 *       properties:
 *         fullName:
 *           type: string
 *           description: El nombre completo del asistente.
 *         email:
 *           type: string
 *           description: La dirección de correo electrónico del asistente.
 *         phone:
 *           type: string
 *           description: El número de teléfono del asistente (opcional).
 *         events:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IEvent'
 *           description: La lista de eventos a los que el asistente está registrado.
 *         registrationStatus:
 *           type: string
 *           enum:
 *             - registered
 *             - pending
 *             - cancelled
 *           description: El estado de registro del asistente.
 */
export interface IAttendee extends Document {
  fullName: string;
  email: string;
  phone?: string;
  events: IEvent[];
  registrationStatus: RegistrationStatus;
}

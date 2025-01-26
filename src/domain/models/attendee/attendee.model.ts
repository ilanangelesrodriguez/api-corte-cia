import mongoose, { Schema } from 'mongoose';
import { IAttendee } from './attendee.interface';
import { RegistrationStatus } from '../../enums';


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
const AttendeeSchema: Schema<IAttendee> = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: false },
    events: [
      { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Event',
        required: true
      }
    ],
    registrationStatus: { 
      type: String, 
      enum: Object.values(RegistrationStatus), 
      required: true 
    }
  },
  { timestamps: true }
);

export default mongoose.model<IAttendee>('Attendee', AttendeeSchema);

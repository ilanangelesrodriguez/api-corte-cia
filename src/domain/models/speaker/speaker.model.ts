import mongoose, { Schema } from 'mongoose';
import { ISpeaker } from './speaker.interface';

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
const SpeakerSchema: Schema<ISpeaker> = new Schema(
  {
    fullName: { type: String, required: true },
    biography: { type: String, required: true },
    specialty: { type: String, required: true },
    image: { type: String, required: false },
    events: [
      { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Event',
        required: true 
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model<ISpeaker>('Speaker', SpeakerSchema);

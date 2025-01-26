import mongoose, { Schema } from 'mongoose';
import { ISponsor } from './sponsor.interface';

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
const SponsorSchema: Schema<ISponsor> = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    logo: { type: String, required: true },
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

export default mongoose.model<ISponsor>('Sponsor', SponsorSchema);

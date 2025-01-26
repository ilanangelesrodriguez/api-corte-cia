import mongoose, { Schema } from 'mongoose';
import { ILocation } from './location.interface';
import { VenueType } from '../../enums';

/**
 * @swagger
 * components:
 *   schemas:
 *     ILocation:
 *       type: object
 *       required:
 *         - name
 *         - address
 *         - capacity
 *         - venueType
 *       properties:
 *         name:
 *           type: string
 *           description: El nombre de la ubicación.
 *         address:
 *           type: string
 *           description: La dirección de la ubicación.
 *         capacity:
 *           type: number
 *           description: La capacidad de la ubicación.
 *         venueType:
 *           type: string
 *           description: El tipo de lugar de la ubicación.
 *           enum:
 *             - indoor
 *             - outdoor
 *       example:
 *         name: "Centro de Convenciones"
 *         address: "123 Calle Principal"
 *         capacity: 500
 *         venueType: "indoor"
 */
const LocationSchema: Schema<ILocation> = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    capacity: { type: Number, required: true },
    venueType: { 
      type: String, 
      enum: Object.values(VenueType),
      required: true 
    }
  },
  { timestamps: true }
);

export default mongoose.model<ILocation>('Location', LocationSchema);

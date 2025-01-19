import { Document } from 'mongoose';
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
export interface ILocation extends Document {
  name: string;
  address: string;
  capacity: number;
  venueType: VenueType;
}

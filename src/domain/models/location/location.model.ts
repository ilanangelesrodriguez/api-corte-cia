import mongoose, { Schema } from 'mongoose';
import { ILocation } from './location.interface';
import { VenueType } from '../../enums';

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

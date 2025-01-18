import mongoose, { Schema } from 'mongoose';
import { IOrganizer } from './organizer.interface';

const OrganizerSchema: Schema<IOrganizer> = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    contact: { type: String, required: true },
    website: { type: String, required: false }
  },
  { timestamps: true }
);

export default mongoose.model<IOrganizer>('Organizer', OrganizerSchema);

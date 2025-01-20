import mongoose, { Schema } from 'mongoose';
import { IOrganizer } from './organizer.interface';

const OrganizerSchema: Schema<IOrganizer> = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    contact: { type: String, required: true },
    website: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model<IOrganizer>('Organizer', OrganizerSchema);

import mongoose, { Schema } from 'mongoose';
import { ISponsor } from './sponsor.interface';

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

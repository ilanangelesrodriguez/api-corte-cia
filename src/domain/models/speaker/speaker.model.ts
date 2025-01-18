import mongoose, { Schema } from 'mongoose';
import { ISpeaker } from './speaker.interface';

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

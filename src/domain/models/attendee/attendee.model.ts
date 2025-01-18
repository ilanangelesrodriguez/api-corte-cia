import mongoose, { Schema } from 'mongoose';
import { IAttendee } from './attendee.interface';
import { RegistrationStatus } from '../../enums';

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

import mongoose, { Schema } from 'mongoose';
import { IEvent } from './event.interface';
import { EventStatus, EventType, CategoryName } from '../../enums';

const EventSchema: Schema<IEvent> = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    location: { type: String, required: true },
    eventType: { type: String, enum: Object.values(EventType), required: true },
    status: { type: String, enum: Object.values(EventStatus), default: EventStatus.Active },
    category: { type: String, enum: Object.values(CategoryName), required: true },
    image: { type: String, required: false }
  },
  { timestamps: true }
);

export default mongoose.model<IEvent>('Event', EventSchema);

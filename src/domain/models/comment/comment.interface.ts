import { Document, Types } from 'mongoose';

export interface IComment extends Document {
  attendeeId: Types.ObjectId;
  eventId: Types.ObjectId;
  text: string;
  date: Date;
}

import mongoose, { Schema } from 'mongoose';
import { IComment } from './comment.interface';

const CommentSchema: Schema<IComment> = new Schema(
  {
    attendeeId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Attendee', // Referencia al modelo Attendee
      required: true 
    },
    eventId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Event', // Referencia al modelo Event
      required: true 
    },
    text: { type: String, required: true },
    date: { type: Date, required: true }
  },
  { timestamps: true }
);

export default mongoose.model<IComment>('Comment', CommentSchema);

import mongoose, { Schema } from 'mongoose';
import { IComment } from './comment.interface';

/**
 * @swagger
 * components:
 *   schemas:
 *     IComment:
 *       type: object
 *       required:
 *         - attendeeId
 *         - eventId
 *         - text
 *         - date
 *       properties:
 *         attendeeId:
 *           type: string
 *           format: ObjectId
 *           description: El ID del asistente que hizo el comentario.
 *         eventId:
 *           type: string
 *           format: ObjectId
 *           description: El ID del evento al que está asociado el comentario.
 *         text:
 *           type: string
 *           description: El contenido del comentario.
 *         date:
 *           type: string
 *           format: date-time
 *           description: La fecha y hora en que se hizo el comentario.
 */
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

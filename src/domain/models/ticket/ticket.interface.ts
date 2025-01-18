import { Document, Types } from 'mongoose';
import { TicketType } from '../../enums';

export interface ITicket extends Document {
  eventId: Types.ObjectId;
  ticketType: TicketType;
  price: number;
  availability: number;
  issuedDate: Date;
  attendeeId: Types.ObjectId;
}

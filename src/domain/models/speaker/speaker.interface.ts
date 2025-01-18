import { Document } from 'mongoose';
import { IEvent } from '../event/event.interface';

export interface ISpeaker extends Document {
  fullName: string;
  biography: string;
  specialty: string;
  image?: string;
  events: IEvent[];
}

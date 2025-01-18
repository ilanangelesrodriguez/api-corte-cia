import { Document } from 'mongoose';
import { IEvent } from '../event/event.interface';

export interface ISponsor extends Document {
  name: string;
  description: string;
  logo: string;
  events: IEvent[];
}

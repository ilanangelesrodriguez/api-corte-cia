import { RegistrationStatus } from '../../enums';
import { Document } from 'mongoose';
import { IEvent } from '../event/event.interface';

export interface IAttendee extends Document {
  fullName: string;
  email: string;
  phone?: string;
  events: IEvent[];
  registrationStatus: RegistrationStatus;
}

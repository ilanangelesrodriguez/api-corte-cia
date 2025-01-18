import { Document } from 'mongoose';

export interface IOrganizer extends Document {
  name: string;
  description: string;
  contact: string;
  website?: string;
}

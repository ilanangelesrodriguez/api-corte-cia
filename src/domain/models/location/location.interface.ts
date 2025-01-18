import { Document } from 'mongoose';
import { VenueType } from '../../enums';

export interface ILocation extends Document {
  name: string;
  address: string;
  capacity: number;
  venueType: VenueType;
}

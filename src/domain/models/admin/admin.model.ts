import mongoose, { Schema } from 'mongoose';
import { IAdmin } from './admin.interface';

const AdminSchema: Schema<IAdmin> = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model<IAdmin>('Admin', AdminSchema);

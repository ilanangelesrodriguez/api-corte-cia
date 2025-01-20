import mongoose, { Schema } from 'mongoose';
import { IOrganizer } from './organizer.interface';
import bcrypt from 'bcryptjs';

const OrganizerSchema: Schema<IOrganizer> = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    contact: { type: String, required: true },
    website: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
);

// Hashear la contraseña antes de guardar el documento
OrganizerSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt); // Hasheamos la contraseña
  next();
});

export default mongoose.model<IOrganizer>('Organizer', OrganizerSchema);

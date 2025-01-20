import mongoose, { Schema } from 'mongoose';
import { IAdmin } from './admin.interface';
import bcrypt from 'bcryptjs';

const AdminSchema: Schema<IAdmin> = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
);

// Hashear la contraseña antes de guardar el documento
AdminSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
  
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt); // Hasheamos la contraseña
    next();
});

// Hashear la contraseña antes de actualizar el documento
AdminSchema.pre('findOneAndUpdate', async function(next) {
    const update = this.getUpdate() as mongoose.UpdateQuery<IAdmin>;
    if (update.password) {
        const salt = await bcrypt.genSalt(10);
        update.password = await bcrypt.hash(update.password, salt); // Hasheamos la contraseña
    }
    next();
});

export default mongoose.model<IAdmin>('Admin', AdminSchema);

import mongoose, { Schema } from 'mongoose';
import { IOrganizer } from './organizer.interface';
import bcrypt from 'bcryptjs';

/**
 * @swagger
 * components:
 *   schemas:
 *     IOrganizer:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - contact
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           description: El nombre del organizador.
 *         description:
 *           type: string
 *           description: Una breve descripción del organizador.
 *         contact:
 *           type: string
 *           description: Información de contacto del organizador.
 *         website:
 *           type: string
 *           description: (Opcional) Sitio web del organizador.
 *         email:
 *           type: string
 *           description: El correo electrónico del organizador.
 *         password:
 *           type: string
 *           description: La contraseña del organizador.
 */
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

import { Router } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import AdminModel from '../../domain/models/admin/admin.model';
import OrganizerModel from '../../domain/models/organizer/organizer.model';
import dotenv from 'dotenv';

dotenv.config();

const router = Router();
const secret = process.env.JWT_SECRET || 'default_secret';

/**
 * @swagger
 * tags:
 *   name: Autenticación
 *   description: Operaciones relacionadas con la autenticación
 */

/**
 * @swagger
 * /v1/api/auth/login:
 *   post:
 *     summary: Iniciar sesión
 *     tags: [Autenticación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Correo electrónico del usuario
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Token JWT
 *                 user:
 *                   type: object
 *                   description: Información del usuario
 *       401:
 *         description: Correo electrónico o contraseña inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post('/auth/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        let user;
        let role;

        // Buscar en Admins
        user = await AdminModel.findOne({ email });
        if (user) {
            role = 'admin';
        } else {
            // Buscar en Organizers
            user = await OrganizerModel.findOne({ email });
            if (user) {
                role = 'organizer';
            }
        }

        if (!user) {
            return res.status(401).json({ message: 'Correo electrónico o contraseña inválidos' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Correo electrónico o contraseña inválidos' });
        }

        const token = jwt.sign({ id: user._id, role }, secret, { expiresIn: '1h' });
        res.json({ token, user, role });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;

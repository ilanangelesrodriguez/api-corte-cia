import { Router } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import AdminModel from '../../domain/models/admin/admin.model';
import OrganizerModel from '../../domain/models/organizer/organizer.model';
import dotenv from 'dotenv';

dotenv.config();

const router = Router();
const secret = process.env.JWT_SECRET || 'default_secret';

router.post('/login', async (req, res) => {
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
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: user._id, role }, secret, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;

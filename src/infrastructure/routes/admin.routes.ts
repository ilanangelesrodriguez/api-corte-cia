import { Router } from 'express';
import { AdminController } from '../../application/controller/admin.controller';
import { authenticateJWT } from '../middleware/auth';

const router = Router();
const adminController = new AdminController();

router.post('/admins', authenticateJWT, adminController.createAdmin.bind(adminController));
router.get('/admins/email/:email', authenticateJWT, adminController.getAdminByEmail.bind(adminController));
router.get('/admins/:id', authenticateJWT, adminController.getAdminById.bind(adminController));
router.put('/admins/:id', authenticateJWT, adminController.updateAdmin.bind(adminController));
router.delete('/admins/:id', authenticateJWT, adminController.deleteAdmin.bind(adminController));

export default router;

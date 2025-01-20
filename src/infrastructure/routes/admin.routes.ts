import { Router } from 'express';
import { AdminController } from '../../application/controller/admin.controller';

const router = Router();
const adminController = new AdminController();

router.post('/admins', adminController.createAdmin.bind(adminController));
router.get('/admins/email/:email', adminController.getAdminByEmail.bind(adminController));
router.get('/admins/:id', adminController.getAdminById.bind(adminController));
router.put('/admins/:id', adminController.updateAdmin.bind(adminController));
router.delete('/admins/:id', adminController.deleteAdmin.bind(adminController));

export default router;

import { Request, Response } from 'express';
import { AdminService } from '../../domain/services/admin.service';
import { IAdmin } from '../../domain/models/admin/admin.interface';

export class AdminController {
  private adminService: AdminService;

  constructor() {
    this.adminService = new AdminService();
  }

  async createAdmin(req: Request, res: Response): Promise<void> {
    try {
      const admin: IAdmin = req.body;
      const newAdmin = await this.adminService.createAdmin(admin);
      res.status(201).json(newAdmin);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAdminByEmail(req: Request, res: Response): Promise<void> {
    try {
      const email = req.params.email;
      const admin = await this.adminService.getAdminByEmail(email);
      if (admin) {
        res.status(200).json(admin);
      } else {
        res.status(404).json({ message: 'Admin not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAdminById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const admin = await this.adminService.getAdminById(id);
      if (admin) {
        res.status(200).json(admin);
      } else {
        res.status(404).json({ message: 'Admin not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateAdmin(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const admin: Partial<IAdmin> = req.body;
      const updatedAdmin = await this.adminService.updateAdmin(id, admin);
      if (updatedAdmin) {
        res.status(200).json(updatedAdmin);
      } else {
        res.status(404).json({ message: 'Admin not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteAdmin(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const deletedAdmin = await this.adminService.deleteAdmin(id);
      if (deletedAdmin) {
        res.status(200).json(deletedAdmin);
      } else {
        res.status(404).json({ message: 'Admin not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

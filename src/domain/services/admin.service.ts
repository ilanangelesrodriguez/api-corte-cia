import { AdminRepository } from '../repositories/admin.repository';
import { IAdmin } from '../models/admin/admin.interface';

export class AdminService {
  private adminRepository: AdminRepository;

  constructor() {
    this.adminRepository = new AdminRepository();
  }

  async createAdmin(admin: IAdmin): Promise<IAdmin> {
    return this.adminRepository.create(admin);
  }

  async getAdminByEmail(email: string): Promise<IAdmin | null> {
    return this.adminRepository.findByEmail(email);
  }

  async getAdminById(id: string): Promise<IAdmin | null> {
    return this.adminRepository.findById(id);
  }

  async updateAdmin(id: string, admin: Partial<IAdmin>): Promise<IAdmin | null> {
    return this.adminRepository.update(id, admin);
  }

  async deleteAdmin(id: string): Promise<IAdmin | null> {
    return this.adminRepository.delete(id);
  }
}

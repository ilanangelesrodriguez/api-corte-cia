import AdminModel from '../models/admin/admin.model';
import { IAdmin } from '../models/admin/admin.interface';

export class AdminRepository {
  async create(admin: IAdmin): Promise<IAdmin> {
    return AdminModel.create(admin);
  }

  async findByEmail(email: string): Promise<IAdmin | null> {
    return AdminModel.findOne({ email }).exec();
  }

  async findById(id: string): Promise<IAdmin | null> {
    return AdminModel.findById(id).exec();
  }

  async update(id: string, admin: Partial<IAdmin>): Promise<IAdmin | null> {
    return AdminModel.findByIdAndUpdate(id, admin, { new: true }).exec();
  }

  async delete(id: string): Promise<IAdmin | null> {
    return AdminModel.findByIdAndDelete(id).exec();
  }
}

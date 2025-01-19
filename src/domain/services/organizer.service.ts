import OrganizerRepository from '../repositories/organizer.repository';
import { IOrganizer } from '../models/organizer';

class OrganizerService {
    async createOrganizer(organizerData: IOrganizer): Promise<IOrganizer> {
        return await OrganizerRepository.createOrganizer(organizerData);
    }

    async getOrganizerById(organizerId: string): Promise<IOrganizer | null> {
        return await OrganizerRepository.getOrganizerById(organizerId);
    }

    async updateOrganizer(organizerId: string, organizerData: Partial<IOrganizer>): Promise<IOrganizer | null> {
        return await OrganizerRepository.updateOrganizer(organizerId, organizerData);
    }

    async deleteOrganizer(organizerId: string): Promise<IOrganizer | null> {
        return await OrganizerRepository.deleteOrganizer(organizerId);
    }

    async getAllOrganizers(): Promise<IOrganizer[]> {
        return await OrganizerRepository.getAllOrganizers();
    }
}

export default new OrganizerService();

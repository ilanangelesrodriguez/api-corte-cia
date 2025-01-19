import { OrganizerModel, IOrganizer } from "../models/organizer";

class OrganizerRepository {
    async createOrganizer(organizerData: IOrganizer): Promise<IOrganizer> {
        const organizer = new OrganizerModel(organizerData);
        return await organizer.save();
    }

    async getOrganizerById(organizerId: string): Promise<IOrganizer | null> {
        return await OrganizerModel.findById(organizerId).exec();
    }

    async updateOrganizer(organizerId: string, organizerData: Partial<IOrganizer>): Promise<IOrganizer | null> {
        return await OrganizerModel.findByIdAndUpdate(organizerId, organizerData, { new: true }).exec();
    }

    async deleteOrganizer(organizerId: string): Promise<IOrganizer | null> {
        return await OrganizerModel.findByIdAndDelete(organizerId).exec();
    }

    async getAllOrganizers(): Promise<IOrganizer[]> {
        return await OrganizerModel.find().exec();
    }
}

export default new OrganizerRepository();

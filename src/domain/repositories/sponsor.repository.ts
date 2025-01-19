import { SponsorModel, ISponsor } from "../models/sponsor";

class SponsorRepository {
    async createSponsor(sponsorData: ISponsor): Promise<ISponsor> {
        const sponsor = new SponsorModel(sponsorData);
        return await sponsor.save();
    }

    async getSponsorById(sponsorId: string): Promise<ISponsor | null> {
        return await SponsorModel.findById(sponsorId).exec();
    }

    async updateSponsor(sponsorId: string, sponsorData: Partial<ISponsor>): Promise<ISponsor | null> {
        return await SponsorModel.findByIdAndUpdate(sponsorId, sponsorData, { new: true }).exec();
    }

    async deleteSponsor(sponsorId: string): Promise<ISponsor | null> {
        return await SponsorModel.findByIdAndDelete(sponsorId).exec();
    }

    async getAllSponsors(): Promise<ISponsor[]> {
        return await SponsorModel.find().exec();
    }
}

export default new SponsorRepository();

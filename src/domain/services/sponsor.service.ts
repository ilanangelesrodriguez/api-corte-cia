import SponsorRepository from '../repositories/sponsor.repository';
import { ISponsor } from '../models/sponsor';

class SponsorService {
    async createSponsor(sponsorData: ISponsor): Promise<ISponsor> {
        return await SponsorRepository.createSponsor(sponsorData);
    }

    async getSponsorById(sponsorId: string): Promise<ISponsor | null> {
        return await SponsorRepository.getSponsorById(sponsorId);
    }

    async updateSponsor(sponsorId: string, sponsorData: Partial<ISponsor>): Promise<ISponsor | null> {
        return await SponsorRepository.updateSponsor(sponsorId, sponsorData);
    }

    async deleteSponsor(sponsorId: string): Promise<ISponsor | null> {
        return await SponsorRepository.deleteSponsor(sponsorId);
    }

    async getAllSponsors(): Promise<ISponsor[]> {
        return await SponsorRepository.getAllSponsors();
    }
}

export default new SponsorService();

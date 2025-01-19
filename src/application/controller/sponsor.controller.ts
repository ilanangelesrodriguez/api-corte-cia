import { Request, Response } from 'express';
import SponsorService from '../../domain/services/sponsor.service';

class SponsorController {
    async createSponsor(req: Request, res: Response): Promise<void> {
        try {
            const sponsor = await SponsorService.createSponsor(req.body);
            res.status(201).json(sponsor);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getSponsorById(req: Request, res: Response): Promise<void> {
        try {
            const sponsor = await SponsorService.getSponsorById(req.params.id);
            if (sponsor) {
                res.status(200).json(sponsor);
            } else {
                res.status(404).json({ message: 'Sponsor not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateSponsor(req: Request, res: Response): Promise<void> {
        try {
            const sponsor = await SponsorService.updateSponsor(req.params.id, req.body);
            if (sponsor) {
                res.status(200).json(sponsor);
            } else {
                res.status(404).json({ message: 'Sponsor not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteSponsor(req: Request, res: Response): Promise<void> {
        try {
            const sponsor = await SponsorService.deleteSponsor(req.params.id);
            if (sponsor) {
                res.status(200).json({ message: 'Sponsor deleted successfully' });
            } else {
                res.status(404).json({ message: 'Sponsor not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAllSponsors(req: Request, res: Response): Promise<void> {
        try {
            const sponsors = await SponsorService.getAllSponsors();
            res.status(200).json(sponsors);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default new SponsorController();

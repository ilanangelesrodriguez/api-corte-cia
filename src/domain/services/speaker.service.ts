import SpeakerRepository from '../repositories/speaker.repository';
import { ISpeaker } from '../models/speaker';

class SpeakerService {
    async createSpeaker(speakerData: ISpeaker): Promise<ISpeaker> {
        return await SpeakerRepository.createSpeaker(speakerData);
    }

    async getSpeakerById(speakerId: string): Promise<ISpeaker | null> {
        return await SpeakerRepository.getSpeakerById(speakerId);
    }

    async updateSpeaker(speakerId: string, speakerData: Partial<ISpeaker>): Promise<ISpeaker | null> {
        return await SpeakerRepository.updateSpeaker(speakerId, speakerData);
    }

    async deleteSpeaker(speakerId: string): Promise<ISpeaker | null> {
        return await SpeakerRepository.deleteSpeaker(speakerId);
    }

    async getAllSpeakers(): Promise<ISpeaker[]> {
        return await SpeakerRepository.getAllSpeakers();
    }
}

export default new SpeakerService();

import { SpeakerModel, ISpeaker } from "../models/speaker";

class SpeakerRepository {
    async createSpeaker(speakerData: ISpeaker): Promise<ISpeaker> {
        const speaker = new SpeakerModel(speakerData);
        return await speaker.save();
    }

    async getSpeakerById(speakerId: string): Promise<ISpeaker | null> {
        return await SpeakerModel.findById(speakerId).exec();
    }

    async updateSpeaker(speakerId: string, speakerData: Partial<ISpeaker>): Promise<ISpeaker | null> {
        return await SpeakerModel.findByIdAndUpdate(speakerId, speakerData, { new: true }).exec();
    }

    async deleteSpeaker(speakerId: string): Promise<ISpeaker | null> {
        return await SpeakerModel.findByIdAndDelete(speakerId).exec();
    }

    async getAllSpeakers(): Promise<ISpeaker[]> {
        return await SpeakerModel.find().exec();
    }
}

export default new SpeakerRepository();

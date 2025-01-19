import { IEvent } from "../models/event/event.interface";
import EventModel from '../models/event/event.model';

class EventRepository {
    async createEvent(eventData: IEvent): Promise<IEvent> {
        const event = new EventModel(eventData);
        return await event.save();
    }

    async getEventById(eventId: string): Promise<IEvent | null> {
        return await EventModel.findById(eventId).exec();
    }

    async updateEvent(eventId: string, eventData: Partial<IEvent>): Promise<IEvent | null> {
        return await EventModel.findByIdAndUpdate(eventId, eventData, { new: true }).exec();
    }

    async deleteEvent(eventId: string): Promise<IEvent | null> {
        return await EventModel.findByIdAndDelete(eventId).exec();
    }

    async getAllEvents(): Promise<IEvent[]> {
        return await EventModel.find().exec();
    }
}

export default new EventRepository();

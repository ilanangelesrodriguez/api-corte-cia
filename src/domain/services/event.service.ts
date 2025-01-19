import EventRepository from '../repositories/event.repository';
import { IEvent } from '../models/event';

class EventService {
    async createEvent(eventData: IEvent): Promise<IEvent> {
        return await EventRepository.createEvent(eventData);
    }

    async getEventById(eventId: string): Promise<IEvent | null> {
        return await EventRepository.getEventById(eventId);
    }

    async updateEvent(eventId: string, eventData: Partial<IEvent>): Promise<IEvent | null> {
        return await EventRepository.updateEvent(eventId, eventData);
    }

    async deleteEvent(eventId: string): Promise<IEvent | null> {
        return await EventRepository.deleteEvent(eventId);
    }

    async getAllEvents(): Promise<IEvent[]> {
        return await EventRepository.getAllEvents();
    }
}

export default new EventService();

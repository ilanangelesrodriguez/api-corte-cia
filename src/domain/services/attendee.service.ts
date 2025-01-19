import AttendeeRepository from '../repositories/attendee.repository';
import { IAttendee } from '../models/attendee';

class AttendeeService {
    async createAttendee(attendeeData: IAttendee): Promise<IAttendee> {
        return await AttendeeRepository.createAttendee(attendeeData);
    }

    async getAttendeeById(attendeeId: string): Promise<IAttendee | null> {
        return await AttendeeRepository.getAttendeeById(attendeeId);
    }

    async updateAttendee(attendeeId: string, attendeeData: Partial<IAttendee>): Promise<IAttendee | null> {
        return await AttendeeRepository.updateAttendee(attendeeId, attendeeData);
    }

    async deleteAttendee(attendeeId: string): Promise<IAttendee | null> {
        return await AttendeeRepository.deleteAttendee(attendeeId);
    }

    async getAllAttendees(): Promise<IAttendee[]> {
        return await AttendeeRepository.getAllAttendees();
    }
}

export default new AttendeeService();

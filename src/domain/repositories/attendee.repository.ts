import { AttendeeModel, IAttendee } from "../models/attendee";

class AttendeeRepository {
    async createAttendee(attendeeData: IAttendee): Promise<IAttendee> {
        const attendee = new AttendeeModel(attendeeData);
        return await attendee.save();
    }

    async getAttendeeById(attendeeId: string): Promise<IAttendee | null> {
        return await AttendeeModel.findById(attendeeId).exec();
    }

    async updateAttendee(attendeeId: string, attendeeData: Partial<IAttendee>): Promise<IAttendee | null> {
        return await AttendeeModel.findByIdAndUpdate(attendeeId, attendeeData, { new: true }).exec();
    }

    async deleteAttendee(attendeeId: string): Promise<IAttendee | null> {
        return await AttendeeModel.findByIdAndDelete(attendeeId).exec();
    }

    async getAllAttendees(): Promise<IAttendee[]> {
        return await AttendeeModel.find().exec();
    }
}

export default new AttendeeRepository();

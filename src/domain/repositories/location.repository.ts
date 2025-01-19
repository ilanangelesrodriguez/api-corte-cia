import { LocationModel, ILocation } from "../models/location";

class LocationRepository {
    async createLocation(locationData: ILocation): Promise<ILocation> {
        const location = new LocationModel(locationData);
        return await location.save();
    }

    async getLocationById(locationId: string): Promise<ILocation | null> {
        return await LocationModel.findById(locationId).exec();
    }

    async updateLocation(locationId: string, locationData: Partial<ILocation>): Promise<ILocation | null> {
        return await LocationModel.findByIdAndUpdate(locationId, locationData, { new: true }).exec();
    }

    async deleteLocation(locationId: string): Promise<ILocation | null> {
        return await LocationModel.findByIdAndDelete(locationId).exec();
    }

    async getAllLocations(): Promise<ILocation[]> {
        return await LocationModel.find().exec();
    }
}

export default new LocationRepository();

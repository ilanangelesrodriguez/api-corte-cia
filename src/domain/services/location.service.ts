import LocationRepository from '../repositories/location.repository';
import { ILocation } from '../models/location';

class LocationService {
    async createLocation(locationData: ILocation): Promise<ILocation> {
        return await LocationRepository.createLocation(locationData);
    }

    async getLocationById(locationId: string): Promise<ILocation | null> {
        return await LocationRepository.getLocationById(locationId);
    }

    async updateLocation(locationId: string, locationData: Partial<ILocation>): Promise<ILocation | null> {
        return await LocationRepository.updateLocation(locationId, locationData);
    }

    async deleteLocation(locationId: string): Promise<ILocation | null> {
        return await LocationRepository.deleteLocation(locationId);
    }

    async getAllLocations(): Promise<ILocation[]> {
        return await LocationRepository.getAllLocations();
    }
}

export default new LocationService();

import { Request, Response } from 'express';
import EventService from '../../domain/services/event.service';
import upload from '../../infrastructure/middleware/multer';
import cloudinary from 'cloudinary';

class EventController {
    async createEvent(req: Request, res: Response): Promise<void> {
        try {
            upload(req, res, async (err) => {
                if (err) {
                    return res.status(400).json({ message: 'Error al cargar la imagen' });
                }
                let imageUrl: string | undefined = undefined;
                if (req.file) {
                    const uploadStream = promisify(cloudinary.v2.uploader.upload_stream);
                    try {
                        const result = await uploadStream({ resource_type: 'auto' }, req.file.buffer);
                        imageUrl = result.secure_url;
                    } catch (error) {
                        return res.status(500).json({ message: 'Error al subir la imagen a Cloudinary' });
                    }
                }
                const eventData = { ...req.body, image: imageUrl };
                const event = await EventService.createEvent(eventData);
                res.status(201).json(event);
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getEventById(req: Request, res: Response): Promise<void> {
        try {
            const event = await EventService.getEventById(req.params.id);
            if (event) {
                res.status(200).json(event);
            } else {
                res.status(404).json({ message: 'Evento no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateEvent(req: Request, res: Response): Promise<void> {
        try {
            const event = await EventService.updateEvent(req.params.id, req.body);
            if (event) {
                res.status(200).json(event);
            } else {
                res.status(404).json({ message: 'Evento no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteEvent(req: Request, res: Response): Promise<void> {
        try {
            const event = await EventService.deleteEvent(req.params.id);
            if (event) {
                res.status(200).json({ message: 'Evento eliminado con éxito' });
            } else {
                res.status(404).json({ message: 'Evento no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAllEvents(req: Request, res: Response): Promise<void> {
        try {
            const events = await EventService.getAllEvents();
            res.status(200).json(events);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default new EventController();

import { Request, Response } from 'express';
import EventService from '../../domain/services/event.service';
import upload from '../../infrastructure/middleware/multer';
import cloudinary from 'cloudinary';

class EventController {
    async createEvent(req: Request, res: Response): Promise<void> {
        
        try {
            // Usamos multer para cargar la imagen (si está presente)
            upload(req, res, async (err) => {
              if (err) {
                return res.status(400).json({ message: 'Error al cargar la imagen' });
              }
      
              let imageUrl: string | undefined = undefined;
      
              // Si hay una imagen, la subimos a Cloudinary
              if (req.file) {
                const uploadResult = await cloudinary.v2.uploader.upload_stream(
                  { resource_type: 'auto' }, // 'auto' para que Cloudinary detecte el tipo de archivo
                  (error, result) => {
                    if (error) {
                      return res.status(500).json({ message: 'Error al subir la imagen a Cloudinary' });
                    }
                    imageUrl = result?.secure_url; // Obtenemos la URL segura de la imagen subida
                  }
                );
      
                // Guardamos la imagen en Cloudinary
                uploadResult.end(req.file.buffer);
              }
      
              // Creamos el evento con los datos de la solicitud
              const eventData = { ...req.body, image: imageUrl }; // Añadimos la URL de la imagen
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
import { Router } from 'express';
import EventController from '../../application/controller/event.controller';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Eventos
 *   description: Operaciones relacionadas con eventos
 */

/**
 * @swagger
 * /v1/api/events:
 *   post:
 *     summary: Crear un nuevo evento
 *     tags: [Eventos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/IEvent'
 *     responses:
 *       201:
 *         description: Evento creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/IEvent'
 *       500:
 *         description: Error interno del servidor
 */
router.post('/events', EventController.createEvent);

/**
 * @swagger
 * /v1/api/events/{id}:
 *   get:
 *     summary: Obtener un evento por ID
 *     tags: [Eventos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del evento
 *     responses:
 *       200:
 *         description: Evento obtenido exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/IEvent'
 *       404:
 *         description: Evento no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/events/:id', EventController.getEventById);

/**
 * @swagger
 * /v1/api/events/{id}:
 *   put:
 *     summary: Actualizar un evento por ID
 *     tags: [Eventos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del evento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/IEvent'
 *     responses:
 *       200:
 *         description: Evento actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/IEvent'
 *       404:
 *         description: Evento no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put('/events/:id', EventController.updateEvent);

/**
 * @swagger
 * /v1/api/events/{id}:
 *   delete:
 *     summary: Eliminar un evento por ID
 *     tags: [Eventos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del evento
 *     responses:
 *       200:
 *         description: Evento eliminado exitosamente
 *       404:
 *         description: Evento no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.delete('/events/:id', EventController.deleteEvent);

/**
 * @swagger
 * /v1/api/events:
 *   get:
 *     summary: Obtener todos los eventos
 *     tags: [Eventos]
 *     responses:
 *       200:
 *         description: Lista de eventos obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/IEvent'
 *       500:
 *         description: Error interno del servidor
 */
router.get('/events', EventController.getAllEvents);

export default router;

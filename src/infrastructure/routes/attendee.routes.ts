import { Router } from 'express';
import AttendeeController from '../../application/controller/attendee.controller';
import { authenticateJWT } from '../middleware/auth';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Asistentes
 *   description: Operaciones relacionadas con asistentes
 */

/**
 * @swagger
 * /v1/api/attendees:
 *   post:
 *     summary: Crear un nuevo asistente
 *     tags: [Asistentes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/IAttendee'
 *     responses:
 *       201:
 *         description: Asistente creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/IAttendee'
 *       500:
 *         description: Error interno del servidor
 */
router.post('/attendees', AttendeeController.createAttendee);

/**
 * @swagger
 * /v1/api/attendees/{id}:
 *   get:
 *     summary: Obtener un asistente por ID
 *     tags: [Asistentes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del asistente
 *     responses:
 *       200:
 *         description: Asistente obtenido exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/IAttendee'
 *       404:
 *         description: Asistente no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/attendees/:id', AttendeeController.getAttendeeById);

/**
 * @swagger
 * /v1/api/attendees/{id}:
 *   put:
 *     summary: Actualizar un asistente por ID
 *     tags: [Asistentes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del asistente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/IAttendee'
 *     responses:
 *       200:
 *         description: Asistente actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/IAttendee'
 *       404:
 *         description: Asistente no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put('/attendees/:id', authenticateJWT, AttendeeController.updateAttendee);

/**
 * @swagger
 * /v1/api/attendees/{id}:
 *   delete:
 *     summary: Eliminar un asistente por ID
 *     tags: [Asistentes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del asistente
 *     responses:
 *       200:
 *         description: Asistente eliminado exitosamente
 *       404:
 *         description: Asistente no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.delete('/attendees/:id', authenticateJWT, AttendeeController.deleteAttendee);

/**
 * @swagger
 * /v1/api/attendees:
 *   get:
 *     summary: Obtener todos los asistentes
 *     tags: [Asistentes]
 *     responses:
 *       200:
 *         description: Lista de asistentes obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/IAttendee'
 *       500:
 *         description: Error interno del servidor
 */
router.get('/attendees', authenticateJWT, AttendeeController.getAllAttendees);

export default router;

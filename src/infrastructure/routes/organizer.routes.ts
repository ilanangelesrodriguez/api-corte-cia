import { Router } from 'express';
import OrganizerController from '../../application/controller/organizer.controller';

const router = Router();

/**
 * @swagger
 * /v1/api/organizers:
 *   post:
 *     summary: Crear un nuevo organizador
 *     tags: [Organizadores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/IOrganizer'
 *     responses:
 *       201:
 *         description: Organizador creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/IOrganizer'
 *       500:
 *         description: Error interno del servidor
 */
router.post('/organizers', OrganizerController.createOrganizer);

/**
 * @swagger
 * /v1/api/organizers/{id}:
 *   get:
 *     summary: Obtener un organizador por ID
 *     tags: [Organizadores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del organizador
 *     responses:
 *       200:
 *         description: Organizador obtenido exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/IOrganizer'
 *       404:
 *         description: Organizador no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/organizers/:id', OrganizerController.getOrganizerById);

/**
 * @swagger
 * /v1/api/organizers/{id}:
 *   put:
 *     summary: Actualizar un organizador por ID
 *     tags: [Organizadores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del organizador
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/IOrganizer'
 *     responses:
 *       200:
 *         description: Organizador actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/IOrganizer'
 *       404:
 *         description: Organizador no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put('/organizers/:id', OrganizerController.updateOrganizer);

/**
 * @swagger
 * /v1/api/organizers/{id}:
 *   delete:
 *     summary: Eliminar un organizador por ID
 *     tags: [Organizadores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del organizador
 *     responses:
 *       200:
 *         description: Organizador eliminado exitosamente
 *       404:
 *         description: Organizador no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.delete('/organizers/:id', OrganizerController.deleteOrganizer);

/**
 * @swagger
 * /v1/api/organizers:
 *   get:
 *     summary: Obtener todos los organizadores
 *     tags: [Organizadores]
 *     responses:
 *       200:
 *         description: Lista de organizadores obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/IOrganizer'
 *       500:
 *         description: Error interno del servidor
 */
router.get('/organizers', OrganizerController.getAllOrganizers);

export default router;

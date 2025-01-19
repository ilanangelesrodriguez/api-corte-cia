import { Router } from 'express';
import SpeakerController from '../../application/controller/speaker.controller';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Ponentes
 *   description: Operaciones relacionadas con ponentes
 */

/**
 * @swagger
 * /v1/api/speakers:
 *   post:
 *     summary: Crear un nuevo ponente
 *     tags: [Ponentes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ISpeaker'
 *     responses:
 *       201:
 *         description: Ponente creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ISpeaker'
 *       500:
 *         description: Error interno del servidor
 */
router.post('/speakers', SpeakerController.createSpeaker);

/**
 * @swagger
 * /v1/api/speakers/{id}:
 *   get:
 *     summary: Obtener un ponente por ID
 *     tags: [Ponentes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del ponente
 *     responses:
 *       200:
 *         description: Ponente obtenido exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ISpeaker'
 *       404:
 *         description: Ponente no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/speakers/:id', SpeakerController.getSpeakerById);

/**
 * @swagger
 * /v1/api/speakers/{id}:
 *   put:
 *     summary: Actualizar un ponente por ID
 *     tags: [Ponentes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del ponente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ISpeaker'
 *     responses:
 *       200:
 *         description: Ponente actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ISpeaker'
 *       404:
 *         description: Ponente no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put('/speakers/:id', SpeakerController.updateSpeaker);

/**
 * @swagger
 * /v1/api/speakers/{id}:
 *   delete:
 *     summary: Eliminar un ponente por ID
 *     tags: [Ponentes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del ponente
 *     responses:
 *       200:
 *         description: Ponente eliminado exitosamente
 *       404:
 *         description: Ponente no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.delete('/speakers/:id', SpeakerController.deleteSpeaker);

/**
 * @swagger
 * /v1/api/speakers:
 *   get:
 *     summary: Obtener todos los ponentes
 *     tags: [Ponentes]
 *     responses:
 *       200:
 *         description: Lista de ponentes obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ISpeaker'
 *       500:
 *         description: Error interno del servidor
 */
router.get('/speakers', SpeakerController.getAllSpeakers);

export default router;

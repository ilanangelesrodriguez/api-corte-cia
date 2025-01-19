import { Router } from 'express';
import SponsorController from '../../application/controller/sponsor.controller';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Patrocinadores
 *   description: Operaciones relacionadas con patrocinadores
 */

/**
 * @swagger
 * /v1/api/sponsors:
 *   post:
 *     summary: Crear un nuevo patrocinador
 *     tags: [Patrocinadores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ISponsor'
 *     responses:
 *       201:
 *         description: Patrocinador creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ISponsor'
 *       500:
 *         description: Error interno del servidor
 */
router.post('/sponsors', SponsorController.createSponsor);

/**
 * @swagger
 * /v1/api/sponsors/{id}:
 *   get:
 *     summary: Obtener un patrocinador por ID
 *     tags: [Patrocinadores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del patrocinador
 *     responses:
 *       200:
 *         description: Patrocinador obtenido exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ISponsor'
 *       404:
 *         description: Patrocinador no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/sponsors/:id', SponsorController.getSponsorById);

/**
 * @swagger
 * /v1/api/sponsors/{id}:
 *   put:
 *     summary: Actualizar un patrocinador por ID
 *     tags: [Patrocinadores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del patrocinador
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ISponsor'
 *     responses:
 *       200:
 *         description: Patrocinador actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ISponsor'
 *       404:
 *         description: Patrocinador no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put('/sponsors/:id', SponsorController.updateSponsor);

/**
 * @swagger
 * /v1/api/sponsors/{id}:
 *   delete:
 *     summary: Eliminar un patrocinador por ID
 *     tags: [Patrocinadores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del patrocinador
 *     responses:
 *       200:
 *         description: Patrocinador eliminado exitosamente
 *       404:
 *         description: Patrocinador no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.delete('/sponsors/:id', SponsorController.deleteSponsor);

/**
 * @swagger
 * /v1/api/sponsors:
 *   get:
 *     summary: Obtener todos los patrocinadores
 *     tags: [Patrocinadores]
 *     responses:
 *       200:
 *         description: Lista de patrocinadores obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ISponsor'
 *       500:
 *         description: Error interno del servidor
 */
router.get('/sponsors', SponsorController.getAllSponsors);

export default router;

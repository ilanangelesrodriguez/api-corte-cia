import { Router } from 'express';
import LocationController from '../../application/controller/location.controller';
import { authenticateJWT } from '../middleware/auth';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Ubicaciones
 *   description: Operaciones relacionadas con ubicaciones
 */

/**
 * @swagger
 * /v1/api/locations:
 *   post:
 *     summary: Crear una nueva ubicación
 *     tags: [Ubicaciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ILocation'
 *     responses:
 *       201:
 *         description: Ubicación creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ILocation'
 *       500:
 *         description: Error interno del servidor
 */
router.post('/locations', authenticateJWT, LocationController.createLocation);

/**
 * @swagger
 * /v1/api/locations/{id}:
 *   get:
 *     summary: Obtener una ubicación por ID
 *     tags: [Ubicaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la ubicación
 *     responses:
 *       200:
 *         description: Ubicación obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ILocation'
 *       404:
 *         description: Ubicación no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.get('/locations/:id', LocationController.getLocationById);

/**
 * @swagger
 * /v1/api/locations/{id}:
 *   put:
 *     summary: Actualizar una ubicación por ID
 *     tags: [Ubicaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la ubicación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ILocation'
 *     responses:
 *       200:
 *         description: Ubicación actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ILocation'
 *       404:
 *         description: Ubicación no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.put('/locations/:id', authenticateJWT, LocationController.updateLocation);

/**
 * @swagger
 * /v1/api/locations/{id}:
 *   delete:
 *     summary: Eliminar una ubicación por ID
 *     tags: [Ubicaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la ubicación
 *     responses:
 *       200:
 *         description: Ubicación eliminada exitosamente
 *       404:
 *         description: Ubicación no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.delete('/locations/:id', authenticateJWT, LocationController.deleteLocation);

/**
 * @swagger
 * /v1/api/locations:
 *   get:
 *     summary: Obtener todas las ubicaciones
 *     tags: [Ubicaciones]
 *     responses:
 *       200:
 *         description: Lista de ubicaciones obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ILocation'
 *       500:
 *         description: Error interno del servidor
 */
router.get('/locations', LocationController.getAllLocations);

export default router;

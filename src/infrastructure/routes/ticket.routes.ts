import { Router } from 'express';
import TicketController from '../../application/controller/ticket.controller';

const router = Router();

/**
 * @swagger
 * /v1/api/tickets:
 *   post:
 *     summary: Crear un nuevo ticket
 *     tags: [Tickets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ITicket'
 *     responses:
 *       201:
 *         description: Ticket creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ITicket'
 *       500:
 *         description: Error interno del servidor
 */
router.post('/tickets', TicketController.createTicket);

/**
 * @swagger
 * /v1/api/tickets/{id}:
 *   get:
 *     summary: Obtener un ticket por ID
 *     tags: [Tickets]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del ticket
 *     responses:
 *       200:
 *         description: Ticket obtenido exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ITicket'
 *       404:
 *         description: Ticket no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/tickets/:id', TicketController.getTicketById);

/**
 * @swagger
 * /v1/api/tickets/{id}:
 *   put:
 *     summary: Actualizar un ticket por ID
 *     tags: [Tickets]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del ticket
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ITicket'
 *     responses:
 *       200:
 *         description: Ticket actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ITicket'
 *       404:
 *         description: Ticket no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put('/tickets/:id', TicketController.updateTicket);

/**
 * @swagger
 * /v1/api/tickets/{id}:
 *   delete:
 *     summary: Eliminar un ticket por ID
 *     tags: [Tickets]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del ticket
 *     responses:
 *       200:
 *         description: Ticket eliminado exitosamente
 *       404:
 *         description: Ticket no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.delete('/tickets/:id', TicketController.deleteTicket);

/**
 * @swagger
 * /v1/api/tickets:
 *   get:
 *     summary: Obtener todos los tickets
 *     tags: [Tickets]
 *     responses:
 *       200:
 *         description: Lista de tickets obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ITicket'
 *       500:
 *         description: Error interno del servidor
 */
router.get('/tickets', TicketController.getAllTickets);

export default router;

import { Router } from 'express';
import TicketController from '../../application/controller/ticket.controller';

const router = Router();

router.post('/tickets', TicketController.createTicket);
router.get('/tickets/:id', TicketController.getTicketById);
router.put('/tickets/:id', TicketController.updateTicket);
router.delete('/tickets/:id', TicketController.deleteTicket);
router.get('/tickets', TicketController.getAllTickets);

export default router;
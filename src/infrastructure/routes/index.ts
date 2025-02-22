import { Router } from 'express';
import commentRoutes from './comment.routes';
import locationRoutes from './location.routes';
import sponsorRoutes from './sponsor.routes';
import ticketRoutes from './ticket.routes';
import attendeeRoutes from './attendee.routes';
import speakerRoutes from './speaker.routes';
import organizerRoutes from './organizer.routes';
import eventRoutes from './event.routes';
import adminRoutes from './admin.routes';
import authRoutes from './auth.routes';

const router = Router();

router.use(commentRoutes);
router.use(locationRoutes);
router.use(sponsorRoutes);
router.use(ticketRoutes);
router.use(attendeeRoutes);
router.use(speakerRoutes);
router.use(organizerRoutes);
router.use(eventRoutes);
router.use(adminRoutes);
router.use(authRoutes);

export default router;

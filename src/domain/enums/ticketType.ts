/**
 * @swagger
 * components:
 *   schemas:
 *     TicketType:
 *       type: string
 *       enum:
 *         - general
 *         - VIP
 *         - estudiante
 *         - otro
 *       description: Enum que representa los diferentes tipos de boletos disponibles.
 */
export enum TicketType {
    General = 'general',
    VIP = 'VIP',
    Student = 'estudiante',
    Other = 'otro'
}
  
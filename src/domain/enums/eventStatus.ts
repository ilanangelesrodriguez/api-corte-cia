/**
 * @swagger
 *  components:
 *    schemas:
 *      EventStatus:
 *        type: string
 *        enum:
 *          - activo
 *          - cancelado
 *          - finalizado
 *        description: Enum que representa el estado de un evento.
 */
export enum EventStatus {
    Active = 'activo',
    Cancelled = 'cancelado',
    Finished = 'finalizado'
}

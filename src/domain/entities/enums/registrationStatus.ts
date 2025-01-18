/**
 * @swagger
 *  components:
 *    schemas:
 *      RegistrationStatus:
 *        type: string
 *        enum:
 *          - confirmado
 *          - pendiente
 *          - cancelado
 *        description: Estado de registro de un usuario.
 */
export enum RegistrationStatus {
    Confirmed = 'confirmado',
    Pending = 'pendiente',
    Cancelled = 'cancelado'
}

/**
 * @swagger
 *  components:
 *    schemas:
 *      VenueType:
 *        type: string
 *        enum:
 *          - teatro
 *          - auditorio
 *          - estadio
 *          - otro
 *        description: Tipo de lugar donde se llevará a cabo el evento.
 */
export enum VenueType {
    Theater = 'teatro',
    Auditorium = 'auditorio',
    Stadium = 'estadio',
    Other = 'otro'
}
  
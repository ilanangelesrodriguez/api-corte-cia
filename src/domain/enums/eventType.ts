/**
 * @swagger
 *  components:
 *    schemas:
 *      EventType:
 *        type: string
 *        enum:
 *          - conferencia
 *          - concierto
 *          - taller
 *          - seminario web
 *          - otro
 *        description: Tipo de evento
 */
export enum EventType {
    Conference = 'conferencia',
    Concert = 'concierto',
    Workshop = 'taller',
    Webinar = 'seminario web',
    Other = 'otro'
}
  
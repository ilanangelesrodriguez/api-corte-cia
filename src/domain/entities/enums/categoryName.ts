/**
 * @swagger
 * components:
 *   schemas:
 *     CategoryName:
 *       type: string
 *       enum:
 *         - tecnología
 *         - arte
 *         - ciencia
 *         - cultura
 *         - otro
 */
export enum CategoryName {
    Technology = 'tecnología',
    Art = 'arte',
    Science = 'ciencia',
    Culture = 'cultura',
    Other = 'otro'
}

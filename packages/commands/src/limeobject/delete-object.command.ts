import { Command, Limetype } from '@limetech/lime-web-components-interfaces';

/**
 * Deletes the object from the database
 *
 * @id `limeobject.delete-object`
 */

@Command({
    id: 'limeobject.delete-object',
})
export class DeleteObjectCommand {
    id: number;
    limetype: Limetype;
}

import { Command } from '../../../interfaces/src';
import { LimeType } from '../../../lime-web-components/src';

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
    limetype: LimeType;
}

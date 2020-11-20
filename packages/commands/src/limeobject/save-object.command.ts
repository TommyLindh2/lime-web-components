import { Command, LimeObject } from '@limetech/lime-web-components-interfaces';
/**
 * Saves the object to the database
 *
 * @id `limeobject.save-object`
 */
@Command({
    id: 'limeobject.save-object',
})
export class SaveLimeObjectCommand {
    /**
     * The limeobject to save
     */
    public limeobject: LimeObject;
}

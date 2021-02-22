import { Command, LimeObject } from '../../../interfaces/src';
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

    /**
     * Specifies if routing to limeobject should be done after confirmation
     */
    public route?: boolean = false;
}

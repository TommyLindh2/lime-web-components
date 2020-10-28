import { Command, LimeObject } from '@limetech/lime-web-components-interfaces';

@Command({
    id: 'limeobject.save-object',
})
export class SaveLimeObjectCommand {
    /**
     * The limeobject to save
     */
    public limeobject: LimeObject;
}

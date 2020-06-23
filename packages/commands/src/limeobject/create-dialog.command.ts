import { Command, Limetype } from '@limetech/lime-web-components-interfaces';

/**
 * Open a dialog for creating a new limeobject or editing a specific limeobject
 *
 * The create dialog is implemented as a command so a plugin can easily replace the original dialog with a custom one.
 * Check out the "Hello, Event!" tutorial for a detailed description on how to implement your own create dialog.
 *
 * This dialog also useful to edit a limeobject that already exists
 *
 * @id `limeobject.create-dialog`
 */
@Command({
    id: 'limeobject.create-dialog',
})
export class CreateLimeobjectDialogCommand {
    /**
     * The limetype of the object to create
     */
    public limetype: Limetype;

    /**
     * Default data to populate the form with
     */
    public limeobject?: any;

    /**
     * Specifies if routing to limeobject should be done after confirmation
     */
    public route?: boolean = false;

    /*
     * Title of the dialog
     */
    public title?: string;
}

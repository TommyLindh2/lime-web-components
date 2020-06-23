import { Command, Limetype } from '@limetech/lime-web-components-interfaces';

/**
 * Open a dialog to view and edit object access information
 * @id `limeobject.object-access`
 */

@Command({
    id: 'limeobject.object-access',
})
export class OpenObjectAccessDialogCommand {
    id: number;
    limetype: Limetype;
}

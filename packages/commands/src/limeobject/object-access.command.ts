import { Command } from '../../../interfaces/src';
import { LimeType } from '../../../lime-web-components/src';

/**
 * Open a dialog to view and edit object access information
 *
 * @id `limeobject.object-access`
 */

@Command({
    id: 'limeobject.object-access',
})
export class OpenObjectAccessDialogCommand {
    id: number;
    limetype: LimeType;
}

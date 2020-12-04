import { company } from './company';
import { coworker } from './coworker';
import { deal } from './deal';
import { person } from './person';
import { document } from './document';
import { limetypes } from '../limetypes';

export const limeobjects = {
    company: company,
    coworker: coworker,
    person: person,
    deal: deal,
    solutionimprovement: [],
    mailing: [],
    history: [],
    recipient: [],
    helpdesktype: [],
    successplan: [],
    document: document,
    consenttype: [],
    infotiles: [],
    participant: [],
    campaign: [],
    todo: [],
    helpdesk: [],
    office: [],
    target: [],
    consent: [],
};

export const getLimetype = (limetype: string) => limetypes[limetype];

export function getValue(propertyPath: string, limeobject: any): any {
    if (!limeobject) {
        return;
    }

    const path = propertyPath.split('.');

    if (path.length > 1) {
        const name = path.shift();
        const relation = limeobject.getValue(name, limeobject);

        return relation.getValue(path.join('.'));
    }

    let limetype = limeobject.getLimetype();
    const property = limetype.getProperty(propertyPath);
    if (property.type !== 'belongsto') {
        return limeobject[propertyPath];
    }

    limetype = property.relation.getLimetype();
    if (!limeobjects[limetype.name]) {
        return;
    }

    return limeobjects[limetype.name].find(
        (item) => item.id === limeobject[propertyPath]
    );
}

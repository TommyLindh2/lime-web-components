import { Limetype, Property } from '@limetech/lime-web-components-interfaces';
import { campaign } from './campaign';
import { company } from './company';
import { consent } from './consent';
import { consenttype } from './consenttype';
import { coworker } from './coworker';
import { deal } from './deal';
import { helpdesk } from './helpdesk';
import { helpdesktype } from './helpdesktype';
import { history } from './history';
import { infotiles } from './infotiles';
import { localize } from './localize';
import { mailing } from './mailing';
import { office } from './office';
import { participant } from './participant';
import { person } from './person';
import { recipient } from './recipient';
import { solutionimprovement } from './solutionimprovement';
import { successplan } from './successplan';
import { target } from './target';
import { todo } from './todo';
import { document } from './document';

export const limetypes: Record<string, Limetype> = {
    company: company,
    solutionimprovement: solutionimprovement,
    mailing: mailing,
    coworker: coworker,
    history: history,
    recipient: recipient,
    helpdesktype: helpdesktype,
    person: person,
    localize: localize,
    successplan: successplan,
    document: document,
    consenttype: consenttype,
    infotiles: infotiles,
    participant: participant,
    campaign: campaign,
    todo: todo,
    deal: deal,
    helpdesk: helpdesk,
    office: office,
    target: target,
    consent: consent,
} as any;

export function getLimetype(name: string): Limetype {
    return limetypes[name];
}

export function getBackreference(limetype: string, property: string): Property {
    return limetypes[limetype].properties[property];
}

export function getProperty(limetype: string, property: string) {
    const path = property.split('.');

    if (path.length > 1) {
        const name = path.shift();
        const relatedProperty = getProperty(limetype, name);
        const relatedLimetype = relatedProperty.relation.getLimetype();

        return getProperty(relatedLimetype.name, path.join('.'));
    }

    if (property in limetypes[limetype].properties) {
        return limetypes[limetype].properties[property];
    }

    throw new Error(
        `Limetype '${limetype}' has no property named '${property}'`
    );
}

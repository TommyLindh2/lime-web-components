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


import { getBackreference, getLimetype, getProperty } from '.';

export const consent = {
    name: 'consent',
    localname: {
        singular: 'Legal base & consent',
        plural: 'Legal base & consent',
    },
    sort_order: 18,
    label: null,
    getProperty: (property: string) => getProperty('consent', property),
    properties: {
        consenttype: {
            name: 'consenttype',
            required: false,
            label: 'none',
            fieldorder: 1,
            defaultvalue: null,
            localname: 'Legal base & consent type',
            type: 'belongsto',
            has_sql: false,
            relation: {
                getBackreference: () =>
                    getBackreference('consenttype', 'consent'),
                getLimetype: () => getLimetype('consenttype'),
            },
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        approved: {
            name: 'approved',
            required: false,
            label: 'none',
            fieldorder: 2,
            defaultvalue: false,
            localname: 'Approved',
            type: 'yesno',
            has_sql: false,
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        date: {
            name: 'date',
            required: true,
            label: 'none',
            fieldorder: 3,
            defaultvalue: null,
            localname: 'Date',
            type: 'time',
            has_sql: false,
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        source: {
            name: 'source',
            required: true,
            label: 'none',
            fieldorder: 4,
            defaultvalue: {
                key: 'empty',
                text: '',
                inactive: false,
            },
            localname: 'Source',
            type: 'option',
            has_sql: false,
            options: [
                {
                    key: 'empty',
                    text: '',
                    inactive: false,
                },
                {
                    key: 'coworker',
                    text: 'Coworker',
                    inactive: false,
                },
                {
                    key: 'email',
                    text: 'E-mail',
                    inactive: false,
                },
                {
                    key: 'portal',
                    text: 'GDPR portal',
                    inactive: false,
                },
                {
                    key: 'letter',
                    text: 'Letter',
                    inactive: false,
                },
                {
                    key: 'newsletter',
                    text: 'Newsletter',
                    inactive: false,
                },
                {
                    key: 'webform',
                    text: 'Webform',
                    inactive: false,
                },
            ],
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        note: {
            name: 'note',
            required: false,
            label: 'none',
            fieldorder: 5,
            defaultvalue: '',
            localname: 'Note',
            type: 'text',
            has_sql: false,
            length: 4000,
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        person: {
            name: 'person',
            required: false,
            label: 'none',
            fieldorder: 6,
            defaultvalue: null,
            localname: 'Person',
            type: 'belongsto',
            has_sql: false,
            relation: {
                getBackreference: () => getBackreference('person', 'consent'),
                getLimetype: () => getLimetype('person'),
            },
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        id: {
            acl: {},
            defaultvalue: null,
            fieldorder: 1,
            label: 'id',
            localname: 'Record ID (System)',
            name: 'id',
            required: false,
            type: 'system',
            ui: {},
        },
        createduser: {
            acl: {},
            defaultvalue: null,
            fieldorder: 1,
            label: 'createduser',
            localname: 'Created by (System)',
            name: 'createduser',
            required: false,
            type: 'system',
            ui: {},
        },
        createdtime: {
            acl: {},
            defaultvalue: null,
            fieldorder: 1,
            label: 'createdtime',
            localname: 'Created (System)',
            name: 'createdtime',
            required: false,
            type: 'system',
            ui: {},
        },
        timestamp: {
            acl: {},
            defaultvalue: null,
            fieldorder: 1,
            label: 'timestamp',
            localname: 'Last updated (System)',
            name: 'timestamp',
            required: false,
            type: 'system',
            ui: {},
        },
        updateduser: {
            acl: {},
            defaultvalue: null,
            fieldorder: 1,
            label: 'updateduser',
            localname: 'Last updated by (System)',
            name: 'updateduser',
            required: false,
            type: 'system',
            ui: {},
        },
    },
    acl: {
        read: true,
        update: true,
        create: true,
        delete: true,
    },
    ui: {
        icon: 'decision',
        color: 'lime-light-grey',
        create: false,
        descriptive: ['_id'],
    },
};

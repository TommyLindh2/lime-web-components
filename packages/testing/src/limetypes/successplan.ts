import { getBackreference, getLimetype, getProperty } from '.';

export const successplan = {
    name: 'successplan',
    localname: {
        singular: 'Success plan',
        plural: 'Success plans',
    },
    sort_order: 14,
    label: null,
    getProperty: (property: string) => getProperty('successplan', property),
    properties: {
        startdate: {
            name: 'startdate',
            required: true,
            label: 'none',
            fieldorder: 1,
            defaultvalue: '2020-04-07T12:13:49.967203+02:00',
            localname: 'Start date',
            type: 'date',
            has_sql: false,
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        enddate: {
            name: 'enddate',
            required: false,
            label: 'none',
            fieldorder: 2,
            defaultvalue: null,
            localname: 'End date',
            type: 'date',
            has_sql: false,
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        purpose: {
            name: 'purpose',
            required: true,
            label: 'none',
            fieldorder: 3,
            defaultvalue: '',
            localname: 'Purpose',
            type: 'text',
            has_sql: false,
            length: 1000,
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        objective: {
            name: 'objective',
            required: false,
            label: 'none',
            fieldorder: 4,
            defaultvalue: '',
            localname: 'Objective',
            type: 'text',
            has_sql: false,
            length: 1000,
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        result: {
            name: 'result',
            required: false,
            label: 'none',
            fieldorder: 5,
            defaultvalue: '',
            localname: 'Result',
            type: 'text',
            has_sql: false,
            length: 1000,
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        todo: {
            name: 'todo',
            required: false,
            label: 'none',
            fieldorder: 6,
            defaultvalue: '',
            localname: "To-do's",
            type: 'hasmany',
            has_sql: false,
            relation: {
                getBackreference: () => getBackreference('todo', 'successplan'),
                getLimetype: () => getLimetype('todo'),
            },
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        document: {
            name: 'document',
            required: false,
            label: 'none',
            fieldorder: 7,
            defaultvalue: '',
            localname: 'Documents',
            type: 'hasmany',
            has_sql: false,
            relation: {
                getBackreference: () =>
                    getBackreference('document', 'successplan'),
                getLimetype: () => getLimetype('document'),
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

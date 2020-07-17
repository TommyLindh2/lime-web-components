/* global module */
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        // eslint-disable-next-line no-magic-numbers
        'header-max-length': [0, 'always', 100],
    },
};

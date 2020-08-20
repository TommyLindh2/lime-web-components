import { Config } from '@stencil/core';

export const config: Config = {
    testing: {
        collectCoverage: true,
        moduleNameMapper: {
            '^@limetech/lime-web-components-(.+?)$': '<rootDir>/../$1',
        },
        testPathIgnorePatterns: ['dist'],
    },
    tsconfig: './tsconfig.test.json',
};

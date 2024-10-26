import { type JestConfigWithTsJest, TS_TRANSFORM_PATTERN } from 'ts-jest'

export default {
  displayName: 'source-map-transpiler-esm',
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    [TS_TRANSFORM_PATTERN]: [
      'ts-jest',
      {
        tsconfig: '<rootDir>/../tsconfig-esm.spec.json',
        isolatedModules: true,
        useESM: true,
      },
    ],
  },
} satisfies JestConfigWithTsJest
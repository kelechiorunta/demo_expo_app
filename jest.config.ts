import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-expo',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{ts,tsx,js,jsx}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!**/expo-env.d.ts',
    '!**/.expo/**'
  ]
  //   setupFiles: ['./jest.setup.js'],
  //   setupFilesAfterEnv: [
  //     '@testing-library/jest-native/extend-expect',
  //   ],
};

export default config;

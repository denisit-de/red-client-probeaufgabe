module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/src/tsconfig.spec.json',
    },
  },
  moduleNameMapper: {
    '@red-probeaufgabe/types': '<rootDir>/src/app/types/index.ts',
    '@red-probeaufgabe/ui': '<rootDir>/src/app/ui/index.ts',
    '@red-probeaufgabe/core': '<rootDir>/src/app/core/index.ts',
    '@red-probeaufgabe/search': '<rootDir>/src/app/search/index.ts',
    '@red-probeaufgabe/dashboard': '<rootDir>/src/app/dashboard/index.ts',
  },
  // Ignore cypress spec files from executing
  testPathIgnorePatterns: ['<rootDir>/cypress/', '<rootDir>/e2e/'],
};

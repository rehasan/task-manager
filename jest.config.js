module.exports = {
  verbose: true,
  preset: 'ts-jest',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts}'],
  coverageDirectory: './test-reports/test-coverage',
  coverageReporters: ['text-summary', 'text', 'cobertura', 'lcov'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: './test-reports/junit',
        outputName: 'jest-junit.xml',
        suiteName: 'jest tests',
        uniqueOutputName: 'false',
        classNameTemplate: '{classname}-{title}',
        titleTemplate: '{classname}-{title}',
        ancestorSeparator: ' › ',
        usePathForSuiteName: 'true'
      }
    ]
  ],
  roots: ['<rootDir>/tests'],
  testMatch: ['**/__tests__/**/*.+(ts)', '**/?(*.)+(spec|test).+(ts)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  }
};

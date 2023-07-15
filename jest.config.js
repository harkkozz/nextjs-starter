module.exports = {
  testEnvironment: '@happy-dom/jest-environment',
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svg.tsx',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  moduleDirectories: ['node_modules', '<rootDir>'],
  reporters: ['default'],
  coveragePathIgnorePatterns: ['i18n/*'],
};

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  moduleNameMapper: {
    '^@printer': '<rootDir>/printer',
    '^@abstract': '<rootDir>/abstract'
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: './',
  silent: false,
  expand: true
}

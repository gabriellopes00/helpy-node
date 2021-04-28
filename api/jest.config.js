const { resolve } = require('path')
const root = resolve(__dirname)

module.exports = {
  rootDir: root,
  testEnvironment: 'node',
  collectCoverageFrom: [
    '<rootDir>/**/*.ts',
    '!<rootDir>/**/*.d.ts',
    '!<rootDir>/src/domain/**/*',
    '!<rootDir>/src/@types/**/*',
    '!<rootDir>/src/config/**/*',
    '!<rootDir>/src/main/**/*',
    '!<rootDir>/**/interfaces/**/*',
    '!<rootDir>/tests/**/*'
  ],
  coverageDirectory: 'coverage/',
  coverageProvider: 'v8',
  testMatch: [__dirname + '/tests/unit/**/*.test.ts'],
  testPathIgnorePatterns: ['<rootDir>/tests/mocks/'],
  clearMocks: true,
  preset: '@shelf/jest-mongodb',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  }
}

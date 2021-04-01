module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  transform: {
      ".(ts|tsx)": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  },
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  moduleFileExtensions: [
      "ts",
      "tsx",
      "js"
  ],
  moduleNameMapper: {
      '^@components/(.*)$': '<rootDir>/src/components/$1',
      '^@pages/(.*)$': '<rootDir>/src/pages/$1'
  }

}
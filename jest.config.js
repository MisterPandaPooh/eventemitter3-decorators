module.exports = {
  coveragePathIgnorePatterns: ['/node_modules/', '/lib/'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },

  moduleFileExtensions: ['js', 'json', 'ts'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/unit/**/?(*).ts?(x)'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  verbose: true,
};

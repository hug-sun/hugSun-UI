module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  setupFiles: ['./scripts/setupTests.js'],
  testMatch: ['**/__tests__/**/*.spec.[jt]s?(x)', '**/tests/**/*.spec.[jt]s'],
  verbose: true,
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '@umijs/test/helpers/transformers/javascript.js',
    '^.+\\.(css|less|sass|scss|stylus)$':
      '@umijs/test/helpers/transformers/css.js',
    '^(?!.*\\.(js|jsx|ts|tsx|css|less|sass|scss|stylus|json)$)':
      '@umijs/test/helpers/transformers/file.js',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

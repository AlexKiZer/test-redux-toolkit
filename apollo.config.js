module.exports = {
  client: {
    service: {
      service: 'auth-graph-d1c5yu',
      url: 'http://localhost:4000/graphql',
      includes: ['./src/**/*.ts|tsx'],
      excludes: ['**/__tests__/**'],
    },
  },
};
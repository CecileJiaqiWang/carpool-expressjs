const app = require('./app');

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Carpool backend listening on port ${port}`);
});

module.exports = server;

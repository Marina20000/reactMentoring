const server = require('./server');

server.listen(8081, () => {
  console.info(`Express listening on port 8081`); // eslint-disable-line
});

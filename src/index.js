const fastify = require('fastify');
const getHello = require('./endpoints/getHello');

const start = async () => {
  const server = fastify({ logger: true });

  server.route(getHello);

  try {
    await server.listen(3000);
  } catch (e) {
    server.log.error(e, 'Unable to start the server');
  }
};

start();

const getHello = {
  method: 'GET',
  url: '/hello',
  handler: async (request, reply) => {
    reply.send({ hello: 'world' })
  }
};

module.exports = getHello;

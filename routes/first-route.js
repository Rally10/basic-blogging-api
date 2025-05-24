async function routes (fastify, options) {
  fastify.get('/', async (request, reply) => {
    return { hello: 'world1' }
  })
}

export default routes;

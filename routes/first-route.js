async function routes(fastify, options) {
  fastify.get('/', async (request, reply) => {
    reply.send({ hello: 'world' })
  })

  fastify.get('/articles', async (request, reply) => {
    try {
      const connection = await fastify.mysql.getConnection()
      const [rows, fields] = await connection.query(
        'SELECT * FROM articles'
      )
      connection.release()
      console.log(typeof rows[0].DateArticle)
      return rows
    } catch (error) {
      reply.status(500)
      reply.send({error: 'Database query failed'})
    }
  })
}

export default routes

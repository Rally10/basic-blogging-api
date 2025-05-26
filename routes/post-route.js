async function postRoutes(fastify, options) {

  const article_schema = {
    schema: {
      body: {
        type: 'object',
        properties: {
          NameArticle: { type: 'string' }
        },
        required: ['NameArticle']
      }
    }
  }

  fastify.post('/articles', article_schema, async (request, reply) => {
    try {
      const connection = await fastify.mysql.getConnection()
      const [rows, fields] = await connection.query(
        'INSERT INTO articles (NameArticle) VALUES (?)', [request.body.NameArticle]
      )
      connection.release()
      reply.send("OK")
    } catch (error) {
      reply.status(500)
      reply.send({ error: "Database insert failed" })
    }
  })
}

export default postRoutes

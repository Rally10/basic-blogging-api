import Fastify from 'fastify'
import dbConnector from './database/db-connector.js'
import firstRoute from './routes/first-route.js'
import postRoutes from './routes/post-route.js'

const fastify = Fastify({
  logger: true
})

fastify.register(dbConnector)
fastify.register(firstRoute)
fastify.register(postRoutes)

const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()

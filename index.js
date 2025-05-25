import Fastify from 'fastify'
import firstRoute from './routes/first-route.js'

const fastify = Fastify({
  logger: true
})

fastify.register(firstRoute)

fastify.listen({ port: 3000, host: '192.168.100.2' }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})

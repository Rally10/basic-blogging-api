import fastifyPlugin from 'fastify-plugin'
import fastifyMysql from '@fastify/mysql'
import dotenv from 'dotenv'

dotenv.config()

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_PORT = process.env.DB_PORT
const DATABASE = process.env.DATABASE

async function dbConnector(fastify, options) {
  fastify.register(fastifyMysql, {
    promise: true,
    connectionString: `mysql://${DB_USER}:${DB_PASSWORD}@localhost:${DB_PORT}/${DATABASE}`
  })
}

export default fastifyPlugin(dbConnector)

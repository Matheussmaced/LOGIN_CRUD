import { FastifyInstance } from 'fastify'

export async function createUsers(app: FastifyInstance) {
  app.get('/hello', () => {
    return 'Hello world!'
  })
}

import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'

export const app = fastify()
const prisma = new PrismaClient()

prisma.users.create({
  data: {
    email: 'mateusbyakuya3@gmail.com',
    password: '123',
  },
})

app.get('/hello', () => {
  return 'Hello world!'
})

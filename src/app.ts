import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'
import { createUsers } from './routes/create-users'

export const app = fastify()
const prisma = new PrismaClient()

prisma.users.create({
  data: {
    email: 'mateusbyakuya3@gmail.com',
    password: '123',
  },
})

app.register(createUsers, {
  prefix: 'create-users',
})

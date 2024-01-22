import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'
import { createUsers } from './routes/create-users'

export const app = fastify()

app.register(createUsers)

import { prisma } from '@/lib/prisma'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'

export async function createUsers(app: FastifyInstance) {
  app.post('/user', async (req, reply) => {
    const createUserSchema = z.object({
      email: z.string().email(),
      password: z.string().min(3),
    })

    const { email, password } = createUserSchema.parse(req.body)

    await prisma.users.create({
      data: {
        email,
        password_hash: password,
      },
    })
    return reply.status(201).send()
  })
}

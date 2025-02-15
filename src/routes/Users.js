// src/routes/Users.js
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/userController.js';


async function userRoutes(fastify, options) {
  // Esquemas de validación con AJV (opcional, si no, quítalo)
  const userBodySchema = {
    type: 'object',
    required: ['name', 'email'],
    properties: {
      name: { type: 'string' },
      email: { type: 'string', format: 'email' },
      testUser: { type: 'boolean', default: false },
    },
  };

  // GET /api/users
  fastify.get('/users', getUsers);

  // POST /api/users
  fastify.post(
    '/users',
    {
      schema: {
        body: userBodySchema,
      },
    },
    createUser
  );

  // PUT /api/users/:id
  fastify.put(
    '/users/:id',
    {
      schema: {
        body: {
          type: 'object',
          // name y email no son obligatorios, pero si vienen, validamos:
          properties: {
            name: { type: 'string' },
            email: { type: 'string', format: 'email' },
          },
        },
      },
    },
    updateUser
  );

  // DELETE /api/users/:id
  fastify.delete('/users/:id', deleteUser);
}

export default userRoutes;

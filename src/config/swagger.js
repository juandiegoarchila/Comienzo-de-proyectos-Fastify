import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';

const swaggerOptions = {
  openapi: {
    info: {
      title: 'API de Usuarios',
      version: '1.0.0',
      description: 'API RESTful para la gestión de usuarios con Firebase',
    },
  },
};

const swaggerUiOptions = {
  routePrefix: '/api-docs',
  uiConfig: {
    docExpansion: 'list',
    deepLinking: false,
  },
  staticCSP: true,
  transformSpecification: (swaggerObject, req, reply) => {
    return swaggerObject;
  },
};

export default function swaggerConfig(app) {
  app.register(fastifySwagger, swaggerOptions);
  app.register(fastifySwaggerUi, swaggerUiOptions);
}

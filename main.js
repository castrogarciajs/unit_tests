import fastify from "./app.js";

fastify.get("/", (request, reply) => {
  reply.send("Hello world fastify");
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (error) {
    fastify.log.error(error);
    process.exit(0);
  }
};

start();

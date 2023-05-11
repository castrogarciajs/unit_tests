import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

let PORT = 0;

beforeEach(async () => {
  try {
    await fastify.listen({ port: 3000 });
    PORT = fastify.server.address().port;
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
});

afterEach(async () => {
  await fastify.close();
});
it("should return por 3000", async () => {
  expect(PORT).toBe(3000);
  expect(PORT).not.toBe(8080);
});

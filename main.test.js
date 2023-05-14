import fastify from "./app.js";
import request from "supertest";

fastify.get("/", (_, reply) => {
  reply.send("Hello, World");
});

describe("Server Test", () => {
  beforeAll(async () => {
    try {
      await fastify.listen({ port: 3000 });
    } catch (error) {
      fastify.log.error(error);
    }
  });

  afterAll(async () => {
    await fastify.close();
  });

  it("should return port 3000", async () => {
    expect(fastify.server.address().port).toBe(3000);
    expect(fastify.server.address().port).not.toBe(8080);
  });

  it("should return status 200", async () => {
    const res = await request(fastify.server).get("/");

    expect(res.status).toBe(200);
    expect(res.status).not.toBe(404);
  });

  it("should return status 404", async () => {
    const res = await request(fastify.server).get("/fastify");

    expect(res.status).toBe(404);
    expect(res.status).not.toBe(200);
  });

  it("should return Hello, World", async () => {
    const res = await request(fastify.server).get("/");

    expect(res.text).toMatch("Hello, World");
  });

  it("should return", async () => {
    const res = await request(fastify.server).get("/");

    expect(res.ok).toBeTruthy();
  });
});

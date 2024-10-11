import { Hono } from "hono";

const app = new Hono();

// TODO: for this route, return html
app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;

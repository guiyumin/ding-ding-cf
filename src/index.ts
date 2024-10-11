import { Hono } from "hono";
import { html } from "hono/html";

const app = new Hono();

const HomePage = () => {
  return html`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hello Hono!</title>
      </head>
      <body>
        Hello Hono!!!
      </body>
    </html>
  `;
};

// TODO: for this route, return html
app.get("/", (c) => {
  return c.html(HomePage());
});

export default app;

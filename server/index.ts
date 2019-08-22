require("dotenv").config();
const next = require("next");

const cors = require("cors");
const express = require("express");
const { postgraphile } = require("postgraphile");
const getLogger = require("./logger");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const port: string = process.env.PORT || "";
  const dbUrl: string = process.env.DATABASE_URL || "";

  const server = express();
  const logger = getLogger("app");

  server.use(cors());
  server.use(
    postgraphile(dbUrl, "public", {
      graphiql: true,
      exportJsonSchemaPath: "./static/graphql.schema.json"
    })
  );
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port);

  logger.info(`Server started on port ${port}`);
});

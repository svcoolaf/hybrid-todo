const fs = require("fs");
const path = require("path");

/**
 * Generates default .env file as key=value pairs from {@link DEFAULTS}
 *
 * Does not support deep structure. Does not overwrite existing .env.
 */

const DEFAULTS = {
  PORT: 3001,

  DATABASE_URL: "postgres:///shasher"
};

const DOTENV_FILEPATH = path.resolve(process.cwd(), ".env");

writeDotEnv();

function writeDotEnv() {
  if (!fs.existsSync(DOTENV_FILEPATH)) {
    fs.writeFileSync(DOTENV_FILEPATH, json2DotEnv(DEFAULTS), {
      encoding: "utf8"
    });
  }
}

function json2DotEnv(json: object): string {
  return Object.keys(json)
    .map(key => `${key}=${json[key]}`)
    .join("\n");
}

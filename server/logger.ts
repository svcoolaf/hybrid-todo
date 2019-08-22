const os = require("os");
const winston = require("winston");

module.exports = function getLogger(node_name: string) {
  const appendMetaInfo = winston.format(info => {
    return Object.assign(info, {
      application: node_name,
      hostname: os.hostname(),
      pid: process.pid
    });
  });

  return winston.createLogger({
    level: "info",
    format: winston.format.combine(appendMetaInfo(), winston.format.json()),
    transports: [new winston.transports.Console()]
  });
};

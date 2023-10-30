const input1 = Number(process.argv[2]);
const input2 = Number(process.argv[3]);
const { LOG_LEVEL = "info" } = process.env;

const logger = require("pino")({
  level: LOG_LEVEL
});

function sum(left, right) {
  logger.debug({ left, right });
  
  const result = left + right;

  logger.trace({ result });

  return result;
}

console.log(sum(input1, input2));

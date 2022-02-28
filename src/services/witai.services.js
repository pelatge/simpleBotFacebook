const {Wit, log} = require('node-wit');

const client = new Wit({
  accessToken: process.env.WIT_TOKEN,
  logger: new log.Logger(log.DEBUG) // optional
});

console.log(client.message('set an alarm tomorrow at 7am'));
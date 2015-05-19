// Write your package code here!
Npm.depends(
{
  "winston": "1.0.0",
  "winston-papertrail": "1.0.1",
);

var winston = Npm.require('winston');

var Papertrail = Npm.require('winston-papertrail').Papertrail;

var paperTrailConfig = {
    host: 'logs2.papertrailapp.com',
    port: 28055,
    logFormat: function(level, message) {
            return '[' + level + '] ' + message;
        },
    inlineMeta: true,
    colorize: true,
    json: true,
}


var transportPaperTrail = new winston.transports.Papertrail(paperTrailConfig);

logger = new (winston.Logger)({
    transports: [
      transportPaperTrail,
      transportLogEntries,
      new winston.transports.Console
    ],
    exceptionHandlers: [
      transportPaperTrail,
      transportLogEntries,
      new winston.transports.Console
    ]
  });

// By default, Winston exits when an unhandled exception occurs. Over-riding this behaviour.
logger.exitOnError = false;
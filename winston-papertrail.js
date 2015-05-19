// Write your package code here!
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

var consoleConfig = {
    colorize: true,
    json: true    
}

var transportConsole = new winston.transports.Console(consoleConfig);


var transportPaperTrail = new winston.transports.Papertrail(paperTrailConfig);

logger = new (winston.Logger)({
    transports: [
      transportPaperTrail,
      transportConsole
    ],
    exceptionHandlers: [
      transportPaperTrail,
      transportConsole
    ]
  });

// By default, Winston exits when an unhandled exception occurs. Over-riding this behaviour.
logger.exitOnError = false;
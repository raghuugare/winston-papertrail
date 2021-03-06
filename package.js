Package.describe({
  name: 'rugare:winston-papertrail',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'A meteor wrapper over the winston-papertrail transport',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/raghuugare/winston-papertrail',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends(
{
  "winston": "1.0.0",
  "winston-papertrail": "1.0.1",
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('winston-papertrail.js');
  api.export('logger', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('rugare:winston-papertrail');
  api.addFiles('winston-papertrail-tests.js');
});

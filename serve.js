/**
 * Created by Kenny Deblaere on 30/05/2015.
 */
var connect = require('connect');
var serveStatic = require('serve-static');

// we put our server serve.js in the same directory as
// the html, css and js files we are going to serve.
//
// __dirname is a global variable that contains the directory
// where the current running script (serve.js) resides.
connect().use(serveStatic(__dirname)).listen(8080);

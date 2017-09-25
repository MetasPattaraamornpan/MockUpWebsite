const express     = require('express');
const promise 	  = require('bluebird');
const http 		    = require('http');
const path 		    = require('path');

const PORT        = 5000;

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
console.log('NODE_TLS_REJECT_UNAUTHORIZED=0');

//load
() => promise.try(() => preload()).then(start).catch(handleError);

//error
function handleError(err) {
    console.log('handleError', err);
}

//pre start
function preload() {
    console.log('load pre-start');
}

//app start
function start() {
  let app = express();
  let server = http.createServer(app);
  app.disable('x-powered-by');
  app.set('trust proxy', true);
  app.set('port', PORT);

  //route
  app.use(express.static('./'));
  // app.use(express.static('/dist'));
  // app.use(express.static(path.join(__dirname, '/dist')))
  //start server
  server.listen(app.get('port') , function() {
      console.log("Start on port:" + (app.get('port')));
      return true;
  });
  app.server = server;
  return app;
}

start()

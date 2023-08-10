var cron = require('node-cron');
const https = require('https');
const http = require('http');
cron.schedule(`*/10 * * * * *`, () => {
  console.log(new Date(), 'running a task every 10s');
https.get('https://twitter-tracking.vercel.app/api/users', res => { 
  }).on('error', err => {
    console.log('Error: ', err.message);
  });

});

// Use port number from the PORT environment variable or 3000 if not specified
const port = process.env.PORT || 3000;
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('X!');
    res.end();
  }).listen(port);

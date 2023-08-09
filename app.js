var cron = require('node-cron');
const https = require('https');

cron.schedule(`*/10 * * * * *`, () => {
  console.log(new Date(), 'running a task every 10s');
https.get('https://twitter-tracking.vercel.app/api/users', res => { 
  }).on('error', err => {
    console.log('Error: ', err.message);
  });

});
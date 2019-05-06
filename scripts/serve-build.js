const {execSync} = require('child_process');
const https = require('https');
const fs = require('fs');
const express = require('express');
require('dotenv').config();

const app = express();

const {REACT_APP_FACEBOOK_APP_ID} = process.env;

const FACEBOOK_DEMO_URL = `
Test your FBInstant game here:
https://www.facebook.com/embed/instantgames/${REACT_APP_FACEBOOK_APP_ID}/player?game_url=https%3A%2F%2Flocalhost%3A3000
`;

app.use(express.static('build'));
app.use('*', express.static('build/index.html'));

if (!fs.existsSync('./cert.pem')) {
  console.log('Generate localhost certificate...')
  execSync('openssl genrsa 2048 > key.pem && openssl req -subj "/CN=www.mydom.com/O=My Company Name LTD./C=US" -x509 -days 1000 -new -key key.pem -out cert.pem');
  console.log('Certificate done.')
}

console.log('');
https
.createServer({
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
}, app)
.listen(3000, () => {
  console.log('server at https://localhost:3000')
  console.log(FACEBOOK_DEMO_URL);
});



const fs = require('fs');
const {exec} = require('child_process');
const archiver = require('archiver');
require('dotenv').config();

const {
  REACT_APP_FACEBOOK_APP_ID,
  REACT_APP_FACEBOOK_APP_ID_TEST,
  FB_ACCESS_TOKEN_TEST,
  FB_ACCESS_TOKEN,
  NODE_ENV
} = process.env;

const zipFilePath = `${__dirname}/../build/build.zip`;
const token = NODE_ENV === 'production' ?
  FB_ACCESS_TOKEN : FB_ACCESS_TOKEN_TEST;
const appId = NODE_ENV === 'production' ?
  REACT_APP_FACEBOOK_APP_ID : REACT_APP_FACEBOOK_APP_ID_TEST;

if (fs.existsSync(zipFilePath)) {
  fs.unlinkSync(zipFilePath);
}

const output = fs.createWriteStream(zipFilePath);

console.log('Zip build dir to build.zip...');
const archive = archiver('zip', {zlib: {level: 9}});
archive.on('error', err => { throw err; });
archive.directory(`${__dirname}/../build`);
archive.pipe(output);
archive.finalize();

output.on('close', () => {
  console.log('build.zip ready');
  console.log('Send build.zip...');

  exec(`curl -X POST https://graph-video.facebook.com/${appId}/assets \
    -F 'access_token=${token}' \
    -F 'type=BUNDLE' \
    -F 'asset=@${zipFilePath}' \
    -F 'comment=Graph API upload'
  `, err => {
    if (err) {
      throw err;
    }

    console.log('Zip upload done.');
  });
});

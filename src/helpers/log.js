import config from 'config';
import fs from 'fs';
import Log from 'log';
import mkdirp from 'mkdirp';

const filePath = config.get('log');
const folderPath = filePath.slice(0, filePath.lastIndexOf('/'));
const isProduction = process.env.NODE_ENV === "production";

let stream = null;

if (isProduction) {
  mkdirp(folderPath);
  stream = fs.createWriteStream(filePath);
}

export default new Log('Application', stream);
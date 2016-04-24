#!/bin/sh

nginx &&
npm run $ENV &&
/app/node_modules/.bin/pm2 start --no-daemon /app/.production/bin/index.js
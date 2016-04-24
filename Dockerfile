FROM alpine

WORKDIR app

ADD . /app
RUN apk update && apk upgrade
RUN apk add nodejs
RUN apk add python
RUN apk add build-base
RUN npm install
RUN npm cache clean
RUN apk add nginx
RUN rm -rf /var/cache/apk/*
ADD /app/.dockerconfig/nginx/nginx.conf     /etc/nginx/
ADD /app/.dockerconfig/nginx/default.conf   /etc/nginx/conf.d/
ADD /cert /cert

ENV PORT 8080
EXPOSE 8080 443

VOLUMES ['/logs']

ENTRYPOINT ["sh", "/app/.dockerconfig/run.sh"]
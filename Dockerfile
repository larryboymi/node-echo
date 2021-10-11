FROM node:14.18.0-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN apk update && apk add curl
RUN npm i
EXPOSE 3000
CMD ["npm", "start"]
HEALTHCHECK CMD curl -fk http://localhost:3000/health || exit 1

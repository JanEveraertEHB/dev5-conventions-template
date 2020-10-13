FROM node:7.9.0

RUN mkdir -p /starter/lib

COPY package.json /starter
COPY package-lock.json /starter

WORKDIR /starter

RUN npm install --quiet || cat npm-debug.log

VOLUME /starter/src

EXPOSE 3000

CMD ["npm", "start"]

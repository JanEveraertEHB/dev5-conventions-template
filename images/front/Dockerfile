FROM node:12.18.0

RUN mkdir -p /starter/lib

COPY package.json /starter
COPY package-lock.json /starter

WORKDIR /starter
RUN npm install -g create-react-app
RUN chown node:node -R .
RUN npm install --quiet || cat npm-debug.log

VOLUME /starter/public
VOLUME /starter/src

RUN ls -la /starter

CMD ["npm", "start"]

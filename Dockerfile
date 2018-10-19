FROM node:10.1.0-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

ADD . /app

EXPOSE 5000
EXPOSE 3000

CMD npm start

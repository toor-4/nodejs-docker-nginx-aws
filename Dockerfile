FROM node:latest

WORKDIR /app

COPY /public/ /app/public

COPY package.json /app
COPY package-lock.json /app
COPY server.js /app

RUN npm install 

EXPOSE 3000

CMD ["npm", "start"]
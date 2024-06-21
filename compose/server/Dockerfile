FROM node:21-alpine

RUN mkdir /home/node/app

WORKDIR /home/node/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
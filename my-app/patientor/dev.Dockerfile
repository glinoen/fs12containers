FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN ls

RUN npm install

CMD ["npm", "start"]
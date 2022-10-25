FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm ci

ENV REACT_APP_BACKEND_URL=http://localhost:3000/

ENV CI=true

RUN npm test

RUN npm run build

RUN npm install -g serve

CMD ["serve", "build"]

FROM node:18

WORKDIR /anak/src/app

COPY package*.json ./
COPY tsconfig.build.json ./

RUN npm install

RUN npm run build

RUN npm install -g @nestjs/cli

RUN npm install --save cors

EXPOSE 3000

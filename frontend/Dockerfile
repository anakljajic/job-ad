FROM node:14.21.3

WORKDIR /anak/frontend/src/app

COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli@15.1.6

COPY . .

RUN npm run build

EXPOSE 4200

FROM node:lts

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production
COPY . .
RUN npm ci
RUN npm run build

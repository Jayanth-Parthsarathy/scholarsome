# syntax=docker/dockerfile:1.3-labs
FROM node:lts-alpine3.18 as builder

WORKDIR /usr/src/app

RUN apk add g++ make py3-pip

COPY package*.json .
RUN npm install --omit=dev --legacy-peer-deps

COPY . .
RUN npm run generate
RUN npm run build

FROM node:lts-alpine3.18

WORKDIR /usr/src/app

COPY . .
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules

CMD [ "npm", "run", "serve:node" ]

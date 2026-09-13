FROM node:alpine AS build-stage

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i --omit=dev

FROM node:alpine AS runtime-stage

ENV NODE_ENV=production
ENV PORT=3000

WORKDIR /usr/src/app

COPY --from=build-stage /usr/src/app/node_modules ./node_modules

COPY package*.json ./
COPY src ./src

EXPOSE 3000

CMD ["npm", "run", "start"]

FROM node:16-slim
RUN apt-get update
RUN apt-get install -y openssl

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install

COPY . /app

RUN pnpm build

CMD pnpm start:prod
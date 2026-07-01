FROM node:22-alpine

RUN corepack enable 

RUN apk add --no-cache python3 make g++

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN pnpm install --frozen-lockfile

COPY . . 

EXPOSE 8000

CMD ["pnpm","start"]



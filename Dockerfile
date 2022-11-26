FROM node:18-alpine AS build

ARG SITE
ARG BUCKET
ARG AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY

ENV AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}
ENV AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}

RUN apk add --no-cache aws-cli make

WORKDIR /app
COPY packages /app/packages
COPY sites/${SITE} /app/sites/${SITE}
COPY yarn.lock /app/yarn.lock
COPY package.json /app/package.json
COPY lerna.json /app/lerna.json

RUN yarn install
RUN yarn bootstrap

RUN cd sites/${SITE}
RUN yarn build




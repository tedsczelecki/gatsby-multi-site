FROM node:18-alpine AS build

ARG FORCE_NO_CACHE_FLAG=1
ARG AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY
ARG GH_PACKAGE_TOKEN

ENV GH_PACKAGE_TOKEN=${GH_PACKAGE_TOKEN}
ENV AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}
ENV AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}

RUN apk add --no-cache aws-cli make g++ py3-pip

WORKDIR /app
COPY sites/ /app/sites

RUN npm install -g gatsby-cli

RUN echo "@tedsczelecki:registry=https://npm.pkg.github.com/tedsczelecki" >> /root/.npmrc
RUN echo "//npm.pkg.github.com/:_authToken=${GH_PACKAGE_TOKEN}" >> /root/.npmrc




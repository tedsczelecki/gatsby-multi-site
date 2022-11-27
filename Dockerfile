FROM node:18-alpine AS build

ARG FORCE_NO_CACHE_FLAG=1
ARG SITE
ARG BUCKET
ARG AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY

ENV AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}
ENV AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}

RUN apk add --no-cache aws-cli make g++ py3-pip

WORKDIR /app

COPY sites/${SITE} /app
RUN rm -rf node_modules
RUN rm -rf .cache
RUN rm -rf .serverless
#COPY yarn.lock /app/yarn.lock
COPY .npmrc /root/.npmrc

#RUN npm install -g npm-cli-login
RUN npm install -g gatsby-cli

#RUN echo //npm.pkg.github.com/:_authToken=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 >> ~/.npmrc

RUN ls -la
RUN cat /root/.npmrc

#RUN npm-cli-adduser -u 'tedsczelecki' -p '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' -e 'tedsczelecki@gmail.com' -r 'https://npm.pkg.github.com/tedsczelecki' -s '@tedsczelecki'
RUN #npm config set registry @tedsczelecki:registry=https://npm.pkg.github.com/tedsczelecki
#RUN npm-cli-login -r https://npm.pkg.github.com/tedsczelecki -u tedsczelecki -p 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 -e tedsczelecki@gmail.com

#RUN yarn config set registry @tedsczelecki:registry=https://npm.pkg.github.com/tedsczelecki

RUN npm install
RUN npm run build

RUN rm -f .npmrc




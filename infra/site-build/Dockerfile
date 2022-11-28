FROM 182680049095.dkr.ecr.us-east-1.amazonaws.com/base-site-image:latest AS build

ARG FORCE_NO_CACHE_FLAG=1
ARG SITE
ARG BUCKET
ARG GITHUB_TOKEN
ARG AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY

ENV GH_PACKAGE_TOKEN=${GH_PACKAGE_TOKEN}
ENV AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}
ENV AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}

WORKDIR /app/sites/${SITE}

RUN echo "@tedsczelecki:registry=https://npm.pkg.github.com/tedsczelecki" >> .npmrc
RUN echo "//npm.pkg.github.com/:_authToken=${GH_PACKAGE_TOKEN}" >> .npmrc

RUN npm install
RUN npm run build

RUN aws s3 sync ./public s3://${BUCKET}/ \
  --delete \
  --metadata-directive REPLACE \
  --cache-control max-age=604800,public \
  --acl public-read

RUN rm -f .npmrc

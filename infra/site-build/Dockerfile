FROM 182680049095.dkr.ecr.us-east-1.amazonaws.com/base-site-image AS build

ARG FORCE_NO_CACHE_FLAG=1
ARG SITE
ARG BUCKET
ARG AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY

ENV AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}
ENV AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}

RUN apk add --no-cache aws-cli make g++ py3-pip


WORKDIR /app/sites/${SITE}

RUN npm install
RUN npm run build

RUN aws s3 sync ./public s3://${BUCKET}/ \
  --delete \
  --metadata-directive REPLACE \
  --cache-control max-age=604800,public \
  --acl public-read

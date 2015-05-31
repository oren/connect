FROM mhart/alpine-iojs:2.1.0
WORKDIR /src
RUN apk add --update python make g++ gcc && rm -rf /var/cache/apk/*
# RUN npm install anvil-connect -g
COPY . /src
RUN bin/nv init
RUN npm install
RUN bower install

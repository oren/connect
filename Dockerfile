FROM mhart/alpine-iojs:2.1.0
WORKDIR /src
RUN apk add --update python make g++ gcc && rm -rf /var/cache/apk/*
RUN npm install anvil-connect -g
RUN nv init
COPY . /src
RUN npm install
RUN nv migrate
RUN nv signup
RUN nv assign orengolan@gmail.com authority

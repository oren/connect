---
title: Docker Install
---

## Requirements

* [docker](https://docs.docker.com/installation/mac)
* [docker compose](https://docs.docker.com/compose/install)

## Setup

Generate RSA keypair: (if you don't have them already)

    openssl genrsa -out private.pem 1024
    openssl req -new -x509 -key private.pem -out public.cer -days 1825
    cat private.pem > config/keys/private.pem
    cat public.pem > config/keys/public.pem
    rm private.pem public.pem

## Run

    docker-compose build
    docker-compose run app migrate
    docker-compose run app signup
    docker-compose run app assign <the email you used in the previous step> authority
    docker-compose run --service-ports app serve

FROM node:latest

WORKDIR /app

RUN apt-get update && apt-get install -y \
    software-properties-common \
    libzip-dev \
    zip \
    unzip \
    git \
    vim \
    iputils-ping \
    && rm -rf /var/lib/apt/lists/*
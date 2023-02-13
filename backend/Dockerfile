# Use the official PHP image as the base image
FROM php:7.4-fpm

# WORKDIR /app

# install dependencies
# RUN apk update && apk add --no-cache \
#     curl \
#     git \
#     libzip-dev \
#     zip \
#     unzip

RUN apt-get update && apt-get install -y zlib1g-dev g++ git libicu-dev zip libzip-dev zip \
    && docker-php-ext-install intl opcache pdo pdo_mysql \ 
    && pecl install apcu \
    && docker-php-ext-enable apcu \
    && docker-php-ext-configure zip \
    && docker-php-ext-install zip

WORKDIR /var/www/project/backend


# # install PHP extensions
# RUN docker-php-ext-install pdo pdo_mysql

# install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

#install symfony
RUN curl -sS https://get.symfony.com/cli/installer | bash
RUN mv /root/.symfony5/bin/symfony /usr/local/bin/symfony


# copy the application code
COPY . .

# install the dependencies
RUN composer install

# expose the port 9000
EXPOSE 9000

# CMD [ "php-fpm" ]
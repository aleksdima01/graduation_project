FROM php:8.2-fpm

COPY ./php.ini /usr/local/etc/php/conf.d/php-custom.ini

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

ENV COMPOSER_ALLOW_SUPERUSER 1

RUN apt-get update && apt-get install -y zip \
    unzip \
    build-essential \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    curl

RUN docker-php-ext-install mysqli pdo pdo_mysql

RUN curl -fsSL https://deb.nodesource.com/setup_22.x  | bash 
RUN apt-get install -y nodejs

# Add user for laravel application
WORKDIR /data/afisha
RUN groupadd -g 1000 www
RUN useradd -u 1000 -ms /bin/bash -g www www
# RUN chown -R www:www ../mysite.local

USER www

#VOLUME /data/mysite.local

EXPOSE 9000
CMD ["php-fpm"]

FROM php:8.2

WORKDIR /app

RUN apt-get update && \
    apt-get install -y \
        libpq-dev \
        && \
        docker-php-ext-install pdo pdo_pgsql

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

COPY . .

RUN composer install --optimize-autoloader --no-dev

RUN chmod +x /app/entrypoint.sh

EXPOSE 8000

ENTRYPOINT ["./entrypoint.sh"]
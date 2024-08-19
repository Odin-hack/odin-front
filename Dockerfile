# Этап 1: Сборка NGINX с модулем real_ip
FROM nginx:alpine as build

# Устанавливаем необходимые зависимости для сборки
RUN apk add --no-cache \
    gcc \
    libc-dev \
    make \
    pcre-dev \
    zlib-dev \
    openssl-dev \
    musl-dev \
    linux-headers \
    curl

# Скачиваем исходный код NGINX версии 1.27.0
WORKDIR /usr/local/src
RUN curl -O http://nginx.org/download/nginx-1.27.0.tar.gz && \
    tar -zxvf nginx-1.27.0.tar.gz && \
    cd nginx-1.27.0 && \
    ./configure --with-http_realip_module && \
    make && \
    make install

# Этап 2: Создание финального образа на основе официального NGINX
FROM nginx:alpine

# Копируем собранный NGINX с поддержкой real_ip
COPY --from=build /usr/local/nginx /usr/local/nginx

# Копируем конфигурационный файл NGINX
COPY nginx.conf /etc/nginx/nginx.conf

# Копируем статические файлы приложения
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

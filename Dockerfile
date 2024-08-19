# Этап 1: Сборка приложения
FROM node:18-alpine as build
WORKDIR /app

# Определяем переменные окружения для сборки
ARG GENERATE_SOURCEMAP
ARG REACT_APP_URL_SERVER
ARG REACT_APP_RENDER_DEBUG_CONSOLE

ENV GENERATE_SOURCEMAP=$GENERATE_SOURCEMAP
ENV REACT_APP_URL_SERVER=$REACT_APP_URL_SERVER
ENV REACT_APP_RENDER_DEBUG_CONSOLE=$REACT_APP_RENDER_DEBUG_CONSOLE

COPY package.json package-lock.json ./
RUN npm install react-scripts -g
RUN npm install
COPY . .
RUN npm run build

# Этап 2: Сборка NGINX с модулем ngx_http_realip_module
FROM alpine:3.18 AS nginx-build

# Установка зависимостей для сборки NGINX
RUN apk add --no-cache build-base pcre-dev zlib-dev openssl-dev wget

# Скачивание исходников NGINX
ARG NGINX_VERSION=1.24.0
WORKDIR /usr/local/src
RUN wget http://nginx.org/download/nginx-$NGINX_VERSION.tar.gz && \
    tar -zxvf nginx-$NGINX_VERSION.tar.gz && \
    cd nginx-$NGINX_VERSION && \
    ./configure --with-http_realip_module --with-http_ssl_module --with-http_v2_module --with-pcre --with-zlib=/usr/include && \
    make && \
    make install

# Этап 3: Финальный образ для сервировки React-приложения
FROM alpine:3.18

# Копируем NGINX из предыдущего этапа
COPY --from=nginx-build /usr/local/nginx /usr/local/nginx

# Копируем собранное приложение
COPY --from=build /app/build /usr/local/nginx/html

# Копируем конфигурацию NGINX
COPY nginx.conf /usr/local/nginx/conf/nginx.conf

# Открываем порты
EXPOSE 80

# Запуск NGINX
CMD ["/usr/local/nginx/sbin/nginx", "-g", "daemon off;"]

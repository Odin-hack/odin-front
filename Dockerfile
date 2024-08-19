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

# Этап 2: Сборка и установка NGINX
FROM alpine:latest AS nginx-build

# Устанавливаем необходимые зависимости для сборки NGINX
RUN apk add --no-cache \
    build-base \
    curl \
    pcre-dev \
    zlib-dev \
    openssl-dev \
    linux-headers

# Задаем версию NGINX
ARG NGINX_VERSION=1.27.0

# Загружаем и собираем NGINX с нужными модулями
WORKDIR /usr/local/src
RUN curl -O http://nginx.org/download/nginx-$NGINX_VERSION.tar.gz && \
    tar -zxvf nginx-$NGINX_VERSION.tar.gz && \
    cd nginx-$NGINX_VERSION && \
    ./configure --with-http_realip_module --with-http_ssl_module --with-http_v2_module --with-pcre --with-zlib=/usr/include --with-cc-opt="-O2 -fomit-frame-pointer -pipe" && \
    make && \
    make install

# Этап 3: Настройка и запуск NGINX
FROM alpine:latest
COPY --from=nginx-build /usr/local/nginx /usr/local/nginx

# Копируем статические файлы из сборки в директорию NGINX
COPY --from=build /app/build /usr/local/nginx/html
# Копируем конфигурационный файл NGINX
COPY nginx.conf /usr/local/nginx/conf/nginx.conf

# Открытие порта 80 для HTTP трафика
EXPOSE 80

# Запуск NGINX в фоновом режиме
CMD ["/usr/local/nginx/sbin/nginx", "-g", "daemon off;"]

# Этап 1: Сборка React-приложения
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

# Этап 2: Сборка NGINX с модулем real_ip
FROM nginx:alpine as nginx-build

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

# Этап 3: Создание финального образа на основе официального NGINX
FROM nginx:alpine

# Копируем собранный NGINX с поддержкой real_ip
COPY --from=nginx-build /usr/local/nginx /usr/local/nginx

# Копируем конфигурационный файл NGINX
COPY nginx.conf /etc/nginx/nginx.conf

# Копируем статические файлы приложения
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

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

# Этап 2: Настройка HAProxy для обслуживания статического контента
FROM haproxy:alpine
COPY --from=build /app/build /usr/share/haproxy/html
COPY haproxy.cfg /usr/local/etc/haproxy/haproxy.cfg

# Копируем файлы ошибок
COPY ./public/404.html /usr/share/haproxy/html/index.html
COPY ./public/50x.html /usr/share/haproxy/html/50x.html

EXPOSE 80
CMD ["haproxy", "-f", "/usr/local/etc/haproxy/haproxy.cfg"]

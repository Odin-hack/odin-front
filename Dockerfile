# Этап 1: Сборка приложения
# Используем официальный образ Node.js для сборки проекта
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
# Установка зависимостей проекта
RUN npm install react-scripts -g
RUN npm install
COPY . .
# Проверка установленных переменных окружения перед сборкой
RUN echo "GENERATE_SOURCEMAP=$GENERATE_SOURCEMAP" && \
    echo "REACT_APP_URL_SERVER=$REACT_APP_URL_SERVER" && \
    echo "REACT_APP_RENDER_DEBUG_CONSOLE=$REACT_APP_RENDER_DEBUG_CONSOLE"
# Сборка React-приложения
RUN npm run build

# Этап 2: Настройка Nginx для сервировки статического контента
FROM nginx:stable-alpine
# Копирование статических файлов из сборки в директорию Nginx
COPY --from=build /app/build /usr/share/nginx/html
# Копирование конфигурационного файла Nginx
COPY nginx.conf /etc/nginx/nginx.conf
# Открытие порта 80 для HTTP трафика
EXPOSE 80
# Запуск Nginx в фоновом режиме
CMD ["nginx", "-g", "daemon off;"]

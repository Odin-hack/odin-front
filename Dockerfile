# Используем официальный образ Node.js для запуска проекта
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь проект в контейнер
COPY . .

# Устанавливаем Nginx и Supervisord
RUN apk add --no-cache nginx supervisor

# Копируем конфигурацию Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Создаем директорию для хранения PID файла
RUN mkdir -p /run/nginx

# Создаем конфигурацию для Supervisord
RUN echo "[supervisord]\nnodaemon=true\n\n[program:nginx]\ncommand=/usr/sbin/nginx -g 'daemon off;'\n\n[program:node]\ncommand=npm start\n" > /etc/supervisord.conf

# Открываем порты
EXPOSE 80 3000

# Запуск Supervisord для управления Nginx и Node.js
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]

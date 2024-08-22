# Этап 1: Сборка приложения
FROM node:18-alpine as build
WORKDIR /app

# Копирование package.json и package-lock.json
COPY package.json package-lock.json ./

# Установка зависимостей
RUN npm install

# Открытие порта 3000 для HTTP трафика
EXPOSE 3000

CMD ["npm", "run", "start"]

# Используем базовый образ Node.js
FROM node:18-alpine

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Установка зависимостей
RUN npm install
RUN npm install -g react-scripts

# Копируем все остальные файлы проекта
COPY . .

# Открытие порта 3000 для HTTP трафика
EXPOSE 3000

# Команда для запуска приложения в режиме разработки
CMD ["npm", "run", "start"]

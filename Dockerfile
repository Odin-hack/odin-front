# Использование базового образа с Node.js
FROM node:18-alpine

# Установка рабочей директории
WORKDIR /app

# Копирование package.json и package-lock.json для установки зависимостей
COPY package.json package-lock.json ./

# Установка зависимостей
RUN npm install

# Копирование всего исходного кода в контейнер
COPY . .

# Открытие порта 3000 для доступа к приложению
EXPOSE 3000

# Команда для запуска приложения в режиме разработки
CMD ["npm", "run", "start"]

# Использование базового образа с Node.js
FROM node:18-alpine

# Установка рабочей директории
WORKDIR /app

# Копирование всего проекта в контейнер, включая package.json, node_modules и src
COPY . .

# Установка зависимостей
RUN npm install

# Открытие порта 3000 для доступа к приложению
EXPOSE 3000

# Установка переменной окружения для использования polling (если нужно для Docker)
ENV CHOKIDAR_USEPOLLING=true

# Команда для запуска приложения в режиме разработки
CMD ["npm", "run", "start"]

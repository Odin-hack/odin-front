# Этап 1: Сборка приложения
FROM node:18-alpine as build
WORKDIR /app

# Установка переменной окружения
ENV NODE_ENV=production

# Копирование package.json и package-lock.json
COPY package.json package-lock.json ./

# Установка зависимостей
RUN npm install

# Копирование исходного кода
COPY . .

# Сборка приложения
RUN npm run build

# Этап 2: Запуск приложения
FROM node:18-alpine
WORKDIR /app

# Копирование собранного приложения
COPY --from=build /app /app

# Установка необходимых зависимостей для запуска
RUN npm install -g serve

# Открытие порта 3000 для HTTP трафика
EXPOSE 3000

# Запуск React-приложения через serve
CMD ["serve", "-s", "dist", "-l", "3000"]

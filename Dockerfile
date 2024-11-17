# Этап 1: Сборка приложения
FROM node:18-alpine as build
WORKDIR /app

# Копирование package.json и yarn.lock
COPY package.json yarn.lock ./

# Установка зависимостей
RUN yarn install --frozen-lockfile

# Копирование исходного кода
COPY . .

# Сборка приложения
RUN yarn run build

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

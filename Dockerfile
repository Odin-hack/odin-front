# Этап 1: Сборка приложения
FROM node:18-alpine as build
WORKDIR /app

# Копирование package.json и package-lock.json
COPY package.json package-lock.json ./

# Установка зависимостей
RUN npm install
RUN nmp install react-scripts -g

# Объявление переменных окружения
ARG GENERATE_SOURCEMAP
ARG REACT_APP_URL_SERVER
ARG REACT_APP_RENDER_DEBUG_CONSOLE

# Эти переменные окружения будут доступны на этапе сборки
ENV GENERATE_SOURCEMAP=${GENERATE_SOURCEMAP}
ENV REACT_APP_URL_SERVER=${REACT_APP_URL_SERVER}
ENV REACT_APP_RENDER_DEBUG_CONSOLE=${REACT_APP_RENDER_DEBUG_CONSOLE}

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
CMD ["serve", "-s", "build", "-l", "3000", "--debug"]

# Dockerfile para el servidor (Express)
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

# Instala nodemon globalmente
RUN npm install -g nodemon

# Usa nodemon para iniciar la aplicación
CMD ["nodemon", "app.js"]

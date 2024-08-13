# Usa la imagen oficial de Node.js como base
FROM node:20-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Instala pnpm globalmente
RUN npm install -g pnpm

# Instala las dependencias
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Expone el puerto que usará Nuxt
EXPOSE 3000

# Comando para correr la aplicación en modo de desarrollo
CMD ["pnpm", "dev"]

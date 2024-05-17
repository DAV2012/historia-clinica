# Etapa de construcción
FROM node:18.15.0 as build

WORKDIR /app

COPY package*.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

# Etapa de producción
FROM nginx:1.25.2-alpine
COPY --from=build /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
# setup stage
FROM node:alpine as setup-stage
WORKDIR /app
COPY package*.json ./
RUN yarn
COPY . .

# build stage
FROM setup-stage as build-stage
RUN apk add git
RUN yarn build

# production stage
FROM nginx:alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
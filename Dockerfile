FROM node:18-bullseye as build

WORKDIR /usr/src/memo-ui-app

COPY package*.json ./

RUN npm ci

COPY . .

ARG REACT_APP_BACKEND_URL

RUN sh create-env-file.sh REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL

RUN npm run build

FROM nginx:1.22-bullseye

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build usr/src/memo-ui-app/build/ /usr/share/nginx/html

EXPOSE 80


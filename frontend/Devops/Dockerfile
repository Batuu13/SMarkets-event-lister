FROM node:11.14.0-alpine AS build
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./App/package.json /usr/src/app

RUN npm install

COPY ./App/ /usr/src/app

RUN rm -rf build && npm run build

FROM nginx:1.15.2-alpine

COPY --from=build /usr/src/app/build /usr/share/nginx/html

COPY ./Devops/nginx/nginx.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx","-g","daemon off;"]
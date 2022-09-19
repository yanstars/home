FROM node:16-alpine as build-stage
WORKDIR /app
COPY . .
RUN  npm i pnpm -g 
RUN  pnpm i
RUN  pnpm build

FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/dist /app-home
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]




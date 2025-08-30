# syntax=docker/dockerfile:1.7
FROM node:20.19.0 AS builder
WORKDIR /app
COPY apps/frontend/package*.json apps/frontend/
WORKDIR /app/apps/frontend
RUN npm ci --prefer-offline --no-audit
COPY apps/frontend/ .
RUN npm run build

FROM nginx:1.27-alpine
COPY --from=builder /app/apps/frontend/dist/frontend/browser/ /usr/share/nginx/html/
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

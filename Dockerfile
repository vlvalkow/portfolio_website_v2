FROM node:16.19.0-alpine AS development

WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000

CMD npm run dev

FROM node:16.19.0-alpine AS production
RUN apk add zip
WORKDIR /app
COPY . .
CMD .pipeline/production.sh

FROM node:latest

RUN mkdir -p /srv
WORKDIR /srv

COPY . .

RUN npm install
RUN npm run build

EXPOSE 8081

CMD ["npm", "start"]
FROM node:20-alpine

WORKDIR /usr/api/src

COPY package*.json /usr/api

RUN npm install

COPY ./src .

COPY wait-for-it.sh /usr/api/src/wait-for-it.sh
RUN chmod +x /usr/api/src/wait-for-it.sh

EXPOSE 3000

CMD ["./wait-for-it.sh", "db:3306", "--", "npm", "start"]


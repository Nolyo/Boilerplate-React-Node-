FROM node:18

WORKDIR /app

RUN npm install -g nodemon

RUN chmod -R 777 /app

CMD ["sh", "-c", "npm install && npm run dev"]
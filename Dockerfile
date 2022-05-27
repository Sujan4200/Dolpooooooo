FROM node:10.19.0 
ENV NODE_ENV=development

WORKDIR /app

COPY package.json ./


COPY package-lock.json ./

RUN npm install

COPY . . /app/


EXPOSE 3000

CMD ["npm", "start" ]



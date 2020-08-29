FROM node:10.16.2

WORKDIR /usr/src/app

COPY package*.json ./
RUN CI=true
RUN yarn

COPY . .

EXPOSE 3000
CMD ["yarn", "start"]
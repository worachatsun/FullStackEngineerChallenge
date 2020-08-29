FROM node:10.16.2

RUN mkdir -p /opt/app
WORKDIR /opt
COPY package.json package-lock.json* ./
RUN yarn && yarn cache clean
ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY . /opt/app

EXPOSE 3001

CMD [ "yarn", "start:dev" ]
FROM node

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package.json /usr/src/app/

RUN npm install -g npm@7.15.1
RUN npm i
RUN npm uninstall postcss
RUN npm install postcss --save-dev

COPY . /usr/src/app/
EXPOSE 3000

CMD ["npm","start"]
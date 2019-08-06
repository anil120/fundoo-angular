FROM node:9
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/package.json
RUN npm install 
RUN npm install -g @angular/cli@7.3.1
COPY . /usr/src/app

CMD ng serve --host 0.0.0.0

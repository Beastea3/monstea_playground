FROM node:11
# Create app Directory
WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn install
RUN yarn install -g gatsby
COPY . .
EXPOSE 8000
CMD [ "gatsby", "develop" ]
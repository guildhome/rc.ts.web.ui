FROM node:8
RUN mkdir /usr/guildhome-ui
WORKDIR /usr/guildhome-ui
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
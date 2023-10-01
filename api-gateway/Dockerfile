FROM node
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 9090
CMD [ "node", "index.js" ]
FROM node:20-alpine AS build
WORKDIR /usr/mynodeapp
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]

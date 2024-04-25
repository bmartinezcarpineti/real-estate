FROM node:20

WORKDIR /app

ARG VITE_API_URL

ENV VITE_API_URL=$VITE_API_URL

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
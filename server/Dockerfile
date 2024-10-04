FROM node:21

WORKDIR /expressapp

COPY package* .

RUN npm install

COPY . .

# Set the DATABASE_URL environment variable from the .env file
ENV MONGO_URL=${MONGO_URL}

CMD ["npm", "run", "start"]
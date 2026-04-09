FROM cypress/included:13.7.0

WORKDIR /app
COPY . .

RUN npm install

CMD ["npx", "cypress", "run"]
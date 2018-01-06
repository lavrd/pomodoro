from node:alpine

workdir /pomodoro

copy package.json .

run npm install

copy . .

EXPOSE 3000

entrypoint ["npm", "start"]

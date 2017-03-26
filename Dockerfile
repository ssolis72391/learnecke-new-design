FROM tiangolo/node-frontend:10

WORKDIR /app

COPY package*.json /app/
COPY start.sh /start.sh

RUN npm install -g serve && npm install

COPY ./ /app/

ARG FRONTEND_ENV=production

#ENV VUE_APP_ENV=${FRONTEND_ENV}

# Comment out the next line to disable tests
#RUN npm run test:unit

RUN npm run build

EXPOSE 8080
CMD ["/start.sh"]
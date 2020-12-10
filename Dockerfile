FROM node:14.15.1

WORKDIR /redux-entity-framework/front-end

COPY ./front-end .

RUN yarn
RUN yarn build

WORKDIR /redux-entity-framework/back-end

COPY ./back-end .

RUN yarn

CMD [ "yarn", "start" ]
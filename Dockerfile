FROM node:18-alpine as BUILD_IMAGE

COPY . /app
WORKDIR /app


RUN yarn install --frozen-lockfile --ignore-scripts
RUN yarn build

# Production
FROM node:18-alpine
COPY --from=BUILD_IMAGE /app/next.config.js ./app/next.config.js
COPY --from=BUILD_IMAGE /app/public ./app/public
COPY --from=BUILD_IMAGE /app/.next ./app/.next

COPY --from=BUILD_IMAGE /app/package.json ./app/package.json
#COPY --from=BUILD_IMAGE /app/yarn.lock ./app/yarn.lock

WORKDIR /app
ENV NODE_ENV=production
RUN yarn install --production=true --frozen-lockfile --ignore-scripts

EXPOSE 80
RUN npx next telemetry disable
CMD ["yarn", "start"]
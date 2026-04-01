FROM node:22-alpine
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY apps/web/package.json apps/web/package.json
COPY apps/api/package.json apps/api/package.json
COPY apps/realtime/package.json apps/realtime/package.json
COPY packages/shared/package.json packages/shared/package.json
RUN npm config set fetch-retries 5 \
  && npm config set fetch-retry-mintimeout 20000 \
  && npm config set fetch-retry-maxtimeout 120000 \
  && npm config set registry https://registry.npmjs.org/ \
  && npm ci --no-audit --prefer-online
COPY . .
WORKDIR /app/apps/api
EXPOSE 4000
CMD ["npm", "run", "dev"]

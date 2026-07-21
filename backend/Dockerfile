FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json .
COPY tsconfig.json nest-cli.json .
COPY src src
RUN npm ci
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
EXPOSE 3333
CMD ["node", "dist/main.js"]

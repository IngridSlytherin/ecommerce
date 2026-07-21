FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json .
COPY public public
COPY app app
COPY components components
COPY lib lib
COPY store store
COPY tsconfig.json next.config.ts postcss.config.js tailwind.config.ts ./
RUN npm ci
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder /app/tsconfig.json ./tsconfig.json
COPY --from=builder /app/app ./app
COPY --from=builder /app/components ./components
COPY --from=builder /app/lib ./lib
COPY --from=builder /app/store ./store
EXPOSE 3000
CMD ["npm", "start"]

# syntax=docker/dockerfile:1

FROM node:22-alpine AS base
WORKDIR /app

# Install dependencies separately for better caching
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

FROM node:22-alpine AS build
WORKDIR /app
COPY . ./
RUN npm ci && npm run build

FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=8080

# Bring in only what we need at runtime
COPY --from=build /app/dist ./dist
COPY --from=build /app/attached_assets ./attached_assets
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

EXPOSE 8080
CMD ["node", "dist/index.js"]


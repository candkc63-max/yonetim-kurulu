FROM node:20-bookworm-slim AS base

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

WORKDIR /app

# Puppeteer runtime dependencies (fixes libnss3.so and related shared lib errors)
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    dumb-init \
    chromium \
    libnss3 \
    libatk-bridge2.0-0 \
    libgtk-3-0 \
    libxss1 \
    libasound2 \
    libxshmfence1 \
    libgbm1 \
    libdrm2 \
    fonts-liberation \
    xdg-utils \
  && rm -rf /var/lib/apt/lists/*

# Install deps separately for better cache usage
COPY package*.json ./
RUN if [ -f package-lock.json ]; then npm ci --omit=dev; else npm install --omit=dev; fi

# Copy app
COPY . .

ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

EXPOSE 3000

# Load every env var from .env.local before booting the app.
CMD ["dumb-init", "bash", "-lc", "set -a; [ -f .env.local ] && source .env.local; set +a; npm run start"]

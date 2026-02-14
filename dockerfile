FROM node:22-slim AS build-stage

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

RUN npm install -g @angular/cli@21
# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the project files
COPY . .

# Build the application for production
RUN npx ng build --configuration production && \
    echo "=== Build output structure ===" && \
    find /app/dist -type f | head -30

# Serve Stage
# Use nginx:alpine for a lightweight production image
FROM nginx:1.29-alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from build-stage to nginx serve directory
# The application builder outputs to dist/ with our config (base: "dist", browser: "")
COPY --from=build-stage /app/dist/ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

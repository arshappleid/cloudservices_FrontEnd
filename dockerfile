FROM node:18-buster-slim as build-stage

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

RUN npm install -g @angular/cli@15.2.0
# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the project files
COPY . .

# Build the application for production
RUN npm run build --prod

# Serve Stage
# Use nginx:alpine for a lightweight production image
FROM nginx:alpine

# Copy built assets from build-stage to nginx serve directory
COPY --from=build-stage /app/src/assets /usr/share/nginx/html/assets
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

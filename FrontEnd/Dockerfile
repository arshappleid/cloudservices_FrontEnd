FROM node:18.4.0-alpine
ENV NODE_ENV production
WORKDIR /app
COPY --chown=node:node ./ClientApp/package*.json /app
RUN npm install --legacy-peer-deps
## Need to figure out if to install angular cli globally or in the app
RUN npm install @angular/cli@14.2.10 
COPY --chown=node:node ./ClientApp app/
USER node


EXPOSE 4000
CMD ["npm", "run","build","--prod;"]

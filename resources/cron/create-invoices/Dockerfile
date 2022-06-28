# Use the Node version that matches the version you have installed locally
FROM node:16-slim
# Set version
ENV VERSION x.y
# Set to production
ENV NODE_ENV=production
# Create app directory, in which the service is built
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# Copy source and service
COPY components/cron/create-invoices ./
# Install app dependencies
RUN npm install
EXPOSE 3000
# Run as node user
USER node
# Run the cap-service
CMD [ "npm", "start" ]
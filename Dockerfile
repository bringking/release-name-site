FROM node:10-alpine

# Define working directory
WORKDIR /var/www/app

ADD yarn.lock /var/www/app/yarn.lock
ADD package.json /var/www/app/package.json

# Run the npm install
RUN yarn

# Add files
ADD . /var/www/app

# Expose port
EXPOSE 3000

# Start the server
CMD NODE_ENV=production npm run start
FROM node:18-alpine
# Add a work directory
WORKDIR /var/www/project/frontend
# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install
# Copy app files
COPY . .
# Expose port
EXPOSE 3000
# Start the app
CMD [ "npm", "run","dev" ]


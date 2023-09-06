# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app/client

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React.js application for production
RUN npm run build

# Expose the port your React.js application will run on (usually 80)
EXPOSE 3000

# Start the React.js application
CMD ["npm", "start"]


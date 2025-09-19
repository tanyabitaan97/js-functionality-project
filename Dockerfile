# Step 1: Use Node.js base image
FROM node:18

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy project files
COPY . .

# Step 5: Build project (if using bundler)
RUN npm run build

# Step 6: Install lightweight static server
RUN npm install -g serve

# Step 7: Expose port
EXPOSE 3000

# Step 8: Run static server serving build folder
CMD ["serve", "-s", "build", "-l", "3000"]

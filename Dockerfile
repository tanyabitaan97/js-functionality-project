# Step 1: Use Node.js base image
FROM node:18

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy project files
COPY . .

# Step 4: Install lightweight static server
RUN npm install -g serve

# Step 5: Expose port
EXPOSE 3000

# Step 6: Serve current directory
CMD ["serve", "-s", ".", "-l", "3000"]

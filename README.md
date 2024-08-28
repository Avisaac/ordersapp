# Photo Order Backend

This is a Node.js/TypeScript backend for a photo ordering system. It provides endpoints for fetching random photo URLs from Pixabay and managing orders for users.

## Features

- Fetch random photo URLs from Pixabay API
- Create new orders
- Retrieve orders for a specific user

## Prerequisites

- Node.js (v14 or later)
- MongoDB

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/Avisaac/ordersapp.git
   cd photo-order-backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```
   PIXABAY_API_KEY=your_pixabay_api_key
   MONGODB_URI=your_mongodb_connection_string
   PORT=3000
   NODE_ENV=development
   LOG_LEVEL=info
   ```

## Usage

   For development with hot-reloading:
   ```
   npm run dev
   ```

1. Build the project:
   ```
   npm run build
   ```

2. Start the server:
   ```
   npm start
   ```


## API Endpoints

- `GET /api/photos/random/:count`: Get a list of random photo URLs
- `POST /api/orders`: Create a new order
- `GET /api/orders/user/:user`: Get all orders for a specific user with user name

## Testing

curls for testing
```
# 1. Get random photo URLs
curl -X GET "http://localhost:3000/api/photos/random/5"

# 2. Create a new order
# Replace the values in the JSON with your actual test data
curl -X POST "http://localhost:3000/api/orders" \
     -H "Content-Type: application/json" \
     -d '{
       "email": "test@example.com",
       "fullName": "John Doe",
       "fullAddress": "123 Test St, Test City, 12345",
       "imageUrls": ["https://example.com/image1.jpg", "https://example.com/image2.jpg"],
       "frameColor": "black",
       "user": "johndoe123"
     }'

# 3. Get orders for a specific user
# Replace 'johndoe123' with the actual user identifier you used when creating an order
curl -X GET "http://localhost:3000/api/orders/user/johndoe123"
```

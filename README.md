# Chat Application

A real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.IO for instant messaging.

## Live Demo

- **Frontend**: https://chat-app-frontend-ecru-ten.vercel.app/
- **Backend**: Hosted on Render (Note: May take ~1 minute to start due to free tier cold starts)

## Features

- **Real-time Messaging**: Instant message delivery using Socket.IO
- **Chat Rooms**: Create and join multiple chat rooms
- **User Authentication**: Register and login functionality
- **Live Updates**: Messages and room lists update in real-time across all connected clients

## Tech Stack

### Backend
- **Node.js & Express**: REST API server
- **Socket.IO**: Real-time bidirectional communication
- **MongoDB & Mongoose**: Database and ODM
- **CORS**: Cross-origin request handling

### Frontend
- **React 19**: UI framework
- **Vite**: Build tool and dev server
- **React Router**: Client-side routing
- **Socket.IO Client**: Real-time communication
- **Axios**: HTTP client
- **Tailwind CSS**: Styling

## Project Structure

```
chatapp/
├── server/                 # Backend
│   ├── config/            # Database configuration
│   ├── controllers/        # Route handlers
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API endpoints
│   ├── socket/            # Socket.IO events
│   ├── server.js          # Server entry point
│   └── package.json
└── client/                # Frontend
    ├── src/
    │   ├── pages/         # Page components
    │   ├── components/    # Reusable components
    │   ├── services/      # API integration
    │   ├── App.jsx
    │   └── main.jsx
    ├── public/
    ├── index.html
    └── package.json
```

## Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB
- pnpm (or npm/yarn)

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Create a `.env` file with:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. Start the development server:
   ```bash
   pnpm run dev
   ```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm run dev
   ```

The frontend will run on `http://localhost:5173`

## Available Scripts

### Server
- `pnpm run dev`: Start development server with hot reload
- `pnpm start`: Start production server

### Client
- `pnpm run dev`: Start development server
- `pnpm run build`: Build for production
- `pnpm run lint`: Run ESLint
- `pnpm run preview`: Preview production build locally

## API Endpoints

- `POST /api/auth/register`: User registration
- `POST /api/auth/login`: User login
- `GET /api/rooms`: Get all chat rooms
- `POST /api/rooms`: Create a new room
- `GET /api/messages/:roomId`: Get messages for a room
- `POST /api/messages`: Send a message

## Deployment

- **Frontend**: Deployed on Vercel
- **Backend**: Deployed on Render

The application uses environment variables for API configuration to seamlessly switch between local development and production deployments.

## Socket.IO Events

Real-time events are handled through Socket.IO for instant message delivery and room updates across all connected clients.

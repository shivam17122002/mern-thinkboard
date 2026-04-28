# MERN ThinkBoard

ThinkBoard is a full-stack note-taking app built with the MERN stack. It lets users create, read, update, and delete notes from a React frontend backed by an Express and MongoDB API. The frontend also uses Clerk for sign-in, sign-out, and showing the signed-in user's profile image, name, and email in the navbar.

## Features

- Create, view, edit, and delete notes
- Clerk authentication UI on the frontend
- Signed-in user profile display in the navbar
- MongoDB storage with Mongoose models
- Express REST API for notes
- Upstash Redis rate limiting
- React 19 frontend built with Vite
- Tailwind CSS and DaisyUI styling
- Toast notifications with React Hot Toast
- Render-ready production setup

## Tech Stack

### Frontend

- React 19
- Vite
- React Router
- Clerk React
- Axios
- Tailwind CSS
- DaisyUI
- Lucide React
- React Hot Toast

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- Upstash Redis
- CORS
- dotenv

## Project Structure

```txt
mern-thinkboard/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js
│   │   │   └── upstash.js
│   │   ├── controllers/
│   │   │   └── notesControllers.js
│   │   ├── middleware/
│   │   │   └── rateLimiter.js
│   │   ├── models/
│   │   │   └── notesModels.js
│   │   ├── routes/
│   │   │   └── notesRoutes.js
│   │   └── server.js
│   ├── .env
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── NoteCard.jsx
│   │   │   ├── NotesNotFound.jsx
│   │   │   └── RateLimitedUi.jsx
│   │   ├── pages/
│   │   │   ├── Create.jsx
│   │   │   ├── Home.jsx
│   │   │   └── NoteDetailed.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env
│   └── package.json
├── render.yaml
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- MongoDB Atlas database or local MongoDB instance
- Upstash Redis database for rate limiting
- Clerk application for frontend authentication

### Installation

Clone the project and install dependencies:

```bash
git clone https://github.com/shivam17122002/mern-thinkboard.git
cd mern-thinkboard
npm install
npm install --prefix backend
npm install --prefix frontend
```

## Environment Variables

Create `backend/.env`:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_redis_rest_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token
NODE_ENV=development
```

Create `frontend/.env`:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

Do not commit `.env` files. Keep real database, Redis, and Clerk credentials private.

## Development

Run the backend:

```bash
npm run dev --prefix backend
```

Run the frontend in another terminal:

```bash
npm run dev --prefix frontend
```

Default local URLs:

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5001`
- Notes API: `http://localhost:5001/api/notes`

## Production Build

From the project root:

```bash
npm run build
```

This installs backend and frontend dependencies, then builds the frontend into `frontend/dist`.

Start the production server:

```bash
npm start
```

In production, the Express backend serves the built frontend from `frontend/dist`.

## API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get one note by ID |
| POST | `/api/notes` | Create a note |
| PUT | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

Example note body:

```json
{
  "title": "My note title",
  "content": "My note content"
}
```

## Clerk Authentication

The frontend uses `@clerk/react` in `frontend/src/main.jsx` and `frontend/src/components/Navbar.jsx`.

Current Clerk behavior:

- Shows a login button when signed out
- Shows profile image, name, email, and logout button when signed in
- Uses `VITE_CLERK_PUBLISHABLE_KEY` from `frontend/.env`

Important: Clerk currently controls frontend sign-in UI. The existing backend notes API is still public and stores notes globally. To make notes private per user, add Clerk token verification on the backend and store the Clerk `userId` on each note.

Recommended per-user note model change:

```js
{
  title: String,
  content: String,
  userId: String
}
```

Then filter note queries by the authenticated Clerk user ID:

```js
Notes.find({ userId: req.auth.userId });
```

## Rate Limiting

The backend uses Upstash Redis through `backend/src/middleware/rateLimiter.js`. If Redis credentials are missing or invalid, API requests may fail depending on the middleware behavior.

## Deployment

This project includes `render.yaml` for Render deployment.

Before deploying:

- Push the project to GitHub
- Create a MongoDB Atlas database
- Create an Upstash Redis database
- Create a Clerk application
- Add the required environment variables in Render
- Set `NODE_ENV=production`

Required Render environment variables:

```env
MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_redis_rest_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
NODE_ENV=production
```

## Troubleshooting

| Issue | Fix |
| --- | --- |
| Clerk login does not load | Check `frontend/.env` and make sure `VITE_CLERK_PUBLISHABLE_KEY` is set |
| `SignedIn` or `SignedOut` export error | Use Clerk's `Show` component with this installed Clerk version |
| MongoDB connection fails | Check `MONGO_URI` and MongoDB Atlas network access |
| Too many requests error | Wait briefly or check Upstash rate limit settings |
| Frontend cannot reach backend | Make sure backend is running on port `5001` |
| Production page refresh fails | Confirm Express is serving `frontend/dist/index.html` in production |

## License

ISC

## Author

Created by [Shivam Pandey](https://github.com/shivam17122002)

# MERN ThinkBoard

A full-stack note-taking application built with **MongoDB, Express, React, and Node.js (MERN)** stack, featuring rate limiting with Upstash Redis.

## 📋 Features

- ✅ Create, read, update, and delete notes
- ✅ Rate limiting to prevent abuse (50 requests per 20 seconds)
- ✅ Responsive design with Tailwind CSS
- ✅ Production-ready deployment configuration
- ✅ RESTful API backend
- ✅ Modern React frontend with Vite

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Upstash Redis** - Rate limiting
- **CORS** - Cross-origin resource sharing

### Frontend
- **React 19** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **DaisyUI** - UI components
- **Axios** - HTTP client
- **React Router** - Client-side routing
- **React Hot Toast** - Notifications

## 📁 Project Structure

```
MERN-THINKBOARD/
├── backend/
│   ├── src/
│   │   ├── server.js              # Main server file
│   │   ├── config/
│   │   │   ├── db.js              # MongoDB connection
│   │   │   └── upstash.js         # Redis rate limiter
│   │   ├── controllers/
│   │   │   └── notesControllers.js
│   │   ├── models/
│   │   │   └── notesModels.js
│   │   ├── routes/
│   │   │   └── notesRoutes.js
│   │   └── middleware/
│   │       └── rateLimiter.js
│   ├── .env                       # Environment variables
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Create.jsx
│   │   │   └── NoteDetailed.jsx
│   │   └── components/
│   │       ├── Navbar.jsx
│   │       ├── NoteCard.jsx
│   │       ├── NotesNotFound.jsx
│   │       └── RateLimitedUi.jsx
│   └── package.json
├── render.yaml                    # Render deployment config
└── package.json                   # Root package.json

```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB (local or MongoDB Atlas)
- Upstash Redis account (optional, for production)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/shivam17122002/mern-thinkboard.git
cd MERN-THINKBOARD
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the `backend/` directory:

```env
PORT=5001
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/mern-thinkboard
UPSTASH_REDIS_REST_URL=https://your-instance.upstash.io
UPSTASH_REDIS_REST_TOKEN=your-token-here
NODE_ENV=development
```

### Development

Run the entire project in development mode:

```bash
# Terminal 1: Backend
npm run dev --prefix backend

# Terminal 2: Frontend
npm run dev --prefix frontend
```

- Backend: http://localhost:5001
- Frontend: http://localhost:5173

### Production Build

```bash
npm run build
```

This builds the frontend and prepares for deployment.

### Start Production Server

```bash
npm start
```

## 📝 API Endpoints

### Notes API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all notes |
| POST | `/api/notes` | Create a new note |
| GET | `/api/notes/:id` | Get a specific note |
| PUT | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

## 🌐 Deployment on Render

### Step 1: Prepare MongoDB
1. Go to [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get your connection string

### Step 2: Set up Upstash (Optional)
1. Visit [upstash.com](https://upstash.com)
2. Create a Redis database
3. Copy REST URL and token

### Step 3: Deploy on Render
1. Push your code to GitHub
2. Go to [render.com](https://render.com)
3. Create a new Web Service
4. Connect your GitHub repository
5. Add environment variables:
   - `MONGO_URI` - MongoDB Atlas connection
   - `UPSTASH_REDIS_REST_URL` - Upstash Redis URL
   - `UPSTASH_REDIS_REST_TOKEN` - Upstash Redis Token
   - `NODE_ENV` - `production`

6. Deploy!

Your app will be live at: `https://your-app-name.onrender.com`

## ⚠️ Important Notes

- **Never commit `.env` file** - Add it to `.gitignore`
- **Rate Limiting**: Backend enforces the limit configured in `backend/src/config/upstash.js`
- **CORS**: In production, only serves the built frontend
- **Free Tier**: Render's free tier may have limitations; upgrade for production apps

## 📖 Documentation

- [MongoDB Docs](https://docs.mongodb.com/)
- [Express Docs](https://expressjs.com/)
- [React Docs](https://react.dev/)
- [Vite Docs](https://vite.dev/)
- [Render Docs](https://render.com/docs/)

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| MongoDB connection fails | Check `MONGO_URI` and whitelist IP on MongoDB Atlas |
| Rate limiter not working | Verify Upstash credentials are set |
| Frontend not loading | Run `npm run build --prefix frontend` |
| Build fails on Render | Check logs in Render dashboard |

## 📄 License

ISC

## 👤 Author

Created by [Shivam Pandey](https://github.com/shivam17122002)

---

**Ready to deploy? Follow the [Deployment on Render](#-deployment-on-render) section above!** 🚀

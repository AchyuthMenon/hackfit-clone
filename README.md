# HackFit 4.0 - MERN Website Clone

A high-performance, secure, and visually stunning Full-Stack clone of the HackFit 4.0 landing page. This project features a neo-digital cyberpunk aesthetic with a robust team registration system and interactive UI components.

## 🚀 Live Demo
- **Frontend**: [https://hackfit-clone.vercel.app/](https://hackfit-clone.vercel.app/)
- **Backend API**: [https://hackfit-clone.onrender.com/](https://hackfit-clone.onrender.com/)

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: React.js (built with Vite)
- **Styling**: Vanilla CSS (Custom Neo-Digital & Glassmorphism design)
- **Animations**: Framer Motion (Transitions, Accordions, Modals)
- **State/Requests**: Axios
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB Atlas (with Mongoose ODM)
- **Security**: 
  - Custom NoSQL Injection Protection
  - XSS (Cross-Site Scripting) Sanitization
  - Strict Schema Validation & Duplicate Handling
- **Environment**: Dotenv for secure configuration

---

## ✨ Key Features

- **Premium UI**: Cyberpunk-themed responsiveness with interactive background elements and glass-morphic panels.
- **Secure Registration**: Advanced backend validation for team sizes (max 5), case-insensitive unique team names, and email format verification.
- **FAQ MATRIX**: Fully interactive FAQ section with smooth animations, synced from the original 4.0 site.
- **Fail-Safe API**: Robust error handling that provides human-readable feedback to users while maintaining server logs.

---

## 📦 Project Structure

```text
├── client/          # Vite + React Frontend
│   ├── src/         # Main source code
│   └── public/      # Static assets
├── server/          # Node.js + Express Backend
│   ├── models/      # Mongoose Schemas
│   └── routes/      # Express API Endpoints
└── README.md        # You are here!
```

---

## 🛠️ Local Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/AchyuthMenon/hackfit-clone.git
   ```

2. **Frontend Setup**
   ```bash
   cd client
   npm install
   npm run dev
   ```

3. **Backend Setup**
   ```bash
   cd server
   npm install
   # Create a .env file with your MONGO_URI
   npm run dev
   ```

---

## 🤝 Contribution
Created by **Achyuth Menon** for HackFit. Powered by modern web technologies.

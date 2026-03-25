# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.






# 🎬 YouTube Clone (Full Stack Project)

This is a full-stack YouTube Clone built using the MERN stack (MongoDB, Express, React, Node.js).  
The project replicates core YouTube functionalities including video browsing, playback, authentication, comments, and filtering.

---

## 🚀 Features

### 👤 Authentication
- User Sign Up / Login
- Google Authentication (Firebase)
- Secure JWT Authentication (cookies based)

### 🎥 Video Features
- Watch videos with HD player
- Hover preview (thumbnail → video autoplay)
- Like / Dislike system (only one action per user)
- Views count

### 💬 Comments System
- Add comment
- Edit comment (only owner)
- Delete comment (only owner)
- User profile (name + photo)
- Time ago display

### 🔍 Search & Filter
- Search videos by title
- Filter by category (Music, Gaming, News, etc.)

### 📱 Responsive UI
- Mobile friendly layout
- Bottom navigation (YouTube style)
- Sidebar navigation
- Profile section (mobile + desktop)

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Redux Toolkit
- React Router
- Axios
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

### Other Tools
- Firebase (Google Auth)
- Cloudinary / External video URLs

---

## 📂 Project Structure

FrontEnd/
├── components/
├── pages/
├── redux/
├── utils/

BackEnd/
├── controllers/
├── models/
├── routes/
├── middleware/


## Install dependencies
BackEnd

cd BackEnd
npm install


FrontEnd

cd FrontEnd
npm install

## Run Project

# Start backend
npm run dev

# Start frontend
npm run dev



🔗 **GitHub Repository:** https://github.com/alpana15-mix/YOU-TUBE.git
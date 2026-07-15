# 🎓 Learning Management System (LMS)

A full-stack Learning Management System (LMS) built with the MERN stack that enables students to enroll in courses, instructors to manage content, and secure online payments for premium courses.

> **Live Demo**
>
> - 🌐 **Frontend:** [https://your-frontend-url.vercel.app](https://lms-frontend-jet-beta.vercel.app/)
> - 🚀 **Backend API:** https://your-backend-url.vercel.app

---

## 📖 Overview

This LMS platform provides a seamless learning experience by allowing users to browse courses, purchase premium content, and track their learning progress. The application follows a modern client-server architecture with separate frontend and backend deployments.

---

## ✨ Features

### 👨‍🎓 Student

- User registration & authentication
- Browse available courses
- Course enrollment
- Video lecture access
- Track learning progress
- Responsive UI

### 👨‍🏫 Instructor

- Create and manage courses
- Upload course content
- Edit/Delete courses
- View enrolled students

### 💳 Payments

- Secure Stripe payment integration
- Premium course purchase
- Payment verification

### 🔐 Authentication

- Secure authentication
- Protected routes
- JWT-based authorization
- Role-based access control

---

## 🛠 Tech Stack

### Frontend

- React.js
- React Router
- Tailwind CSS
- Axios
- React Hot Toast

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Stripe
- Cloudinary
- Multer

### Deployment

- Vercel (Frontend)
- Vercel (Backend)

---

## 📂 Project Structure

```
lms/
│
├── client/        # React Frontend
│
├── server/        # Express Backend API
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/your-username/lms.git
cd lms
```

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## Backend Setup

```bash
cd server
npm install
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

## 🔑 Environment Variables

### Client (.env)

```env
VITE_API_URL=your_backend_url
```

### Server (.env)

```env
PORT=5000

MONGODB_URI=

JWT_SECRET=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

CLIENT_URL=http://localhost:5173
```

---

## 📡 API

Base URL

```
https://your-backend-url.vercel.app/api
```

Example endpoints

```
POST   /auth/register
POST   /auth/login

GET    /courses
POST   /courses

POST   /payments/create-checkout-session

GET    /users/profile
```

---

## 🚀 Deployment

Both frontend and backend are deployed independently on **Vercel**.

| Service | Deployment |
|----------|------------|
| Frontend | Vercel |
| Backend API | Vercel |

---

## 📸 Screenshots

> Add screenshots here.

```
Home Page

Course Details

Student Dashboard

Instructor Dashboard

Checkout Page
```

---

## 🔮 Future Improvements

- Quiz System
- Certificates
- Course Reviews
- Wishlist
- Notifications
- Discussion Forum
- Dark Mode
- Admin Dashboard
- Analytics Dashboard

---

## 👨‍💻 Author

**Vipin Vishwakarma**

- GitHub: https://github.com/vipinishere
- LinkedIn: https://linkedin.com/in/vipinishere

---

## 📄 License

This project is open source and available under the MIT License.

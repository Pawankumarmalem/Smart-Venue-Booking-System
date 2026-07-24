# Smart Venue Booking System

A full-stack web application that enables users to browse venues, register, log in securely, and book venues online. The project is built using React, Spring Boot, JWT authentication, and TiDB, and is deployed on Vercel and Render.

## 🚀 Live Demo

- Link : https://smartvenueproject.vercel.app

## ✨ Features

- User Registration
- Secure Login using JWT Authentication
- Browse Available Venues
- Book Venues
- Responsive User Interface
- RESTful APIs
- Cloud Database (TiDB)
- Cloud Deployment

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- Axios
- React Router
- CSS

### Backend
- Spring Boot
- Spring Security
- JWT Authentication
- Spring Data JPA
- Maven

### Database
- TiDB Cloud (MySQL Compatible)

### Deployment
- Vercel (Frontend)
- Render (Backend)

## 📂 Project Structure

```
Smart-Venue-Booking-System
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   └── smartvenue
│       ├── controller
│       ├── service
│       ├── repository
│       ├── entity
│       ├── security
│       └── SmartvenueApplication.java
│
└── README.md
```

## ⚙ Installation

### Clone the repository

```bash
git clone https://github.com/Pawankumarmalem/Smart-Venue-Booking-System.git
```

### Backend

```bash
cd backend/smartvenue
mvn clean install
mvn spring-boot:run
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## 🔐 Environment Variables

Configure the following variables before running the project:

```
SPRING_DATASOURCE_URL
SPRING_DATASOURCE_USERNAME
SPRING_DATASOURCE_PASSWORD
JWT_SECRET
```

Do not commit your secrets to GitHub.

## 📸 Screenshots

Add screenshots of:

- Home Page
- Login
- Registration
- Venue Listing
- Booking Page
- Dashboard

## 👨‍💻 Author

**Pavan Kumar**

GitHub:
https://github.com/Pawankumarmalem

---

If you found this project useful, consider giving it a ⭐ on GitHub.

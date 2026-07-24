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
<img width="1920" height="972" alt="Home page" src="https://github.com/user-attachments/assets/d7476813-5f65-45d3-80ba-c48b9c00ec6d" />
- Home Page
<img width="1920" height="977" alt="register page" src="https://github.com/user-attachments/assets/21e0204f-45c1-4430-b51b-8b3f650678cf" />
- Registration
<img width="1920" height="974" alt="login page" src="https://github.com/user-attachments/assets/0f71869f-e8b7-448f-9604-7bda79dcf4bf" />
- Login
<img width="1920" height="1020" alt="admin dashboard" src="https://github.com/user-attachments/assets/202a5e10-dc9d-48d3-a5db-f421dd2417b8" />
- Admin Dashboard
<img width="1920" height="956" alt="student dashboard" src="https://github.com/user-attachments/assets/3807cc9f-8379-4555-bd9d-5caf76d0a81f" />
- Student Dashboard
<img width="1920" height="970" alt="venue page" src="https://github.com/user-attachments/assets/c02cef60-53ab-4f76-8174-7e11ec591197" />
- Venue Listing
<img width="1920" height="1020" alt="Booking page" src="https://github.com/user-attachments/assets/1d1d33e0-68de-46c1-9851-3966910d080d" />

- Booking Page

## 👨‍💻 Author

**Malem Pawan Kumar**

GitHub:
https://github.com/Pawankumarmalem

---

If you found this project useful, consider giving it a ⭐ on GitHub.

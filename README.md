# Smart Venue Booking System

A full-stack web application for managing venue reservations in educational institutions. The system allows students and faculty to browse venues, make booking requests, and enables administrators to approve, reject, and manage bookings securely.

---

## Features

### Authentication
- User Registration
- Secure Login with JWT Authentication
- Role-Based Authorization
- Protected Routes

### Student Features
- Browse Available Venues
- Book a Venue
- View Booking History
- Profile Management
- Logout

### Admin Features
- Add New Venues
- Update Venue Details
- Delete Venues
- View All Bookings
- Approve/Reject Booking Requests
- Dashboard Overview

---

## Tech Stack

### Frontend
- React.js
- React Router
- Axios
- CSS3

### Backend
- Spring Boot
- Spring Security
- JWT Authentication
- Spring Data JPA
- Hibernate

### Database
- MySQL

### Tools
- Maven
- Git
- GitHub
- VS Code
- IntelliJ IDEA

---

## Project Structure

```
Smart-Venue-Booking-System
│
├── backend
│   ├── src
│   ├── pom.xml
│   └── ...
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── ...
│
└── README.md
```

---

## Database

Create a MySQL database:

```sql
CREATE DATABASE smartvenue;
```

Update your database credentials in:

```
backend/src/main/resources/application.properties
```

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/smartvenue
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD
```

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/Pawankumarmalem/Smart-Venue-Booking-System.git

cd Smart-Venue-Booking-System
```

---

### Backend Setup

```bash
cd backend

mvn clean install

mvn spring-boot:run
```

Backend runs on

```
http://localhost:8080
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

## API Modules

- Authentication
- User Management
- Venue Management
- Booking Management
- Profile Management

---

## Security

- JWT Authentication
- Spring Security
- Password Encryption
- Role-Based Access Control
- Stateless Session Management

---

## Screenshots

### Login Page

> Add Screenshot

### Student Dashboard

> Add Screenshot

### Admin Dashboard

> Add Screenshot

### Venue Booking

> Add Screenshot

---

## Future Enhancements

- Email Notifications
- Booking Calendar
- QR Code Entry
- Payment Integration
- Venue Availability Calendar
- Search & Filters
- Booking Analytics
- Dark Mode

---

## Author

**Pavan Kumar**

B.Tech – Computer Science (IoT)

Malla Reddy University

GitHub:
https://github.com/Pawankumarmalem

LinkedIn:
(Add your LinkedIn profile link)

---

## License

This project is developed for educational purposes and learning full-stack web development using Spring Boot and React.

---

## Star the Repository

If you found this project helpful, consider giving it a ⭐ on GitHub.

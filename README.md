# MovieRTG

MovieRTG is a full-stack movie rating and management web application developed using Angular for the frontend and C#/ASP.NET technologies for the backend. The application allows users to browse movies, view movie details, and provide ratings through an interactive user interface.

---

## Features

- Browse and explore movies
- View movie details
- Rate movies
- Dynamic frontend using Angular
- REST API integration
- CRUD operations for movie management
- Responsive user interface
- Backend data handling and validation

---

## Tech Stack

### Frontend
- Angular
- TypeScript
- HTML
- CSS
- RxJS

### Backend
- C#
- ASP.NET Core Web API

### Tools & Technologies
- Node.js
- npm
- Git & GitHub

---

## Project Structure

```text
MovieRTG/
│
|__ src/                # Angular frontend source code
|__ backend/            # Backend API and server-side code
|__public/             # Public assets
|__ package.json        # Project dependencies and scripts
|__ angular.json        # Angular configuration
|__ .env                # Environment variables
|__ README.md
```

---

## Installation and Setup

### Clone the Repository

```bash
git clone https://github.com/Abhinav1429S/MovieRTG.git
cd MovieRTG
```

---

## Frontend Setup

### Install Dependencies

```bash
npm install
```

### Run Angular Development Server

```bash
ng serve
```

or

```bash
npm start
```

The frontend will run on:

```text
http://localhost:4200
```

---

## Backend Setup

1. Navigate to the backend folder

```bash
cd backend
```

2. Open the backend project in Visual Studio or VS Code

3. Restore dependencies and run the backend server

4. Configure API endpoints and environment variables if required

---

## Application Workflow

1. User opens the application
2. Angular frontend loads the UI components
3. Frontend sends API requests to the backend
4. Backend processes requests and communicates with the database
5. Movie details and ratings are returned to the frontend
6. Users can browse and rate movies dynamically

---

## Core Functionalities

### Movie Management
- Add movies
- Update movie details
- Delete movies
- Fetch movie list

### Rating System
- Users can rate movies
- Ratings are stored and updated dynamically
- Average ratings can be calculated and displayed

---

## Architecture

```text
User
  |
Angular Frontend
  |
REST API Calls
  |
ASP.NET Backend
  |
Database
```

---

## Available Scripts

### Start Development Server

```bash
npm start
```

### Run Angular Server

```bash
ng serve
```

### Build Project

```bash
ng build
```

### Run Tests

```bash
ng test
```

---

## Future Enhancements

- User authentication and authorization
- Search and filter functionality
- Watchlist feature
- Movie recommendations
- Review and comment system
- Admin dashboard
- Deployment on cloud platforms

---

Abhinav Singh

GitHub: https://github.com/Abhinav1429S
LinkedIn: https://www.linkedin.com/in/abhinav-singh-293665258

---

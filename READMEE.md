


Online Course Platform
A complete full-stack online course platform built with the MERN stack (MongoDB, Express, React, Node.js). This application allows users to browse courses, instructors to manage course content (including lectures and assignments), and provides a secure authentication system for different user roles.

Table of Contents
About The Project

Key Features

Technologies Used

Getting Started

Prerequisites

Installation & Setup

Running the Application

API Endpoints

Deployment

About The Project
This project is a comprehensive Content Management System (CMS) for an online learning platform. It provides a RESTful backend API to handle all data and business logic, and a dynamic, responsive frontend built with React. The platform is designed to be scalable, secure, and user-friendly, catering to both students and instructors.

Key Features
User Authentication: Secure user registration and login system with JSON Web Tokens (JWT).

Role-Based Access Control: Differentiates between 'student' and 'instructor' roles, granting specific permissions to instructors for content management.

Course Management (CRUD): Instructors can Create, Read, Update, and Delete courses.

Lecture & Assignment Management: Instructors can add lectures and assignments to their courses.

Course Enrollment: Students can enroll in courses, which are then displayed on their "My Learning" page.

Advanced Filtering & Search:

Filter courses by category on the main courses page.

Functional search bar in the header to find courses by keywords.

Dynamic Frontend: Interactive UI built with React, including a responsive design, dynamic routing, and global state management with Context API.

Database Seeder: A script to automatically populate the database with a rich set of sample courses for development and testing.

Technologies Used
Backend
Node.js: JavaScript runtime environment.

Express.js: Web framework for Node.js.

MongoDB: NoSQL database for storing application data.

Mongoose: Object Data Modeling (ODM) library for MongoDB.

JSON Web Tokens (JWT): For secure user authentication.

bcryptjs: For hashing passwords.

dotenv: For managing environment variables.

cors: To enable cross-origin requests from the frontend.

Frontend
React: JavaScript library for building user interfaces.

Vite: Modern frontend build tool.

React Router: For handling client-side routing.

Axios: For making HTTP requests to the backend API.

React Context API: For global state management (e.g., user authentication status).

Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Node.js & npm: Download & Install Node.js

MongoDB Atlas Account: A free cloud MongoDB database. Create an account here.

Git: To clone the repository.

Installation & Setup
Clone the repository:

git clone [https://github.com/your-username/education-platform-project.git]((https://github.com/NandineeNargesh/online-course-P.git))
cd education-platform-project

Setup Backend:

Navigate to the backend directory: cd backend

Install npm packages: npm install

Create a .env file in the backend root and add the following environment variables:

MONGODB_URI=<Your_MongoDB_Atlas_Connection_String>
JWT_SECRET=a_very_long_and_secret_random_string_12345
JWT_EXPIRE=30d

Important: Make sure your current IP address is whitelisted in your MongoDB Atlas Network Access settings.

Setup Frontend:

Navigate to the frontend directory: cd ../frontend

Install npm packages: npm install

Seed the Database (Optional but Recommended):

To populate your database with sample courses, you first need to create an instructor account via the registration page on the website.

Then, run the seeder script from the backend directory:

cd ../backend
npm run import-data

Running the Application
You need to run both the backend and frontend servers concurrently in two separate terminals.

Run Backend Server:

In a terminal, navigate to the backend folder.

Run the command:

npm run server

The API will be running on http://localhost:5000.

Run Frontend Server:

In a second terminal, navigate to the frontend folder.

Run the command:

npm run dev

The React application will be available at http://localhost:5173 (or another port if 5173 is busy).

API Endpoints
A brief overview of the main API routes:

POST /api/auth/register: Register a new user.

POST /api/auth/login: Login a user and get a token.

GET /api/auth/me: Get the current logged-in user's data.

GET /api/auth/my-courses: Get courses the current user is enrolled in.

GET /api/courses: Get all courses (with filtering and pagination).

POST /api/courses: Create a new course (Instructor only).

GET /api/courses/:id: Get a single course.

PUT /api/courses/:id: Update a course (Instructor only).

DELETE /api/courses/:id: Delete a course (Instructor only).

POST /api/courses/:courseId/enroll: Enroll in a course.

GET /api/courses/:courseId/lectures: Get lectures for a course.

POST /api/courses/:courseId/lectures: Add a lecture to a course (Instructor only).

GET /api/courses/:courseId/lectures/:lectureId/assignments: Get assignments for a lecture.

POST /api/courses/:courseId/lectures/:lectureId/assignments: Add an assignment to a lecture (Instructor only).

Deployment
This project is configured for deployment on modern cloud platforms.

Backend (API): Deployed on Render.

Root Directory: backend

Build Command: npm install

Start Command: node src/app.js

Frontend (React App): Deployed on Vercel.

Root Directory: frontend

Framework Preset: Vite

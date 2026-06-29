# 🚀 AI-Powered Task Management Portal

## 📌 Overview

AI-Powered Task Management Portal is a full-stack web application that allows users to create, manage, update, and track tasks efficiently. The application integrates Google Gemini AI to automatically generate task descriptions, suggest priorities, and estimate completion effort.

---

## ✨ Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Protected APIs

### Task Management

* Create Tasks
* Edit Tasks
* Delete Tasks
* View All Tasks
* Due Date Management
* Task Status Tracking (TODO, IN_PROGRESS, DONE)

### AI Automation

* AI Task Description Generator
* AI Priority Suggestion
* AI Estimated Effort Suggestion
* Graceful Fallback Handling

---

## 🛠 Tech Stack

### Frontend

* React.js
* Axios
* React Router DOM
* CSS

### Backend

* Spring Boot
* Spring Security
* JWT Authentication
* Spring Data JPA

### Database

* MySQL

### AI Integration

* Google Gemini API

---

## 📂 Project Architecture

Frontend (React)
↓
REST API Calls
↓
Backend (Spring Boot)
↓
MySQL Database

AI Suggestions
↓
Google Gemini API

---

## 🔑 Authentication Flow

1. User Registers
2. User Logs In
3. JWT Token Generated
4. Token Stored in Browser
5. Protected APIs Accessed Using JWT

---

## 🤖 AI Workflow

1. User enters task title
2. User clicks AI Suggest
3. Gemini API generates:

   * Task Description
   * Priority
   * Estimated Effort
4. Suggestions are automatically filled into the form

---

## 📸 Screenshots
* Login Page(https://github.com/NamrataPatil-data/AI-Task-Management-Portal/blob/main/Screenshots/LoginPage.png)
* Register Page (https://github.com/NamrataPatil-data/AI-Task-Management-Portal/commit/0c94e54eb4db36cc272f6fad8d5972f34556cae7#diff-635946b888cdf372fd3db5cfaa65eb970c54a146b7b49d04c49169d0dfb827c3)
* Dashboard (https://github.com/NamrataPatil-data/AI-Task-Management-Portal/blob/main/Screenshots/Dashboard1.png)
* AI Suggest Feature (https://github.com/NamrataPatil-data/AI-Task-Management-Portal/blob/main/Screenshots/Dashboard2.png)
* Task Management Table (https://github.com/NamrataPatil-data/AI-Task-Management-Portal/blob/main/Screenshots/Dashboard2.png)

---

## 🚀 Future Enhancements

* Task Search
* Task Filtering
* Pagination
* Dark Mode
* Docker Deployment
* Blockchain-Based Task Verification

---

## 👩‍💻 Author

Namrata Patil

Computer Science and Business Systems Engineer

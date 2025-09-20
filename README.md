# Event Management App

A full-stack **Event Management Mobile Application** built using the **MERN stack with React Native (Expo)**.  
This app enables users to create, join, and manage events with real-time updates, chat, and alerts.

![Home Banner](https://github.com/sujitkhandagale/event-management-app/blob/main/screenshots/home_banner.png?raw=true)

### ⚠️ **Disclaimer**  
> This project is built **for educational purposes only**.  
> I will **not take any responsibility** for data loss, misuse, or any kind of damage caused by using this project.

### Tech Stack

- **Frontend (Mobile App):** React Native (Expo) with TypeScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Real-time Communication:** Socket.IO
- **Task Scheduling:** BullMQ (Redis-based job queue)
- **Message Broker:** RabbitMQ (for email notifications & alerts)
- **Code Quality:** ESLint (with TypeScript rules & Prettier integration)

### Features
- 🔑 User Authentication – Secure Sign Up / Sign In with role-based access (organizer/attendee).
- 🗂️ Browse Events – Explore a list of all available events with search & filters.
- 📝 Join & RSVP – Register for events with slot availability checks and instant updates.
- 👥 Live Participants Tracking – Monitor attendance in real time.
- 💬 In-app Chat – Dedicated chat section for participants to connect.
- 🆕 Create & Manage Events – Organizers can easily schedule, edit, and manage events.
- 🔔 Event Alerts & Notifications – Stay updated with scheduled reminders.
- 📧 Email Alerts via RabbitMQ – Automated notifications for important updates.
- 📊 Event Analytics Dashboard – Track registrations, attendance & engagement.
- 🌐 Responsive UI – Optimized for both web and mobile users.
- 🔄 Continuous Updates – Many more features under development...

## Getting Started

### Prerequisites

i already shared docker compose files for required tools and db's if you want to go manual please get into official sites. thank you ❤️.

- **Node.js v18+**  
  Runtime for running JavaScript on the server.  
  [Download Node.js](https://nodejs.org/en/download/)

- **MongoDB (local or Atlas)**  
  NoSQL database to store your application data.
    - MongoDB Community Edition (local): [Download](https://www.mongodb.com/try/download/community)
    - MongoDB Atlas (cloud): [Visit Atlas](https://www.mongodb.com/cloud/atlas)

- **Redis**  
  In-memory data store for caching, queues, or pub/sub.  
  [Official Redis Download](https://redis.io/download)

- **RabbitMQ**  
  Message broker for handling asynchronous jobs and events.  
  [Official RabbitMQ Download](https://www.rabbitmq.com/download.html)

- **Docker** (Optional, for development environment)  
  Containerization tool to run services like MongoDB, Redis, RabbitMQ easily.  
  [Get Started with Docker](https://www.docker.com/get-started)


### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/sujitkhandagale/event-management-app
   cd event-management-app
   
2. Install all required packages for backend and frontend
   ```bash
   cd backend
   npm install
   cd ../application
   npm install
   
3. Setup environment variables
   ```bash
   cp .env.example .env
   
4. Start the development server
   ```bash
   cd backend
   npm start
   cd ../application
   expo start
   
5. build the app and use. thanks me later.

### Developer Note
[![Home Banner](https://github.com/sujitkhandagale/event-management-app/blob/main/screenshots/explore%20more%20porjects.gif?raw=true)](https://sujitdev.in) </br>
Get my all public and private project listing and latest blogs.

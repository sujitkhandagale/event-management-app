# Event Management App

A full-stack **Event Management Mobile Application** built using the **MERN stack with React Native (Expo)**.  
This app enables users to create, join, and manage events with real-time updates, chat, and alerts.

## Tech Stack

- **Frontend (Mobile App):** React Native (Expo) with TypeScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Real-time Communication:** Socket.IO
- **Task Scheduling:** BullMQ (Redis-based job queue)
- **Message Broker:** RabbitMQ (for email notifications & alerts)
- **Code Quality:** ESLint (with TypeScript rules & Prettier integration)

## Features

- User Authentication (Sign Up / Sign In)
- Browse List of All Events
- Join Events with Slot Availability Check
- Live Participants and Real-time Tracking
- In-app Chat Section for Participants
- Create New Events
- Event Alerts & Scheduled Notifications
- Email Alerts via RabbitMQ
- Many more upcoming features...

## Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/event-management-app.git
   cd event-management-app
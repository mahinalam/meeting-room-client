BookNest React Application
This project is a feature-rich booking platform for rooms and services, built using React, Redux Toolkit, and React Router. The platform provides a seamless user experience for browsing, booking, and managing reservations.

1. Table of Contents
2. Project Overview
3. Technologies Used
4. Features
5. Getting Started
6. Prerequisites
7. Installation
8. Running the Project

Project Overview
BookNest is a web-based application designed for users to book rooms or services. It includes both user and admin interfaces, enabling users to make reservations while allowing admins to manage rooms, bookings, and users.

The application implements:

1. User Authentication: Users can register, log in, and view their bookings.
2. Room Management: Users can view room listings and check availability.
3. Booking System: Users can book rooms, selecting available dates and times.
4. Admin Panel: Admins can manage rooms, bookings, and view analytics.

Technologies Used
The project leverages modern web technologies to ensure a fast, scalable, and maintainable application.

1. React 18: The core library for building user interfaces.
2. React Router 6: Manages client-side routing and navigation.
3. Redux Toolkit: Manages global state, user sessions, and data fetching.
4. Ant Design: Provides modern, pre-built UI components.
5. Tailwind CSS: Used alongside Ant Design for responsive design and custom styling.
6. Vercel/Netlify: Deployment platforms for hosting the production build.

Features

1. User Authentication: Login and sign-up functionality with protected routes for user-specific content.
2. Room Listings: Browse available rooms with detailed descriptions and images.
3. Room Details: View detailed information about a room, including availability and p2ricing.
4. Booking System: Book rooms with real-time date and time selection.
5. Admin Dashboard: Manage rooms, bookings, and users (protected route).
6. Custom 404 Page: A user-friendly error page for non-existent routes.
7. Responsive Design: Works across mobile, tablet, and desktop devices2.

Getting Started
Prerequisites
Make sure you have the following installed:

1. Node.js (version 14 or higher)
2. npm (or yarn)
   Installation
   Clone the repository:

bash
Copy code
git clone https://github.com/mahinalam/meeting-room-client.git
Navigate into the project folder:

bash
Copy code
cd meeting-room-client
Install dependencies:

bash
Copy code
npm install
Or, if using yarn:

bash
Copy code
yarn install
Running the Project
Development Mode
To start the development server, run:

bash
Copy code
npm run dev
Visit http://localhost:3000 to view the app in your browser. The app will reload automatically if you make any changes.

Production Mode
To build the project for production:

bash
Copy code
npm run build
This will create an optimized build in the build/ directory.

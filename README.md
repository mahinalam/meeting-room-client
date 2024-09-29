# 🏕️ BookNest Front-End

## 🤖 Introduction

BookNest is a web-based application designed for users to book rooms or services. It includes both user and admin interfaces, enabling users to make reservations while allowing admins to manage rooms, bookings, and users.

## 🔗 Live URL

[BookNest](https://meeting-room-mu.vercel.app)

## 📝 Project Description

BookNest is an online platform designed to simplify the process of booking rooms and spaces for various needs, including personal, professional, and event-based purposes. It provides an intuitive user interface where customers can explore a wide range of venues, compare prices, check availability, and reserve spaces with ease. Whether you're looking for a meeting room, a conference hall, or a personal getaway, BookNest offers a seamless and secure booking experience.

BookNest allows users to search for available rooms based on specific criteria like location, amenities, price, and date. The booking process is straightforward and user-friendly, helping customers complete reservations in just a few clicks.User security is a top priority on BookNest. All transactions are handled through secure payment gateways, ensuring that personal and payment information remains confidential and protected.

Browse through a diverse selection of rooms and spaces, each with detailed descriptions, high-quality images, and information about pricing, capacity, amenities, and floor plans. BookNest allows users to filter results based on their preferences, such as room size, price per slot, and availability.

## 🔋 Features

- 🌟 User-friendly and visually appealing interface
- 🚗 Comprehensive Car Listings
- 📅 Flexible Booking Process
- 📈 Admin Dashboard
- 💳 Payment Integration
- 👤 User Account Management
- 🚫 Error Handling & 404 Page
- 🎁 Bonus Features

## ⚙️ Technology Stack

- 🔧 **Front-End:**

  - [React](https://react.dev/)
  - [Redux](https://redux-toolkit.js.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [React Router](https://reactrouter.com/en/main)
  - [Tailwind CSS](https://tailwindcss.com/)

- 🔧 **Backend:**

  - [Node.js](https://nodejs.org/en/)
  - [Express](https://expressjs.com/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [MongoDB](https://www.mongodb.com/)
  - [Mongoose](https://mongoosejs.com/)
  - [JWT (JSON Web Token)](https://www.npmjs.com/package/jsonwebtoken)
  - [dotenv](https://www.npmjs.com/package/dotenv)

- 🔨 **Development Tools:**

  - [VS Code](https://code.visualstudio.com/)
  - [Postman (API testing)](https://www.postman.com/)
  - [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
  - [Vite](https://vitejs.dev/)

## 🤸 Installation Guideline

Follow these steps to set up the project locally on your machine.

### 📚 Prerequisites

Make sure you have the following installed on your machine:

- 🖥️ [**Node.js**](https://nodejs.org/en) installed on your machine (v18 or
  higher recommended)
- ✏️ A code editor like [**VSCode**](https://code.visualstudio.com/)
- ✅ [**TypeScript**](https://www.typescriptlang.org/) installed
- ✅ [**npm**](https://www.npmjs.com/) installed

### 🛠️ Installation Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mahinalam/meeting-room-client.git
   cd meeting-room-client
   ```

2. **Install the project dependencies using npm:**

   ```bash
   pnpm install
   ```

3. **Set up environment variables:**

   Create a new file named .env in the root of your project and add the
   following content:

   ```bash
   VITE_IMAGEBB_API_KEY=your_secret
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

## Configuration

Create a .env file in the root directory of the project and add the following
configuration variables:

```bash
VITE_IMAGEBB_API_KEY=your_secret
```

## Usage

1. **Public Pages:**

   - Navigate to the home page to browse available rooms, view details, and
     initiate the booking process.
   - Visit the "About Us" page to learn more about the company and its values.

2. **User Pages:**

   - Sign up or log in to access the user dashboard.
   - Manage your bookings, view payment history, and update profile details.

3. **Admin Pages:**

   - Log in with an admin account to access the admin dashboard.
   - Manage car listings, handle customer bookings, and oversee user accounts.

4. **Making a Booking:**

   - Search for rooms: Use the search bar on the home page or the room listing
     page to filter rooms by location, date, type, and features.
   - View Room Details: Click on any room to view detailed information, including
     pricing and available options.
   - Book a Room: Select your preferred room and fill out the booking form with
     the required details, such as personal information and payment details.

5. **Admin Management:**

   - Add/Update Room Listings: Use the admin dashboard to add new rooms or update
     existing listings with current details and images.
   - Manage Bookings: View and approve customer bookings, and update the status
     of returned cars.

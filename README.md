# Click Market – Full-Stack E-Commerce Website

Click Market is a full-stack web application developed using modern JavaScript technologies for both front-end and back-end. Its goal is to create a complete e-commerce system that allows users to easily and securely purchase vegetables, fruits, and juices online.

---

## Main Features

### 1. Shopping System
- Display products (vegetables, fruits, juices) with images and prices.
- Add products to the cart.
- Modify quantities or remove products from the cart.
- Automatic total calculation.

### 2. User Authentication System
- User registration (Sign Up).
- Login using JWT authentication.
- Password encryption using bcrypt.

### 3. Search & Filter System
- Search for products by name or category.

### 4. Order Management
- Save order details in the database.
- Update order status (pending, completed).
- View order history for each user.

### 5. API Integration
- Build RESTful APIs using Express.js.
- Consume APIs on the front-end using Axios.

### 6. Database Integration
- PostgreSQL for storing structured data (e.g., users, transactions).

### 7. Validation & Error Handling
- Validate inputs during registration or order placement.
- Display clear error messages to users.

### 8. Security Features
- Verify user identity before accessing protected pages.
- Secure APIs using JWT.
- Encrypt passwords; no plain-text storage.

---

## Technologies Used

### Front-End
1. **React.js (with Hooks)** – Build a fast and interactive user interface (UI).
2. **HTML5 & CSS3** – Structure and style web pages.
3. **JavaScript** – Implement interactive features and client-side logic.
4. **Axios** – Handle API requests and responses between front-end and back-end.
5. **React Router DOM** – Page navigation.

### Back-End
1. **Node.js** – JavaScript runtime for server-side development.
2. **Express.js** – Framework for building organized RESTful APIs.
3. **PostgreSQL** – Relational database for structured data management and querying.

### Additional Tools
- **Git & GitHub** – Version control and collaboration.
- **Postman** – Testing API endpoints.
- **VS Code** – Development environment.

---

## Algorithms Used
1. **Search Algorithm** – Find products by name or category.
2. **Recommendation Logic** – Suggest similar products (e.g., “You may also like”).
3. **Authentication & Encryption Algorithm** – Secure login and password encryption.
4. **Cart Management Algorithm** – Handle total calculation, quantity updates, item removal; using JavaScript operations like add, remove, update, filter, map, and reduce.

---

## Future Improvements
- Integrate a payment gateway (e.g., Stripe).
- Develop an AI-based recommendation system.
- Add an advanced admin dashboard.
- Support multilingual UI (Arabic and English).
- Build a mobile app using React Native.

---

## Testing
1. **Unit Testing:** Test individual functions.
2. **Integration Testing:** Test communication between APIs and the database.
3. **Postman API Testing:** Verify all routes (GET, POST, PUT, DELETE) work correctly.

---

## UI/UX Design Concept
- **Theme:** Nature-inspired (green, yellow, orange).
- **Font:** Clean, modern, readable typography.
- **Layout:** Minimalist and product-focused.
- **Design Principles:**
  - Simplicity
  - Consistency
  - Accessibility
  - Mobile-first design

---

## Project Structure

Click-Market/
│
├── client/                 # React Front-End
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── server/                 # Node.js + Express Back-End
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
├── README.md
└── .gitignore


---

## Installation Guide

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mid-project-LTUC/clickmarket.git

2. **Install dependencies for both client and server:**
cd click-market/client
npm install

cd ../server
npm install

3. **Run the application:**

-Front-End:
cd client
npm start

-Back-End:
cd ../server
npm install


**Developed By**
Mohammad Almoqdad
Baraah Nasser
Duha Shaheen

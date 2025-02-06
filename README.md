# Blog App**  

A simple and powerful blog application where users can create, edit, and delete blog posts. This app is designed to be user-friendly and provides a seamless experience for content creation.

## Features
- Create, Read, Update, and Delete (CRUD) Blog Posts
- View All Published Blogs
- Support for Rich Text and Images
- User Authentication & Authorization
- Responsive and User-Friendly Interface
- Built with Node.js, Express, MongoDB, and EJS
  
## Tech Stack
- Frontend: HTML, CSS, JavaScript, Bootstrap, EJS  
- Backend: Node.js, Express.js  
- Database: MongoDB  
- Authentication: Passport.js (if applicable)  

## Project Structure
```
Blog_App/
│── public/            # Static files (CSS, JavaScript)
│── views/             # EJS templates for rendering HTML
│── routes/            # Application routes
│── models/            # Database models (MongoDB Schemas)
│── app.js             # Main entry point for the application
│── package.json       # Dependencies and project configuration
│── README.md          # Project documentation
```

## Installation & Setup
### Prerequisites
- Install Node.js and MongoDB on your system.

### 1. Clone the Repository
```bash
git clone https://github.com/Chandrakanth2328/Blog_App.git
cd Blog_App/Blog_App
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory and add your MongoDB connection string:

```
MONGO_URI=your_mongodb_connection_string
```

### 4. Start the Server
```bash
npm start
```
The app will run on http://localhost:3000


## 📷Screenshots
🔹 _(Add some screenshots of your app here)_


Future Enhancements**
- ✅ Comments Section for Blog Posts
- ✅ User Profiles & Dashboard
- ✅ Search & Filter Functionality
- ✅ Like & Share Feature for Posts


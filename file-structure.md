# SkillSwap Project Structure

```
skillswap/
├── .gitignore
├── package.json
├── vite.config.js
├── index.html
├── README.md
├── public/
│   ├── favicon.ico
│   └── assets/
│       └── images/
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── api/
│   │   ├── axios.js
│   │   ├── auth.js
│   │   ├── lessons.js
│   │   ├── bookings.js
│   │   ├── profiles.js
│   │   └── messages.js
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── Avatar.jsx
│   │   │   └── Loading.jsx
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── auth/
│   │   │   ├── LoginForm.jsx
│   │   │   ├── RegisterForm.jsx
│   │   │   └── ResetPassword.jsx
│   │   ├── profile/
│   │   │   ├── ProfileCard.jsx
│   │   │   ├── SkillsList.jsx
│   │   │   └── AvailabilityCalendar.jsx
│   │   ├── lessons/
│   │   │   ├── LessonCard.jsx
│   │   │   ├── LessonForm.jsx
│   │   │   ├── LessonList.jsx
│   │   │   └── LessonFilters.jsx
│   │   ├── booking/
│   │   │   ├── BookingForm.jsx
│   │   │   ├── BookingCard.jsx
│   │   │   └── BookingCalendar.jsx
│   │   └── messaging/
│   │       ├── ChatBox.jsx
│   │       ├── MessageList.jsx
│   │       └── MessageInput.jsx
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── BookingContext.jsx
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useBooking.js
│   │   └── useProfile.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Auth/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── ForgotPassword.jsx
│   │   ├── Dashboard/
│   │   │   ├── StudentDashboard.jsx
│   │   │   └── TeacherDashboard.jsx
│   │   ├── Profile/
│   │   │   ├── ViewProfile.jsx
│   │   │   └── EditProfile.jsx
│   │   ├── Lessons/
│   │   │   ├── LessonSearch.jsx
│   │   │   ├── LessonDetails.jsx
│   │   │   └── CreateLesson.jsx
│   │   ├── Bookings/
│   │   │   ├── BookingsList.jsx
│   │   │   └── BookingDetails.jsx
│   │   └── Messages/
│   │       └── ChatRoom.jsx
│   ├── utils/
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   ├── validation.js
│   │   └── dateUtils.js
│   └── styles/
│       ├── tailwind.css
│       └── custom.css
├── server/
│   ├── index.js
│   ├── config/
│   │   ├── db.js
│   │   └── env.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Profile.js
│   │   ├── Lesson.js
│   │   ├── Booking.js
│   │   └── Message.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── profiles.js
│   │   ├── lessons.js
│   │   ├── bookings.js
│   │   └── messages.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── profileController.js
│   │   ├── lessonController.js
│   │   ├── bookingController.js
│   │   └── messageController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── validation.js
│   │   └── errorHandler.js
│   └── utils/
│       ├── email.js
│       └── helpers.js
└── tests/
    ├── frontend/
    │   ├── components/
    │   └── pages/
    └── backend/
        ├── auth.test.js
        ├── profiles.test.js
        └── lessons.test.js
```

## Key Directories Explained

### Frontend (`src/`)
- `api/`: API service functions for backend communication
- `components/`: Reusable React components organized by feature
- `context/`: React Context providers for global state
- `hooks/`: Custom React hooks
- `pages/`: Main route components
- `utils/`: Helper functions and constants
- `styles/`: Global styles and Tailwind configuration

### Backend (`server/`)
- `config/`: Configuration files for database and environment
- `models/`: MongoDB/Mongoose models
- `routes/`: Express route definitions
- `controllers/`: Route handler logic
- `middleware/`: Express middleware
- `utils/`: Helper functions for the backend

### Testing (`tests/`)
- Separate directories for frontend and backend tests 
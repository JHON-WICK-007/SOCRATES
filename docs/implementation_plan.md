# 🚀 SOCRATES: Complete Execution Roadmap

> **Project**: AI-Enhanced Online Tutoring Marketplace  
> **Start Date**: July 18, 2026  
> **End Date**: ~December 5, 2026 (20 weeks)  
> **Team Size**: 4 members  
> **Stack**: MERN (MongoDB, Express, React, Node.js)  

---

## 🔒 FINAL TECH STACK — LOCKED (No More "Alternatives")

Every slot has **ONE pick**. No debates. These are chosen for speed, ease-of-learning, and MERN compatibility.

### Core Stack

| Layer | Tool | Version | Why This One |
|-------|------|---------|-------------|
| **Frontend Framework** | React 19 | `^19.x` | Your academic title says React. Period. |
| **Build Tool** | Vite 6 | `^6.x` | Fastest dev server, instant HMR |
| **CSS Framework** | Tailwind CSS v4 | `^4.x` | Utility-first, rapid UI development |
| **Routing** | React Router v7 | `^7.x` | Stable, massive ecosystem |
| **State Management** | Zustand | `^5.x` | 1KB, simpler than Redux, 10 min to learn |
| **HTTP Client** | Axios | `^1.7+` | Interceptors, better error handling than fetch |
| **Server State** | TanStack Query v5 | `^5.x` | Caching, background refetch, stale-while-revalidate |
| **Forms** | React Hook Form | `^7.x` | Minimal re-renders, pairs with Zod |
| **Validation** | Zod | `^3.x` | TypeScript-first, works on both frontend AND backend |
| **Backend Runtime** | Node.js 20 LTS | `^20.x` | Stable, long-term support |
| **Backend Framework** | Express.js | `^4.21+` | Your title says Express. Done. |
| **Database** | MongoDB Atlas | Latest | Free 512MB tier, NoSQL, flexible schema |
| **ODM** | Mongoose | `^8.x` | Schema validation, hooks, virtuals |
| **Auth** | JWT + bcrypt | `jsonwebtoken ^9.x` + `bcrypt ^5.x` | Industry standard |
| **Real-Time** | Socket.IO | `^4.8+` | Auto-reconnect, rooms, namespaces |
| **Video Calling** | Jitsi Meet React SDK | `^1.x` | **FREE**, open-source, 5 days to implement |
| **Payments** | Razorpay | `^2.x` | You're in India, 2% fee, INR native |
| **File Upload** | Multer | `^1.x` | Standard Express file handling |
| **Cloud Storage** | Cloudinary | Free tier | 25GB free, auto image optimization |
| **Email** | Nodemailer + Gmail | `^6.x` | Free for college, no 3rd-party needed |
| **Deployment (FE)** | Vercel | Free tier | One-click React deploy |
| **Deployment (BE)** | Render | Free tier | One-click Node.js deploy |
| **Database Hosting** | MongoDB Atlas | Free tier | 512MB, enough for demo |

### AI Stack (4 features only)

| Feature | Provider | Cost |
|---------|----------|------|
| AI Tutoring Assistant | Google Gemini API | FREE (60 req/min) |
| Session Summarization | Google Gemini API | FREE |
| Sentiment Analysis | Hugging Face (Xenova Transformers) | FREE (runs in browser) |
| Content Moderation | OpenAI Moderation API | FREE ($0.002/req) |

### Dev Tools

| Tool | Purpose |
|------|---------|
| Git + GitHub | Version control |
| ESLint + Prettier | Code quality |
| Postman or Thunder Client | API testing |
| MongoDB Compass | Database GUI |
| Nodemon | Auto-restart backend |
| Vitest | Frontend testing |
| Jest + Supertest | Backend testing |

---

## 👥 TEAM ROLES — FINAL ASSIGNMENT

### Member 1: Frontend Developer — Public Pages & UI/UX Lead
**Title on Report**: Frontend Developer (UI/UX)

**Owns these pages/features**:
- Landing/Home page
- Tutor Search & Filter page
- Tutor Profile page (public view)
- Session Booking UI + Calendar date picker
- Payment checkout UI (Razorpay integration)
- Review/Rating display & submission UI
- Admin Panel UI
- Responsive design across ALL pages (mobile/tablet/desktop)

**Must learn before starting**:
- React 19 fundamentals (components, hooks, JSX)
- Tailwind CSS v4 (utility classes, responsive prefixes)
- React Router v7 (routes, params, nested routes)
- Axios (API calls)
- Basic Figma (for wireframes)

**Daily workflow**: Build UI components → connect to Member 3's APIs → test responsiveness

---

### Member 2: Frontend Developer — Dashboards & Real-Time UI
**Title on Report**: Frontend Developer (Dashboards & Real-Time)

**Owns these pages/features**:
- Student Dashboard (upcoming sessions, history, favorites, recordings)
- Tutor Dashboard (earnings, bookings, student management, availability calendar)
- Real-time Chat interface (with typing indicators, online status)
- Notification system UI (toast + dropdown)
- Video Call page (Jitsi embed + controls)
- AI Tutoring Assistant chat panel UI
- Session summary display UI

**Must learn before starting**:
- React 19 fundamentals
- Tailwind CSS v4
- Socket.IO Client (real-time events)
- Zustand (global state for auth, notifications)
- Framer Motion (basic animations for dashboard cards)
- FullCalendar.io (calendar component)

**Daily workflow**: Build dashboard UIs → integrate Socket.IO events from Member 4 → integrate Jitsi

---

### Member 3: Backend Developer — Core APIs & Auth
**Title on Report**: Backend Developer (Core APIs)

**Owns these systems**:
- Authentication system (register, login, JWT, password reset, email verification)
- User Management APIs (CRUD for students, tutors, admins)
- Tutor Profile APIs (create, update, get, search with filters)
- Session Booking APIs (book, cancel, reschedule, list)
- Review & Rating APIs (create, read, update, delete, average calc)
- Search & Filter API (subject, price range, rating, experience, pagination)
- Notification system backend (store & retrieve)
- Admin APIs (user management, tutor verification, disputes)
- AI integration endpoints (proxy to Gemini API, moderation)
- Input validation & sanitization on ALL routes

**Must learn before starting**:
- Node.js + Express.js (routing, middleware, error handling)
- Mongoose (schemas, queries, populate, aggregation)
- JWT authentication flow (access + refresh tokens)
- bcrypt (password hashing)
- Zod or Joi (input validation)
- REST API design best practices

**Daily workflow**: Build API routes → test with Postman → coordinate with Members 1 & 2 on request/response shapes

---

### Member 4: Backend Developer + DevOps — Database, Real-Time & Infrastructure
**Title on Report**: Backend Developer (Database, Real-Time & DevOps)

**Owns these systems**:
- MongoDB database design (all collections, indexes, relationships)
- Payment integration (Razorpay backend: create order, verify payment, webhooks, refunds)
- Socket.IO server (real-time chat, typing indicators, online status, notifications push)
- Video calling backend (Jitsi room management — create rooms, manage sessions)
- Cloud storage setup (Cloudinary — photo uploads, profile images)
- Email service (Nodemailer — verification emails, booking confirmations, password reset)
- Deployment & DevOps (Vercel for frontend, Render for backend, MongoDB Atlas config)
- Environment variables management (.env setup)
- Database seeding (test data for demos)
- Performance optimization (MongoDB indexes, response compression)

**Must learn before starting**:
- MongoDB Atlas setup (cluster, user, whitelist, connection string)
- Mongoose advanced (indexes, virtuals, middleware/hooks)
- Socket.IO server-side (rooms, events, broadcasting)
- Razorpay API docs (orders, payments, webhooks)
- Cloudinary SDK
- Nodemailer with Gmail App Password
- Render.com deployment flow
- PM2 basics (process management)

**Daily workflow**: Build infrastructure → expose events/APIs for Members 2 & 3 → manage deployments

---

## 📅 20-WEEK TIMELINE — Week by Week

### Phase 0: Setup & Design (Weeks 1-2) — July 18 – Aug 1

| Task | Owner | Days | Deliverable |
|------|-------|------|-------------|
| Create GitHub repo, branch rules, README | Member 4 | 1 | Repo live |
| Set up Vite + React + Tailwind frontend | Member 1 | 1 | `npm run dev` works |
| Set up Express + Mongoose backend | Member 3 | 1 | `npm start` works, connects to MongoDB |
| Design ALL screens in Figma (wireframes, not pixel-perfect) | Member 1 + Member 2 | 5 | 12-15 screen wireframes |
| Design database schema (all collections) | Member 4 + Member 3 | 2 | Schema doc committed |
| Write API contract (all endpoints with req/res shapes) | Member 3 | 2 | API doc committed |
| Set up MongoDB Atlas + .env files | Member 4 | 1 | DB connected |
| Set up ESLint + Prettier + Git hooks | Member 4 | 1 | Code quality enforced |
| **Everyone**: Read project docs, understand full scope | All | Ongoing | — |

> [!IMPORTANT]
> **DO NOT write any feature code in Weeks 1-2.** Only setup, design, and planning. This saves you 2-3 weeks of rework later.

---

### Phase 1: Authentication & Profiles (Weeks 3-5) — Aug 1 – Aug 22

| Task | Owner | Days | Deliverable |
|------|-------|------|-------------|
| Register/Login API (JWT + bcrypt) | Member 3 | 3 | `POST /api/auth/register`, `/login` |
| Password reset + email verification | Member 3 + Member 4 (email) | 2 | Reset flow works |
| Login/Register UI pages | Member 1 | 3 | Forms with validation |
| Auth state management (Zustand store) | Member 2 | 1 | `useAuthStore` hook |
| Protected routes (frontend) | Member 2 | 1 | Redirect if not logged in |
| Tutor profile CRUD API | Member 3 | 3 | Full profile management |
| Tutor profile page UI | Member 1 | 3 | Profile display + edit mode |
| Photo upload (Cloudinary) | Member 4 | 2 | Profile photos work |
| Navbar + Footer + Layout components | Member 1 | 2 | Shared layout done |
| **Checkpoint**: Login → see profile → edit profile → upload photo | All | — | ✅ Demo-ready |

---

### Phase 2: Search, Booking & Payments (Weeks 6-9) — Aug 22 – Sep 19

| Task | Owner | Days | Deliverable |
|------|-------|------|-------------|
| Search & Filter API (subject, price, rating, pagination) | Member 3 | 4 | `GET /api/tutors/search` |
| Search page UI (filters, tutor cards, pagination) | Member 1 | 4 | Search works end-to-end |
| Home/Landing page UI | Member 1 | 3 | Hero, search bar, featured tutors |
| Tutor availability API (create/read slots) | Member 3 | 2 | CRUD for time slots |
| Booking API (book, cancel, reschedule) | Member 3 | 4 | Full booking flow |
| Booking UI (calendar + time slot picker) | Member 1 | 4 | FullCalendar or date picker |
| Razorpay payment integration (backend) | Member 4 | 4 | Create order → verify → webhook |
| Payment checkout UI | Member 1 | 2 | Razorpay button + confirmation |
| Payment history API + UI | Member 4 (API) + Member 2 (UI) | 3 | Students see transaction history |
| **Student Dashboard — basic version** | Member 2 | 4 | Upcoming sessions + payment history |
| **Tutor Dashboard — basic version** | Member 2 | 4 | Earnings + booking list |
| **Checkpoint**: Search tutor → book session → pay → see in dashboard | All | — | ✅ Core flow done |

---

### Phase 3: Real-Time Features (Weeks 10-13) — Sep 19 – Oct 17

| Task | Owner | Days | Deliverable |
|------|-------|------|-------------|
| Socket.IO server setup (rooms, events) | Member 4 | 2 | Server runs, clients connect |
| Chat API (message history, conversations) | Member 3 | 3 | `GET/POST /api/messages` |
| Chat UI (message bubbles, typing indicator, online status) | Member 2 | 5 | Real-time chat works |
| Notification system backend | Member 3 + Member 4 | 3 | Push via Socket.IO + store in DB |
| Notification UI (toast + dropdown) | Member 2 | 2 | Live notifications |
| Jitsi video call integration (backend room management) | Member 4 | 3 | Room creation API |
| Video call page UI (Jitsi embed + controls) | Member 2 | 4 | Join/leave/mute/share screen |
| Review & Rating API | Member 3 | 2 | CRUD + average calculation |
| Review UI (star rating + comment) | Member 1 | 2 | Submit + display reviews |
| **Checkpoint**: Chat with tutor → join video call → leave review | All | — | ✅ Real-time done |

---

### Phase 4: AI Features & Admin (Weeks 14-16) — Oct 17 – Nov 7

| Task | Owner | Days | Deliverable |
|------|-------|------|-------------|
| Gemini API setup (AI microservice or endpoints) | Member 3 | 2 | AI endpoint live |
| AI Tutoring Assistant (ask questions, get answers) | Member 3 (API) + Member 2 (UI) | 3 | Chat panel with AI |
| Session Summarization (auto-generate notes) | Member 3 | 2 | Summary after session ends |
| Sentiment Analysis (analyze reviews) | Member 3 | 1 | Positive/Negative tags on reviews |
| Content Moderation (auto-filter reviews/messages) | Member 3 | 1 | Inappropriate content blocked |
| Admin Panel API (user management, tutor verification, disputes) | Member 3 | 3 | Admin endpoints |
| Admin Panel UI (tables, actions, analytics) | Member 1 | 4 | Admin dashboard |
| **Student Dashboard — enhanced** (favorites, session recordings link) | Member 2 | 2 | Polished dashboard |
| **Tutor Dashboard — enhanced** (analytics charts, availability calendar) | Member 2 | 3 | Charts + calendar |
| **Checkpoint**: Admin can manage users → AI assistant works → dashboards polished | All | — | ✅ Advanced features done |

---

### Phase 5: Polish, Test & Deploy (Weeks 17-20) — Nov 7 – Dec 5

| Task | Owner | Days | Deliverable |
|------|-------|------|-------------|
| Responsive design audit (all pages on mobile/tablet) | Member 1 | 3 | Works on all devices |
| Performance optimization (lazy loading, code splitting) | Member 1 + Member 2 | 2 | Lighthouse score 85+ |
| Backend testing (Jest + Supertest for all APIs) | Member 3 | 4 | 80%+ test coverage |
| Frontend testing (Vitest for critical components) | Member 2 | 3 | Core flows tested |
| Security audit (helmet, rate limiting, input sanitization) | Member 3 + Member 4 | 2 | No XSS/injection vulnerabilities |
| MongoDB index optimization | Member 4 | 1 | Search queries under 200ms |
| Deploy frontend to Vercel | Member 4 | 1 | Live URL |
| Deploy backend to Render | Member 4 | 1 | API live |
| Seed database with demo data | Member 4 | 1 | Realistic demo content |
| Bug fixes & edge cases | All | 5 | Stable product |
| Documentation (README, API docs, setup guide) | All | 3 | Complete docs |
| Demo video recording | All | 1 | 5-min walkthrough |
| Presentation slides | All | 2 | 15-20 slides |
| **Checkpoint**: Live URL works → demo is polished → presentation ready | All | — | ✅ DONE |

---

## 📐 PROJECT FOLDER STRUCTURE

```
tutoring-marketplace/
├── frontend/                    # React + Vite
│   ├── public/
│   │   └── favicon.ico
│   ├── src/
│   │   ├── assets/              # Images, icons, fonts
│   │   ├── components/          # Reusable UI components
│   │   │   ├── common/          # Button, Input, Modal, Card, Loader
│   │   │   ├── layout/          # Navbar, Footer, Sidebar, Layout
│   │   │   └── ui/              # TutorCard, ReviewCard, SessionCard
│   │   ├── pages/               # Route-level page components
│   │   │   ├── Home.jsx
│   │   │   ├── Search.jsx
│   │   │   ├── TutorProfile.jsx
│   │   │   ├── Booking.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── StudentDashboard.jsx
│   │   │   ├── TutorDashboard.jsx
│   │   │   ├── Chat.jsx
│   │   │   ├── VideoCall.jsx
│   │   │   ├── AdminPanel.jsx
│   │   │   └── NotFound.jsx
│   │   ├── hooks/               # Custom React hooks
│   │   │   ├── useAuth.js
│   │   │   ├── useSocket.js
│   │   │   └── useDebounce.js
│   │   ├── store/               # Zustand stores
│   │   │   ├── authStore.js
│   │   │   ├── notificationStore.js
│   │   │   └── chatStore.js
│   │   ├── services/            # API call functions
│   │   │   ├── api.js           # Axios instance with interceptors
│   │   │   ├── authService.js
│   │   │   ├── tutorService.js
│   │   │   ├── bookingService.js
│   │   │   ├── chatService.js
│   │   │   └── aiService.js
│   │   ├── utils/               # Helper functions
│   │   │   ├── formatDate.js
│   │   │   ├── formatCurrency.js
│   │   │   └── validators.js
│   │   ├── styles/              # Global CSS
│   │   │   └── index.css
│   │   ├── App.jsx              # Root component + routes
│   │   └── main.jsx             # Entry point
│   ├── .env.example
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
│
├── backend/                     # Node.js + Express
│   ├── src/
│   │   ├── config/              # Configuration
│   │   │   ├── db.js            # MongoDB connection
│   │   │   ├── cloudinary.js    # Cloudinary config
│   │   │   ├── razorpay.js      # Razorpay config
│   │   │   └── socket.js        # Socket.IO setup
│   │   ├── models/              # Mongoose schemas
│   │   │   ├── User.js
│   │   │   ├── Tutor.js
│   │   │   ├── Session.js
│   │   │   ├── Payment.js
│   │   │   ├── Review.js
│   │   │   ├── Message.js
│   │   │   ├── Availability.js
│   │   │   └── Notification.js
│   │   ├── routes/              # Express routes
│   │   │   ├── authRoutes.js
│   │   │   ├── userRoutes.js
│   │   │   ├── tutorRoutes.js
│   │   │   ├── sessionRoutes.js
│   │   │   ├── paymentRoutes.js
│   │   │   ├── reviewRoutes.js
│   │   │   ├── chatRoutes.js
│   │   │   ├── aiRoutes.js
│   │   │   └── adminRoutes.js
│   │   ├── controllers/         # Route handlers
│   │   │   ├── authController.js
│   │   │   ├── userController.js
│   │   │   ├── tutorController.js
│   │   │   ├── sessionController.js
│   │   │   ├── paymentController.js
│   │   │   ├── reviewController.js
│   │   │   ├── chatController.js
│   │   │   ├── aiController.js
│   │   │   └── adminController.js
│   │   ├── middleware/          # Express middleware
│   │   │   ├── auth.js          # JWT verification
│   │   │   ├── roleCheck.js     # Role-based access
│   │   │   ├── errorHandler.js  # Global error handler
│   │   │   ├── rateLimiter.js   # Rate limiting
│   │   │   └── upload.js        # Multer config
│   │   ├── utils/               # Helpers
│   │   │   ├── sendEmail.js     # Nodemailer wrapper
│   │   │   ├── generateToken.js # JWT helper
│   │   │   └── apiError.js      # Custom error class
│   │   ├── socket/              # Socket.IO handlers
│   │   │   ├── chatHandler.js
│   │   │   └── notificationHandler.js
│   │   └── app.js               # Express app setup
│   ├── server.js                # Entry point (app.listen)
│   ├── .env.example
│   └── package.json
│
├── .gitignore
├── README.md
└── docs/
    ├── api-contract.md          # All endpoints documented
    ├── database-schema.md       # All collections
    └── setup-guide.md           # How to run locally
```

---

## 🗄️ FINAL DATABASE SCHEMA (Corrected & Complete)

### Users Collection
```javascript
{
  _id: ObjectId,
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },  // bcrypt hashed
  role: { type: String, enum: ["student", "tutor", "admin"], default: "student" },
  profilePhoto: { type: String, default: "" },  // Cloudinary URL
  phone: { type: String, default: "" },
  isVerified: { type: Boolean, default: false },
  isBlocked: { type: Boolean, default: false },
  verificationToken: String,
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  createdAt: Date,  // auto via timestamps: true
  updatedAt: Date
}
// Indexes: email (unique)
```

### Tutors Collection (extends User)
```javascript
{
  _id: ObjectId,
  userId: { type: ObjectId, ref: "User", required: true, unique: true },
  subjects: [{ type: String, trim: true }],
  experience: { type: Number, min: 0 },  // years (NUMBER, not string)
  qualifications: { type: String, default: "" },
  bio: { type: String, maxlength: 1000 },
  hourlyRate: { type: Number, required: true, min: 0 },
  currency: { type: String, default: "INR" },
  rating: { type: Number, default: 0, min: 0, max: 5 },
  totalReviews: { type: Number, default: 0 },
  isApproved: { type: Boolean, default: false },  // admin approval
  approvedAt: Date,
  totalEarnings: { type: Number, default: 0 },
  totalSessions: { type: Number, default: 0 },
  languages: [{ type: String }],
  createdAt: Date,
  updatedAt: Date
}
// Indexes: userId (unique), subjects, hourlyRate, rating (for search/filter)
```

### Sessions Collection
```javascript
{
  _id: ObjectId,
  studentId: { type: ObjectId, ref: "User", required: true },
  tutorId: { type: ObjectId, ref: "User", required: true },
  subject: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  // duration is computed: (endTime - startTime) — no stored field needed
  status: {
    type: String,
    enum: ["booked", "in-progress", "completed", "cancelled", "no-show"],
    default: "booked"
  },
  paymentId: { type: ObjectId, ref: "Payment" },
  meetingRoomId: { type: String },  // Jitsi room ID
  notes: { type: String, default: "" },
  summary: { type: String, default: "" },  // AI-generated summary
  cancelledBy: { type: String, enum: ["student", "tutor", null], default: null },
  cancellationReason: { type: String, default: "" },
  createdAt: Date,
  updatedAt: Date
}
// Indexes: studentId, tutorId, startTime, status
```

### Payments Collection
```javascript
{
  _id: ObjectId,
  sessionId: { type: ObjectId, ref: "Session", required: true },
  studentId: { type: ObjectId, ref: "User", required: true },
  tutorId: { type: ObjectId, ref: "User", required: true },
  amount: { type: Number, required: true },
  currency: { type: String, default: "INR" },
  status: {
    type: String,
    enum: ["pending", "completed", "failed", "refunded"],
    default: "pending"
  },
  razorpayOrderId: { type: String },
  razorpayPaymentId: { type: String },
  razorpaySignature: { type: String },
  paymentDate: Date,
  refundAmount: { type: Number, default: 0 },
  refundDate: Date,
  createdAt: Date,
  updatedAt: Date
}
// Indexes: sessionId, studentId, razorpayOrderId
```

### Reviews Collection
```javascript
{
  _id: ObjectId,
  sessionId: { type: ObjectId, ref: "Session", required: true },
  studentId: { type: ObjectId, ref: "User", required: true },
  tutorId: { type: ObjectId, ref: "User", required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, maxlength: 500 },
  sentiment: { type: String, enum: ["positive", "negative", "neutral"] },  // AI-generated
  isModerated: { type: Boolean, default: false },  // AI moderation flag
  createdAt: Date,
  updatedAt: Date
}
// Indexes: tutorId, studentId, sessionId (unique — one review per session)
```

### Messages Collection
```javascript
{
  _id: ObjectId,
  conversationId: { type: String, required: true },  // sorted `${id1}_${id2}`
  senderId: { type: ObjectId, ref: "User", required: true },
  receiverId: { type: ObjectId, ref: "User", required: true },
  message: { type: String, required: true },
  isRead: { type: Boolean, default: false },
  createdAt: Date
}
// Indexes: conversationId, senderId + receiverId (compound)
```

### Availability Collection
```javascript
{
  _id: ObjectId,
  tutorId: { type: ObjectId, ref: "User", required: true },
  dayOfWeek: {
    type: Number,  // 0 = Sunday, 1 = Monday, ... 6 = Saturday
    required: true, min: 0, max: 6
  },
  startTime: { type: String, required: true },  // "09:00" (HH:mm)
  endTime: { type: String, required: true },    // "17:00" (HH:mm)
  isActive: { type: Boolean, default: true },
  createdAt: Date,
  updatedAt: Date
}
// Indexes: tutorId + dayOfWeek (compound)
```

### Notifications Collection *(NEW — was missing from original docs)*
```javascript
{
  _id: ObjectId,
  userId: { type: ObjectId, ref: "User", required: true },
  type: {
    type: String,
    enum: ["booking", "payment", "review", "message", "system", "reminder"],
    required: true
  },
  title: { type: String, required: true },
  message: { type: String, required: true },
  isRead: { type: Boolean, default: false },
  link: { type: String, default: "" },  // URL to navigate on click
  createdAt: Date
}
// Indexes: userId + isRead (compound), createdAt (TTL index — auto-delete after 30 days)
```

---

## 📡 API ENDPOINTS CONTRACT

### Auth (`/api/auth`)
| Method | Endpoint | Body | Response | Owner |
|--------|----------|------|----------|-------|
| POST | `/register` | `{ name, email, password, role }` | `{ user, token }` | Member 3 |
| POST | `/login` | `{ email, password }` | `{ user, token }` | Member 3 |
| POST | `/forgot-password` | `{ email }` | `{ message }` | Member 3 |
| POST | `/reset-password/:token` | `{ password }` | `{ message }` | Member 3 |
| GET | `/verify-email/:token` | — | `{ message }` | Member 3 |
| GET | `/me` | — (JWT) | `{ user }` | Member 3 |

### Tutors (`/api/tutors`)
| Method | Endpoint | Purpose | Owner |
|--------|----------|---------|-------|
| GET | `/search?subject=&minPrice=&maxPrice=&rating=&page=&limit=` | Search + filter + paginate | Member 3 |
| GET | `/:id` | Get tutor profile | Member 3 |
| PUT | `/:id` | Update profile | Member 3 |
| GET | `/:id/availability` | Get availability slots | Member 3 |
| POST | `/:id/availability` | Create availability slot | Member 3 |
| DELETE | `/:id/availability/:slotId` | Delete a slot | Member 3 |

### Sessions (`/api/sessions`)
| Method | Endpoint | Purpose | Owner |
|--------|----------|---------|-------|
| POST | `/` | Book a session | Member 3 |
| GET | `/my` | List my sessions (student or tutor) | Member 3 |
| GET | `/:id` | Get session details | Member 3 |
| PUT | `/:id/cancel` | Cancel session | Member 3 |
| PUT | `/:id/reschedule` | Reschedule | Member 3 |
| PUT | `/:id/complete` | Mark completed | Member 3 |
| PUT | `/:id/summary` | Save AI summary | Member 3 |

### Payments (`/api/payments`)
| Method | Endpoint | Purpose | Owner |
|--------|----------|---------|-------|
| POST | `/create-order` | Create Razorpay order | Member 4 |
| POST | `/verify` | Verify payment signature | Member 4 |
| POST | `/webhook` | Razorpay webhook handler | Member 4 |
| GET | `/history` | Payment history | Member 4 |
| POST | `/:id/refund` | Process refund | Member 4 |

### Reviews (`/api/reviews`)
| Method | Endpoint | Purpose | Owner |
|--------|----------|---------|-------|
| POST | `/` | Create review (after session) | Member 3 |
| GET | `/tutor/:tutorId` | Get all reviews for tutor | Member 3 |
| PUT | `/:id` | Edit review | Member 3 |
| DELETE | `/:id` | Delete review | Member 3 |

### Chat (`/api/chat`)
| Method | Endpoint | Purpose | Owner |
|--------|----------|---------|-------|
| GET | `/conversations` | List all conversations | Member 3 |
| GET | `/messages/:conversationId` | Message history | Member 3 |
| POST | `/messages` | Send message (also via Socket.IO) | Member 3 |

### AI (`/api/ai`)
| Method | Endpoint | Purpose | Owner |
|--------|----------|---------|-------|
| POST | `/ask` | AI tutoring assistant | Member 3 |
| POST | `/summarize` | Summarize session transcript | Member 3 |
| POST | `/moderate` | Check content appropriateness | Member 3 |

### Admin (`/api/admin`)
| Method | Endpoint | Purpose | Owner |
|--------|----------|---------|-------|
| GET | `/users` | List all users | Member 3 |
| PUT | `/users/:id/block` | Block/unblock user | Member 3 |
| PUT | `/tutors/:id/approve` | Approve tutor | Member 3 |
| GET | `/stats` | Dashboard analytics | Member 3 |
| GET | `/payments` | All payment records | Member 3 |

### Socket.IO Events (Real-Time)
| Event | Direction | Payload | Owner |
|-------|-----------|---------|-------|
| `join-room` | Client → Server | `{ conversationId }` | Member 4 |
| `send-message` | Client → Server | `{ conversationId, message }` | Member 4 |
| `receive-message` | Server → Client | `{ message, sender, timestamp }` | Member 4 |
| `typing` | Client → Server | `{ conversationId, userId }` | Member 4 |
| `user-typing` | Server → Client | `{ userId }` | Member 4 |
| `user-online` | Server → Client | `{ userId, online }` | Member 4 |
| `notification` | Server → Client | `{ type, title, message }` | Member 4 |

---

## 🎨 DESIGN SYSTEM DECISIONS

### Fonts
```
Primary: "Inter" — clean, modern, excellent readability
Secondary: "Space Grotesk" — geometric, techy feel for headings
Mono: "JetBrains Mono" — for code blocks in AI chat
```

### Color Palette (Dark + Light mode support)

```
Primary:        #6366F1 (Indigo-500)     — buttons, links, active states
Primary Dark:   #4F46E5 (Indigo-600)     — hover states
Secondary:      #06B6D4 (Cyan-500)       — accents, badges
Success:        #10B981 (Emerald-500)    — completed, paid
Warning:        #F59E0B (Amber-500)      — pending, attention
Danger:         #EF4444 (Red-500)        — errors, cancelled
Background:     #F8FAFC (Slate-50)       — page background (light)
Surface:        #FFFFFF                   — cards, panels (light)
Text Primary:   #0F172A (Slate-900)      — headings
Text Secondary: #64748B (Slate-500)      — descriptions
Border:         #E2E8F0 (Slate-200)      — dividers
```

### Spacing Scale
```
4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px
(Tailwind: p-1, p-2, p-3, p-4, p-6, p-8, p-12, p-16, p-24)
```

### Border Radius
```
Small: 6px (rounded-md)  — inputs, buttons
Medium: 12px (rounded-xl) — cards
Large: 16px (rounded-2xl) — modals, panels
Full: 9999px (rounded-full) — avatars, badges
```

---

## 🔀 GIT WORKFLOW

### Branch Strategy
```
main              ← production-ready code (deploy from here)
  └── dev         ← integration branch (all features merge here first)
       ├── feat/auth          (Member 3)
       ├── feat/tutor-profile (Member 1 + 3)
       ├── feat/search        (Member 1 + 3)
       ├── feat/booking       (Member 1 + 3)
       ├── feat/payment       (Member 4)
       ├── feat/chat          (Member 2 + 4)
       ├── feat/video         (Member 2 + 4)
       ├── feat/dashboard     (Member 2)
       ├── feat/ai            (Member 3)
       ├── feat/admin         (Member 1 + 3)
       └── fix/bug-name       (Anyone)
```

### Rules
1. **Never push directly to `main` or `dev`**
2. Create a **Pull Request** for every feature → merge into `dev`
3. At least **1 team member** must review before merge
4. `main` is updated from `dev` only at **end of each phase**
5. Commit messages: `feat: add login page`, `fix: search pagination`, `docs: update README`

---

## ⚠️ TOP 5 RISKS & HOW TO HANDLE THEM

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|-----------|
| **Video calling breaks** | Medium | HIGH | Using Jitsi (proven, free) instead of raw WebRTC. If Jitsi fails, fall back to embedding Google Meet links |
| **Socket.IO disconnects** | Medium | Medium | Implement reconnection + message queue. Store all messages in DB (never lose data) |
| **Razorpay webhook issues** | Low | HIGH | Use Razorpay test mode first. Log EVERY webhook. Handle duplicate events |
| **MongoDB free tier runs out** | Low | Medium | 512MB is plenty for demo. Clean up test data periodically |
| **Team member falls behind** | HIGH | HIGH | Weekly Sunday syncs. If someone is stuck for 2+ days, pair program. Redistribute load early |

---

## 📋 WHAT EACH MEMBER SHOULD DO IN WEEK 0 (July 18-19)

### Member 1 (Frontend UI/UX)
- [ ] Install Node.js 20, VS Code, Git
- [ ] Complete a React crash course (Traversy Media or freeCodeCamp, 2-3 hours)
- [ ] Complete Tailwind CSS basics (1-2 hours)
- [ ] Install Figma (free) and create a new project
- [ ] Start wireframing: Home, Search, TutorProfile, Login, Register

### Member 2 (Frontend Dashboards)
- [ ] Install Node.js 20, VS Code, Git
- [ ] Complete a React crash course (2-3 hours)
- [ ] Learn Zustand state management (30 min YouTube tutorial)
- [ ] Learn Socket.IO basics (client side, 1 hour)
- [ ] Start wireframing: StudentDashboard, TutorDashboard, Chat, VideoCall

### Member 3 (Backend Core)
- [ ] Install Node.js 20, VS Code, Git, Postman
- [ ] Complete an Express.js crash course (2-3 hours)
- [ ] Complete a Mongoose crash course (1-2 hours)
- [ ] Learn JWT authentication flow (1 hour)
- [ ] Start writing the API contract document (list all endpoints)

### Member 4 (Backend DevOps)
- [ ] Install Node.js 20, VS Code, Git, MongoDB Compass
- [ ] Create GitHub repo with proper `.gitignore`
- [ ] Set up MongoDB Atlas free cluster
- [ ] Create `.env.example` with all required variables
- [ ] Learn Razorpay basics (read docs, 1 hour)
- [ ] Learn Socket.IO server-side basics (1 hour)

---

> [!TIP]
> **Weekly Sync Rule**: Every Sunday, all 4 members meet for 30 min. Each person answers:
> 1. What did I finish this week?
> 2. What am I doing next week?
> 3. Am I blocked on anything?
>
> This alone prevents 80% of college project disasters.

---

**Ready to build. Start July 18. Ship by December. 🚀**

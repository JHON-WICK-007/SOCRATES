# SOCRATES: Online Tutoring Marketplace - 4 Person SGP Breakdown

## ✅ PROJECT SUITABILITY FOR 4-PERSON TEAM

| Criteria | Score | Status |
|----------|-------|--------|
| Innovation | 9/10 | ✅ Excellent |
| Complexity | 10/10 | ✅ Perfect for 4-5 members |
| Industry Relevance | 10/10 | ✅ Real-world use case |
| Learning Opportunity | 10/10 | ✅ Full-stack learning |
| Presentation Impact | 10/10 | ✅ Impressive demo |
| SGP Suitability (4 members) | 10/10 | ✅ Ideal fit |

---

## 👥 RECOMMENDED TEAM STRUCTURE (4 PEOPLE)

### **Member 1: Frontend Developer (UI/UX)**
**Time Allocation:** 4-5 months

**Responsibilities:**
- Home Page & Landing Page
- Tutor Search & Filter UI
- Tutor Profile Pages
- Session Booking UI
- Responsive Design (Mobile/Tablet/Desktop)

**Features to Build:**
- Homepage with search bar
- Advanced filter options (subject, price, rating, experience)
- Tutor profile cards with ratings/reviews
- Booking calendar interface
- Payment checkout UI

**Libraries/Tools:**
- React.js with Vite
- Tailwind CSS
- React Router
- Axios (API calls)
- React Query (data fetching)

**Time Breakdown:**
- Setup & Design System: 3 days
- Home & Search Page: 8 days
- Tutor Profiles: 6 days
- Booking UI: 7 days
- Responsive Design & Testing: 6 days
- **Total: ~30 days**

---

### **Member 2: Frontend Developer (Dashboards & Real-time)**
**Time Allocation:** 4-5 months

**Responsibilities:**
- Student Dashboard
- Tutor Dashboard
- Calendar System (integration)
- Real-time Chat UI
- Notifications UI
- Session Recording Download Page

**Features to Build:**
- Student dashboard (upcoming sessions, payment history, favorites)
- Tutor dashboard (earnings, bookings, student management)
- FullCalendar integration for session scheduling
- Chat interface with typing indicators
- Session history pages
- Recording management interface

**Libraries/Tools:**
- React.js with Vite
- Tailwind CSS
- Socket.IO Client (real-time)
- FullCalendar.io
- Axios
- Framer Motion (animations)

**Time Breakdown:**
- Student Dashboard: 8 days
- Tutor Dashboard: 8 days
- Calendar Integration: 6 days
- Chat UI (paired with real-time): 5 days
- Notifications: 3 days
- Recording Interface: 2 days
- **Total: ~32 days**

---

### **Member 3: Backend Developer (Core APIs)**
**Time Allocation:** 4-5 months

**Responsibilities:**
- Authentication & Authorization
- User Management APIs
- Booking/Session Management APIs
- Search & Filter APIs
- Notifications System
- Admin Panel Backend

**Features to Build:**
- User registration & login (JWT)
- Password reset functionality
- Role-based access control (Student/Tutor/Admin)
- Tutor profile management
- Session booking/cancellation/rescheduling
- Search API with filters
- Notification system
- Admin management endpoints

**Tech Stack:**
- Node.js with Express.js
- JWT (authentication)
- bcrypt (password hashing)
- Nodemailer (email notifications)
- Mongoose (ODM)

**Time Breakdown:**
- Authentication & JWT: 5 days
- User Management APIs: 4 days
- Booking APIs (CRUD): 6 days
- Search & Filter APIs: 4 days
- Notifications: 3 days
- Admin APIs: 4 days
- Testing & Debugging: 4 days
- **Total: ~30 days**

---

### **Member 4: Backend Developer + DevOps (Database & Advanced Features)**
**Time Allocation:** 4-5 months

**Responsibilities:**
- Database Design & Management (MongoDB)
- Payment Integration (Stripe)
- Real-time Communication (Socket.IO)
- Video Calling Backend (WebRTC signaling)
- Session Recording Storage
- Deployment & DevOps
- Admin Dashboard Backend

**Features to Build:**
- MongoDB database design & collections
- Stripe payment processing
- Payment history & invoicing
- Socket.IO real-time chat
- WebRTC signaling server
- Session recording cloud storage (AWS S3 or similar)
- Review & rating system
- Admin panel backend
- Database optimization

**Tech Stack:**
- Node.js & Express.js
- MongoDB Atlas
- Mongoose ODM
- Socket.IO (real-time)
- Stripe API
- AWS S3 (or Firebase Storage)
- WebRTC (for signaling)
- PM2 (process management)
- Render or Railway (deployment)

**Time Breakdown:**
- Database Design: 3 days
- Payment Integration: 5 days
- Socket.IO Setup: 4 days
- WebRTC Signaling: 6 days
- Session Recording: 7 days
- Admin Dashboard: 5 days
- Cloud Storage Setup: 3 days
- Deployment & DevOps: 4 days
- Testing & Optimization: 4 days
- **Total: ~41 days**

---

## 📋 COMPLETE FEATURE BREAKDOWN WITH TIME ESTIMATES

### **Phase 1: Foundation (Weeks 1-3)**

#### Feature 1: Authentication System
- **Time:** 4-5 days
- **What's Included:**
  - User Registration (Student/Tutor/Admin roles)
  - Login with JWT tokens
  - Password reset email
  - Email verification
  - Session management
- **Team:** Member 3 (Backend)
- **Status:** Critical Path

#### Feature 2: Tutor Profiles
- **Time:** 4 days (Frontend) + 2 days (Backend) = 6 days
- **What's Included:**
  - Tutor info (name, photo, bio)
  - Subjects (array of subjects)
  - Experience & qualifications
  - Hourly rate
  - Initial rating display
  - Edit profile functionality
- **Team:** Member 1 (Frontend) + Member 3 (Backend)
- **Status:** Critical Path

#### Feature 3: Search & Filters
- **Time:** 3 days (Frontend) + 4 days (Backend) = 7 days
- **What's Included:**
  - Search by subject/keyword
  - Filter by price range
  - Filter by rating (4+ stars, etc.)
  - Filter by experience level
  - Pagination
  - Search suggestions/autocomplete
- **Team:** Member 1 (Frontend) + Member 3 (Backend)
- **Status:** Critical Path

---

### **Phase 2: Core Booking System (Weeks 4-6)**

#### Feature 4: Session Booking System
- **Time:** 5 days (Frontend) + 6 days (Backend) = 11 days
- **What's Included:**
  - View available time slots
  - Book a session
  - Cancel session (with refund logic)
  - Reschedule session
  - Booking confirmation
  - Payment before booking
- **Team:** Member 1 & Member 2 (Frontend) + Member 3 & Member 4 (Backend)
- **Status:** Critical Path
- **Complexity:** ⭐⭐⭐

#### Feature 5: Calendar Scheduling
- **Time:** 4 days (Frontend) + 3 days (Backend) = 7 days
- **What's Included:**
  - Student calendar (see upcoming sessions)
  - Tutor calendar (manage availability)
  - Available slot creation (tutor)
  - Sync with database
  - Conflict prevention
  - FullCalendar integration
- **Team:** Member 2 (Frontend) + Member 4 (Backend)
- **Status:** Critical Path
- **Tools:** FullCalendar.io library

#### Feature 6: Payment System
- **Time:** 4 days
- **What's Included:**
  - Stripe integration
  - Session payment checkout
  - Payment history tracking
  - Invoice generation
  - Refund handling
  - Payment status updates
- **Team:** Member 4 (Backend)
- **Status:** Critical Path
- **Tools:** Stripe API, Stripe Checkout

---

### **Phase 3: Real-time Features (Weeks 7-10)**

#### Feature 7: Real-Time Chat
- **Time:** 5 days (Frontend) + 3 days (Backend) = 8 days
- **What's Included:**
  - Student ↔ Tutor messaging
  - Message history
  - Typing indicators
  - Online/offline status
  - Notification for new messages
  - Message timestamps
- **Team:** Member 2 (Frontend) + Member 4 (Backend)
- **Status:** Important
- **Tools:** Socket.IO
- **Complexity:** ⭐⭐⭐

#### Feature 8: Live Video Session (MOST COMPLEX)
- **Time:** 10 days (Frontend) + 12 days (Backend) = 22 days
- **What's Included:**
  - Join meeting room
  - Video calling
  - Audio calling
  - Screen sharing
  - End session functionality
  - Automatic recording trigger
  - Session quality indicator
  - Bandwidth management
- **Team:** Member 2 (Frontend) + Member 4 (Backend) + Optional 5th person (Video Specialist)
- **Status:** Most Critical & Complex
- **Complexity:** ⭐⭐⭐⭐⭐
- **Technologies:**
  - WebRTC (peer-to-peer video)
  - STUN/TURN servers
  - Socket.IO (signaling)
  - NAT traversal handling
- **Option:** Use Daily.co or Jitsi API instead (easier, 5 days total)

#### Feature 9: Session Recording (ADVANCED)
- **Time:** 6 days
- **What's Included:**
  - Record video sessions
  - Cloud storage (S3/Firebase)
  - Download recordings
  - Access control (student can download)
  - Storage management
  - Automatic cleanup of old recordings
- **Team:** Member 4 (Backend)
- **Status:** Advanced Feature (for impressive SGP)
- **Complexity:** ⭐⭐⭐⭐⭐
- **Tools:** AWS S3, MediaRecorder API, FFmpeg

---

### **Phase 4: Dashboards & Management (Weeks 11-12)**

#### Feature 10: Student Dashboard
- **Time:** 4 days
- **What's Included:**
  - Upcoming sessions list
  - Payment history
  - Favorite tutors
  - Session recordings (can access)
  - Reviews history
  - Edit profile
  - Quick book feature
- **Team:** Member 2 (Frontend)
- **Status:** Important

#### Feature 11: Tutor Dashboard
- **Time:** 5 days
- **What's Included:**
  - Total earnings/stats
  - Bookings (upcoming & past)
  - Session history
  - Student management
  - Availability management
  - Performance metrics
  - Reviews received
  - Availability calendar
- **Team:** Member 2 (Frontend) + Member 4 (Backend)
- **Status:** Important

#### Feature 12: Admin Panel
- **Time:** 5 days
- **What's Included:**
  - User management (view, block, delete)
  - Tutor verification
  - Payment monitoring
  - Dispute resolution
  - Revenue reports
  - User analytics
  - System health monitoring
- **Team:** Member 1 (UI) + Member 3 (Backend APIs)
- **Status:** Important

#### Feature 13: Review System
- **Time:** 2 days (Frontend) + 2 days (Backend) = 4 days
- **What's Included:**
  - Leave ratings (1-5 stars)
  - Write reviews
  - Edit reviews
  - Delete reviews
  - Average rating calculation
  - Review moderation (admin)
- **Team:** Member 1 (Frontend) + Member 3 (Backend)
- **Status:** Nice to Have

---

## 🗄️ DATABASE SCHEMA (MongoDB Collections)

### **Users Collection**
```javascript
{
  "_id": ObjectId,
  "name": String,
  "email": String (unique),
  "password": String (hashed with bcrypt),
  "role": String (enum: "student", "tutor", "admin"),
  "profilePhoto": String (URL to image),
  "phone": String,
  "createdAt": Date,
  "updatedAt": Date,
  "isVerified": Boolean,
  "isBlocked": Boolean
}
```

### **Tutors Collection (Extended User Profile)**
```javascript
{
  "_id": ObjectId,
  "userId": ObjectId (ref: Users),
  "subjects": [String],
  "experience": String (years),
  "qualifications": String,
  "bio": String,
  "hourlyRate": Number,
  "rating": Number (average),
  "totalReviews": Number,
  "isVerified": Boolean (admin approval),
  "verificationDate": Date,
  "totalEarnings": Number,
  "totalSessions": Number,
  "responseTime": Number (in minutes),
  "languages": [String]
}
```

### **Sessions Collection**
```javascript
{
  "_id": ObjectId,
  "studentId": ObjectId (ref: Users),
  "tutorId": ObjectId (ref: Users),
  "subject": String,
  "startTime": Date,
  "endTime": Date,
  "duration": Number (in minutes),
  "status": String (enum: "booked", "completed", "cancelled", "no-show"),
  "paymentId": ObjectId (ref: Payments),
  "recordingUrl": String (optional),
  "notes": String,
  "cancelledBy": String (student/tutor),
  "cancellationReason": String
}
```

### **Payments Collection**
```javascript
{
  "_id": ObjectId,
  "sessionId": ObjectId (ref: Sessions),
  "studentId": ObjectId (ref: Users),
  "tutorId": ObjectId (ref: Users),
  "amount": Number,
  "currency": String (default: "USD"),
  "status": String (enum: "pending", "completed", "failed", "refunded"),
  "stripePaymentId": String,
  "paymentDate": Date,
  "refundAmount": Number (optional),
  "refundDate": Date (optional)
}
```

### **Reviews Collection**
```javascript
{
  "_id": ObjectId,
  "sessionId": ObjectId (ref: Sessions),
  "studentId": ObjectId (ref: Users),
  "tutorId": ObjectId (ref: Users),
  "rating": Number (1-5),
  "comment": String,
  "createdAt": Date,
  "updatedAt": Date,
  "helpful": Number (count)
}
```

### **Messages Collection (Chat)**
```javascript
{
  "_id": ObjectId,
  "senderId": ObjectId (ref: Users),
  "recipientId": ObjectId (ref: Users),
  "message": String,
  "timestamp": Date,
  "isRead": Boolean,
  "conversationId": String
}
```

### **Availability Collection (Tutor Slots)**
```javascript
{
  "_id": ObjectId,
  "tutorId": ObjectId (ref: Users),
  "dayOfWeek": String,
  "startTime": String (HH:MM),
  "endTime": String (HH:MM),
  "isRecurring": Boolean,
  "createdAt": Date
}
```

---

## 🛠️ COMPLETE TECH STACK

### **Frontend Stack**
| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | React.js 18+ | UI library |
| Build Tool | Vite | Fast bundling |
| Styling | Tailwind CSS | Utility-first CSS |
| Routing | React Router v6 | Page navigation |
| HTTP Client | Axios | API calls |
| State Management | Context API or Zustand | Global state |
| Real-time | Socket.IO Client | Live chat & notifications |
| Calendar | FullCalendar.io | Session scheduling |
| UI Components | Headless UI / Radix UI | Accessible components |
| Animation | Framer Motion | Smooth animations |
| Icons | React Icons | Icon library |
| Forms | React Hook Form | Form management |
| Validation | Zod | Schema validation |
| Testing | Vitest + React Testing Library | Unit & integration tests |

### **Backend Stack**
| Layer | Technology | Purpose |
|-------|-----------|---------|
| Runtime | Node.js 18+ | JavaScript runtime |
| Framework | Express.js | Web server |
| Database | MongoDB | NoSQL database |
| ODM | Mongoose | MongoDB object modeling |
| Authentication | JWT + bcrypt | Secure auth |
| Real-time | Socket.IO | WebSocket library |
| Video | WebRTC | Peer-to-peer video |
| Storage | AWS S3 or Firebase | Video/recording storage |
| Payments | Stripe API | Payment processing |
| Email | Nodemailer | Email notifications |
| File Upload | Multer | File handling |
| Validation | Joi or Zod | Input validation |
| Logging | Winston or Pino | Application logs |
| Testing | Jest + Supertest | Backend tests |
| Process Manager | PM2 | Production process management |

### **Deployment Stack**
| Component | Technology |
|-----------|-----------|
| Frontend Hosting | Vercel or Netlify |
| Backend Hosting | Render, Railway, or Heroku |
| Database Hosting | MongoDB Atlas (free tier available) |
| Storage | AWS S3 (free tier) or Firebase Storage |
| Domain | Namecheap or GoDaddy |
| SSL Certificate | Let's Encrypt (free via Render/Vercel) |
| CDN | Cloudflare (free tier) |

---

## 📅 RECOMMENDED DEVELOPMENT TIMELINE (4-5 Months = ~20 weeks)

| Week | Phase | Key Deliverables | Team Focus |
|------|-------|-----------------|-----------|
| Week 1 | Planning & Setup | Project setup, design mockups, API design | All |
| Week 2 | Design System | UI components, Tailwind setup, design tokens | Members 1 & 2 |
| Week 3 | Authentication | Login/Register, JWT, password reset | Member 3 |
| Week 4 | Tutor Profiles | Profile CRUD, upload photo, display | Members 1 & 3 |
| Week 5 | Search & Filters | Filter logic, search API, UI implementation | Members 1 & 3 |
| Week 6 | Booking System - Part 1 | Booking UI, availability checking | Members 1 & 3 |
| Week 7 | Booking System - Part 2 | Complete booking flow, payment prep | Members 4 & All |
| Week 8 | Calendar Integration | FullCalendar, availability management | Members 2 & 4 |
| Week 9 | Chat System | Socket.IO setup, real-time chat | Members 2 & 4 |
| Week 10 | Payment Integration | Stripe integration, payment flow | Member 4 |
| Week 11 | Video Calling - Part 1 | WebRTC signaling, join room | Members 2 & 4 |
| Week 12 | Video Calling - Part 2 | Screen sharing, audio/video controls | Members 2 & 4 |
| Week 13 | Recording Feature | Session recording, cloud storage | Member 4 |
| Week 14 | Dashboards | Student/Tutor/Admin dashboards | Members 1, 2 & 3 |
| Week 15 | Reviews & Polish | Review system, UI refinements | Members 1 & 3 |
| Week 16 | Testing & Bug Fix | Unit tests, integration tests, debugging | All |
| Week 17 | Deployment & DevOps | Deploy to production, monitoring | Member 4 |
| Week 18 | Performance | Optimization, database indexing | Members 3 & 4 |
| Week 19 | Documentation | Code documentation, API docs, README | All |
| Week 20 | Final Presentation | Demo video, presentation slides | All |

---

## ⚠️ RISK ANALYSIS & HARD PARTS

### **Critical Risks (Must Handle)**

#### 1. **WebRTC Implementation** ⭐⭐⭐⭐⭐
- **Problem:** NAT traversal, STUN/TURN server setup
- **Impact:** Video calling won't work without proper setup
- **Solution:**
  - Use Daily.co API (recommended for college project) - easier
  - Or use Jitsi API - open source but simpler than raw WebRTC
  - If raw WebRTC: Must implement STUN/TURN servers (costs money)
- **Time Saved:** 5 days if using API instead of WebRTC
- **Risk Level:** HIGH

#### 2. **Real-Time Synchronization** ⭐⭐⭐⭐
- **Problem:** Socket.IO connection drops, message delays
- **Impact:** Chat/notifications become unreliable
- **Solution:**
  - Implement reconnection logic with exponential backoff
  - Queue messages when offline
  - Server-side message persistence
  - Test with network throttling
- **Time Cost:** 2-3 days
- **Risk Level:** HIGH

#### 3. **Session Recording** ⭐⭐⭐⭐⭐
- **Problem:** Large file sizes, encoding, storage costs
- **Impact:** Storage overflows, slow downloads
- **Solution:**
  - Stream recording directly to S3
  - Implement video compression with FFmpeg
  - Set automatic deletion after 30 days
  - Use S3 presigned URLs for secure downloads
- **Time Cost:** 6-7 days
- **Risk Level:** MEDIUM-HIGH
- **Alternative:** Skip this for basic version, add later

#### 4. **Payment Integration** ⭐⭐⭐
- **Problem:** PCI compliance, refund logic, failed payments
- **Impact:** Users lose money, chargebacks
- **Solution:**
  - Use Stripe's hosted checkout (safer)
  - Implement webhook handlers properly
  - Test with Stripe test keys first
  - Add dispute resolution in admin panel
- **Time Cost:** 4-5 days
- **Risk Level:** MEDIUM

#### 5. **Database Performance** ⭐⭐⭐
- **Problem:** Slow queries with thousands of tutors/sessions
- **Impact:** Search/filter becomes sluggish
- **Solution:**
  - Create proper indexes on frequently queried fields
  - Use MongoDB aggregation pipeline for complex queries
  - Implement pagination (never fetch all records)
  - Cache popular searches with Redis (optional)
- **Time Cost:** 2-3 days
- **Risk Level:** MEDIUM

#### 6. **Timezone Handling** ⭐⭐
- **Problem:** Tutors and students in different timezones
- **Impact:** Confused scheduling, missed sessions
- **Solution:**
  - Store all times in UTC in database
  - Convert to user's local timezone on frontend
  - Use libraries like date-fns or Day.js
  - Display timezone clearly in UI
- **Time Cost:** 1-2 days
- **Risk Level:** LOW-MEDIUM

#### 7. **Mobile Responsiveness** ⭐⭐
- **Problem:** App doesn't work well on phones
- **Impact:** Users can't book or join from mobile
- **Solution:**
  - Use Tailwind CSS responsive classes
  - Test on real devices (not just browser)
  - Make video calling mobile-friendly
  - Use responsive images
- **Time Cost:** Already included (Member 1 responsibility)
- **Risk Level:** LOW-MEDIUM

---

## 🎯 SIMPLIFIED VERSION (FOR GUARANTEED SUCCESS)

If you want to **reduce risk**, implement this **basic version** instead:

### **Basic Feature Set (Recommended for College SGP)**
✅ Authentication (4 days)
✅ Tutor Profiles (6 days)
✅ Search & Filters (7 days)
✅ Session Booking (11 days)
✅ Calendar Integration (7 days)
✅ Payments with Stripe (4 days)
✅ Real-time Chat with Socket.IO (8 days)
✅ Student Dashboard (4 days)
✅ Tutor Dashboard (5 days)
✅ Reviews System (4 days)

**Skip/Postpone:**
❌ Raw WebRTC video calling (use Daily.co API instead if needed) - 22 days saved
❌ Session recording - 6 days saved
❌ Admin panel (complex) - 5 days saved

### **Timeline for Basic Version: 12-14 weeks (3-3.5 months)**

This is **safer, more achievable, and still impressive** for a college SGP!

---

## 📊 EFFORT DISTRIBUTION (4 PEOPLE)

| Member | Frontend | Backend | Database | Real-time | Video | DevOps |
|--------|----------|---------|----------|-----------|-------|--------|
| Member 1 | 70% | - | - | - | - | - |
| Member 2 | 30% | - | - | 40% | 50% | - |
| Member 3 | - | 60% | 20% | - | - | - |
| Member 4 | - | 40% | 80% | 60% | 50% | 100% |

**Total Effort:** ~320 work days
**Per Person:** ~80 work days (4-5 months = ~80 days at 1-2 people per feature)
**Weekly Commitment:** 15-20 hours per person for 20 weeks

---

## ✨ FINAL VERDICT FOR 4-PERSON COLLEGE SGP

| Aspect | Rating | Notes |
|--------|--------|-------|
| **Feasibility** | 9/10 | ✅ Excellent for 4 people |
| **Impressiveness** | 10/10 | ✅ Will wow professors |
| **Learning Value** | 10/10 | ✅ Learn full-stack + real-time |
| **Complexity** | 8/10 | ⚠️ Hard, but manageable |
| **Time Estimate** | 4-5 months | ✅ Realistic if focused |
| **Risk Level** | MEDIUM | ⚠️ WebRTC & Recording are hard |
| **Recommendation** | **HIGHLY RECOMMENDED** | 🎯 Perfect SGP project |

### **To Maximize Success:**
1. **Use Daily.co API** instead of raw WebRTC (saves 5 days, much more reliable)
2. **Skip session recording** in first version (can add later)
3. **Make optional admin panel** (implement basic version only)
4. **Start early** on video calling (most complex part)
5. **Weekly code reviews** to catch issues early
6. **Set up CI/CD pipeline** to automate testing

---

**Let's build something amazing! 🚀**

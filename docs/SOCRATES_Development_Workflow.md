# SOCRATES: Project Development Workflow
## Step-by-Step — How to Build This Project From Zero to Deployed

---

## 🔄 THE BIG PICTURE (5 Phases)

```
Phase 0          Phase 1           Phase 2            Phase 3           Phase 4           Phase 5
SETUP &      →   AUTH &        →   SEARCH, BOOK   →  REAL-TIME      →  AI &          →  POLISH &
DESIGN            PROFILES          & PAY              FEATURES          ADMIN             DEPLOY
(2 weeks)        (3 weeks)         (4 weeks)          (4 weeks)         (3 weeks)         (4 weeks)
```

> **Golden Rule**: Each phase builds on the previous one. Never jump ahead.

---

## PHASE 0 — SETUP & DESIGN (Week 1-2)

> **Goal**: Nobody writes feature code yet. Only setup, planning, and design.

### Step 1: Environment Setup (Day 1)
```
Everyone installs:
  → Node.js 20 LTS
  → VS Code + Extensions (ESLint, Prettier, Tailwind IntelliSense)
  → Git
  → Postman (or Thunder Client)
  → MongoDB Compass
```

### Step 2: Project Scaffold (Day 1-2)
```
Member 4 does:
  → Create GitHub repo (private)
  → Set up branch rules (main → dev → feature branches)
  → Scaffold frontend (Vite + React)
  → Scaffold backend (Express + Mongoose)
  → Install ALL dependencies (from tech stack doc)
  → Create .env.example files
  → Create .gitignore
  → Push initial commit
  
Everyone else:
  → Clone the repo
  → Run npm install in both frontend/ and backend/
  → Verify both servers start (frontend :5173, backend :5000)
```

### Step 3: Database Design (Day 2-3)
```
Member 3 + Member 4 do:
  → Design all 8 MongoDB collections (schemas, relationships, indexes)
  → Create docs/database-schema.md
  → Set up MongoDB Atlas free cluster
  → Connect backend to Atlas
  → Verify connection works
```

### Step 4: API Contract (Day 3-4)
```
Member 3 does:
  → List EVERY endpoint the project needs
  → Define request body + response shape for each
  → Create docs/api-contract.md
  → Share with Members 1 & 2 so they know what data they'll receive
```

### Step 5: UI Wireframes (Day 1-7)
```
Member 1 + Member 2 do (in Figma):
  → Home / Landing page
  → Login & Register
  → Tutor Search (with filters)
  → Tutor Profile page
  → Session Booking (with calendar)
  → Student Dashboard
  → Tutor Dashboard
  → Chat page
  → Video Call page
  → Admin Panel

  These are rough wireframes, NOT pixel-perfect designs.
  Just boxes and labels showing what goes where.
```

### Step 6: Design System (Day 5-7)
```
Member 1 does:
  → Set up Tailwind config with project colors, fonts, spacing
  → Build reusable components: Button, Input, Card, Modal, Loader
  → Build layout: Navbar, Footer, page wrapper
  → Set up React Router with placeholder pages
```

### ✅ Phase 0 Checkpoint
```
Before moving on, verify:
  ☐ Both servers run without errors
  ☐ Backend connects to MongoDB Atlas
  ☐ All wireframes exist (even if rough)
  ☐ API contract doc is written
  ☐ Shared components (Button, Input, Card) exist
  ☐ React Router shows all placeholder pages
  ☐ Everyone can pull, branch, and push to GitHub
```

---

## PHASE 1 — AUTHENTICATION & PROFILES (Week 3-5)

> **Goal**: A user can register, login, see their profile, and edit it.

### The Workflow (This Pattern Repeats for Every Feature)

```
  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌──────────────┐
  │  1. BACKEND  │ →   │  2. TEST    │ →   │ 3. FRONTEND │ →   │ 4. CONNECT   │
  │  Build API   │     │  with       │     │  Build UI   │     │  Frontend to │
  │  endpoint    │     │  Postman    │     │  page       │     │  Backend API │
  └─────────────┘     └─────────────┘     └─────────────┘     └──────────────┘
     Member 3              Member 3           Member 1/2          Both meet
```

> **THIS IS THE MOST IMPORTANT PATTERN.** Backend first → test it → then frontend → then connect. Never build frontend and backend separately and hope they'll connect later.

### Step-by-Step for Auth

```
Week 3:
  Member 3: Build POST /api/auth/register
     → Hash password with bcrypt
     → Save user to MongoDB
     → Return JWT token
     → Test with Postman ✓
  
  Member 3: Build POST /api/auth/login
     → Find user by email
     → Compare password with bcrypt
     → Return JWT token
     → Test with Postman ✓

  Member 3: Build GET /api/auth/me (protected route)
     → Verify JWT token from header
     → Return user data
     → Test with Postman ✓

  Member 1: Build Register page UI
     → Form with name, email, password, role selector
     → Validation with React Hook Form + Zod
     → Connect to POST /api/auth/register
     → On success → redirect to dashboard

  Member 1: Build Login page UI
     → Form with email, password
     → Connect to POST /api/auth/login
     → Save token to localStorage (Zustand store)
     → On success → redirect to dashboard

  Member 2: Build auth state management
     → Zustand store (login, logout, isAuthenticated)
     → Protected route component (redirect to /login if not logged in)
     → Navbar shows Login/Register OR user name + Logout

Week 4:
  Member 3: Build password reset APIs
     → POST /api/auth/forgot-password (send email)
     → POST /api/auth/reset-password/:token
  
  Member 4: Set up Nodemailer
     → Configure Gmail App Password
     → Build sendEmail utility function
     → Test: send a verification email ✓

  Member 3: Build Tutor Profile APIs
     → POST /api/tutors (create profile)
     → GET /api/tutors/:id (get profile)
     → PUT /api/tutors/:id (update profile)

  Member 4: Set up Cloudinary
     → Configure upload middleware (Multer + Cloudinary)
     → POST /api/upload (upload profile photo)
     → Returns Cloudinary URL ✓

Week 5:
  Member 1: Build Tutor Profile page
     → Display: photo, name, subjects, bio, rate, rating
     → Edit mode (if viewing own profile)
     → Photo upload button
     → Connect to all tutor APIs

  EVERYONE: Test the full flow together
     → Register as student ✓
     → Register as tutor ✓
     → Login ✓
     → View profile ✓
     → Edit profile + upload photo ✓
     → Logout ✓
```

### ✅ Phase 1 Checkpoint
```
  ☐ Can register as student and tutor
  ☐ Can login and see "Welcome, [name]" in navbar
  ☐ Can view and edit tutor profile
  ☐ Can upload profile photo
  ☐ Password reset email sends
  ☐ Protected routes redirect to login
```

---

## PHASE 2 — SEARCH, BOOKING & PAYMENTS (Week 6-9)

> **Goal**: A student can find a tutor, book a session, and pay for it.

```
Week 6: SEARCH
  Member 3 → Build GET /api/tutors/search?subject=&price=&rating=&page=
  Member 3 → Test with Postman (verify filters work, pagination works)
  Member 1 → Build Search page (search bar, filter sidebar, tutor cards grid)
  Member 1 → Connect search UI to API
  Member 1 → Build Home/Landing page (hero section, search bar, featured tutors)

Week 7: AVAILABILITY & BOOKING (Backend)
  Member 3 → Build availability CRUD APIs (tutor sets available time slots)
  Member 3 → Build session booking API (student books a slot)
      → Check: is the slot available?
      → Check: no double-booking
      → Create session with status "booked"
  Member 3 → Build cancel/reschedule APIs
  Member 4 → Set up Razorpay (test mode)
      → Create order API
      → Verify payment API
      → Webhook handler

Week 8: BOOKING & PAYMENT (Frontend)
  Member 1 → Build Booking page
      → Calendar showing tutor's available slots
      → Select date + time → confirm booking
      → Razorpay checkout button
      → Confirmation page after payment
  Member 2 → Build Student Dashboard (basic)
      → Upcoming sessions list
      → Payment history
  Member 2 → Build Tutor Dashboard (basic)
      → Booking requests
      → Earnings summary
      → Availability manager (add/remove time slots)

Week 9: INTEGRATION & TESTING
  EVERYONE → Test the complete booking flow together:
      Student searches → finds tutor → books slot → pays → session appears in both dashboards
```

### ✅ Phase 2 Checkpoint
```
  ☐ Search with filters returns correct results
  ☐ Tutor can set available time slots
  ☐ Student can book a session
  ☐ Razorpay payment works (test mode)
  ☐ Booked session shows in student dashboard
  ☐ Booked session shows in tutor dashboard
  ☐ Can cancel a session
```

---

## PHASE 3 — REAL-TIME FEATURES (Week 10-13)

> **Goal**: Chat, video calls, notifications — the "live" features.

```
Week 10: SOCKET.IO SETUP + CHAT BACKEND
  Member 4 → Set up Socket.IO server
      → User connects → joins their room
      → send-message event → save to DB → emit to recipient
      → typing indicator event
      → online/offline status tracking
  Member 3 → Build chat REST APIs
      → GET /api/chat/conversations (list all chats)
      → GET /api/chat/messages/:conversationId (message history)

Week 11: CHAT FRONTEND
  Member 2 → Build Chat page
      → Conversation list (left sidebar)
      → Message bubbles (right panel)
      → Message input with send button
      → Typing indicator ("User is typing...")
      → Online/offline dot on avatar
      → Auto-scroll to latest message
      → Connect to Socket.IO events

Week 12: VIDEO CALLING
  Member 4 → Set up Jitsi room management
      → Generate unique room IDs for each session
      → API to get room details
  Member 2 → Build Video Call page
      → Embed Jitsi Meet using @jitsi/react-sdk
      → Controls: mute audio, mute video, share screen, leave call
      → "Join Session" button on dashboard → opens video room
  Member 3 → Build notification backend
      → Store notifications in DB
      → Push via Socket.IO when events happen (new booking, new message, etc.)

Week 13: NOTIFICATIONS + REVIEWS
  Member 2 → Build notification UI
      → Bell icon in navbar with unread count
      → Dropdown showing recent notifications
      → Toast popups for real-time notifications
  Member 3 → Build review APIs (create, read, update, delete)
  Member 1 → Build review UI (star rating + comment form, review list on tutor profile)
```

### ✅ Phase 3 Checkpoint
```
  ☐ Can send and receive chat messages in real-time
  ☐ Typing indicator works
  ☐ Online/offline status shows
  ☐ Can join a Jitsi video call from dashboard
  ☐ Video, audio, screen share, and leave all work
  ☐ Notifications appear in real-time
  ☐ Can leave a review after a session
```

---

## PHASE 4 — AI FEATURES & ADMIN PANEL (Week 14-16)

> **Goal**: Add the "smart" features that make your project stand out + admin controls.

```
Week 14: AI INTEGRATION
  Member 3 → Set up Google Gemini API
      → POST /api/ai/ask (student asks question → Gemini answers)
      → POST /api/ai/summarize (session transcript → bullet-point summary)
      → POST /api/ai/moderate (review text → appropriate or not)
  Member 2 → Build AI Chat panel
      → Floating "Ask AI" button on dashboard
      → Chat-like interface (student types, AI responds)
      → Loading animation while AI thinks
  Member 2 → Build session summary display
      → After session ends → auto-generate summary → show in session details

Week 15: ADMIN PANEL
  Member 3 → Build admin APIs
      → GET /api/admin/users (list all users with pagination)
      → PUT /api/admin/users/:id/block (block/unblock user)
      → PUT /api/admin/tutors/:id/approve (approve tutor)
      → GET /api/admin/stats (total users, sessions, revenue)
  Member 1 → Build Admin Panel UI
      → Users table with search + block/unblock buttons
      → Tutor approval queue
      → Dashboard with stats cards (total users, sessions, revenue)
      → Payment records table

Week 16: DASHBOARD ENHANCEMENTS
  Member 2 → Enhance Student Dashboard
      → Favorite tutors list
      → Session history with AI summaries
      → Quick re-book button
  Member 2 → Enhance Tutor Dashboard
      → Earnings chart (using Recharts or simple CSS)
      → Student list
      → Availability calendar (FullCalendar)
      → Performance metrics (avg rating, response time)
```

### ✅ Phase 4 Checkpoint
```
  ☐ AI assistant answers student questions
  ☐ Session summaries generate automatically
  ☐ Inappropriate reviews get flagged
  ☐ Admin can view all users
  ☐ Admin can block users and approve tutors
  ☐ Admin sees platform stats
  ☐ Dashboards look polished with charts
```

---

## PHASE 5 — POLISH, TEST & DEPLOY (Week 17-20)

> **Goal**: Make everything production-ready, test thoroughly, deploy, prepare presentation.

```
Week 17: RESPONSIVE DESIGN + PERFORMANCE
  Member 1 → Test every page on mobile, tablet, desktop
      → Fix any broken layouts
      → Add loading skeletons / spinners
  Member 2 → Add page transitions (Framer Motion)
      → Add micro-animations (button hover, card hover)
  Member 1 + 2 → Lazy load images, code-split routes
      → Run Lighthouse audit → target 85+ score

Week 18: TESTING + SECURITY
  Member 3 → Write backend tests (Jest + Supertest)
      → Test all auth endpoints
      → Test booking flow
      → Test payment verification
  Member 3 → Security hardening
      → Helmet headers
      → Rate limiting on auth routes
      → Input sanitization on all user input
  Member 4 → MongoDB index optimization
      → Add indexes on frequently queried fields
      → Test query performance

Week 19: DEPLOYMENT
  Member 4 → Deploy frontend to Vercel
      → Connect GitHub repo
      → Set environment variables
      → Verify live URL works
  Member 4 → Deploy backend to Render
      → Connect GitHub repo
      → Set environment variables
      → Verify API responds
  Member 4 → Verify MongoDB Atlas whitelist includes Render IP
  Member 4 → Seed database with realistic demo data
      → 10-15 tutor profiles with photos
      → 5-10 student accounts
      → Sample bookings, reviews, chat messages
  EVERYONE → Test the deployed version end-to-end

Week 20: DOCUMENTATION & PRESENTATION
  EVERYONE → Write/update README.md
  EVERYONE → Create setup guide (how to run locally)
  EVERYONE → Record 5-minute demo video
      → Show: register → search → book → pay → chat → video call → AI assistant → admin panel
  EVERYONE → Create presentation slides (15-20 slides)
      → Problem statement
      → Solution overview
      → Tech stack
      → Architecture diagram
      → Feature demo screenshots
      → AI features highlight
      → Challenges faced
      → Future scope
```

### ✅ Phase 5 Checkpoint (FINAL)
```
  ☐ Live URL works (frontend + backend)
  ☐ Demo data is seeded
  ☐ All core features work on deployed version
  ☐ Mobile responsive
  ☐ Demo video recorded
  ☐ Presentation slides ready
  ☐ README is complete
  ☐ DONE 🎉
```

---

## 🔁 DAILY WORKFLOW FOR ANY FEATURE

Every single feature follows this same loop:

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│   1. Backend dev creates the API endpoint                │
│              ↓                                           │
│   2. Backend dev tests it with Postman                   │
│              ↓                                           │
│   3. Backend dev tells frontend dev:                     │
│      "POST /api/sessions — send { tutorId, date, time }  │
│       returns { session, paymentUrl }"                   │
│              ↓                                           │
│   4. Frontend dev builds the UI page                     │
│              ↓                                           │
│   5. Frontend dev connects UI to the API using Axios     │
│              ↓                                           │
│   6. Both test together — does the full flow work?       │
│              ↓                                           │
│   7. Create Pull Request → Code Review → Merge to dev   │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## 📅 WEEKLY TEAM SYNC (Every Sunday, 30 minutes)

```
Each person answers 3 questions:

  1. What did I finish this week?
  2. What am I doing next week?
  3. Am I stuck on anything?

Then:
  → Demo what you built (screen share)
  → Merge all feature branches into dev
  → Test dev branch together
  → Plan next week's tasks
```

---

## ⚡ QUICK REFERENCE: Who Does What When

```
         Week:  1-2    3-5      6-9       10-13     14-16    17-20
              SETUP   AUTH    BOOKING    REALTIME    AI     POLISH

Member 1:    Figma   Login   Search     Reviews    Admin   Responsive
             Design  Signup  Home       Review UI  Panel   Testing
             System  Profile Booking UI            UI      

Member 2:    Figma   Auth    Dashboard  Chat UI    AI Chat  Animations
             Wireframe Store  (basic)   Video UI   Summary  Performance
                     Routes             Notif UI   Dash+    

Member 3:    DB      Auth    Search     Chat API   AI API   Tests
             Schema  APIs    Booking    Notif API  Admin    Security
             API Doc Profile Session    Review     APIs     
                     APIs    APIs       APIs                

Member 4:    GitHub  Email   Razorpay   Socket.IO  —        Deploy
             Atlas   Cloud-  Payment    Jitsi             Seed Data
             Setup   inary   APIs       Setup             Optimize
```

---

**Follow this workflow and you'll ship on time. No shortcuts, no skipping phases.** 🚀

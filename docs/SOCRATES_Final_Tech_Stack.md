# SOCRATES: FINAL TECH STACK
## AI-Enhanced Online Tutoring Marketplace

> **Stack**: MERN (MongoDB, Express, React, Node.js)  
> **Status**: LOCKED — No changes without team consensus

---

## 🖥️ FRONTEND

| Category | Tool | Version | Purpose | Cost | Install |
|----------|------|---------|---------|------|---------|
| **Framework** | React | ^19.x | UI component library | FREE | Comes with Vite |
| **Build Tool** | Vite | ^6.x | Dev server + bundler (10-100x faster than Webpack) | FREE | `npm create vite@latest` |
| **CSS** | Tailwind CSS | v4 | Utility-first CSS framework | FREE | `npm install -D tailwindcss @tailwindcss/vite` |
| **Routing** | React Router | ^7.x | Client-side page navigation | FREE | `npm install react-router-dom` |
| **State Management** | Zustand | ^5.x | Global state (auth, theme, notifications) | FREE | `npm install zustand` |
| **Server State** | TanStack Query | ^5.x | API caching, background refetch, loading states | FREE | `npm install @tanstack/react-query` |
| **HTTP Client** | Axios | ^1.7+ | API requests with interceptors | FREE | `npm install axios` |
| **Forms** | React Hook Form | ^7.x | Form handling with minimal re-renders | FREE | `npm install react-hook-form` |
| **Validation** | Zod | ^3.x | Schema validation (shared with backend) | FREE | `npm install zod` |
| **Form + Zod Bridge** | @hookform/resolvers | ^3.x | Connect Zod schemas to React Hook Form | FREE | `npm install @hookform/resolvers` |
| **Animation** | Framer Motion | ^11.x | Page transitions, hover effects, micro-animations | FREE | `npm install framer-motion` |
| **Calendar** | FullCalendar | ^6.x | Session scheduling calendar widget | FREE | `npm install @fullcalendar/react @fullcalendar/daygrid @fullcalendar/timegrid @fullcalendar/interaction` |
| **Icons** | React Icons | ^5.x | 30,000+ icons (FontAwesome, Material, etc.) | FREE | `npm install react-icons` |
| **Dates** | date-fns | ^4.x | Date formatting & manipulation | FREE | `npm install date-fns` |
| **Toasts** | Sonner | ^2.x | Beautiful toast notifications | FREE | `npm install sonner` |
| **Real-Time (Client)** | Socket.IO Client | ^4.8+ | WebSocket connection to backend | FREE | `npm install socket.io-client` |
| **Class Merging** | clsx | ^2.x | Conditional CSS class names | FREE | `npm install clsx` |
| **Linting** | ESLint | ^9.x | Find code issues | FREE | `npm install -D eslint` |
| **Formatting** | Prettier | ^3.x | Auto-format code | FREE | `npm install -D prettier` |

---

## ⚙️ BACKEND

| Category | Tool | Version | Purpose | Cost | Install |
|----------|------|---------|---------|------|---------|
| **Runtime** | Node.js | 20 LTS | JavaScript server runtime | FREE | [nodejs.org](https://nodejs.org) |
| **Framework** | Express.js | ^4.21+ | Web server, routing, middleware | FREE | `npm install express` |
| **Database** | MongoDB | Latest | NoSQL document database | FREE (512MB Atlas) | [mongodb.com/atlas](https://www.mongodb.com/cloud/atlas) |
| **ODM** | Mongoose | ^8.x | MongoDB schema modeling, validation, hooks | FREE | `npm install mongoose` |
| **Auth - Tokens** | jsonwebtoken | ^9.x | Create & verify JWT tokens | FREE | `npm install jsonwebtoken` |
| **Auth - Hashing** | bcrypt | ^5.x | Password hashing (industry standard) | FREE | `npm install bcrypt` |
| **Security - Headers** | Helmet | ^8.x | Set secure HTTP headers (XSS, clickjacking) | FREE | `npm install helmet` |
| **Security - CORS** | cors | ^2.8+ | Allow frontend to call backend | FREE | `npm install cors` |
| **Security - Rate Limit** | express-rate-limit | ^7.x | Prevent brute-force attacks | FREE | `npm install express-rate-limit` |
| **Security - Sanitize** | sanitize-html | ^2.x | Strip dangerous HTML from user input | FREE | `npm install sanitize-html` |
| **Validation** | Joi | ^17.x | Request body validation | FREE | `npm install joi` |
| **Alt Validation** | express-validator | ^7.x | Middleware-based validation | FREE | `npm install express-validator` |
| **Real-Time (Server)** | Socket.IO | ^4.8+ | WebSocket server for chat & notifications | FREE | `npm install socket.io` |
| **Payments** | Razorpay | ^2.x | Indian payment gateway (INR, UPI, cards) | 2% per txn | `npm install razorpay` |
| **File Upload** | Multer | ^1.x | Handle multipart file uploads | FREE | `npm install multer` |
| **Image Processing** | Sharp | ^0.33+ | Resize, compress uploaded images | FREE | `npm install sharp` |
| **Cloud Storage** | Cloudinary | Latest | Image & video hosting (25GB free) | FREE tier | `npm install cloudinary` |
| **Email** | Nodemailer | ^6.x | Send emails (verification, reset, booking confirm) | FREE | `npm install nodemailer` |
| **HTTP Client** | Axios | ^1.7+ | Call external APIs (Razorpay, AI services) | FREE | `npm install axios` |
| **Env Variables** | dotenv | ^16.x | Load .env file secrets | FREE | `npm install dotenv` |
| **IDs** | uuid | ^10.x | Generate unique identifiers | FREE | `npm install uuid` |
| **Compression** | compression | ^1.x | Gzip API responses | FREE | `npm install compression` |
| **Logging** | morgan | ^1.x | HTTP request logging | FREE | `npm install morgan` |
| **Async Errors** | express-async-errors | ^3.x | Catch async errors without try-catch | FREE | `npm install express-async-errors` |
| **Dev - Auto Restart** | Nodemon | ^3.x | Auto-restart on file changes | FREE | `npm install -D nodemon` |
| **Linting** | ESLint | ^9.x | Code quality | FREE | `npm install -D eslint` |
| **Formatting** | Prettier | ^3.x | Code formatting | FREE | `npm install -D prettier` |

---

## 📹 VIDEO CALLING

| Category | Tool | Cost | Why This One |
|----------|------|------|-------------|
| **Video SDK** | Jitsi Meet React SDK | **FREE** | Open-source, no usage fees, 5-day implementation, proven reliability |
| Install | `npm install @jitsi/react-sdk` | | |
| Hosted Option | meet.jit.si (free public server) | | No self-hosting needed for demo |
| Backup Plan | Embed Google Meet links manually | FREE | If Jitsi has issues |

> **Why NOT WebRTC?** Raw WebRTC takes 22 days and requires STUN/TURN servers ($$$). Jitsi wraps WebRTC for you.  
> **Why NOT Daily.co?** Daily.co costs $0.04/min. Jitsi is completely free.

---

## 🤖 AI / ML FEATURES

| Feature | Provider | Model | Cost | Install |
|---------|----------|-------|------|---------|
| **AI Tutoring Assistant** | Google Gemini | gemini-1.5-flash | FREE (60 req/min) | `npm install @google/generative-ai` |
| **Session Summarization** | Google Gemini | gemini-1.5-flash | FREE | Same package |
| **Sentiment Analysis** | Hugging Face | BERT (runs in browser) | FREE | `npm install @huggingface/transformers` |
| **Content Moderation** | OpenAI | Moderation API | FREE (~$0.002/req) | `npm install openai` |

> **Why Google Gemini?** 60 free requests/minute. At $0.075 per 1M tokens, it's the cheapest LLM by far.  
> **Total AI cost estimate**: ~₹0-500/month for a college project.

---

## 💾 DATABASE

| Component | Tool | Details |
|-----------|------|---------|
| **Database** | MongoDB Atlas | Free tier: 512MB storage, shared cluster |
| **ODM** | Mongoose | Schema validation, middleware hooks, virtuals |
| **GUI** | MongoDB Compass | Desktop app for visual DB management |
| **Collections** | 8 total | User, Tutor, Session, Payment, Review, Message, Availability, Notification |

---

## 🚀 DEPLOYMENT & DEVOPS

| Component | Tool | Cost | Details |
|-----------|------|------|---------|
| **Frontend Hosting** | Vercel | FREE | Auto-deploy from GitHub, instant HTTPS, CDN |
| **Backend Hosting** | Render | FREE | 750 hrs/month free, auto-deploy from GitHub |
| **Database Hosting** | MongoDB Atlas | FREE | 512MB, shared cluster, auto-backups |
| **Image CDN** | Cloudinary | FREE | 25GB storage, auto-optimization |
| **Version Control** | GitHub | FREE | Private repos, Issues, Pull Requests |
| **CI/CD** | GitHub Actions | FREE | 2000 min/month, auto-test on push |
| **Process Manager** | PM2 | FREE | Keep Node.js running in production |

---

## 🛠️ DEVELOPMENT TOOLS

| Tool | Purpose | Cost |
|------|---------|------|
| **VS Code** | Code editor | FREE |
| **Postman / Thunder Client** | API testing | FREE |
| **MongoDB Compass** | Database GUI | FREE |
| **Figma** | UI/UX wireframes | FREE (student) |
| **Git** | Version control | FREE |
| **GitHub Desktop** | Visual Git (optional) | FREE |
| **Chrome DevTools** | Browser debugging | FREE |

### Recommended VS Code Extensions
| Extension | Purpose |
|-----------|---------|
| ESLint | Inline linting |
| Prettier | Auto-format on save |
| Tailwind CSS IntelliSense | Class autocomplete |
| Thunder Client | API testing inside VS Code |
| MongoDB for VS Code | DB queries inside VS Code |
| GitLens | Git blame & history |
| ES7+ React Snippets | React boilerplate shortcuts |

---

## 🎨 DESIGN RESOURCES

| Category | Tool | URL |
|----------|------|-----|
| **Icons (Animated)** | LottieFiles | lottiefiles.com |
| **Icons (Static)** | Lordicon | lordicon.com |
| **Icons (Library)** | Iconsax | iconsax.io |
| **Font Pairing** | Fontjoy | fontjoy.com |
| **Illustrations** | unDraw | undraw.co |
| **UI Components** | shadcn/ui | ui.shadcn.com |
| **Animations** | Aceternity UI | ui.aceternity.com |
| **Animations** | Magic UI | magicui.design |
| **Motion** | Motion Primitives | motion-primitives.com |
| **Color Palette** | Realtime Colors | realtimecolors.com |
| **Mockups** | Shots.so | shots.so |

### Chosen Design Tokens

```
Fonts:
  Primary    → Inter (body text)
  Headings   → Space Grotesk (titles)
  Code       → JetBrains Mono (AI chat)

Colors:
  Primary    → #6366F1 (Indigo)
  Secondary  → #06B6D4 (Cyan)
  Success    → #10B981 (Emerald)
  Warning    → #F59E0B (Amber)
  Danger     → #EF4444 (Red)
  Background → #F8FAFC (Slate-50)
  Text       → #0F172A (Slate-900)
```

---

## 📦 FULL INSTALL COMMANDS

### Frontend (one shot)
```bash
# Scaffold
npm create vite@latest frontend -- --template react
cd frontend
npm install

# Core dependencies
npm install react-router-dom axios @tanstack/react-query react-hook-form zod @hookform/resolvers zustand socket.io-client framer-motion date-fns sonner react-icons clsx @fullcalendar/react @fullcalendar/daygrid @fullcalendar/timegrid @fullcalendar/interaction

# Dev dependencies
npm install -D tailwindcss @tailwindcss/vite eslint prettier
```

### Backend (one shot)
```bash
mkdir backend && cd backend
npm init -y

# Core dependencies
npm install express cors helmet mongoose dotenv jsonwebtoken bcrypt nodemailer socket.io razorpay cloudinary axios multer sharp uuid joi express-validator express-async-errors compression morgan express-rate-limit sanitize-html

# AI dependencies
npm install @google/generative-ai openai

# Dev dependencies
npm install -D nodemon eslint prettier
```

---

## 💰 TOTAL COST BREAKDOWN

| Item | Monthly Cost |
|------|-------------|
| MongoDB Atlas (free tier) | ₹0 |
| Vercel (free tier) | ₹0 |
| Render (free tier) | ₹0 |
| Cloudinary (free tier) | ₹0 |
| Jitsi Meet (public server) | ₹0 |
| Google Gemini API (free tier) | ₹0 |
| GitHub (free tier) | ₹0 |
| Razorpay (test mode) | ₹0 |
| Domain name (optional) | ~₹500/year |
| **TOTAL** | **₹0** (for development & demo) |

---

## 📊 STACK SUMMARY DIAGRAM

```
┌─────────────────────────────────────────────────────────┐
│               FRONTEND (React 19 + Vite 6)              │
│    Tailwind v4 │ Zustand │ React Router │ Framer Motion │
│    Socket.IO Client │ FullCalendar │ React Hook Form     │
└──────────────────────────┬──────────────────────────────┘
                           │ Axios + TanStack Query
                           ▼
┌─────────────────────────────────────────────────────────┐
│            BACKEND (Node.js 20 + Express.js)            │
│  JWT+bcrypt │ Helmet │ CORS │ Multer │ Nodemailer       │
│  Razorpay │ Socket.IO │ Mongoose │ Joi │ Morgan          │
└────────┬──────────┬──────────┬──────────┬───────────────┘
         │          │          │          │
         ▼          ▼          ▼          ▼
    ┌────────┐ ┌────────┐ ┌────────┐ ┌──────────┐
    │MongoDB │ │Cloudi- │ │ Jitsi  │ │  AI APIs  │
    │ Atlas  │ │ nary   │ │  Meet  │ │ (Gemini)  │
    └────────┘ └────────┘ └────────┘ └──────────┘
```

---

**Total Libraries: ~45 packages**  
**Estimated Install Size: ~400MB**  
**Setup Time: ~1 hour**  
**All FREE for development & demo ✅**

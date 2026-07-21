# SOCRATES: Cloud & System Design — Your Personal Growth Track
## What YOU Should Do Beyond the Base Project

> **Your field**: Cloud Computing & System Design  
> **Your role in team**: Likely Member 4 (Backend + DevOps) — the most aligned with your career  
> **Goal**: Turn a college SGP into a portfolio piece that shows real cloud & system design skills

---

## 🎯 THE BIG IDEA

Your teammates will build the app. **Your job is to make the app production-grade** — the kind of infrastructure a real company would use. This is where you go from "college student" to "someone who understands how real systems work."

---

## LEVEL 1 — DO DURING THE PROJECT (Weeks 1-20)

These are things you should implement as part of the project itself.

### 1. Architecture: Draw the System Design

Before writing any code, draw the full system architecture. This is what interviewers ask you in system design rounds.

```
                        ┌─────────────┐
                        │  Cloudflare │  ← CDN + DDoS Protection
                        │    (Free)   │
                        └──────┬──────┘
                               │
              ┌────────────────┼────────────────┐
              ▼                                  ▼
     ┌─────────────────┐              ┌─────────────────┐
     │   Vercel (FE)   │              │  Render (BE)     │
     │   React SPA     │   ───API──→  │  Express.js      │
     │   Static Files  │   ←──JSON──  │  Socket.IO       │
     └─────────────────┘              └────────┬─────────┘
                                               │
                          ┌────────────────┬────┴─────┬──────────────┐
                          ▼                ▼          ▼              ▼
                   ┌───────────┐   ┌────────────┐ ┌────────┐  ┌──────────┐
                   │  MongoDB  │   │ Cloudinary │ │ Jitsi  │  │ Gemini   │
                   │  Atlas    │   │ (Images)   │ │ (Video)│  │ (AI API) │
                   └───────────┘   └────────────┘ └────────┘  └──────────┘
```

**What to document**:
- Why each service was chosen
- How data flows between them
- What happens when one service goes down (failure modes)
- Request lifecycle: user clicks "Book" → what happens at each layer

### 2. Containerize with Docker

Don't just deploy raw Node.js. Containerize it.

```dockerfile
# backend/Dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 5000

CMD ["node", "server.js"]
```

```yaml
# docker-compose.yml (for local development)
services:
  backend:
    build: ./backend
    ports:
      - "5000:5000"
    env_file:
      - ./backend/.env
    depends_on:
      - mongo

  mongo:
    image: mongo:7
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:
```

**Why this matters**: Every cloud job expects Docker knowledge. This shows you understand containers, networking, and reproducible environments.

### 3. CI/CD Pipeline with GitHub Actions

Set up automated testing and deployment on every push.

```yaml
# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [dev, main]
  pull_request:
    branches: [dev]

jobs:
  test-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: cd backend && npm ci
      - run: cd backend && npm test

  test-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: cd frontend && npm ci
      - run: cd frontend && npm run build

  deploy:
    needs: [test-backend, test-frontend]
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - run: echo "Auto-deploy triggered"
      # Vercel and Render auto-deploy from GitHub
```

**Why this matters**: CI/CD is the backbone of any cloud workflow. Demonstrating it shows maturity.

### 4. Environment & Secret Management

```
.env.example (committed)          .env (NEVER committed)
─────────────────────             ────────────────────
PORT=5000                         PORT=5000
MONGODB_URI=                      MONGODB_URI=mongodb+srv://user:pass@cluster...
JWT_SECRET=                       JWT_SECRET=a8f3k2...
RAZORPAY_KEY_ID=                  RAZORPAY_KEY_ID=rzp_test_...
RAZORPAY_KEY_SECRET=              RAZORPAY_KEY_SECRET=...
CLOUDINARY_CLOUD_NAME=            CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=               CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=            CLOUDINARY_API_SECRET=...
GEMINI_API_KEY=                   GEMINI_API_KEY=...
NODEMAILER_EMAIL=                 NODEMAILER_EMAIL=...
NODEMAILER_PASSWORD=              NODEMAILER_PASSWORD=...
CLIENT_URL=http://localhost:5173  CLIENT_URL=https://your-app.vercel.app
```

Set these in Render/Vercel dashboards for production. Never hardcode secrets.

### 5. API Rate Limiting & Security Layers

```
                  Request Flow (System Design Perspective)

  Client Request
       │
       ▼
  ┌─────────────┐
  │ Cloudflare   │  Layer 1: DDoS protection, SSL termination
  └──────┬──────┘
         ▼
  ┌─────────────┐
  │ Rate Limiter │  Layer 2: 100 req/15min per IP on auth routes
  └──────┬──────┘
         ▼
  ┌─────────────┐
  │ Helmet       │  Layer 3: Secure HTTP headers
  └──────┬──────┘
         ▼
  ┌─────────────┐
  │ CORS         │  Layer 4: Only allow your frontend domain
  └──────┬──────┘
         ▼
  ┌─────────────┐
  │ Auth (JWT)   │  Layer 5: Verify user identity
  └──────┬──────┘
         ▼
  ┌─────────────┐
  │ Validation   │  Layer 6: Joi/Zod validate request body
  └──────┬──────┘
         ▼
  ┌─────────────┐
  │ Sanitize     │  Layer 7: Strip XSS from inputs
  └──────┬──────┘
         ▼
  ┌─────────────┐
  │ Controller   │  Layer 8: Business logic
  └──────┬──────┘
         ▼
  ┌─────────────┐
  │ MongoDB      │  Layer 9: Database query
  └─────────────┘
```

**Document this diagram in your report.** This is literally what a system design interview answer looks like.

### 6. Database Indexing & Query Optimization

```javascript
// Explain to your team why these indexes matter

// Without index: MongoDB scans ALL documents (slow at scale)
// With index: MongoDB jumps directly to matching documents

// Example: Tutor search
tutorSchema.index({ subjects: 1 });          // Search by subject
tutorSchema.index({ hourlyRate: 1 });        // Filter by price
tutorSchema.index({ rating: -1 });           // Sort by rating (descending)
tutorSchema.index({ subjects: 1, hourlyRate: 1, rating: -1 }); // Compound index for combined filters

// Example: Session queries
sessionSchema.index({ studentId: 1, status: 1 });  // "My upcoming sessions"
sessionSchema.index({ tutorId: 1, startTime: -1 }); // "Tutor's session history"

// Example: Chat messages
messageSchema.index({ conversationId: 1, createdAt: 1 }); // Load conversation in order

// TTL index: Auto-delete old notifications after 30 days
notificationSchema.index({ createdAt: 1 }, { expireAfterSeconds: 2592000 });
```

### 7. Logging & Monitoring

```javascript
// Structured logging (not just console.log)
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

// Usage
logger.info('Session booked', { sessionId, studentId, tutorId });
logger.error('Payment failed', { error: err.message, razorpayOrderId });
```

**Why this matters**: In production, `console.log` is useless. Structured logs with timestamps, request IDs, and context is how real systems debug issues.

---

## LEVEL 2 — DO AFTER THE PROJECT (Portfolio & Interview Prep)

These are things you add after the SGP is submitted, to make this project shine on your resume and in interviews.

### 8. Write a System Design Document (HLD)

Create a proper High-Level Design doc like engineers write at companies:

```markdown
# SOCRATES: High-Level Design Document

## 1. Requirements
  - Functional: User auth, search, booking, payments, chat, video
  - Non-Functional: <100ms API response, 99.9% uptime, handle 1000 concurrent users

## 2. Capacity Estimation
  - 1000 daily active users
  - 50 sessions/day average
  - 500 messages/day
  - Storage: ~2GB/month (profiles + chat)

## 3. API Design (REST)
  - List all endpoints with methods

## 4. Database Design
  - Collections, relationships, indexes
  - Why NoSQL over SQL for this use case

## 5. High-Level Architecture
  - Architecture diagram with all components

## 6. Detailed Component Design
  - Auth flow (JWT lifecycle)
  - Booking flow (state machine: booked → in-progress → completed)
  - Payment flow (Razorpay order → verify → webhook)
  - Chat flow (Socket.IO rooms, message persistence)

## 7. Scalability Considerations
  - Horizontal scaling strategies
  - Database sharding approach
  - Caching layer (Redis)

## 8. Failure Handling
  - What if MongoDB goes down?
  - What if Razorpay webhook fails?
  - What if Socket.IO disconnects?
```

### 9. Migrate to AWS (Free Tier)

After the project is done, migrate the entire thing to AWS to learn real cloud:

```
Current (Free Tiers)              AWS Migration (Free Tier)
────────────────────              ──────────────────────────
Vercel (Frontend)            →    AWS S3 + CloudFront
Render (Backend)             →    AWS EC2 (t2.micro) or ECS Fargate
MongoDB Atlas                →    AWS DocumentDB or keep Atlas
Cloudinary                   →    AWS S3 + Lambda (image resize)
Email (Gmail)                →    AWS SES
—                            →    AWS Route 53 (DNS)
—                            →    AWS CloudWatch (monitoring)
—                            →    AWS IAM (access management)
```

**AWS services to learn through this migration**:

| Service | What You'll Learn |
|---------|------------------|
| **EC2** | Virtual machines, SSH, security groups |
| **S3** | Object storage, bucket policies, static hosting |
| **CloudFront** | CDN, edge caching, HTTPS |
| **ECS / Fargate** | Container orchestration (run your Docker image) |
| **RDS / DocumentDB** | Managed databases |
| **SES** | Transactional email at scale |
| **CloudWatch** | Logs, metrics, alarms |
| **IAM** | Users, roles, policies (most important for cloud jobs) |
| **Route 53** | DNS management |
| **Elastic Load Balancer** | Distribute traffic across instances |

### 10. Add a Caching Layer (Redis)

```
Without Redis:
  Client → Backend → MongoDB (every request hits DB)
  Response time: 50-200ms

With Redis:
  Client → Backend → Redis (cached?) → YES → return cached data (2ms)
                                      → NO  → MongoDB → cache in Redis → return
  Response time: 2-50ms
```

Things to cache:
- Tutor search results (cache for 5 minutes)
- Tutor profile data (cache for 10 minutes)
- Session counts / stats for admin dashboard
- Popular search queries

```javascript
// Example with Redis
const Redis = require('ioredis');
const redis = new Redis(process.env.REDIS_URL);

async function getTutorProfile(tutorId) {
  // Check cache first
  const cached = await redis.get(`tutor:${tutorId}`);
  if (cached) return JSON.parse(cached);

  // Cache miss → hit database
  const tutor = await Tutor.findById(tutorId).populate('userId');
  
  // Store in cache for 10 minutes
  await redis.setex(`tutor:${tutorId}`, 600, JSON.stringify(tutor));
  
  return tutor;
}
```

### 11. Add a Message Queue (BullMQ / RabbitMQ)

For heavy tasks that shouldn't block the API response:

```
Without Queue (blocking):
  User books session → API sends email → API creates invoice → API responds
  Response time: 3-5 seconds (user waits)

With Queue (non-blocking):
  User books session → API responds immediately (200ms)
                     → Queue processes email in background
                     → Queue generates invoice in background
                     → Queue sends notification in background
```

What to put in queues:
- Email sending (verification, booking confirmation, password reset)
- AI session summarization (takes 3-5 seconds)
- Image processing (resize, compress uploads)
- Notification dispatch

### 12. Load Testing

Use tools to simulate many users hitting your app:

```bash
# Install k6 (load testing tool)
# Run 100 virtual users for 30 seconds
k6 run --vus 100 --duration 30s load-test.js
```

Document the results:
- How many requests/second can your API handle?
- At what point does it break?
- What's the average response time under load?
- Where's the bottleneck (CPU, memory, database)?

### 13. Infrastructure as Code (Terraform)

Instead of clicking buttons in AWS console, define infrastructure in code:

```hcl
# main.tf — Define your entire infrastructure
resource "aws_instance" "backend" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"

  tags = {
    Name = "socrates-backend"
  }
}

resource "aws_s3_bucket" "frontend" {
  bucket = "socrates-frontend"
}

resource "aws_db_instance" "database" {
  engine         = "mongodb"
  instance_class = "db.t3.micro"
}
```

**Why**: Companies don't set up servers by hand. Terraform lets you create/destroy entire environments in minutes.

---

## 🗺️ YOUR PERSONAL LEARNING ROADMAP

```
DURING PROJECT (Weeks 1-20)                    AFTER PROJECT
─────────────────────────────                   ─────────────

Week 1-2:   Docker + Docker Compose            Month 1: AWS Migration
Week 3-5:   CI/CD with GitHub Actions                    (EC2, S3, CloudFront)
Week 6-9:   Database Indexing                   
Week 10-13: Socket.IO Architecture              Month 2: Redis Caching
Week 14-16: API Security Layers                          Message Queues (BullMQ)
Week 17-20: Deployment + Monitoring             
                                                Month 3: Terraform
                                                         Load Testing
                                                         System Design Doc (HLD)
```

---

## 📝 HOW TO PRESENT THIS IN INTERVIEWS

When asked "Tell me about a project you've built":

> "I built an AI-powered tutoring marketplace with a 4-person team. My role was **backend infrastructure and DevOps**. I designed the **system architecture** with 9 layers of request processing — from CDN to rate limiting to JWT auth to database queries. I **containerized** the app with Docker, set up **CI/CD** with GitHub Actions, implemented **database indexing** that reduced search queries from 200ms to 15ms, and deployed to **Vercel + Render** with zero-downtime deploys. After the academic submission, I migrated the entire infrastructure to **AWS** using EC2, S3, CloudFront, and SES, and wrote a **High-Level Design document** covering scalability to 10,000 concurrent users."

That answer covers: system design, Docker, CI/CD, database optimization, deployment, AWS, and scalability — everything cloud interviewers want to hear.

---

## 📚 RESOURCES TO LEARN ALONGSIDE

| Topic | Resource | Time |
|-------|----------|------|
| System Design Basics | "System Design Primer" (GitHub) | 2-3 hours |
| Docker | TechWorld with Nana — Docker crash course (YouTube) | 2 hours |
| AWS Basics | AWS Cloud Practitioner — free course on AWS Skill Builder | 6 hours |
| CI/CD | GitHub Actions documentation | 1 hour |
| Redis | Redis University (free courses) | 3 hours |
| Database Design | MongoDB University M001 (free) | 4 hours |
| Load Testing | k6 documentation | 1 hour |
| Terraform | HashiCorp Learn (free) | 3 hours |

---

**Your project is the same as your teammates'. Your understanding of WHY it's built this way is what sets you apart.** 🚀

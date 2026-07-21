# SOCRATES: n8n WORKFLOW INTEGRATION GUIDE 🔄

This guide explains how to integrate **n8n** (a self-hosted, node-based workflow automation tool) into the **Socrates** project.

Using n8n allows your team to offload heavy background tasks, AI processing, notifications, and administrative approvals from the Express backend, keeping your core server fast, simple, and clean.

---

## 🗺️ 1. Architecture Flow: Express ↔ n8n

n8n runs as a separate service (locally or in the cloud). Your Express backend communicates with n8n via **HTTP Webhooks**:

```
 ┌───────────────────────────┐         HTTP Webhook         ┌───────────────────────────┐
 │   Express.js Backend      ├─────────────────────────────>│       n8n Workflows       │
 │  (Handles API & Database) │                              │  (Handles heavy logic &   │
 │                           │<─────────────────────────────┤    third-party nodes)     │
 └───────────────────────────┘          API callback        └─────────────┬─────────────┘
                                                                          │
                                                      ┌───────────────────┴───────────────────┐
                                                      ▼                                       ▼
                                           ┌─────────────────────┐                 ┌─────────────────────┐
                                           │  Gemini AI API Node │                 │ Gmail/Slack/Sheets  │
                                           │  (Summaries, OCR)   │                 │  (Integration)      │
                                           └─────────────────────┘                 └─────────────────────┘
```

---

## 🚀 2. 3 Core n8n Workflows for Socrates

By building these workflows in n8n's visual editor, you don't have to write thousands of lines of complex Node.js code.

### Workflow 1: Tutor Verification & Admin Approval (Pledge Check)
* **Trigger:** A new tutor submits their credentials (degrees, certificates, identity verification) on the Socrates application portal.
* **The n8n Path:**
  1. **Webhook Node:** Receives the tutor's application data and PDF files from Express.
  2. **Gemini Node:** Performs OCR (optical character recognition) on the uploaded certificate PDF to extract the tutor's name, degree title, university, and completion date.
  3. **Google Sheets / Database Node:** Checks if the university matches a whitelist.
  4. **Discord / Slack Node:** Sends an interactive message to the admin channel:
     > 🔔 **New Tutor Application:** Alex Mercer (Computer Science, MIT)
     > * [Approve Button] [Reject Button]
  5. **HTTP Request Node:** On click, calls the Socrates Express API (`PUT /api/admin/tutor/:id/status`) to update the tutor's status in MongoDB to "verified" or "rejected".

### Workflow 2: Asynchronous Post-Session Summary
* **Trigger:** A tutoring session ends, and the audio transcript is compiled.
* **The n8n Path:**
  1. **Webhook Node:** Receives the transcript and student/tutor email addresses from Express.
  2. **Gemini Node:** Prompts Gemini to summarize the session into structured markdown, listing key concepts, homework tasks, and recommended resources.
  3. **Gmail Node:** Sends a beautifully formatted email to the student with their session recap.
  4. **MongoDB Node:** Writes the summary back to the student's lesson log in the database.

### Workflow 3: Weekly Leaderboard & Volunteer Hour Reports
* **Trigger:** Cron Node (Runs every Sunday at 11:59 PM).
* **The n8n Path:**
  1. **MongoDB Node:** Queries the database for the top 5 tutors with the most Socrates Karma/Upvotes this week.
  2. **Google Sheets Node:** Records the weekly rankings to a public Google Sheet.
  3. **Gemini Node:** Drafts a personalized "Weekly Top Tutor Certificate of Appreciation" message.
  4. **Gmail Node:** Emails the top tutors their certificate, boosting volunteer retention.

---

## 🛠️ 3. How to Set Up and Run n8n Locally

Setting up n8n is extremely simple and does not require complex software installations.

### Step 1: Run n8n via Docker
Run this command in your PowerShell/Terminal to launch a local instance of n8n:
```bash
docker run -it --rm --name n8n -p 5678:5678 n8nio/n8n
```
*Access n8n in your browser at: `http://localhost:5678`*

### Step 2: Configure Express Env
Create an environment variable in your backend `/backend/.env` file:
```env
N8N_WEBHOOK_VERIFY_TUTOR=http://localhost:5678/webhook/tutor-verify-id
N8N_WEBHOOK_SUMMARY=http://localhost:5678/webhook/session-summary-id
```

### Step 3: Trigger the Workflow from Express
Whenever the event occurs, call the webhook using Axios:
```javascript
// backend/src/controllers/tutorController.js
const axios = require('axios');

const registerTutor = async (req, res) => {
  const newTutor = await Tutor.create(req.body);

  // Trigger the n8n Admin Approval workflow in the background
  axios.post(process.env.N8N_WEBHOOK_VERIFY_TUTOR, {
    tutorId: newTutor._id,
    name: newTutor.name,
    certificateUrl: newTutor.certificateUrl
  }).catch(err => console.error("n8n Trigger Failed", err));

  return res.status(201).json({ message: "Application submitted. Awaiting approval." });
};
```

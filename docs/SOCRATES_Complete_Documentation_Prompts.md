# SOCRATES --- Complete Documentation Prompt Pack

------------------------------------------------------------------------

# SOCRATES --- Project Definition Document Prompt

You are a senior Software Architect, Business Analyst, Product Manager,
and Academic Project Mentor.

I am developing a 4-person academic semester project called SOCRATES
during the first half of 2026.

The project is an AI-powered online tutoring marketplace/platform where
students can discover tutors, compare them, book tutoring sessions,
communicate with tutors, attend online sessions, manage their learning
activities, and use AI-powered learning features.

I have provided project resources containing: - Complete project tech
stack - AI/ML feature ideas - 4-person project breakdown - UI/UX
resources - CSS and performance guidelines - Development-related
resources - Existing project planning information

Analyze ALL provided project resources before writing the document.

Your task is to create a comprehensive PROJECT DEFINITION DOCUMENT for
SOCRATES.

The document must establish a single, clear, consistent definition of
the project that will serve as the foundation for all future
requirements, architecture, database, UI/UX, API, AI/ML, development,
testing, and academic documentation.

Cover the following sections in detail:

1.  Document Information
    -   Project ID
    -   Project title
    -   Version
    -   Document purpose
    -   Intended audience
2.  Executive Summary
3.  Project Background
4.  Problem Statement
    -   Problems faced by students
    -   Problems faced by tutors
    -   Problems with existing tutoring approaches
    -   Scheduling difficulties
    -   Tutor discovery problems
    -   Personalization problems
    -   Learning progress tracking problems
5.  Proposed Solution
6.  Project Vision
7.  Project Mission
8.  Project Objectives
    -   Primary objectives
    -   Secondary objectives
    -   Technical objectives
    -   AI/ML objectives
    -   Academic objectives
9.  Target Users
    -   Students
    -   Tutors
    -   Administrators
10. User Roles and Responsibilities
11. Core Value Proposition
12. Major System Modules
13. High-Level Feature List
14. AI/ML Features

-   Generative AI features
-   Recommendation systems
-   NLP features
-   Predictive ML features

15. Project Scope

-   In-scope features
-   Out-of-scope features

16. MVP Definition
17. Phase 2 Features
18. Advanced/Optional Features
19. Assumptions
20. Constraints

-   Time
-   Four-person team
-   Academic semester
-   Budget
-   API limitations
-   Hosting limitations
-   Hardware limitations
-   Data availability for ML

21. Dependencies
22. Project Limitations
23. Major Risks
24. Success Criteria
25. Expected Outcomes
26. Innovation and Unique Selling Points
27. Academic Relevance
28. Industry Relevance
29. Future Scope
30. Final Project Definition Statement

IMPORTANT RULES: - Do not blindly include every feature from the
provided resources. - Identify duplicate, conflicting, outdated, overly
complex, or unnecessary ideas. - Prioritize realistic implementation for
a 4-person academic team. - Clearly label features as Must Have, Should
Have, Could Have, or Future Scope. - Do not invent major requirements
without identifying them as recommendations. - Maintain consistency
throughout the document. - Use professional academic and
software-engineering terminology. - Use tables where they improve
readability. - Explain the reasoning behind major scope decisions. - End
with a "Decisions That Must Be Finalized Before Development" section.

------------------------------------------------------------------------

# SOCRATES --- Software Requirements Specification (SRS) Prompt

Act as a senior Software Requirements Engineer, Business Analyst, System
Analyst, and Academic SRS Documentation Expert.

I am developing SOCRATES, a 4-person academic semester project for the
first half of 2026.

SOCRATES is an AI-powered online tutoring marketplace/platform.

Before writing anything: 1. Analyze all project resources I have
provided. 2. Use the finalized Project Definition Document as the
primary source of truth if available. 3. Identify contradictions or
missing requirements. 4. Do not silently invent requirements. 5. Mark
recommended requirements clearly as recommendations.

Create a complete SOFTWARE REQUIREMENTS SPECIFICATION (SRS) following
professional IEEE-style SRS principles where appropriate.

Cover every important corner of the system.

Include:

1.  Introduction
    -   Purpose
    -   Scope
    -   Definitions
    -   Acronyms
    -   References
    -   Document overview
2.  Overall Description
    -   Product perspective
    -   Product functions
    -   User classes
    -   Operating environment
    -   Design constraints
    -   Assumptions
    -   Dependencies
3.  User Roles
    -   Guest
    -   Student
    -   Tutor
    -   Administrator
4.  Functional Requirements

Create unique requirement IDs such as FR-AUTH-001, FR-TUTOR-001,
FR-BOOK-001.

Cover Authentication, Student features, Tutor features, Tutor Search,
Availability, Booking, Sessions, Chat, Notifications, Video, Payments,
Reviews, Admin, and AI/ML.

5.  Non-Functional Requirements

Create NFR IDs and cover: - Performance - Scalability - Availability -
Reliability - Security - Privacy - Accessibility - Usability -
Maintainability - Testability - Portability - Browser compatibility -
Mobile responsiveness - API response targets - Database performance -
Real-time reliability - AI response handling - Error handling -
Logging - Backup/recovery

6.  Business Rules
7.  Data Requirements
8.  External Interface Requirements
9.  Use Cases

For use cases include: - Use case ID - Actor - Preconditions - Trigger -
Main flow - Alternative flow - Exception flow - Postconditions

10. User Stories
11. Acceptance Criteria
12. System States and Status Transitions
13. Error and Exception Requirements
14. Security Requirements
15. Privacy Requirements
16. AI Safety and AI Failure Handling
17. Constraints
18. Assumptions
19. Requirement Traceability Matrix
20. MVP Requirements vs Optional Requirements
21. Open Questions
22. Final SRS Approval Checklist

Make the SRS detailed enough that frontend, backend, database, AI/ML,
and testing teams can build the application without guessing fundamental
requirements.

------------------------------------------------------------------------

# SOCRATES --- Feature Specification & Priority Prompt

Act as a senior Product Manager, Software Architect, Agile Project
Manager, and Technical Lead.

Analyze all SOCRATES project resources and the finalized Project
Definition and SRS.

Create a comprehensive FEATURE SPECIFICATION AND PRIORITIZATION
DOCUMENT.

For EVERY feature provide: - Feature ID - Feature name - Description -
Problem solved - Target user - Business value - Academic value -
Functional requirements - Dependencies - Frontend requirements - Backend
requirements - Database requirements - API requirements - Real-time
requirements - AI/ML requirements if applicable - Security
considerations - Edge cases - Acceptance criteria - Estimated
complexity - Estimated development effort - Risk level

Classify every feature using MoSCoW: - MUST HAVE - SHOULD HAVE - COULD
HAVE - WON'T HAVE FOR CURRENT VERSION

Organize features into: - Phase 0 --- Project Foundation - Phase 1 ---
Authentication and Users - Phase 2 --- Tutor Marketplace - Phase 3 ---
Search and Discovery - Phase 4 --- Availability and Scheduling - Phase 5
--- Booking - Phase 6 --- Dashboards - Phase 7 --- Chat and
Notifications - Phase 8 --- Video Sessions - Phase 9 --- Reviews - Phase
10 --- Payments - Phase 11 --- AI Features - Phase 12 --- ML Features -
Phase 13 --- Admin - Phase 14 --- Testing and Deployment

Identify: - Critical path features - Features that can be developed in
parallel - High-risk features - Features that should be simplified -
Features that should be postponed - Third-party API dependencies

Create a dependency map such as: Authentication → Tutor Profile →
Availability → Booking → Session → Review

Create a final MVP feature checklist and a "Demo Day Feature Set".

Do not prioritize features merely because they sound impressive.
Prioritize a stable, demonstrable, academically valuable system.

------------------------------------------------------------------------

# SOCRATES --- System Architecture Document Prompt

Act as a senior Software Architect, Cloud Architect, Backend Architect,
Security Architect, and AI Systems Architect.

Analyze all SOCRATES resources, Project Definition, SRS, and Feature
Specification.

Design a complete SYSTEM ARCHITECTURE DOCUMENT realistic for a 4-person
academic team.

Cover: 1. Architecture Overview 2. Architecture Goals 3. Architecture
Principles 4. High-Level System Architecture 5. Architecture diagram
using Mermaid 6. Frontend Architecture 7. Backend Architecture 8.
Database Architecture 9. Authentication Architecture 10.
Authorization/RBAC Architecture 11. Booking Architecture 12. Scheduling
Architecture 13. Real-Time Architecture 14. Video Integration
Architecture 15. Payment Architecture 16. AI Integration Architecture
17. ML Service Architecture 18. File/Media Storage Architecture 19.
Notification Architecture 20. Email Architecture 21. API Gateway or
Backend Entry Point 22. Data Flow Diagrams for Login, Tutor Search,
Booking, Chat, Video Session, AI Tutor, and ML Prediction 23. Security
Architecture 24. Error Handling Architecture 25. Logging and Monitoring
26. Deployment Architecture 27. Development Environment 28. Production
Environment 29. Environment Variables and Secret Management 30.
Scalability Considerations 31. Performance Considerations 32. Failure
Scenarios 33. Technology Decision Record 34. Architecture Risks 35.
Final Recommended Architecture

For each major technology explain why selected, alternatives,
advantages, and disadvantages.

Avoid unnecessary microservices. Prefer a modular monolith unless a
separate ML service has a strong technical reason.

------------------------------------------------------------------------

# SOCRATES --- Database Design Document Prompt

Act as a senior Database Architect, MongoDB Data Modeler, Backend
Engineer, and Data Engineer.

Analyze the complete SOCRATES requirements and architecture.

Create a comprehensive DATABASE DESIGN DOCUMENT.

Cover: 1. Database objectives 2. Database technology selection 3.
Complete data model

Consider: - Users - StudentProfiles - TutorProfiles - Subjects -
TutorSubjects - Availability - Bookings - Sessions - Payments -
Conversations - Messages - Reviews - Notifications - Favorites -
AIInteractions - SessionSummaries - Recommendations - StudentPerformance

For every collection define: - Purpose - Fields - Data types -
Required/optional - Default values - Validation - Unique constraints -
References - Indexes - Example document

Also cover: 4. Relationships 5. ER/data relationship diagram using
Mermaid 6. Embedding vs referencing decisions 7. User role modeling 8.
Booking data model 9. Booking status lifecycle 10. Session model 11.
Difference between Booking and Session 12. Availability model 13.
Preventing double booking 14. Timezone strategy 15. Chat data model 16.
Payment data model 17. Review eligibility rules 18. AI interaction
storage 19. ML feature data requirements 20. Indexing strategy 21. Query
optimization 22. Pagination 23. Data validation 24. Data integrity 25.
Soft delete vs hard delete 26. Audit fields 27. Privacy-sensitive data
28. Data retention 29. Backup strategy 30. Seed/demo data strategy 31.
Migration/versioning strategy 32. Example MongoDB/Mongoose schemas 33.
Common queries 34. Database security 35. Scaling considerations 36.
Final schema summary

Pay special attention to race conditions and double-booking prevention.

------------------------------------------------------------------------

# SOCRATES --- UI/UX Design System Prompt

Act as a senior UI/UX Designer, Product Designer, Design System
Architect, Accessibility Specialist, and Frontend Performance Engineer.

Create a comprehensive UI/UX DESIGN SYSTEM AND EXPERIENCE SPECIFICATION
for SOCRATES.

The design should feel modern, premium, professional, educational,
trustworthy, and AI-enabled without becoming visually excessive.

Cover: 1. Design philosophy 2. Brand personality 3. Visual direction 4.
Target user experience 5. Information architecture 6. Complete sitemap
7. Navigation architecture 8. User journeys 9. Page inventory

For every page define: - Purpose - Target user - Main sections -
Components - Primary CTA - Secondary CTA - Empty states - Loading
states - Error states - Mobile behavior

Also cover: 10. Design tokens 11. Typography system 12. Icon system 13.
Component library 14. Buttons 15. Forms 16. Cards 17. Modals 18.
Navigation 19. Tables 20. Dashboard widgets 21. Calendar UI 22. Chat UI
23. Video session UI 24. AI Tutor UI 25. Tutor profile cards 26.
Search/filter experience 27. Booking flow 28. Responsive design 29.
Accessibility 30. Animation guidelines 31. Performance guidelines 32.
Skeleton loaders 33. Empty states 34. Error states 35. Toasts and
notifications 36. Confirmation dialogs 37. Dark mode decision 38.
Mobile-first considerations 39. UI consistency rules 40. Recommended use
of shadcn/ui, Radix, Motion/Framer Motion, icons, and Lottie 41. What
NOT to do 42. Wireframe descriptions 43. Final UI/UX checklist

For animation, primarily use transform and opacity. Avoid unnecessary
layout-changing animations and use will-change sparingly.

Prevent overuse of animations, gradients, glassmorphism, and
inconsistent component libraries.

------------------------------------------------------------------------

# SOCRATES --- API Specification Prompt

Act as a senior REST API Architect, Backend Engineer, Security Engineer,
and Technical Documentation Writer.

Create a complete API SPECIFICATION for SOCRATES based on the finalized
SRS, architecture, and database design.

Use RESTful design principles.

Define: 1. API overview 2. Base URL 3. API versioning 4. Authentication
method 5. Authorization 6. Standard response format 7. Standard error
format 8. HTTP status codes 9. Pagination 10. Filtering 11. Sorting 12.
Search 13. Rate limiting

Define endpoints for: /auth /users /students /tutors /subjects
/availability /bookings /sessions /payments /reviews /favorites
/conversations /messages /notifications /admin /ai /ml

For EVERY endpoint provide: - Endpoint ID - Method - URL - Description -
Authentication required - Allowed roles - Path parameters - Query
parameters - Request headers - Request body - Validation rules - Success
response - Error responses - HTTP status codes - Business rules

Also cover: - JWT lifecycle - Refresh token strategy - Authorization
middleware - File upload APIs - WebSocket events - Socket
authentication - AI API failure handling - Payment webhooks -
Idempotency - Booking race conditions - API security - CORS - Rate
limiting - Input sanitization - API testing strategy

Create an API endpoint summary table.

Ensure frontend developers can build against this specification without
guessing request or response structures.

------------------------------------------------------------------------

# SOCRATES --- AI/ML System Design Prompt

Act as a senior AI Engineer, Machine Learning Engineer, Data Scientist,
LLM Application Architect, and Academic AI Project Mentor.

Analyze SOCRATES and create a comprehensive AI/ML SYSTEM DESIGN DOCUMENT.

Clearly distinguish between: 1. Generative AI / LLM API integration 2.
Traditional machine learning 3. Recommendation algorithms 4. NLP 5.
Analytics

Evaluate: - AI Tutoring Assistant - Smart Tutor Recommendations -
Session Summarization - Sentiment Analysis - Student Performance
Prediction - Intelligent Scheduling - Content Moderation -
Speech-to-Text

For each feature provide: - Purpose - User value - Academic value -
Inputs - Outputs - Data requirements - Model/API - Architecture -
Processing flow - Database storage - API endpoint - UI integration -
Failure handling - Cost considerations - Privacy considerations -
Evaluation metrics - Limitations

For AI Tutor cover prompt architecture, system prompt, context
management, conversation history, hallucination handling, safety, and
rate limiting.

For Tutor Recommendation design a practical scoring system using subject
match, availability, rating, price, experience, language, and student
preferences. Explain evolution from rule-based ranking to ML.

For Performance Prediction define target variable, features, training
data, preprocessing, model candidates, train/test split, evaluation
metrics, overfitting prevention, model persistence, and inference API.

For Sentiment Analysis define model and classification flow.

For Session Summary define transcript → LLM → structured summary flow.

Create AI/ML architecture diagrams.

Define MVP, Phase 2, and Future Scope.

Explain how to demonstrate actual ML work rather than only API calls.

Include AI ethics, bias, privacy, explainability, limitations, cost
controls, fallback strategies, and evaluation plan.

End with the exact recommended AI/ML feature set for academic
submission.

------------------------------------------------------------------------

# SOCRATES --- Project Development Plan Prompt

Act as a senior Technical Project Manager, Scrum Master, Engineering
Manager, and Academic Project Coordinator.

Create a comprehensive DEVELOPMENT PLAN for SOCRATES for a 4-person team
during the first half of 2026.

Cover: 1. Project timeline 2. Development phases 3. Milestones 4.
Deliverables 5. Four-person responsibility matrix 6. Week-by-week
development plan 7. Feature dependencies 8. Critical path 9. Parallel
development opportunities 10. Git strategy 11. Pull request process 12.
Code review process 13. Commit conventions 14. Folder structure 15.
Environment setup 16. Development environment 17. Team communication 18.
Weekly meetings 19. Task tracking 20. Definition of Done 21. Sprint
planning 22. Risk management 23. Third-party dependency risks 24. AI/API
risks 25. Database risks 26. Integration risks 27. Testing schedule 28.
Deployment schedule 29. Documentation schedule 30. Academic review/demo
preparation 31. Backup plan if development falls behind 32. MVP freeze
date 33. Feature freeze date 34. Testing-only period 35. Final
deployment 36. Final presentation preparation

Suggested roles: - Member 1 --- Frontend/UI/UX - Member 2 ---
Dashboard/Real-time Frontend - Member 3 --- Core Backend - Member 4 ---
Advanced Backend/AI-ML/DevOps

Improve allocation if necessary.

Create: - Timeline table - Responsibility matrix - Milestone table -
Risk matrix - Deliverables checklist

The plan must be realistic for students balancing regular semester
coursework.

------------------------------------------------------------------------

# SOCRATES --- Testing & Quality Assurance Plan Prompt

Act as a senior QA Engineer, Software Test Architect, Security Tester,
and Academic Testing Documentation Expert.

Create a complete TESTING AND QUALITY ASSURANCE PLAN for SOCRATES.

Cover: 1. Testing objectives 2. Testing scope 3. Testing strategy 4.
Testing environments 5. Unit testing 6. Component testing 7. API testing
8. Integration testing 9. Database testing 10. Authentication testing
11. Authorization/RBAC testing 12. Booking testing 13.
Double-booking/concurrency testing 14. Availability testing 15. Payment
testing 16. Chat/WebSocket testing 17. Video integration testing 18.
Notification testing 19. AI feature testing 20. ML model testing 21. UI
testing 22. Responsive testing 23. Accessibility testing 24.
Cross-browser testing 25. Performance testing 26. Load testing 27.
Security testing 28. Input validation 29. XSS testing 30. Injection
testing 31. Rate-limit testing 32. Error handling 33. Network failure
testing 34. Third-party API failure testing 35. Regression testing 36.
End-to-end testing

For each major module create test cases containing: - Test Case ID -
Requirement ID - Module - Scenario - Preconditions - Test steps -
Input - Expected result - Actual result - Pass/Fail - Priority

Include edge cases such as: - Two students booking the same tutor slot
simultaneously - Expired JWT - Tutor cancelling a session - Student
reviewing a session they never completed - Socket disconnect during
chat - Duplicate messages - AI API timeout - AI returns invalid
response - Payment succeeds but backend callback fails - Database
connection failure - Invalid file upload - Extremely long user input -
Different timezones

Create: - Testing matrix - Requirement traceability matrix - Bug
severity levels - Bug priority levels - Release acceptance criteria -
Final QA checklist

------------------------------------------------------------------------

# SOCRATES --- Project Bible / Single Source of Truth Prompt

Act as the Lead Software Architect and Technical Documentation Manager
for SOCRATES.

I have created the following finalized documents:

1.  Project Definition
2.  SRS
3.  Feature Specification
4.  System Architecture
5.  Database Design
6.  UI/UX Design System
7.  API Specification
8.  AI/ML Design
9.  Development Plan
10. Testing Plan

Your task is to combine and reconcile these into one authoritative
document called:

"SOCRATES PROJECT BIBLE --- SINGLE SOURCE OF TRUTH"

Do NOT simply concatenate the documents.

Analyze them for: - Contradictions - Duplicate requirements -
Conflicting technology choices - Inconsistent terminology - Missing
features - Inconsistent database names - API/database mismatches -
Role/permission conflicts - Architecture conflicts - Scope creep

Resolve conflicts and explicitly document important decisions.

The Project Bible must contain: 1. Project identity 2. Final problem
statement 3. Final solution 4. Final scope 5. Final user roles 6. Final
feature list 7. MVP 8. Final architecture 9. Final technology stack 10.
Final database model 11. Final API architecture 12. Final authentication
strategy 13. Final booking workflow 14. Final scheduling workflow 15.
Final real-time architecture 16. Final AI/ML architecture 17. Final
UI/UX rules 18. Final security requirements 19. Final testing strategy
20. Final deployment architecture 21. Team responsibilities 22.
Development timeline 23. Risk register 24. Third-party services 25.
Environment variables 26. Coding standards 27. Git workflow 28.
Definition of Done 29. Demo requirements 30. Academic deliverables 31.
Future scope

Include a section called "NON-NEGOTIABLE PROJECT DECISIONS".

Include a section called "AI CODING AGENT INSTRUCTIONS" defining
rules: - Follow existing architecture - Do not change tech stack without
approval - Do not create duplicate components - Do not invent APIs -
Follow database schema - Follow design system - Preserve
authentication/security - Validate inputs - Handle errors - Keep code
modular - Do not expose secrets - Follow responsive design - Follow
accessibility rules - Follow performance guidelines

The final Project Bible should be detailed enough that a new developer
or AI coding agent can understand the entire project and begin
contributing safely.

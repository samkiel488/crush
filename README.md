# DEVOUR TO CRUSH (D2C)

**Nickname:** D2C  
**Project:** OAU-focused JAMB Exam Prep Platform  

## 1. Project Overview
DEVOUR TO CRUSH (D2C) is a full-stack exam-prep platform designed to help students prepare for **JAMB**. It provides a structured question bank, interactive mock tests, personalized analytics, and community engagement.

**Tech Stack**
- Frontend: Next.js, TailwindCSS, Redux Toolkit (state management)
- Backend: Node.js, Express.js
- Database: MongoDB (Mongoose ORM)
- Authentication: JWT
- Cloud/Storage: Render, FCM/OneSignal for notifications
- Payments: Paystack or Flutterwave

## 2. Folder Structure
CRUSH/
frontend/ # Next.js frontend application
pages/
components/
store/
services/
public/
package.json

backend/ # Express.js backend API
src/
modules/
auth/
users/
questions/
exams/
community/
middleware/
utils/
config/
app.js
package.json

markdown
Copy code

## 3. Core Features
- **JAMB Question Bank**: Extensive repository of past JAMB questions with explanations.
- **Exam Simulator**: Timed CBT-style mock exams with analytics and scoring.
- **Study Resources**: Notes, syllabus outlines, curated guides.
- **User Dashboard**: Track performance, weak topics, bookmarks.
- **Community Layer**: Q&A, peer support, discussion clusters.
- **Offline Support**: Download questions for offline practice.
- **Monetization**: Freemium model with premium subscription/content packs.

## 4. API & Backend Notes
- RESTful API endpoints with JWT authentication
- Core modules: auth, users, questions, exams, community, payments
- Performance tracking & analytics for users
- Error handling with standard JSON error objects

## 5. Development & Deployment
- CI/CD: GitHub Actions
- Deployment: Dockerized services, Nginx reverse proxy
- Logging & Monitoring: Winston + Grafana or CloudWatch
- Environment variables stored securely

## 6. Future Roadmap
- AI-powered study assistant for personalized guidance
- Expansion to other exams/universities
- Mobile wrapper for Android/iOS
- Gamified reward system for engagement

---

**D2C** is the go-to JAMB preparation hub, combining content, practice, analytics, and community in a single web-first platform.
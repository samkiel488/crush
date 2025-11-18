# TODO: Scaffold DEVOUR TO CRUSH (D2C) JAMB Exam Prep Platform

## Frontend (Next.js 16 with app router, TypeScript, TailwindCSS)
- [ ] Update package.json with Redux Toolkit, Axios if needed
- [ ] Create folder structure: components/, store/, services/, hooks/
- [ ] Create pages in src/app/: index (home), questions, exam, dashboard, community, auth/login, auth/register
- [ ] Create components: Header, Footer, QuestionCard, ExamTimer, AnalyticsChart, StudyResourceCard
- [ ] Create Redux slices for auth, questions, exams, dashboard, community
- [ ] Create API services with Axios
- [ ] Update layout.tsx for global components
- [ ] Add offline support with localStorage

## Backend (Node.js + Express, MongoDB, JWT)
- [ ] Update package.json with scripts: "start": "nodemon src/app.js"
- [ ] Create folder structure: src/modules/auth, users, questions, exams, community, payments; middleware, utils, config
- [ ] Create app.js with Express setup, middleware, routes
- [ ] Create models for each module (User, Question, Exam, etc.)
- [ ] Create routes for each module with CRUD, JWT auth
- [ ] Add middleware for auth, error handling
- [ ] Create config for DB connection
- [ ] Add .env example

## General
- [ ] Update .gitignore with node_modules, .env, logs, etc.
- [ ] Create README with setup instructions for MongoDB, env vars, run scripts
- [ ] Test basic runs: npm run dev (frontend), npm run start (backend)

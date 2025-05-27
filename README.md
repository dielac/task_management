# Task Management App 

A simple, beginner-friendly task manager built with React, TypeScript, Vite, and Auth0.  
Seamelessly manage tasks, track progree, and keep your to-dos in check—all in one place.

---

## Key Features

**Simple Task Management**  
- Create, edit, delete tasks  
- View task details (title, description, due date, status)  

**Global State & Typed Hooks**  
- `useState` hooks with full TypeScript types  
- Context API for sharing tasks across components  

**Auth0 Authentication**  
- Login / logout with Auth0  
- Protect create/edit pages so only signed-in users can use them  

**Error Handling & Validation**  
- Inline error messages if fields are empty  
- Save button disabled until form is valid  

**TypeScript Everywhere**  
- Interfaces for `Task` and `AuthUser`  
- `import type { … }` for cleaner code  

---
## Project Structure 
task_management/
├── public/
│   └── index.html        # HTML entry point
├── src/
│   ├── components/       # Reusable UI parts 
│   ├── context/          # TaskContext 
│   ├── pages/            # Dashboard, TaskForm, TaskEdit, TaskDetails, Login, Profile
│   ├── types/            # TS interfaces 
│   ├── App.tsx           # Route definitions
│   ├── main.tsx          # ReactDOM + BrowserRouter + Providers
│   └── index.css         # Global styles
├── .env                  # Auth0 env vars 
├── .gitignore
├── package.json
└── tsconfig.json



## Quick Start

### Prerequisites
- Node.js (v16 or higher)  
- npm  

### Installation
```bash
git clone https://github.com/dielac/task_management.git
cd task_management
npm install

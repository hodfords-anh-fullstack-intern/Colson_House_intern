# Colson Hotel — Local Development & Test Environment

This repository contains the local development environment for the **Colson Hotel** project. It is structured as a decoupled monorepo with a Laravel backend API and a React (Vite) frontend SPA.

---

## 💻 Tech Stack

- **Backend**: Laravel 11+ (PHP 8.5)
- **Frontend**: React 19 (Vite, Vanilla CSS)
- **Database**: MySQL (local dev / staging / production) (SQLite is also supported)
- **CORS Policy**: Configured to restrict origin requests dynamically based on the environment.
- **Dependency Security**: Scanned and verified using `composer audit` and `npm audit`.

---

## 📁 Repository Structure

```text
Colson_Hotel/
├── backend/            # Laravel Backend API
│   ├── app/            # Controllers, Models, Middleware, etc.
│   ├── config/         # System settings (CORS, Sanctum, Database)
│   ├── database/       # Migrations & Seeders
│   ├── routes/         # API routing (routes/api.php)
│   ├── .env.example    # Environment variable templates
│   └── ...
├── frontend/           # React Frontend SPA
│   ├── src/            # Source code (Components, CSS, Assets)
│   ├── public/         # Static assets
│   ├── .env.example    # Environment variable templates for Vite
│   └── ...
├── README.md           # Main documentation (this file)
└── .gitignore          # Root Git ignore rules
```

---

## 🚀 Local Setup Guide

Follow these steps to set up and run the project locally on your machine.

### 📋 Prerequisites
Make sure you have the following installed:
- **Git**
- **PHP 8.5+** (ensure `pdo_mysql` extension is enabled — see [Troubleshooting](#-troubleshooting) below if using SQLite)
- **Composer 2.x**
- **Node.js (v24+) & npm**

---

### Step 1: Clone the Repository
Clone the project from GitHub and navigate to the project directory:
```bash
git clone https://github.com/hodfords-anh-fullstack-intern/Colson_House_intern.git
cd Colson_House_intern
```

---

### Step 2: Backend Setup (Laravel)
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install PHP dependencies:
   ```bash
   composer install
   ```
3. Copy the environment configuration file:
   ```bash
   # Windows command (CMD / PowerShell):
   copy .env.example .env
   
   # macOS / Linux command:
   cp .env.example .env
   ```
4. Generate the application encryption key:
   ```bash
   php artisan key:generate
   ```
5. Create a MySQL database and run the database migrations:
   - **Create Database**: Open your MySQL server (via phpMyAdmin, MySQL CLI, or XAMPP) and create a database named `colson_house`.
   - **Configure `.env`**: Make sure the database credentials in `backend/.env` are correct (default host is `127.0.0.1`, port is `3306`, user is `root`, password is empty).
   - **Run migrations**:
     ```bash
     php artisan migrate
     ```
6. Create the storage symbolic link (crucial for room images display):
   ```bash
   php artisan storage:link
   ```
7. Start the local development server:
   ```bash
   php artisan serve
   ```
   *The backend API will run at `http://127.0.0.1:8000`.*

---

### Step 3: Frontend Setup (React)
1. Open a new terminal window or tab and navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install npm packages:
   ```bash
   npm install
   ```
3. Copy the frontend environment configuration file:
   ```bash
   # Windows command (CMD / PowerShell):
   copy .env.example .env
   
   # macOS / Linux command:
   cp .env.example .env
   ```
4. Start the frontend development server:
   ```bash
   npm run dev
   ```
   *The frontend application will be active at `http://localhost:5173`.*

---

## 🌿 GitHub Collaboration & Branching Strategy

To work smoothly as a team and prevent code conflicts, we use the following workflow.

### 1. Branch Rules
- **`main`**: Production release branch. **Never commit directly to `main`.**
- **`develop`**: Development and staging integration branch. All feature branches merge here.
- **`feature/your-feature-name`**: Workspace for your current task (e.g. `feature/room-booking-form`).

### 2. Daily Development Workflow

#### A. Start of Day: Sync with GitHub
Before starting your work, fetch the latest code from your team:
```bash
git checkout develop
git pull origin develop
```

#### B. Create a Feature Branch
Create and switch to your feature branch based on `develop`:
```bash
git checkout -b feature/name-of-your-feature
```

#### C. Working & Committing Code
Write clean code and commit regularly. Do not commit `.env` or sensitive credentials:
```bash
git add .
git commit -m "feat: add room details layout"
```

#### D. Push to GitHub & Create Pull Request (PR)
When the feature is completed, push it to GitHub:
```bash
git push origin feature/name-of-your-feature
```
- Go to the repository on GitHub.
- Click **"Compare & pull request"**.
- Set the base branch to **`develop`** and compare to your branch.
- Request a team member to review and approve your changes.

---

## 🛠 Troubleshooting

### 1. Error: `could not find driver` during migrations (MySQL)
This occurs because the PHP MySQL extension is not enabled in your local PHP configuration (`php.ini`).

#### How to fix:
1. Locate your active `php.ini` file.
   - If using **XAMPP**, it is usually at `C:\xampp\php\php.ini`.
2. Open `php.ini` in a text editor (e.g., Notepad, VS Code).
3. Search for the following line (use `Ctrl+F`):
   ```ini
   ;extension=pdo_mysql
   ```
4. Enable it by removing the semicolon `;` at the beginning of the line:
   ```ini
   extension=pdo_mysql
   ```
5. Save the file and restart your Apache web server in XAMPP.

### 2. AVIF / Image Processing Support (GD Extension)
For the backend to convert uploaded room images into `.avif` format automatically, the PHP GD library must be enabled.

#### How to fix:
1. Open your `php.ini` file (`C:\xampp\php\php.ini` for XAMPP).
2. Search for the following line:
   ```ini
   ;extension=gd
   ```
3. Enable it by removing the semicolon `;`:
   ```ini
   extension=gd
   ```
4. Save the file and **restart your Apache server** in XAMPP.

### 3. Git Permission Denied (403) / Wrong Account Error
This occurs when local Git attempts to push using cached credentials from an old or incorrect GitHub account, leading to a permission error like:
`remote: Permission to hodfords-anh-fullstack-intern/Colson_House_intern.git denied to <old-username>.`

#### How to fix:
1. **Check current Remote URL**:
   ```bash
   git remote -v
   ```
2. **Correct the Remote URL** (if pointing to the wrong repository):
   ```bash
   git remote set-url origin https://github.com/hodfords-anh-fullstack-intern/Colson_House_intern.git
   ```
3. **Clear Stored Credentials**:
   - **Windows**:
     1. Open **Credential Manager** from the Start Menu.
     2. Select **Windows Credentials**.
     3. Scroll down to **Generic Credentials**, find **`git:https://github.com`**, and click **Remove**.
   - **macOS**:
     1. Open **Keychain Access**.
     2. Search for `github.com`.
     3. Right-click and delete the key entries.
4. **Push & Log In Again**:
   Run the push command, and Git will prompt you to authenticate with your browser. Log in with the correct account:
   ```bash
   git push -u origin develop
   ```

---

##  Security Requirements
1. **Never Commit Secrets**: Make sure `.env` files are ignored. Keep sensitive API keys, passwords, and tokens out of the codebase.
2. **Prepared Statements**: Always use Eloquent ORM or DB query builder parameterized queries to protect against SQL injections.
3. **Generic Error Messages**: In staging and production environments, ensure `APP_DEBUG=false` is set in the `.env` file to hide stack traces from users.
4. **Input Validation**: Validate and sanitize all user input server-side before storing or using it.

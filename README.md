# 🚀 Cypress QA Automation Project

This project contains End-to-End (E2E) and API tests for the Cypress Documentation website.

https://docs.cypress.io
---
## 📁 Project Structure

This project follows a **scalable Cypress + TypeScript architecture** using  
**Page Object Model (POM)** + **Component-based design**.
---
📦 E2E-TESTS-DOCS-CYPRESS
├── 📁 components/ # Reusable UI components
│ ├── Header.ts
│ ├── SearchComponent.ts
│ └── Sidebar.ts
│
├── 📁 config/ # Environment & route configuration
│ ├── env.ts
│ └── urls.ts
│
├── 📁 cypress/
│ ├── 📁 e2e/ # Test specs grouped by feature
│ │ ├── 📁 api/
│ │ │ └── posts.cy.ts
│ │ ├── 📁 dashboard/
│ │ │ └── dashboard.cy.ts
│ │ ├── 📁 language/
│ │ │ └── spanish-language.cy.ts
│ │ ├── 📁 search/
│ │ │ └── search.cy.ts
│ │ └── 📁 sidebar/
│ │ └── sidebar.cy.ts
│ │
│ ├── 📁 fixtures/ # Static test data
│ │ ├── apiData.json
│ │ └── searchData.json
│ │
│ ├── 📁 pages/ # Page Object Model (POM)
│ │ ├── 📁 base/
│ │ │ └── BasePage.ts
│ │ ├── 📁 dashboard/
│ │ │ └── DashboardPage.ts
│ │ ├── 📁 language/
│ │ │ └── LanguagePage.ts
│ │ ├── 📁 search/
│ │ │ └── SearchPage.ts
│ │ └── 📁 sidebar/
│ │ └── SidebarPage.ts
│ │
│ ├── 📁 screenshots/ # Cypress failure screenshots
│ │
│ └── 📁 support/ # Global Cypress setup
│ ├── 📁 types/
│ │ └── custom.d.ts # Custom TS declarations
│ ├── allure.ts # Allure helpers
│ ├── commands.ts # Custom Cypress commands
│ └── e2e.ts # Global hooks & config
│
├── 📁 utils/ # Helper functions & constants
│ ├── constants.ts
│ └── helpers.ts
│
├── ⚙️ cypress.config.ts # Cypress configuration
├── ⚙️ tsconfig.json # TypeScript configuration
├── 🐳 Dockerfile # Docker execution setup
├── 📦 package.json # Dependencies & scripts
├── 📦 package-lock.json
│
├── 📄 README.md
├── 📄 TEST-PLAN.md
└── 📄 TEST-SCENARIOS.md
---
---

---

## 🧠 Architecture Overview

### 🔹 Components
Reusable UI interaction layers (Header, Sidebar, Search)  
→ Promotes **reusability and cleaner selectors**

---

### 🔹 Pages (POM)
Encapsulates page-level behavior and logic  
→ Improves **maintainability and scalability**

---

### 🔹 E2E Tests
Grouped by feature:
- `search`
- `dashboard`
- `language`
- `sidebar`
- `api`

→ Enables **modular and scalable testing**

---

### 🔹 Fixtures
Static JSON data used in tests  
→ Supports **data-driven testing**

---

### 🔹 Support Layer
- Custom commands
- Global hooks
- Allure integration

→ Centralizes **test setup and extensions**

---

### 🔹 Utils
Shared helpers and constants  
→ Reduces duplication across tests

---

### 🔹 Config
Environment variables and routes  
→ Avoids hardcoding and improves flexibility

---

## 🚀 Design Principles

- ✅ Separation of concerns  
- ✅ Reusability (Components + Commands)  
- ✅ Scalability (feature-based structure)  
- ✅ Maintainability (POM pattern)  
- ✅ Type safety (TypeScript)  
- ✅ CI/CD & Docker ready  

---

## 📌 Features Covered

- 🔎 Search functionality
- 📂 Dashboard navigation
- 🌐 Spanish localization
- 🔌 REST API (JSONPlaceholder)

---

## 🛠 Tech Stack

- Cypress
- Node.js
- Typescript
- GitLab (CI/CD ready)

---

## ⚙️ Environment Setup

### 1. Prerequisites

- Node.js (v18 or higher)
- npm (comes with Node)
- Git

---

### 2. Installation

```bash
# Clone repository
git clone <your-repo-url>

# Navigate to project
cd project-name

# Install dependencies
npm install

# Allure report setup
npm install --save-dev @shelex/cypress-allure-plugin allure-commandline
```

# Running Tests

This document describes how to execute tests locally, in CI, and using Docker.

---

## Run Tests Locally

### Open Cypress UI (interactive mode)

```bash
npx cypress open
```
### Run all tests

```bash
npx cypress run
```
### Run specific spec

```bash
npx cypress run --spec "cypress/e2e/search.cy.js"
```
### Run with Allure reports

# run tests with Allure results
```bash
npx cypress run
```

# generate report
```bash
npx allure generate allure-results --clean -o allure-report
```

# open report
```bash
npx allure open allure-report
```

### Run tests via Docker
```bash
# build image
docker build -t cypress-tests .
```

# run tests
```bash
docker run cypress-tests
```
# 🌟 Cypress E2E Tests – QA Skills Evaluation

## 📌 Project Overview

This project was created as part of a **Software QA Skills Evaluation**.
It demonstrates a **scalable End-to-End (E2E) test automation framework** built using:

* Cypress (latest stable)
* TypeScript
* Page Object Model (POM)
* Component-based design
* Docker
* CI/CD (GitHub Actions + Jenkins)
* Allure reporting

---

## 🎯 Objectives

The goal was to test the following features on:
👉 https://docs.cypress.io/

### Covered Features

* 🔍 **Search functionality**
* 📂 **Sidebar navigation (real feature)**
* 📊 **Dashboard (future feature)**
* 🌐 **Spanish language support (future feature)**
* 🔗 **REST API testing (JSONPlaceholder)**

---

## ⚠️ Note on Future Features

The following features are **not currently implemented** on the Cypress Docs site:

* Dashboard sidebar category
* Spanish language support

Tests for these features are:

* Designed based on expected behavior
* Included in the project
* Executed separately in CI
* Allowed to fail intentionally (future-ready)

---

## 🏗️ Architecture

This project follows a **clean, scalable architecture**:

* Page Object Model (POM)
* Component-based structure
* Feature-based test organization
* Reusable utilities and helpers

---

## 📁 Project Structure

```text
📦 e2e-tests-docs-cypress
├── 📁 components/
│   ├── Header.ts
│   ├── SearchComponent.ts
│   └── Sidebar.ts
│
├── 📁 config/
│   ├── env.ts
│   └── urls.ts
│
├── 📁 cypress/
│   ├── 📁 e2e/
│   │   ├── api/
│   │   │   └── posts.cy.ts
│   │   ├── dashboard/
│   │   │   └── dashboard.cy.ts
│   │   ├── language/
│   │   │   └── spanish-language.cy.ts
│   │   ├── search/
│   │   │   └── search.cy.ts
│   │   └── sidebar/
│   │       └── sidebar.cy.ts
│   │
│   ├── 📁 fixtures/
│   │   ├── apiData.json
│   │   └── searchData.json
│   │
│   ├── 📁 pages/
│   │   ├── base/
│   │   │   └── BasePage.ts
│   │   ├── dashboard/
│   │   │   └── DashboardPage.ts
│   │   ├── language/
│   │   │   └── LanguagePage.ts
│   │   ├── search/
│   │   │   └── SearchPage.ts
│   │   └── sidebar/
│   │       └── SidebarPage.ts
│   │
│   ├── 📁 screenshots/
│   │
│   └── 📁 support/
│       ├── 📁 types/
│       │   └── custom.d.ts
│       ├── allure.ts
│       ├── commands.ts
│       └── e2e.ts
│
├── 📁 utils/
│   ├── constants.ts
│   └── helpers.ts
│
├── cypress.config.ts
├── tsconfig.json
├── Dockerfile
├── Jenkinsfile
├── package.json
├── package-lock.json
├── README.md
├── TEST-PLAN.md
└── TEST-SCENARIOS.md
```

---

## 🚀 Installation & Setup

### Prerequisites

* Node.js (v20.x)
* npm (v8+)
* Docker (optional, recommendet for isolated test execution)
* Jenkins (optional, for local/internal CI pipelines)
* GitHub Actions (Main CI/CD environment)

---

### Install dependencies

```bash
npm install
```
⚠️ If the allure plugin is acting up (cannot find 'cy'), run:
```bash
npm install @shelex/cypress-allure-plugin --force
```
---

## ▶️ Running Tests

### Run Cypress UI

```bash
npx cypress open
```

---

### Run headless tests

```bash
npx cypress run
```

---

### Run only stable tests (CI equivalent)

```bash
npx cypress run --spec "cypress/e2e/{api,search,sidebar}/**/*.cy.ts"
```

---

## 🐳 Docker Execution

### Build image

```bash
docker build -t cypress-tests .
```

### Run tests

```bash
docker run cypress-tests
```

---

## ⚙️ CI/CD

### GitHub Actions

* Runs automatically on every push
* Executes **stable tests** (required to pass)
* Executes **future tests** (allowed to fail)
* Ensures pipeline reliability

### CI Strategy

| Test Type                           | Execution          |
| ----------------------------------- | ------------------ |
| Stable tests (API, Search, Sidebar) | ✅ Required to pass |
| Future tests (Dashboard, Language)  | ⚠ Allowed to fail  |

---

### Jenkins (Bonus)

Pipeline uses Docker for execution:

* Builds Docker image
* Runs Cypress tests inside container

---

## 📊 Reporting

* Allure reporting integrated
* Screenshots captured on failure

---

## 🧠 Best Practices Applied

* Page Object Model (POM)
* Component abstraction
* Custom Cypress commands
* Environment configuration
* Stable selector strategy
* Handling dynamic UI (cookie consent)
* Separation of test types (stable vs future)
* CI/CD integration

---

## 📊 Coverage Mapping

| Feature   | Test File              |
| --------- | ---------------------- |
| Search    | search.cy.ts           |
| Sidebar   | sidebar.cy.ts          |
| Dashboard | dashboard.cy.ts        |
| Language  | spanish-language.cy.ts |
| API       | posts.cy.ts            |

---

## 👩🏻‍💻 Author

**Nikola Hodásová**

---

## 🤖 Tools & Assistance

This project was developed with support from:

* ChatGPT (architecture, CI/CD)
* Gemini (research and validation support)

---


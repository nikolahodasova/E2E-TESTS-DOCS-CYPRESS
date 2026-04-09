# 📋 Test Scenarios – Cypress Docs Website

---

## 🔎 Feature A: Search Bar

### Functional Tests
- Search with valid keyword
- Search with invalid keyword
- Empty search handling

### Edge Cases
- Special characters (@#$%)
- Long input (>256 chars)

### UX Tests
- Autocomplete suggestions
- Keyboard navigation (arrow keys + enter)

### Navigation
- Click search result → correct page opens

---

## 📂 Feature B: Dashboard Navigation

### Structure
- Dashboard menu visible
- Subcategories displayed

### Behavior
- Expand menu
- Collapse menu

### Navigation
- Click subcategory → correct page

### URL Validation
- URL updates correctly

---

## 🌐 Feature C: Spanish Language

### Switching
- Switch from English to Spanish

### Validation
- Content translated
- No mixed language

### Persistence
- Language retained after reload

### UI
- No layout breaking
- Text fits properly

---

## 🔌 Feature D: API Testing (JSONPlaceholder)

### GET /posts
- Status 200
- Response is array

### GET /posts/{id}
- Valid ID → 200
- Invalid ID → 404

### POST /posts
- Status 201
- Response contains created object

### PUT /posts/{id}
- Status 200
- Data updated

### DELETE /posts/{id}
- Status 200 or 204
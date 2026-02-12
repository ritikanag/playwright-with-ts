# 🚀 Playwright Automation Framework (TypeScript + POM)

## 📌 Overview

This project is an End-to-End UI Automation Framework built using:

- Playwright
- TypeScript
- Page Object Model (POM)

The framework automates a complete user journey on the SauceDemo application including login, product selection, cart validation, checkout process, and order confirmation.

Application Under Test:
https://www.saucedemo.com/

---

## 🛠 Tech Stack

- Playwright
- TypeScript
- Node.js
- Page Object Model (Design Pattern)
- HTML Reporting

---

## 🏗 Framework Architecture

This project follows the Page Object Model (POM) design pattern to ensure:

- Clean separation of concerns
- Reusable page components
- Maintainable and scalable test structure
- Better readability


### 🔎 Design Principles

- Each page has a dedicated class
- Locators are encapsulated inside page classes
- Test files contain only business logic
- Assertions are handled inside test files
- Supports parallel execution

---

## 🔁 Automated End-to-End Flow

The following user journey is automated:

1. Launch SauceDemo
2. Login with valid credentials
3. Add product to cart
4. Navigate to cart page
5. Proceed to checkout
6. Enter checkout details
7. Complete purchase
8. Validate order confirmation

---

## Key Highlights

- Strongly typed automation using TypeScript
- Modular POM structure
- Clean test design
- Scalable framework structure
- Parallel execution enabled
- Built-in Playwright HTML reporting

## Future Enhancements

- Data-driven testing
- Environment-based configuration
- CI/CD integration
- API + UI hybrid framework
- Allure reporting



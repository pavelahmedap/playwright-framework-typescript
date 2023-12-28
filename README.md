# Playwright POM Framework with TypeScript

This project is a Page Object Model (POM) framework for Playwright, implemented using TypeScript. The framework is structured to promote maintainability, reusability, and ease of test development.

## Project Structure

The project follows a modular structure with organized directories:

- **src**
  - **pages**: Contains Page Object classes representing different pages of the application.
    - `login-page.ts`: Page Object class for the login page.
    - _Add other page files as needed_
  - **utils**: Houses utility functions used across the framework.
    - `common-utlity.ts`: Utility functions for handling multiple environments.
    - `generic-functions.ts`: Generaic wrapper functions for handling playwright actions.
  - **tests**: Contains test scripts for various pages.
    - `login-page.spec.ts`: Test scripts for the login page.
  - **resources**: Stores test data, environment URLs, and page locators.
    - `locators/login-page-locator.json`: JSON file containing locators for the login page.
    - `test-data/login-data.json`: JSON file with test data.
    - _Add other resource files as needed_
  - **reporter**: Holds Playwright HTML and Allure reports.
    - _Add generated reports here_

```plaintext
project-root/
│
├── src/
│   ├── pages/
│   │   ├── login-page.ts
│   │   ├── other-page.ts
│   │   └── ...
│   │
│   ├── utils/
│   │   ├── common-utlity.ts
│   │   ├── common-constants.ts
│   │   └── ...
│   │
│   ├── tests/
│   │   ├── login-page.test.ts
│   │   ├── other-page.test.ts
│   │   └── ...
│   │
│   ├── resources/
│   │   ├── endpoints/
|   |   |      ├── common-endpoints.json
│   │   ├── locators/
│   │   │      └── login-page-locator.json
│   │   └── test-data/
│   │          └── test-data.json
│   │
│   ├── reporter/
│   │   ├── playwright-report.html
│   │   ├── allure-report/
│   │   │   └── ...
│   │   └── ...
│
├── package.json
├── .env<Copy all the values from .env.sample or get it from team member>
├── tsconfig.json
├── playwright.config.ts
├── .eslintrc.cjs
└── ...

## Implementation Details

### Pages

The `pages` directory contains Page Object classes representing different pages of the application. These classes encapsulate the functionality and locators of the respective pages.

### Utils

The `utils` directory hosts utility functions that are used across the framework. For example, `environment-utils.ts` contains functions for handling multiple environments.

### Tests

The `tests` directory contains test scripts for different pages. Each test script imports relevant Page Object classes from the `pages` directory and uses them to interact with the application.

### Resources

The `resources` directory contains JSON files for storing test data, environment URLs, and page locators. For example, `login-page-locator.json` stores locators for the login page.

### Reporter

The `reporter` directory is the destination for Playwright HTML and Allure reports generated during test execution.

## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Install browsers `npm playwright install`.
4. Run tests using `npm playwright test`.

## Reports

After running tests, find the generated Playwright HTML and Allure reports in the `reporter` directory.

Feel free to extend and modify the framework to suit your project's specific needs.

Happy testing!
```

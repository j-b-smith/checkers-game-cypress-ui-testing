
# Checkers Game Cypress UI Testing Framework

This is a Cypress UI testing framework for a Checkers game, built to demonstrate my skills in automation testing, including **Page Object Model (POM)** architecture, **TypeScript**, and **CI/CD integration**. 

---

## Features

- **Page Object Model (POM)**: A clean, reusable, and modular approach to organizing test scripts, making the framework scalable and easy to maintain.
- **TypeScript Integration**: Type-safe code for better maintainability, reducing runtime errors and ensuring robust test development.
- **Comprehensive Test Coverage**:
  - **Positive Scenarios**: Tests validating expected functionality and user flows for Player 1.
  - **Negative Scenarios**: Tests ensuring invalid moves and actions are handled correctly.
- **CI/CD Integration**: Automatically triggers tests on:
  - Pull Requests to the `main` branch.
  - Any merge into the `main` branch.
  - Manual triggers to run specific test scenarios (positive, negative, or all).
- **Custom Test Runner**: Enables running specific test types (positive, negative, or all) directly from the CI/CD pipeline.
- **GitHub Actions**: Seamlessly integrated with GitHub Actions for continuous testing and reporting.
- **Reusable Components**: Modularized components and utilities for managing game elements, ensuring scalability for future enhancements.

---

## Framework Structure

### Project Layout

```
checkers-game-cypress-ui-testing/
├── cypress/
│   ├── e2e/
│   │   ├── positiveScenarios.cy.ts   # Positive test cases
│   │   ├── negativeScenarios.cy.ts   # Negative test cases
│   ├── support/
│   │   ├── pages/                    # Page Object Model (POM)
│   │   │   ├── CheckersPage.ts       # Page file for Checkers game interactions
│   │   ├── commands.ts               # Custom Cypress commands
│   ├── fixtures/                     # Test data (if needed)
├── .github/
│   ├── workflows/
│   │   ├── cypress-tests.yml         # CI/CD pipeline configuration
├── tsconfig.json                     # TypeScript configuration
├── .gitignore                        # Ignored files
├── package.json                      # Project dependencies and scripts
├── README.md                         # Project documentation
```

---

## TypeScript in the Framework

This framework is fully written in **TypeScript**, ensuring:
1. **Type Safety**: Reduces runtime errors by catching issues during compile time.
2. **Improved Code Quality**: Enforces better practices with defined types and interfaces.
3. **Enhanced Developer Experience**: Provides better IntelliSense support for code completion and debugging.

### Key TypeScript Features
- **Custom Types and Interfaces**: Used for modeling game states, positions, and test configurations.
- **Typed Page Objects**: Ensures all page object methods return the expected types.
- **Modular Type Configurations**: Centralized TypeScript configuration via `tsconfig.json` for better scalability.

---

## How to Use

### Prerequisites

1. **Node.js** (v16 or later)
2. **Cypress** (installed via `npm`)

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:j-b-smith/checkers-game-cypress-ui-testing.git
   cd checkers-game-cypress-ui-testing
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## Running Tests

### Locally
You can run the tests locally using the following commands:

- **Run all tests**:
  ```bash
  npm run cypress:run:all
  ```

- **Run positive tests**:
  ```bash
  npm run cypress:run:positive
  ```

- **Run negative tests**:
  ```bash
  npm run cypress:run:negative
  ```

- **Open Cypress test runner**:
  ```bash
  npx cypress open
  ```

### CI/CD Pipeline

This framework is integrated with GitHub Actions to automate testing.

- **Trigger Scenarios**:
  - **Pull Requests**: Automatically runs tests based on defined scenarios (`positive`, `negative`, `all`).
  - **Push to Main**: Automatically runs all tests on every merge to `main`.
  - **Manual Trigger**: Go to the **Actions** tab in GitHub, select the workflow, and choose the test type to run manually.

---

## CI/CD Pipeline Configuration

The CI/CD pipeline is configured in `.github/workflows/cypress-tests.yml`:

- **Supported triggers**:
  - `pull_request`: Runs tests when a pull request is opened to the `main` branch.
  - `push`: Runs all tests on any merge into the `main` branch.
  - `workflow_dispatch`: Allows manually triggering specific test scenarios.
  
- **Scripts**:
  - `cypress:run:positive`: Runs positive test scenarios.
  - `cypress:run:negative`: Runs negative test scenarios.
  - `cypress:run:all`: Runs all test scenarios.

---

## Why This Framework?

This framework highlights my ability to:
1. **Build scalable testing frameworks**: Using the **Page Object Model (POM)** ensures clean and reusable code.
2. **Integrate CI/CD pipelines**: Automating tests using GitHub Actions demonstrates my skills in continuous testing and deployment.
3. **Write robust tests**: The combination of positive and negative tests ensures comprehensive coverage of functionality and edge cases.
4. **Use TypeScript effectively**: Writing type-safe code ensures reliability and maintainability.
5. **Handle modular and reusable codebases**: The framework is designed to accommodate future enhancements and additional test scenarios.

---

## Future Enhancements

1. Add advanced reporting features (e.g., Allure Reports).
2. Integrate visual regression testing.
3. Add support for more complex game scenarios (e.g., Player 1 king moves).
4. Include cross-browser testing capabilities.

---

## Contributing

Contributions are welcome! Please fork the repository and create a pull request.

---

## License

This project is licensed under the MIT License.

---

## Contact

For questions or suggestions, feel free to reach out via GitHub.

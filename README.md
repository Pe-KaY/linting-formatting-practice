# Angular Project with ESLint and Prettier

## Project Description
This is a simple Angular project demonstrating the integration of **ESLint** for linting and **Prettier** for code formatting. The project ensures that the code adheres to best practices and follows a consistent style using these tools. Husky is used to set up a pre-commit hook that runs linting and formatting checks before each commit.

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>

    Install dependencies:

    Run the following command to install all necessary npm packages:

    bash

npm install

Set up Husky:

Initialize Husky to enable pre-commit hooks:

bash

npx husky install

Run the Application:

Start the Angular development server:

bash

    npm start

    This will run the app on http://localhost:4200/.

ESLint and Prettier Configurations

    ESLint: ESLint is configured to enforce coding standards and catch potential errors in the TypeScript and Angular code.
    Prettier: Prettier is used for automatic code formatting, ensuring a consistent code style across the project.

The configuration for both tools is set up to work together without conflict.
ESLint Configuration

The ESLint configuration is located in .eslintrc.json. Key rules include:

    No unused variables.
    Consistent use of semicolons.
    Enforce arrow function usage where possible.
    Enforce explicit return types for methods.

Prettier Configuration

Prettier is configured in .prettierrc. Key settings include:

    Use of 2 spaces for indentation.
    Single quotes for strings.
    Semicolons at the end of statements.

npm Scripts and Their Purposes

    npm start: Starts the Angular development server.
    npm run lint: Runs ESLint to check for linting errors across the project.
    npm run prettier: Runs Prettier to format the codebase.
    npm run lint:fix: Automatically fixes any linting errors that can be corrected by ESLint.
    npm run format: Runs both ESLint and Prettier to lint and format the project.
    npm run test: Runs unit tests for the project.

Using the Linting and Formatting Tools
1. Running ESLint

To check the code for linting errors, run:

bash

npm run lint

If there are any linting errors, they will be displayed in the terminal. To automatically fix some of the issues, you can run:

bash

npm run lint:fix

2. Running Prettier

To format the codebase with Prettier, use the following command:

bash

npm run prettier

This will format all files based on the Prettier configuration.
3. Combining Linting and Formatting

You can run both linting and formatting in one go with:

bash

npm run lint-and-prettier


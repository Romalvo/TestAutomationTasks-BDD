#This guide explains step by step how to set up, install and run tests.


## Preconditions

### 1. Install Node.js

- Node.js is required to run Cypress. Download and install the latest LTS version from https://nodejs.org/en/download/.

- After installation, verify it by running the following command in terminal:
    ```bash
    node -v

### 2. Create a folder for This Project.

- Open your terminal and navigate to the desired location where you want to create the project folder.
- Navigate to the project folder.

### 3. Clone the Project Repository.

- Run the following command in the terminal to clone the project repository:
    ```bash
    git clone https://github.com/Romalvo/TestAutomationTasks-BDD

- Change Directory into the Project Folder.


## Project running

### 1. Install project dependencies.
 - Ensure You are in correct folder.
 - Run the following command in the terminal:
    npm install
    -This command will:
     -download all dependencies specified in the package.json file.
     -Save them in node_modules folder within the project directory

### 2. Verify installation
 - If the installation is complete, verify that the node_modules folder has been create and contains required packages.
 - Run `ls node_modules` in your terminal to verify.
 - If the node_modules folder is not created or if the packages are missing, check your npm configuration or try running `npm install` again.
 - If issues persist or some dependencies are missing, manually install the required packages using the following commands:
    ```bash
        npm install cypress --save-dev
        npm install @badeball/cypress-cucumber-preprocessor --save-dev
        npm install @bahmutov/cypress-esbuild-preprocessor --save-dev
        npm install esbuild --save-dev

### 3. Run Cypress Tests

- Run the following command in the terminal to start the Cypress Test Runner:
    ```bash
        npx cypress open

    - This command will open the Cypress Test Runner GUI.
    - When Cypress is running need to choose  E2E testing mode
    - The default browser for running Cypress tests in this project is set to Google Chrome 
    - You can run tests by clicking on the test file in the GUI.

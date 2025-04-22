# LQ-23_WebdriverIO-framework

### Summary

LQ-23_WebdriverIO-framework is an automated testing project for https://telnyx.com, built using the WebdriverIO framework with TypeScript.

Links to test cases
https://docs.google.com/spreadsheets/d/1pT26wmaq4k3-KZaSXFkW4ekLebMD_UXhy0w0_Fx84lY/edit?usp=sharing

### Requirements

Node v20.10.0

### Steps to install

1.  Clone the repository:

        git clone https://github.com/mafka0903/LQ-23_WebdriverIO-framework.git

2.  Navigate to the project folder:

        cd LQ-23_WebdriverIO-framework

3.  Install dependencies:

        npm install

### Steps to launch

1.  Run all tests:

        npm run test:all

2.  Run single file:

        npm run test:shop
        npm run test:home
        npm run test:contact
        npm run test:pricing
        npm run test:solutions

3.  Run tests with diferent browsers:

        npm run test:chrome
        npm run test:safari
        npm run test:firefox

4.  Run tests in diferent environmenrs:

        npm run test:test
        npm run test:prod

### Generating Allure Report

        npm genReport

Open report in browser:

        npm openReport

Reports also avaliable on GitHub pages https://mafka0903.github.io/LQ-23_WebdriverIO-framework/

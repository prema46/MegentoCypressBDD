/// <reference types=”cypress” />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { SignUpPage } from '../Page/signupPage.cy'

const signUpPage = new SignUpPage();

Given('I navigate to the Website {string}', (url) => {
    cy.visit(url);
     
});

When('I enter first name {string}', (firstName) => {
    signUpPage.enterFirstName(firstName);
});

When('I enter last name {string}', (lastName) => {
    signUpPage.enterLastName(lastName);
});

When('I enter email {string}', (email) => {
    signUpPage.enterEmail(email);
});

When('I enter password {string}', (password) => {
    signUpPage.enterPassword(password);
});

When('I confirm password {string}', (confirmPassword) => {
    signUpPage.confirmPassword(confirmPassword);
});

When('I click the create account button', () => {
    signUpPage.clickCreateAccount();
});

Then('I should see a confirmation message', () => {
    cy.get('.confirmation-message').should('be.visible'); // Adjust the selector based on your application
});

Then('I should see an error message indicating that the email already exists', () => {
    cy.get('.message-error > div').should('be.visible').and('contain', 'There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.Personal Information');
});


Then('I should see an error message for password mismatch', () => {
    cy.get('#password-confirmation-error').should('be.visible').and('contain', 'Please enter the same value again.'); // Adjust selector
});
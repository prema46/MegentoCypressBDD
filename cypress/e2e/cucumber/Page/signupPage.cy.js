export class SignUpPage {
    // Selectors
    firstNameInput = '#firstname';
    lastNameInput = '#lastname';
    emailInput = '#email_address';
    passwordInput = '#password';
    confirmPasswordInput = '#password-confirmation';
    createAccountButton = '#form-validate > .actions-toolbar > div.primary > .action > span';
    createAccountPage  = ".panel > .header > :nth-child(3) > a";

    // Methods to interact with the page
    goTocreateAccountPage(){
        cy.get(this.createAccountPage).click();
    }
    enterFirstName(firstName) {
        cy.get(this.firstNameInput).type(firstName);
    }

    enterLastName(lastName) {
        cy.get(this.lastNameInput).type(lastName);
    }

    enterEmail(email) {
        cy.get(this.emailInput).type(email);
    }

    enterPassword(password) {
        cy.get(this.passwordInput).type(password);
    }

    confirmPassword(confirmPassword) {
        cy.get(this.confirmPasswordInput).type(confirmPassword);
    }

    clickCreateAccount() {
        cy.get(this.createAccountButton).click();
    }
}
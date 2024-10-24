/// <reference types="cypress" />

describe('Login/ Logout Test', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
    });

    it('Should try to login with invalid data', () => {
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.get('input[name="submit"]').click()
        
        cy.get('.alert-error').should('contain.text', 'Login and/or password are wrong.')
    });
    
    it('Should display error message', () => {
    });

    it('Should login to application with valid data', () => {
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user_login').clear()
            cy.get('#user_login').type(username)
            cy.get('#user_password').clear()
            cy.get('#user_password').type(password)
            cy.get('input[name="submit"]').click()
            cy.get('h2').should('contain.text', 'Cash Accounts')

            //Should Logout from teh application
            cy.contains('username').click()
            cy.get('#logout_link').click()
            cy.get('strong').should('contain.text', 'Home')
            cy.get('#onlineBankingMenu > div').should('contain.text', 'Online Banking')
            cy.get('#feedback > div').should('contain.text', 'Feedback')
            cy.get('.brand').should('contain.text', 'Zero Bank')
            cy.get('#signin_button').should('be.visible')
            cy.url().should('include', 'index.html')
        })
    });
    
    it('Should logout from the application', () => {
    });
});


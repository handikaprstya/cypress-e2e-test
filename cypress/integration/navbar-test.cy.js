/// <reference types="cypress" />


describe('Navbar Test', function()  {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });


    it('Should display online banking content', () => {
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')


    });


    it('Should display feedback content', () => {
        cy.get('#feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('#name').type('John Doe')
        cy.get('#email').type('fakemail14@mail.com')
        cy.get('#subject').type('Error maintenance')
        cy.get('#comment').type('Test for sending comments')
    });


    it('Should display homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
        cy.get('.brand').should('be.visible')
        cy.get('#signin_button').should('contain.text', 'Signin')
        cy.get('.active > .custom > p').should('be.visible')
        cy.get('#searchTerm').should('be.visible')
        cy.get('#onlineBankingMenu').should('contain.text', 'Online Banking')
        cy.get('#feedback').should('contain.text', 'Feedback')
        cy.get('h4').should('contain.text', 'Online Banking')
        cy.get('#account_activity_link').should('contain.text', 'Checking Account Activity')
        cy.get('#transfer_funds_link').should('contain.text', 'Transfer Funds')
        cy.get('#money_map_link').should('contain.text', 'My Money Map')
        cy.get('#online-banking').should('contain.text', 'More Services')
    });


});
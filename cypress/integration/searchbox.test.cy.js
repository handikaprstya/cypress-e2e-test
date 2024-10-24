/// <reference types="cypress"/>

describe('Searchbox Test', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/')
    });
        
    it('Should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('online {enter}')
    });
    
    it('Should show search result page', () => {
        cy.get('#searchTerm').type('online {enter}')
        cy.get('h2').should('contain', 'Search Results:')
        cy.get('.top_offset').should('contain.text', 'The following pages were found for the query: online')
        cy.get(':nth-child(4) > :nth-child(1) > a').should('contain.text', 'Zero - Free Access to Online Banking')
        cy.get(':nth-child(2) > a').should('contain.text', 'Zero - Online Statements')
    });
});
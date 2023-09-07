/// <reference types="cypress" />

export default {
    clickLogin(){
        cy.get('.account_form>h3')
            .should('have.text', 'Login')
        cy.get('#btnLogin')
            .click()
    },
    
    msgemailerror(message){
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', message)
    }
    
}
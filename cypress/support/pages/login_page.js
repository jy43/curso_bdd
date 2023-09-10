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
    },
    
    fillemail(email){
        cy.get('#user')
            .type(email)
    },

    fillpassword(password){
        cy.get('#password')
            .type(password)
    },
    msgsuccess(msgsuccess, email){
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', msgsuccess)
        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', `Olá, ${email}`)
    }

}
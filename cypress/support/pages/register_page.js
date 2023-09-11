/// <reference types="cypress" />

export default {
    preenchernome(name) {
        cy.get('#user')
            .type(name)
    },
    preencheremail(email) {
        cy.get('#email')
            .type(email)
    },
    preenchersenha(senha) {
        cy.get('#password')
            .type(senha)
    },
    btncadastrar() {
        cy.get('#btnRegister')
            .click()
    },
    mensagemerro(mensagem) {
        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', mensagem)
    },
    msgcadastro(sucesso, bemvindo) {
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', sucesso)
        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', bemvindo)
    }
}
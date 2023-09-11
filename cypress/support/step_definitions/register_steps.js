/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page"
import register_page from "../pages/register_page"
import { faker } from "@faker-js/faker" 

const name = faker.person.fullName()
const email = `${name}@gmail.test`

Given('Acessar a tela de Cadastro', () => {
    home_page.accessRegister()
})
Given('Preencher nome', () => {
    register_page.preenchernome(name)
})
Given('Preencher e-mail {string}', (email) => {
    register_page.preencheremail(email)
})
Given('Preencher senha {string}', (senha) => {
    register_page.preenchersenha(senha)
})
Given('Preencher minhas credenciais', () => {
    register_page.preenchernome(name)
    register_page.preencheremail(email)
    register_page.preenchersenha('123456')
})

When('Clicar em cadastrar', () => {
    register_page.btncadastrar()
})

Then('Ver mensagem {string}', (mensagem) => {
    register_page.mensagemerro(mensagem)
}) 
Then('Ver mensagem de cadastro com sucesso', () => {
    register_page.msgcadastro('Cadastro realizado!', `Bem-vindo ${name}`)
}) 

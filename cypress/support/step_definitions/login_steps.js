// 2 - Transformar o gherkin em método/ação

/// <reference types="cypress" />

import {Given, When,Then} from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page"
import login_page from "../pages/login_page"
import { faker } from "@faker-js/faker"

const email = faker.internet.email()

//Login com campo de e-mail vazio
Given("I am login screen", () => {
    home_page.accessLogin()
})
Given("I fill e-mail", () => {
    login_page.fillemail(email)
})
Given("I fill my credentials", () => {
    login_page.fillemail(email)
    login_page.fillpassword('123456')
})

When("I click on login", () => {
    login_page.clickLogin()
})

Then("I see the message {string}", (message) => {
    login_page.msgemailerror(message)
})

Then("I see success message", () => {
    login_page.msgsuccess('Login realizado', email)
})


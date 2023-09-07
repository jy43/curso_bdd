// 2 - Transformar o gherkin em método/ação

/// <reference types="cypress" />

import {Given, When,Then} from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page"
import login_page from "../pages/login_page"

Given("I am login screen", () => {
    home_page.accessLogin()
})

When("I click on login", () => {
    login_page.clickLogin()
})

Then("I see the message {string}", (message) => {
    login_page.msgemailerror(message)
})
# 1 - Criar meu cenário
Feature: Login
    Eu como cliente
    Quero fazer login na aplicação
    Para fazer um pedido de compra

    Background: Access register screen
        Given I am login screen

    Scenario: Login com campo de e-mail vazio.
        When I click on login
        Then I see the message "E-mail inválido."
    
    Scenario: Login com campo de senha vazio.
       And  I fill e-mail 
       When I click on login
       Then I see the message "Senha inválida."
    
    Scenario: Login com sucesso.
       And I fill my credentials
       When I click on login
       Then I see success message
    
    

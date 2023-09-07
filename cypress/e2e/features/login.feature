# 1 - Criar meu cenário
Feature: Login
    Eu como cliente
    Quero fazer login na aplicação
    Para fazer um pedido de compra

    Scenario: Login com campo de e-mail vazio.
        Given I am login screen
        When I click on login
        Then I see the message "E-mail inválido."
    
    Scenario: Login com campo de senha vazio.
       Given I am login screen
       And  I fill e-mail
       When I click on login
       Then I see the message "Senha inválida."
    
    #Scenario: Login com sucesso.
    #    Given I am login screen
    #    And I fill my credentials
    #    When I click on login
    #    Then I see success message
    
    

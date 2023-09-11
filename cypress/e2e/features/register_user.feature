
Feature: Register User

    Eu como cliente
    Quero me cadastrar na aplicação
    Para fazer um pedido de compra

    Background: Acesso tela de cadastro
        Given Acessar a tela de Cadastro

    Scenario: Campo nome vazio
        When Clicar em cadastrar
        Then Ver mensagem "O campo nome deve ser prenchido"

    Scenario: Campo e-mail vazio
        And Preencher nome
        When Clicar em cadastrar
        Then Ver mensagem "O campo e-mail deve ser prenchido corretamente"

    Scenario: Campo e-mail inválido
        And Preencher nome
        And Preencher e-mail "e-mailinvalido"
        When Clicar em cadastrar
        Then Ver mensagem "O campo e-mail deve ser prenchido corretamente"

    Scenario: Campo senha vazio
        And Preencher nome
        And Preencher e-mail "teste@gmail.test"
        When Clicar em cadastrar
        Then Ver mensagem "O campo senha deve ter pelo menos 6 dígitos"

    Scenario: Campo senha inválida
        And Preencher nome
        And Preencher e-mail "teste@gmail.test"
        And Preencher senha "1234"
        When Clicar em cadastrar
        Then Ver mensagem "O campo senha deve ter pelo menos 6 dígitos"

    Scenario: Cadastro com sucesso
        And Preencher minhas credenciais
        When Clicar em cadastrar
        Then Ver mensagem de cadastro com sucesso

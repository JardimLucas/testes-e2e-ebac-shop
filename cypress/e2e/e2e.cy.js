/// <reference types="cypress" />
const faker = require('faker-br');
const Faker = require('faker-br/lib');
const Fake = require('faker-br/lib/fake');
const { fr_CA } = require('faker-br/lib/locales');

import CheckoutPage from '../support/page_objects/checkout.page'

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/produtos/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        //Escolhendo os produtos:
        cy.addProdutos('Abominable Hoodie', 'XS', 'Blue', 2)
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get(':nth-child(2) > .page-numbers').click()
        cy.addProdutos('Atlas Fitness Tank', 'XL', 'Blue', 5)
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get(':nth-child(2) > .page-numbers').click()
        cy.addProdutos('Atomic Endurance Running Tee (Crew-Neck)', 'XL', 'Blue', 3)
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get(':nth-child(2) > .page-numbers').click()
        cy.addProdutos('Balboa Persistence Tee', 'XS', 'Green', 1)


        //Abrindo o carrinho de compras para pagamento
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()


        //Iniciando o CheckOut e Pagamento Usando faker:
        CheckoutPage.editarDadosCheckout()

        //Concluindo a Compra:
        cy.get('#payment_method_bacs').check()
        cy.get('#terms').check()
        cy.get('#place_order').click()

        //Validação da Compra
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')




    });


})
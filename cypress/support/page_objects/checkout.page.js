const faker = require('faker-br');
const Faker = require('faker-br/lib');
const Fake = require('faker-br/lib/fake');
const { fr_CA } = require('faker-br/lib/locales');

class CheckoutPage{

    editarDadosCheckout() {
    //Declarando as variáveis Fakers
    let nomeFaker = faker.name.firstName()
    let sobrenomeFaker = faker.name.lastName()
    let empresa = faker.company.companyName()
    let pais = 'Brasil'
    let endereco = faker.address.direction()
    let cidade = faker.address.city()
    let estado = faker.address.state()
    let cep = faker.address.zipCodeValid()
    let telefone = faker.phone.phoneNumber()
    let email = faker.internet.email()

    //Preenchendo os campos de CheckOut:
    cy.get('#billing_first_name').type(nomeFaker)
    cy.get('#billing_last_name').type(sobrenomeFaker)
    cy.get('#billing_company').type(empresa)
    cy.get('#select2-billing_country-container').click().type(pais + '{enter}')
    cy.get('#billing_address_1').type(endereco)
    cy.get('#billing_city').type(cidade)
    cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
    cy.get('#billing_postcode').type(cep)
    cy.get('#billing_phone').type(telefone)
    cy.get('#billing_email').type(email)
    }
    
}

export default new CheckoutPage
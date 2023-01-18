describe('My First Test', () => {

  it('Visits the Sauce labs', () => {

    cy.visit('https://the-internet.herokuapp.com/login')

  })

})

describe('E2E Login to inventory', () => {

  it('input valid username dan password then Login', () => {

    cy.visit('https://the-internet.herokuapp.com/login')

    cy.get('#username').type("Willsmith")

    cy.get('#password').type("SuperSecretPassword!")

    cy.contains(" Login").click()

  })

})

describe('My First Test', () => {

  it('Visits the Sauce labs', () => {

    cy.visit('https://the-internet.herokuapp.com/login')

  })

})

describe('E2E Login to inventory', () => {

  it('input valid username dan password then Login', () => {

    cy.visit('https://the-internet.herokuapp.com/login')

    cy.get('#username').type("tomsmith")

    cy.get('#password').type("Superduper!")

    cy.contains(" Login").click()

  })

})
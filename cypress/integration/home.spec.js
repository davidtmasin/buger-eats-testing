/// <reference types="cypress" />
// O describe é a definição de uma suite de teste
describe('home page', () => {
  // O it é a definição de um caso de teste
  it('app deve estar online', () => {
    cy.visit('/')
    cy.get('img').should('be.visible')
    cy.get('h1').should(
      'have.text',
      'Seja um parceiro entregador pela Buger Eats'
    )
    cy.get('svg').should('be.visible')
    cy.get('strong').should('have.text', 'Cadastre-se para fazer entregas')
  })
})

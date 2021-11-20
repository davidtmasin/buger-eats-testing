// O describe é a definição de uma suite de teste
describe('home page', () => {
  // O it é a definição de um caso de teste
  it.only('app deve estar online', () => {
    cy.viewport(1440, 900)
    cy.visit('https://buger-eats.vercel.app/')
    cy.get('img').should('be.visible')
    cy.get('h1').should(
      'have.text',
      'Seja um parceiro entregador pela Buger Eats'
    )
    cy.get('svg').should('be.visible')
    cy.get('strong').should('have.text', 'Cadastre-se para fazer entregas')
  })
})

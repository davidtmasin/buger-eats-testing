/// <reference types="cypress" />
describe('página de cadastro', () => {
  it('a página de cadastro irá aparecer', () => {
    cy.visit('/')
    cy.get('a').click()
    cy.get('form').should('be.visible')
    cy.contains('Cadastre-se para fazer entregas').should('be.visible')
  })

  it('preenchendo a sessão dados', () => {
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type(
      'Tester David'
    )
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type(
      '12345678901'
    )
    cy.get(':nth-child(3) > :nth-child(1) > input').type('testerdavid@mail.com')
    cy.get(':nth-child(3) > :nth-child(2) > input').type('85986666666')
  })
  it('preenchendo a sessão Endereço', () => {
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').type(
      '60130440'
    )
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click()
    cy.get(':nth-child(4) > :nth-child(1) > input').type('751')
  })

  it('preenchendo a sessão Método de entrega', () => {
    cy.viewport(1440, 900)
    cy.get('.delivery-method > :nth-child(1)').click()
    cy.get('.dropzone').attachFile('teste.jpeg', {
      subjectType: 'drag-n-drop'
    })
    cy.get('.button-success').click()
    cy.get('.swal2-success-circular-line-left').should('be.visible')
    cy.get('.swal2-popup').should('be.visible')
    cy.get('#swal2-title').should('have.text', 'Aí Sim...')
    cy.get('.swal2-confirm').click()
  })
})

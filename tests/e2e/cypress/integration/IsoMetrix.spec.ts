/// <reference types="cypress" />

describe('Home page', () => {
  it('Visits the home page and Add Form page', () => {
      cy.visit('http://localhost:8080');
      cy.contains('Add Form');
  })
  
  it('Visits the home page and Edit Form page', () => {
      cy.visit('http://localhost:8080');
      cy.contains('Edit Form').click()
      cy.url().should('include', '/edit')
  })
  it('While on the Add Form page, check it has the Reset Password button', () => {
      cy.visit('http://localhost:8080/add');
      cy.contains('button', 'Reset Password')
  })

  it('While on the Add Form page, check it has the Save All button', () => {
      cy.visit('http://localhost:8080/add');
      cy.contains('button', 'Save All')
  })

  it('While on the Edit Form page, check it has the Save All button', () => {
      cy.visit('http://localhost:8080/edit');
      cy.contains('button', 'Save All')
  })

  it('While on the Edit Form page, check it has the Reset Password button', () => {
      cy.visit('http://localhost:8080/edit');
      cy.contains('button', 'Reset Password')
  })

  it('While on the Edit Form page, check it has the User Details header', () => {
      cy.visit('http://localhost:8080/edit');
      cy.contains('h3', 'User Details')
  })

  it('While on the Edit Form page, check it has the Settings header', () => {
      cy.visit('http://localhost:8080/edit');
      cy.contains('h3', 'Settings')
  })

  it('While on the Add Form page, check it has the User Details header', () => {
      cy.visit('http://localhost:8080/add');
      cy.contains('h3', 'User Details')
  })

  it('While on the Add Form page, check it has the Settings header', () => {
      cy.visit('http://localhost:8080/add');
      cy.contains('h3', 'Settings')
  })

  it('While on the Add Form page, check it has the First Name label', () => {
      cy.visit('http://localhost:8080/add');
      cy.contains('First Name')
  })

  it('While on the Add Form page, check it has the Last Name label', () => {
      cy.visit('http://localhost:8080/add');
      cy.contains('Last Name')
  })
})

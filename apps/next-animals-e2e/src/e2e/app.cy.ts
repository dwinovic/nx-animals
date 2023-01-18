import { getGreeting } from '../support/app.po';

describe('next-animals', () => {
  beforeEach(() => cy.visit('/'));

  it('should display root page', () => {
    cy.get('input').first().type('Monkey');
    cy.get('li').first().should('have.text', 'Monkey');

    cy.get('body').screenshot();
  });
});

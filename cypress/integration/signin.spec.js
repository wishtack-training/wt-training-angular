
context('Signin', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200')
  })

  // https://on.cypress.io/interacting-with-elements

  it('sign in', () => {

    cy.get('[data-role=email-input]')
        .type('foobar@gmail.com');

    cy.get('[data-role=password-input]')
        .type('123456');

    cy.get('[data-role=login-form-submit-button]')
        .click();

    cy.location('pathname').should('eq', '/user-profile');

  });

});

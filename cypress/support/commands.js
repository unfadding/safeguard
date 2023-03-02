Cypress.Commands.add("login", () => {
  cy.get("input[name='username']").type(Cypress.env("user"));
  cy.get("input[name='password']").type(Cypress.env("password"));
  cy.get(".oxd-button").click();
});

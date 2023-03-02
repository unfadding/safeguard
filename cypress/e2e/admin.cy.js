const elem = require("../pages/admin").adminPageElements;

describe("Functional Tests for the Admin Page", () => {
  beforeEach("Opens the application and logs in", () => {
    cy.visit("");
    cy.login();
    cy.get(elem.adminMenuBtn).click();
    cy.url().should("contain", "adm");
  });
  it("Should bring results by the Username", () => {
    cy.get(elem.usernameField).type(`${Cypress.env("user")}{enter}`);
    cy.get(elem.firstUsernameResult).should("contain", Cypress.env("user"));
  });
  it("Should bring results by the User Role", () => {
    cy.get(elem.systemUsersTitle).should("be.visible");
    cy.get(elem.userRoleDropdown).click({ force: true });
    cy.contains("ESS").click();
    cy.get(elem.searchBtn).click({ force: true });
    cy.get(elem.firstUsernameResult).should("contain", "ESS");
  });
  it("Should bring results by the Status", () => {
    cy.get(elem.systemUsersTitle).should("be.visible");
    cy.get(elem.statusDropdown).click({ force: true });
    cy.contains("Enabled").click();
    cy.get(elem.searchBtn).click({ force: true });
    cy.get(elem.fistStatusResult).should("contain", "Enabled");
    cy.get(elem.statusDropdown).click({ force: true });
    cy.contains("Disabled").click();
    cy.get(elem.searchBtn).click({ force: true });
    cy.get(elem.fistStatusResult).should("contain", "Disabled");
  });
});

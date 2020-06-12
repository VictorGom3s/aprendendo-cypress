/// <reference types="cypress" />

context("Login", () => {
  before(() => {
    cy.visit("http://localhost:8080/login");
  });

  describe("Verify if the UI of the Login Page is correct", () => {
    it("Should have an username and a password field", () => {
      cy.get("input#username");
    });

    it("Check if there's a submit button", () => {
      cy.get("button").contains("Submit");
    });

    it("Check if there's a notification element in the DOM", () => {
      cy.get(".notification");
    });
  });

  describe("The login workflow", () => {
    it("should show a warning notification if credentials are wrong", () => {
      const username = "admin";
      const password = "notAdmin";

      cy.login(username, password);

      cy.get("div.notification");
      cy.url().should("eq", "http://localhost:8080/login");
    });

    it("should close notification", () => {
      cy.get("button.delete").click();

      cy.get("div.notification").should("not.exist");
    });

    it("If user and password are correct, should log in", () => {
      const username = "admin";
      const password = "admin";

      cy.login(username, password);

      cy.contains("Add Users");
      cy.url().should("eq", "http://localhost:8080/");
    });
  });
});

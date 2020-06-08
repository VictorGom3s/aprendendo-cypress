describe("Tests if the app is running", () => {
  it("Access the URL", () => {
    cy.visit("http://localhost:8080");
  });
});

describe("The page must contain a title", () => {
  it("Check if there's an page title", () => {
    cy.get("title").should("contain", "End to End");
  });

  it("Check if there's an H1 element", () => {
    cy.get("h1").should("contain", "Add Users");
  });
});

describe("Submit the form with valid values", () => {
  it("Check if there are the correct inputs", () => {
    cy.get("#name").should("be.empty");
    cy.get("#email").should("be.empty");
  });

  it("Should have a submit button", () => {
    cy.get("button.is-primary").should("be.visible");
  });

  it("On form submit, the values must be listed in the table", () => {
    cy.get("#name").type("Victor");
    cy.get("#email").type("vsampaio@pm.me");

    cy.get("button.is-primary").click();

    cy.get("tbody")
      .should("contain", "Victor")
      .should("contain", "vsampaio@pm.me");
  });
});

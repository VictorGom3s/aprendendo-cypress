describe("Tests if the app is running", () => {
  it("Access the URL", () => {
    cy.visit("http://localhost:8080/login");
  });
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

describe("Test the login workflow", () => {
  it("If user and password are correct, should log in", () => {
    cy.get("input#username").type("admin");
    cy.get("input#password").type("admin");

    cy.get("button.is-primary").click();

    cy.contains("Add Users");
    cy.url().should("eq", "http://localhost:8080/");
  });
});

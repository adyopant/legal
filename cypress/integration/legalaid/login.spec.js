/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/#/sign-in");
  });

  it("Sign In page loads correctly with all elements", () => {});

  it("Valid Sign In", () => {
    cy.get("input[id=username]").type("admin@mail.com");
    cy.get("input[id=password]").type("admin");
    cy.get("button").contains("Sign In").click();
    cy.url().should('include', '/client-profile')    
  });

  it("Incorrect password when trying to sign in", () => {
    cy.get("input[id=username]").type("test@adyopantlegal.in");
    cy.get("input[id=password]").type("test");
    cy.get("button").contains("Sign In").click();
  });

  it("No password when trying to sign in", () => {
    cy.get("input[id=username]").type("test@adyopantlegal.in");
    cy.get("button").contains("Sign In").click();
  });

  it("No username when trying to sign in", () => {
    cy.get("input[id=password]").type("test");
    cy.get("button").contains("Sign In").click();
  });

  it("No username or password when trying to sign in", () => {
    cy.get("button").contains("Sign In").click();
  });
});

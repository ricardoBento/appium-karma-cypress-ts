/// <reference types="cypress" />

describe("Test Support Commands", () => {
    it("should add and remove data from storage", () => {
        cy.visit("/");
        cy.AddStorageTest();
        cy.wait(1000);
        cy.RemoveStorageTest();
        cy.visit("/login");
        cy.wait(1500);
    });
});

describe("Login to Home", () => {
    it("should visit login page", () => {
        cy.visit("/login");
        cy.get('#email').type(Cypress.config('email'));
        cy.get('#password').type(Cypress.config('password'));
        cy.get('.lets-go').click();
        cy.url().should('include', '/home');
        cy.wait(2000);
    });
});
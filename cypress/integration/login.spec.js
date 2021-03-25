/// <reference types="cypress" />

// describe("Test Support Commands", () => {
//     it("should add and remove data from storage", () => {
//         cy.visit("/");
//         cy.AddStorageTest();
//         cy.wait(1000);
//         cy.RemoveStorageTest();
//         cy.visit("/");
//         cy.wait(1500);
//     });
// });

describe("Login to Home", () => {
    it("should visit login page", () => {
        cy.visit("/");
        cy.get('#email-input').type(Cypress.config('email'));
        cy.get('#password-input').type(Cypress.config('password'));
        cy.get('#submit').click();
        cy.url().should('include', '/#new-dashboard');
        cy.wait(2000);
    });
});

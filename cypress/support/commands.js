Cypress.Commands.add('AddStorageTest', () => {
    cy.visit('/', {
        onBeforeLoad() {

        }
    });
});

Cypress.Commands.add('RemoveStorageTest', () => {
    cy.visit('/', {
        onBeforeLoad() {

        },
    });
});

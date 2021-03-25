import { Storage } from '@ionic/storage';

const storage = new Storage();

Cypress.Commands.add('AddStorageTest', () => {
    cy.visit('/', {
        onBeforeLoad() {
            storage.set('dataTestStorage', true);
        }
    });
});

Cypress.Commands.add('RemoveStorageTest', () => {
    cy.visit('/', {
        onBeforeLoad() {
            storage.remove('dataTestStorage');
        },
    });
});

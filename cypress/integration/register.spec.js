describe("Go to Register Page", () => {
    it("Enter Register Page", () => {
        cy.visit("/login");
        cy.get('.register').click();
        cy.url().should('include', '/register');
        cy.wait(500);
    });
});

describe("Register new User", () => {
    it("should register user", () => {
        let d = Math.random();
        cy.visit("/register");
        cy.get('#user_name > .native-input').type(`Cypress${d}`);
        cy.get('#first_name').type('Joe');
        cy.get('#last_name').type('Doe');
        cy.get('#email').type(`joeDoe${d}@mapal-os.com`);
        cy.get('#access_code').type('HungryHorse');
        cy.get('#password1').type('qwerty123');
        cy.get('#password2').type('qwerty123');
        cy.get('.register-btn').click();
        cy.url().should('include', '/venue');
        cy.visit("/venue");
        cy.get('#venue').type('Tiger Lily');
        cy.get('#region-select').click();
        cy.get('#alert-input-1-0 > .alert-button-inner > .alert-radio-label').contains('Edinburgh').click();
        cy.get('.alert-button-group > :nth-child(2)').click();
        cy.get('#post_code').type('EH9 4UH');
        cy.get('#finish').click();
        cy.url().should('include', '/home');
        cy.visit("/home");
        cy.wait(1500);
    });
});

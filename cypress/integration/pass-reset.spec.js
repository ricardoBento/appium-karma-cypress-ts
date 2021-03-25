describe("Navigate to Pass Reset Page", () => {
    it("should fill the reset password field and press submit", () => {
        cy.visit("/login").then(() => {
            cy.get('#pass-reset').click();
            cy.url().should('include', '/pass-reset');
            cy.visit("/pass-reset").then(() => {
                cy.get('#email').type(`ricardo@flowhospitalitytraining.co.uk`);
                // cy.get('#submit').click();
                // cy.url().should('include', '/login');
                cy.visit("/login");
            });
        });

    });
});
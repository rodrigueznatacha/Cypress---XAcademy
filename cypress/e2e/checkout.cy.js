describe('Checkout Sauce Demo', () => {
    
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        cy.url().should('include', '/inventory.html');
        cy.get('.app_logo').should('have.text', 'Swag Labs');
    
    });

    it('checkout successfully', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        cy.get('[data-test="shopping-cart-badge"]')
            .should('be.visible')
            .and('have.text', '1');
        
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.url().should('include', '/cart.html');

        cy.get('[data-test="checkout"]').click();
        cy.url().should('include', '/checkout-step-one.html');

        cy.get('[data-test="firstName"]').type('Juan');
        cy.get('[data-test="lastName"]').type('Pérez');
        cy.get('[data-test="postalCode"]').type('5000');
        cy.get('[data-test="continue"]').click();

        cy.url().should('include', '/checkout-step-two.html');
        
        cy.get('[data-test="finish"]').click();

        cy.url().should('include', '/checkout-complete.html');
        cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!');
    });

    it('checkout unsuccessfully with empty fields', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        cy.get('[data-test="shopping-cart-badge"]')
            .should('be.visible')
            .and('have.text', '1');

        cy.get('[data-test="shopping-cart-link"]').click();
        cy.url().should('include', '/cart.html');
        
        cy.get('[data-test="checkout"]').click();
        cy.url().should('include', '/checkout-step-one.html');

        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', 'Error: First Name is required');

        cy.url().should('not.include', '/checkout-step-two.html');
    });
});

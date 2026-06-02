describe('Cart Sauce Demo', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');

        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        cy.url().should('include', '/inventory.html');
        cy.get('.app_logo').should('have.text', 'Swag Labs');
    });

    it('add item to cart', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

        cy.get('[data-test="shopping-cart-badge"]')
        .should('be.visible')
        .and('have.text', '1');

        cy.get('[data-test="remove-sauce-labs-backpack"]')
        .should('be.visible')
        .and('have.text', 'Remove');
    }); 

    it('add multiple items to cart', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();

        cy.get('[data-test="shopping-cart-badge"]')
        .should('be.visible')
        .and('have.text', '3');
    });

        it('remove item from cart', () => { 

            cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
            cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();

            cy.get('[data-test="shopping-cart-badge"]')
            .should('be.visible')
            .and('have.text', '2');

            cy.get('[data-test="shopping-cart-link"]').click();
            cy.url().should('include', '/cart.html');

            cy.get('[data-test="remove-sauce-labs-fleece-jacket"]').click();

            cy.get('[data-test="shopping-cart-badge"]')
            .should('be.visible')
            .and('have.text', '1');
    }); 
});

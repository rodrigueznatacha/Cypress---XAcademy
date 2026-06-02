describe('Inventario Sauce Demo', () => {    

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');

        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        cy.url().should('include', '/inventory.html');
        cy.get('.app_logo').should('have.text', 'Swag Labs');
    });

    it('count inventory items', () => {

        cy.get('[data-test="inventory-item-name"]').should('have.length', 6);
    });

    it('order inventory items by price low to high', () => {

        cy.get('[data-test="product-sort-container"]').select('lohi');

        cy.get('[data-test="product-sort-container"]').should('have.value', 'lohi');

        cy.get('[data-test="inventory-item-price"]').then(($prices) => {

            //Convert the HTML elements into a clean array of floating numbers (e.g., 7.99)
            const actualPrices = [...$prices].map(el => 
                parseFloat(el.innerText.replace('$', '')));

            //Create a copy of the array and sort it mathematically from lowest to highest
            const expectedSortedPrices = [...actualPrices].sort((a, b) => a - b);

            //Deep assertion to verify that the UI array matches the sorted array
            expect(actualPrices).to.deep.equal(expectedSortedPrices);
        });
    }); 
});


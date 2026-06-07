//************************************************
// Formulario, pasos de pago y confirmaciones
//************************************************

Cypress.Commands.add('goToCart',()=>{
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart.html')
})
